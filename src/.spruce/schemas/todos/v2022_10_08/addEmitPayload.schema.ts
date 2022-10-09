import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const addEmitPayloadSchema: SpruceSchemas.Todos.v2022_10_08.AddEmitPayloadSchema  = {
	id: 'addEmitPayload',
	version: 'v2022_10_08',
	namespace: 'Todos',
	name: '',
	    fields: {
	            /** . */
	            'todo': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(addEmitPayloadSchema)

export default addEmitPayloadSchema
