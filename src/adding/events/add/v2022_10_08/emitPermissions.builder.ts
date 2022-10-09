import { buildPermissionContract } from '@sprucelabs/mercury-types'

const addEmitPermissions = buildPermissionContract({
	id: 'addEmitPermissions',
	name: 'Add',
	description: undefined,
	requireAllPermissions: false,
	permissions: [
		{
			id: 'can-emit-add-permission',
			name: 'Can give high five',
			description: 'Will this person be allowed to high five?',
			defaults: {
				loggedIn: {
					default: true,
				},
			},
			requireAllStatuses: false,
		},
	],
})

export default addEmitPermissions
