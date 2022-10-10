import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import TodoAdder from '../../adding/TodoAdder'

export default async (event: SpruceEvent): SpruceEventResponse => {
	const { stores, skill } = event

	const adder = await TodoAdder.Adder(stores)

	skill.updateContext('addTodo', async (todo: string, personId: string) => {
		return adder.createTodo(todo, personId)
	})
}
