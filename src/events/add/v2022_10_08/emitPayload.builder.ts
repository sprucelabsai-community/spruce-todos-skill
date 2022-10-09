import { buildSchema } from '@sprucelabs/schema'

const addEmitPayloadBuilder = buildSchema({
	id: 'addEmitPayload',
	fields: {
		todo: {
			type: 'text',
			label: 'Update me',
		},
	},
})

export default addEmitPayloadBuilder
