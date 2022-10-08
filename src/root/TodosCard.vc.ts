import {
	AbstractViewController,
	Card,
	CardViewController,
	CellInputKeyDownOptions,
	ListViewController,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'

export default class TodosCardViewController extends AbstractViewController<Card> {
	public static id = 'todos-card'
	protected cardVc: CardViewController
	protected listVc: ListViewController

	public constructor(options: ViewControllerOptions) {
		super(options)
		this.listVc = this.ListVc()
		this.cardVc = this.CardVc()
	}

	private ListVc(): ListViewController {
		return this.Controller('list', {
			columnWidths: ['fill'],
			rows: [
				{
					id: 'new',
					cells: [
						{
							textInput: {
								name: 'todo',
								placeholder: 'Add your todo...',
								onKeyDown: this.handleKeyDown.bind(this),
							},
						},
						{
							button: {
								id: 'add',
								label: 'Add',
								type: 'primary',
								onClick: this.optionallyAddNewTodo.bind(this),
							},
						},
					],
				},
			],
		})
	}

	private async handleKeyDown(options: CellInputKeyDownOptions) {
		const { key } = options

		if (key === 'Enter') {
			this.optionallyAddNewTodo()
		}
	}

	private optionallyAddNewTodo() {
		const rowVc = this.listVc.getRowVc('new')
		const { todo } = rowVc.getValues()

		if (todo) {
			this.listVc.addRow({
				id: 'test',
				cells: [],
			})
		}
	}

	private CardVc(): CardViewController {
		return this.Controller('card', {
			body: {
				sections: [
					{
						list: this.listVc.render(),
					},
				],
			},
		})
	}

	public render() {
		return this.cardVc.render()
	}
}
