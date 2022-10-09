import { eventFaker, SpruceSchemas } from '@sprucelabs/spruce-test-fixtures'
import { generateId } from '@sprucelabs/test-utils'

export default class EventFaker {
	public async fakeAddTodo(
		cb?: (targetAndPayload: AddTodoTargetAndPayload) => void
	) {
		await eventFaker.on('todos.add::v2022_10_08', (targetAndPayload) => {
			cb?.(targetAndPayload)
			return {
				todo: {
					id: generateId(),
					todo: generateId(),
					target: {
						personId: generateId(),
					},
				},
			}
		})
	}
}

export type AddTodoTargetAndPayload =
	SpruceSchemas.Todos.v2022_10_08.AddEmitTargetAndPayload
