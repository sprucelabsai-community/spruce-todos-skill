import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
	event: SpruceEvent
): SpruceEventResponse<ResponsePayload> => {
	const { stores, source } = event
	const { personId } = source
	const todos = await stores.getStore('todos')
	const all = await todos.find({
		//@ts-ignore
		'target.personId': personId,
	})

	return {
		todos: all,
	}
}

type ResponsePayload = SpruceSchemas.Todos.v2022_10_08.ListResponsePayload
