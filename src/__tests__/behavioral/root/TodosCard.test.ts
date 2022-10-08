import { interactor, KeyboardKey } from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import SpyTodosCardViewController from '../../support/SpyTodosCardViewController'

@fake.login()
export default class TodosCardTest extends AbstractSpruceFixtureTest {
	protected static vc: SpyTodosCardViewController

	private static get newRowVc() {
		return this.listVc.getRowVc('new')
	}

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
		this.assertTotalRows(1)
		await this.setTodoInputToRandomValue()
		await this.pressKeyOnNewTodoInput('Enter')
		this.assertTotalRows(2)
	}

	@test()
	protected static async hittingOtherKeysDoesNotAddRow() {
		await this.pressKeyOnNewTodoInput('w')
		this.assertTotalRows(1)
		await this.pressKeyOnNewTodoInput('h')
		this.assertTotalRows(1)
	}

	@test()
	protected static async pressingEnterDoesNotAddRowIfNoTodo() {
		await this.pressKeyOnNewTodoInput('Enter')
		this.assertTotalRows(1)
	}

	@test()
	protected static async pressingAddButtonWithTodoAddsRow() {
		this.setTodoInputToRandomValue()
		await this.clickAddButton()
		this.assertTotalRows(2)
	}

	@test()
	protected static async pressingAddWithoutTodoDoesNotAdd() {
		await this.clickAddButton()
		this.assertTotalRows(1)
	}

	private static async clickAddButton() {
		await interactor.clickButtonInRow(this.listVc, 'new', 'add')
	}

	private static async setTodoInputToRandomValue() {
		await this.newRowVc.setValue('todo', generateId())
	}

	private static async pressKeyOnNewTodoInput(key: KeyboardKey) {
		await interactor.keyDownOnInputInRow({
			cell: 0,
			key,
			vc: this.newRowVc,
		})
	}

	private static assertTotalRows(expected: number) {
		const actual = this.listVc.getTotalRows()
		assert.isEqual(
			actual,
			expected,
			`Didn't get expected total rows!\n\nExpected: ${expected}\nActual: ${actual}`
		)
	}

	private static get listVc() {
		return this.vc.getListVc()
	}
}
