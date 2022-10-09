import { buildSchema } from '@sprucelabs/schema'
import todoBuilder from '../../../schemas/v2022_10_08/todo.builder'

const addResponsePayloadBuilder = buildSchema({
	id: 'addResponsePayload',
	fields: {
		todo: {
			type: 'schema',
			isRequired: true,
			options: {
				schema: todoBuilder,
			},
		},
	},
})

export default addResponsePayloadBuilder
