import { buildSchema } from '@sprucelabs/schema'

const addEmitPayloadBuilder = buildSchema({
	id: 'addEmitPayload',
	fields: {
		todo: {
			type: 'text',
			isRequired: true,
		},
	},
})

export default addEmitPayloadBuilder
