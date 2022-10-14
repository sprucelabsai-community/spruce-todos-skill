import { buildPermissionContract } from '@sprucelabs/mercury-types'

const listEmitPermissions = buildPermissionContract({
	id: 'listEmitPermissions',
	name: 'List',
	description: undefined,
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
})

export default listEmitPermissions
