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
			columnWidths: ['content', 'fill'],
			rows: [
				{
					id: 'new',
					columnWidths: ['fill', 'content'],
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
		const { todo } = this.newRowVc.getValues()

		if (todo) {
			this.listVc.addRow({
				id: 'test',
				cells: [
					{
						checkboxInput: {
							name: 'aoeu',
						},
					},
					{
						text: {
							content: todo,
						},
					},
					{
						button: {
							id: 'delete',
							lineIcon: 'delete',
							type: 'destructive',
						},
					},
				],
			})
		}

		this.newRowVc.setValue('todo', '')
	}

	private get newRowVc() {
		return this.listVc.getRowVc('new')
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
