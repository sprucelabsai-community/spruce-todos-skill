import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { generateId } from '@sprucelabs/test-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
	event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
	const { stores } = event
	const todos = await stores.getStore('todos')
	await todos.createOne({
		target: {
			personId: generateId(),
		},
		todo: generateId(),
	})

	return {
		todo: {
			id: generateId(),
			target: {
				personId: generateId(),
			},
			todo: generateId(),
		},
	}
}

type EmitPayload = SpruceSchemas.Todos.v2022_10_08.AddEmitTargetAndPayload
type ResponsePayload = SpruceSchemas.Todos.v2022_10_08.AddResponsePayload
