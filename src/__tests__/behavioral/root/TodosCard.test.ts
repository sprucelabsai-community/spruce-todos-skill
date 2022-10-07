import { fake } from '@sprucelabs/spruce-test-fixtures'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test-utils'

@fake.login()
export default class TodosCardTest extends AbstractSpruceFixtureTest {
	@test()
	protected static async canCreateTodosCard() {
		const todosCard = new TodosCard()
		assert.isTruthy(todosCard)
	}

	@test()
	protected static async yourNextTest() {
		assert.isTrue(false)
	}
}

class TodosCard {}
