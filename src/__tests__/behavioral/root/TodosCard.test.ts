import {
	interactor,
	KeyboardKey,
	listAssert,
	ListRow,
	vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import AbstractTodosTest from '../../support/AbstractTodosTest'
import { AddTodoTargetAndPayload } from '../../support/EventFaker'
import generateTodoValues from '../../support/generateTodoValues'
import SpyTodosCardViewController from '../../support/SpyTodosCardViewController'

@fake.login()
export default class TodosCardTest extends AbstractTodosTest {
	protected static vc: SpyTodosCardViewController

	protected static async beforeEach() {
		await super.beforeEach()
		this.dropInSpyTodosCard()
		this.vc = this.views.Controller(
			'todos.todos-card',
			{}
		) as SpyTodosCardViewController

		await this.eventFaker.fakeAddTodo()
		await this.eventFaker.fakeListTodos()
	}

	@test()
	protected static async hittingEnterInNewInputAddsRow() {
		this.assertTotalRows(1)
		await this.setTodoInputToRandomValue()
		await this.pressKeyOnNewTodoInput('Enter')
		this.assertTotalRows(2)
		assert.isFalsy(this.newRowVc.getValue('todo'))
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
		await this.setTodoInputToRandomValue()
		await this.clickAddButton()
		this.assertTotalRows(2)
	}

	@test()
	protected static async pressingAddWithoutTodoDoesNotAdd() {
		await this.clickAddButton()
		this.assertTotalRows(1)
	}

	@test()
	protected static async newTodoRowRendersTodoInputContent() {
		const todo = await this.addRandomTodo()
		listAssert.rowRendersContent(this.listVc, 1, todo)
	}

	@test()
	protected static async addedTodoRowHasCheckbox() {
		await this.addRandomTodo()
		listAssert.rowRendersCheckBox(this.listVc, 1)
	}

	@test()
	protected static async todoRowHasDeleteButton() {
		await this.addRandomTodo()
		listAssert.rowRendersButton(this.listVc, 1, 'delete')
	}

	@test()
	protected static async addingTodoEmitsAddEvent() {
		let passedPayload: AddTodoTargetAndPayload['payload'] | undefined

		await this.eventFaker.fakeAddTodo(({ payload }) => {
			passedPayload = payload
		})

		const todo = await this.addRandomTodo()

		assert.isEqual(passedPayload?.todo, todo)
	}

	@test()
	protected static async loadsAllTodosOnLoad() {
		const todos = [generateTodoValues(), generateTodoValues()]
		await this.eventFaker.fakeListTodos(() => {
			return {
				todos,
			}
		})

		await this.load()
		todos.forEach((t) => listAssert.listRendersRow(this.listVc, t.id))
	}

	@test()
	protected static async isBusyUntilLoaded() {
		vcAssert.assertCardIsBusy(this.vc)
		await this.load()
		vcAssert.assertCardIsNotBusy(this.vc)
	}

	@test()
	protected static async newRowOnLoad() {
		const expected = this.renderNewRowAndRemoveReferences()
		await this.load()
		const actual = this.renderNewRowAndRemoveReferences()

		assert.isEqualDeep(actual, expected)
	}

	private static renderNewRowAndRemoveReferences() {
		const expected = this.views.render(this.newRowVc)
		this.cleanRenderNewRow(expected)
		return expected
	}

	private static cleanRenderNewRow(actual: ListRow) {
		delete actual.controller
		delete actual.cells[0].controller
		delete actual.cells[0].textInput?.setValue
		delete actual.cells[1].controller
	}

	private static async load() {
		await this.vc.load()
	}

	private static async addRandomTodo() {
		const todo = await this.setTodoInputToRandomValue()
		await this.clickAddButton()
		return todo
	}

	private static async clickAddButton() {
		await interactor.clickButtonInRow(this.listVc, 'new', 'add')
	}

	private static async setTodoInputToRandomValue() {
		const value = generateId()
		await this.newRowVc.setValue('todo', value)
		return value
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

	private static get newRowVc() {
		return this.listVc.getRowVc('new')
	}

	private static get listVc() {
		return this.vc.getListVc()
	}
}
