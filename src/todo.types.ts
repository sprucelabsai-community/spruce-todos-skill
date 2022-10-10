import { SpruceSchemas } from '@sprucelabs/mercury-types'

export type Todo = SpruceSchemas.Todos.v2022_10_08.Todo

declare module '@sprucelabs/spruce-skill-utils/build/types/skill.types' {
	interface SkillContext {
		addTodo: (todo: string, personId: string) => Promise<Todo>
	}
}
