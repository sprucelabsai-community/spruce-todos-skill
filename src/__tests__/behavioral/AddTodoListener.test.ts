import { fake } from '@sprucelabs/spruce-test-fixtures'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'

@fake.login()
export default class AddTodoListenerTest extends AbstractSpruceFixtureTest {
	@test()
	protected static async hasAddTodoListener() {
		await this.bootSkill()
		await this.fakedClient.emitAndFlattenResponses('todos.add::v2022_10_08', {
			payload: {
				todo: generateId(),
			},
		})
	}
}
