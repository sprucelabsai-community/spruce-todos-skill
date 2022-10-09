import { buildSchema } from '@sprucelabs/schema'
import todoTargetBuilder from './todoTarget.builder'

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
		target: {
			type: 'schema',
			isRequired: true,
			options: {
				schema: todoTargetBuilder,
			},
		},
	},
})
