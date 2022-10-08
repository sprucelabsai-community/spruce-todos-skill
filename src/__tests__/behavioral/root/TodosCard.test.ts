import { interactor } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test-utils'
import SpyTodosCardViewController from '../../support/SpyTodosCardViewController'

@fake.login()
export default class TodosCardTest extends AbstractSpruceFixtureTest {
	protected static vc: SpyTodosCardViewController

	protected static async beforeEach() {
		await super.beforeEach()
		this.views.setController('todos.todos-card', SpyTodosCardViewController)
		this.vc = this.views.Controller(
			'todos.todos-card',
			{}
		) as SpyTodosCardViewController
	}

	@test()
	protected static async hittingEnterInNewInputAddsRow() {
		const rowVc = this.listVc.getRowVc('new')

		await interactor.keyDownOnInputInRow({
			cell: 0,
			key: 'Enter',
			vc: rowVc,
		})

		this.assertTotalRows(2)
	}

	private static assertTotalRows(expected: number) {
		assert.isEqual(this.listVc.getTotalRows(), expected)
	}

	private static get listVc() {
		return this.vc.getListVc()
	}
}
