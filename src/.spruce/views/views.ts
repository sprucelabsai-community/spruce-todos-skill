import RootSkillViewController from '../../root/Root.svc'
import TodosCardViewController from '../../root/TodosCard.vc'

const vcs = {
    RootSkillViewController,
    TodosCardViewController,
}

type LoadOptions<Args extends Record<string,any>[]> = Args[0]['args'] extends Record<string, any> ? Args[0]['args'] : Record<never, any>

declare module '@sprucelabs/heartwood-view-controllers/build/types/heartwood.types' {
	interface SkillViewControllerMap {
		'todos.root': RootSkillViewController
	}

	interface SkillViewControllerArgsMap {
		'todos.root': LoadOptions<Parameters<RootSkillViewController['load']>>
	}

	interface ViewControllerMap {
		'todos.todos-card': TodosCardViewController
		'todos.root': RootSkillViewController
	}

    interface ViewControllerOptionsMap {
		'todos.todos-card': ConstructorParameters<typeof TodosCardViewController>[0]
	}
}


//@ts-ignore
if(typeof heartwood === 'function') { heartwood(vcs) }

export default vcs