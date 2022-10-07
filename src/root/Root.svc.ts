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
	}

	private CardVc() {
		return this.Controller('todos.todos-card', {})
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
