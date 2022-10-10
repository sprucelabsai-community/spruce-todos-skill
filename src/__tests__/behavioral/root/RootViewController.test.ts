import { listAssert, vcAssert } from '@sprucelabs/heartwood-view-controllers'
import { test } from '@sprucelabs/test-utils'
import RootSkillViewController from '../../../root/Root.svc'
import AbstractTodosTest from '../../support/AbstractTodosTest'
import SpyTodosCardViewController from '../../support/SpyTodosCardViewController'

export default class RootViewControllerTest extends AbstractTodosTest {
	private static vc: SpyRootViewController

	protected static async beforeEach() {
		await super.beforeEach()

		this.views.setController('todos.root', SpyRootViewController)
		this.dropInSpyTodosCard()
		this.vc = this.views.Controller('todos.root', {}) as SpyRootViewController
	}

	@test()
	protected static rendersCard() {
		vcAssert.assertSkillViewRendersCard(this.vc)
	}

	@test()
	protected static cardRendersList() {
		listAssert.cardRendersList(this.vc.getCardVc())
	}

	@test()
	protected static listRendersNewRow() {
		listAssert.listRendersRow(this.listVc, 'new')
	}

	@test()
	protected static newRowRendersInput() {
		listAssert.rowRendersInput(this.listVc, 'new', 'todo')
	}

	@test()
	protected static newRowRendersAddButton() {
		listAssert.rowRendersButton(this.listVc, 'new', 'add')
	}

	private static get listVc() {
		return this.vc.getListVc()
	}
}

class SpyRootViewController extends RootSkillViewController {
	public getListVc() {
		return this.getCardVc().getListVc()
	}
	public getCardVc() {
		return this.cardVc as SpyTodosCardViewController
	}
}
