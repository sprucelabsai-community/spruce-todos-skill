import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import TodosStore from '../../../stores/Todos.store'
import AbstractTodosTest from '../../support/AbstractTodosTest'

@fake.login()
export default class ListListenerTest extends AbstractTodosTest {
	private static todos: TodosStore
	protected static async beforeEach() {
		await super.beforeEach()
		await this.bootSkill()
		this.todos = await this.stores.getStore('todos')
	}

	@test()
	protected static async canCreateListListener() {
		await this.emitListEvent()
	}

	@test()
	protected static async returnsTheOnlyTodo() {
		await this.createTodoForPerson(this.fakedPerson.id)
		await this.assertListsTotalTodos(1)
	}

	@test()
	protected static async onlyListsTodosForLoggedInPerson() {
		await this.createTodoForPerson(generateId())
		await this.assertListsTotalTodos(0)
	}

	private static async assertListsTotalTodos(expected: number) {
		const todos = await this.emitListEvent()
		assert.isLength(todos, expected)
	}

	private static async createTodoForPerson(personId: string) {
		await this.todos.createOne({
			target: {
				personId,
			},
			todo: generateId(),
		})
	}

	private static async emitListEvent() {
		const [{ todos }] = await this.fakedClient.emitAndFlattenResponses(
			'todos.list::v2022_10_08'
		)

		return todos
	}
}
