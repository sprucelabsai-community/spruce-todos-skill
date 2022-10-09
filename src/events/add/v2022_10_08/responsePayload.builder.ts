import { buildSchema } from '@sprucelabs/schema'

const addResponsePayloadBuilder = buildSchema({
	id: 'addResponsePayload',
	fields: {
		todo: {
			type: 'text',
			label: 'Update me',
		},
	},
})

export default addResponsePayloadBuilder
