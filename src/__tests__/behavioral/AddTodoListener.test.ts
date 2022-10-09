import { fake } from '@sprucelabs/spruce-test-fixtures'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'

@fake.login()
export default class AddTodoListenerTest extends AbstractSpruceFixtureTest {
	protected static async beforeEach() {
		await super.beforeEach()
		await this.bootSkill()
	}

	@test()
	protected static async emittingAddsRecordToDataStore() {
		await this.emitAdd()
		const todos = await this.stores.getStore('todos')
		const count = await todos.count()
		assert.isEqual(count, 1)
	}

	private static async emitAdd() {
		await this.fakedClient.emitAndFlattenResponses('todos.add::v2022_10_08', {
			payload: {
				todo: generateId(),
			},
		})
	}
}
