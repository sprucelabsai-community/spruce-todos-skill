import {
	AbstractViewController,
	Card,
	CardViewController,
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
							},
						},
						{
							button: {
								id: 'add',
								label: 'Add',
								type: 'primary',
							},
						},
					],
				},
			],
		})
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
