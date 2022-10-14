import { buildSchema } from '@sprucelabs/schema'
import todoBuilder from '../../../schemas/v2022_10_08/todo.builder'

const listResponsePayloadBuilder = buildSchema({
	id: 'listResponsePayload',
	fields: {
		todos: {
			type: 'schema',
			isArray: true,
			isRequired: true,
			minArrayLength: 0,
			options: {
				schema: todoBuilder,
			},
		},
	},
})

export default listResponsePayloadBuilder
