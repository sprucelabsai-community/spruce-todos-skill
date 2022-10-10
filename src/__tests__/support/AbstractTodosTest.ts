import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import SpyTodosCardViewController from './SpyTodosCardViewController'

export default abstract class AbstractTodosTest extends AbstractSpruceFixtureTest {
	protected static dropInSpyTodosCard() {
		this.views.setController('todos.todos-card', SpyTodosCardViewController)
	}
}
