import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import addEmitTargetAndPayloadSchema from '#spruce/schemas/todos/v2022_10_08/addEmitTargetAndPayload.schema'
import addResponsePayloadSchema from '#spruce/schemas/todos/v2022_10_08/addResponsePayload.schema'

const addEventContract = buildEventContract({
	eventSignatures: {
		'todos.add::v2022_10_08': {
			emitPayloadSchema: addEmitTargetAndPayloadSchema,
			responsePayloadSchema: addResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'addEmitPermissions',
				name: 'Add',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-high-five',
						name: 'Can give high five',
						description: 'Will this person be allowed to high five?',
						defaults: {
							skill: false,
						},
						requireAllStatuses: false,
					},
				],
			}),
			listenPermissionContract: buildPermissionContract({
				id: 'addListenPermissions',
				name: 'Add',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-high-five',
						name: 'Can give high five',
						description: 'Will this person be allowed to high five?',
						defaults: {
							skill: false,
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default addEventContract

export type AddEventContract = typeof addEventContract
