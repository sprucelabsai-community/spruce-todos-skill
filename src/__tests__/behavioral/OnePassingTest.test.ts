import AbstractSpruceTest, { test, assert } from '@sprucelabs/test-utils'

export default class OnePassingTestTest extends AbstractSpruceTest {
	@test()
	protected static async canCreateOnePassingTest() {
		const onePassingTest = new OnePassingTest()
		assert.isTruthy(onePassingTest)
	}
}

class OnePassingTest {}
