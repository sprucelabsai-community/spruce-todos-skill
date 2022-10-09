import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
	id: 'todo',
	name: 'Todo',
	fields: {
		id: {
			type: 'id',
			isRequired: true,
		},
		todo: {
			type: 'text',
			isRequired: true,
		},
		target: {},
	},
})
