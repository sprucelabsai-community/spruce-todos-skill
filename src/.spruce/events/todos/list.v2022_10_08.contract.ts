import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import listResponsePayloadSchema from '#spruce/schemas/todos/v2022_10_08/listResponsePayload.schema'

const listEventContract = buildEventContract({
	eventSignatures: {
		'todos.list::v2022_10_08': {
			isGlobal: true,

			responsePayloadSchema: listResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'listEmitPermissions',
				name: 'List',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-get-todos',
						name: 'Can get todos',
						defaults: {
							loggedIn: {
								default: true,
							},
						},
						requireAllStatuses: false,
					},
				],
			}),
		},
	},
})
export default listEventContract

export type ListEventContract = typeof listEventContract
