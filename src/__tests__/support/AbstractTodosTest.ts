import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import EventFaker from './EventFaker'
import SpyTodosCardViewController from './SpyTodosCardViewController'

export default abstract class AbstractTodosTest extends AbstractSpruceFixtureTest {
	protected static eventFaker: EventFaker
	protected static async beforeEach() {
		await super.beforeEach()
		this.eventFaker = new EventFaker()
	}
	protected static dropInSpyTodosCard() {
		this.views.setController('todos.todos-card', SpyTodosCardViewController)
	}
}
