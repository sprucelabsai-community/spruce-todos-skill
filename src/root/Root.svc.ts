import {
	AbstractSkillViewController,
	SkillView,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import TodosCardViewController from './TodosCard.vc'

export default class RootSkillViewController extends AbstractSkillViewController {
	public static id = 'root'
	protected cardVc: TodosCardViewController

	public constructor(options: ViewControllerOptions) {
		super(options)
		this.cardVc = this.CardVc()
		this.setTitle('Todos (WIP')
		this.setSubtitle(
			'This todo app is a work in progress. It is worked on as part of the developer onboarding!'
		)
	}

	public async getIsLoginRequired() {
		return true
	}

	private CardVc() {
		return this.Controller('todos.todos-card', {})
	}

	public async load() {
		await this.cardVc.load()
	}

	public render(): SkillView {
		return {
			layouts: [
				{
					cards: [this.cardVc.render()],
				},
			],
		}
	}
}
