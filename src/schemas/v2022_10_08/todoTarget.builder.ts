import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
	id: 'todoTarget',
	name: 'Todo Target',
	fields: {
		personId: {
			type: 'id',
			isRequired: true,
		},
	},
})
