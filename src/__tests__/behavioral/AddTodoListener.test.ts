import { fake } from '@sprucelabs/spruce-test-fixtures'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import TodosStore from '../../stores/Todos.store'

@fake.login()
export default class AddTodoListenerTest extends AbstractSpruceFixtureTest {
	private static todos: TodosStore
	private static todo: string

	protected static async beforeEach() {
		await super.beforeEach()
		await this.bootSkill()
		this.todo = generateId()
		this.todos = await this.stores.getStore('todos')
	}

	@test()
	protected static async emittingAddsRecordToDataStore() {
		await this.emitAdd()
		const count = await this.todos.count()
		assert.isEqual(count, 1)
	}

	@test()
	protected static async createsRecordWithExpectedValues() {
		await this.emitAdd()
		const match = await this.getFirstTodo()
		assert.isEqual(match.todo, this.todo)
		assert.isEqual(match.target.personId, this.fakedPerson.id)
	}

	@test()
	protected static async addListenerReturnsSavedRecord() {
		const todo = await this.emitAdd()
		const match = await this.getFirstTodo()
		assert.isEqualDeep(match, todo)
	}

	private static async getFirstTodo() {
		const todo = await this.todos.findOne({})
		assert.isTruthy(todo, `Can't get todo until one is saved!`)
		return todo
	}

	private static async emitAdd() {
		const [{ todo }] = await this.fakedClient.emitAndFlattenResponses(
			'todos.add::v2022_10_08',
			{
				payload: {
					todo: AddTodoListenerTest.todo,
				},
			}
		)

		return todo
	}
}
