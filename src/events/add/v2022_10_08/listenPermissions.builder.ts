import { buildPermissionContract } from '@sprucelabs/mercury-types'

const addListenPermissions = buildPermissionContract({
	id: 'addListenPermissions',
	name: 'Add',
	description: undefined,
	requireAllPermissions: false,
	permissions: [],
})

export default addListenPermissions
