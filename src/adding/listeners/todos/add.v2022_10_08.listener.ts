import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
	event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
	const { payload, source, addTodo } = event
	const { todo } = payload
	const { personId } = source

	const created = await addTodo(todo, personId!)

	return {
		todo: created,
	}
}

type EmitPayload = SpruceSchemas.Todos.v2022_10_08.AddEmitTargetAndPayload
type ResponsePayload = SpruceSchemas.Todos.v2022_10_08.AddResponsePayload
