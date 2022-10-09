import { fake } from '@sprucelabs/spruce-test-fixtures'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test-utils'

@fake.login()
export default class AddTodoListenerTest extends AbstractSpruceFixtureTest {
	@test()
	protected static async canCreateAddTodoListener() {
		const addTodoListener = new AddTodoListener()
		assert.isTruthy(addTodoListener)
	}

	@test()
	protected static async yourNextTest() {
		assert.isTrue(false)
	}
}

class AddTodoListener {}
