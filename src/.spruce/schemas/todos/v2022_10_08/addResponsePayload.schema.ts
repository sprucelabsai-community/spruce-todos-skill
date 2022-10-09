import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const addResponsePayloadSchema: SpruceSchemas.Todos.v2022_10_08.AddResponsePayloadSchema  = {
	id: 'addResponsePayload',
	version: 'v2022_10_08',
	namespace: 'Todos',
	name: '',
	    fields: {
	            /** Update me. */
	            'todo': {
	                label: 'Update me',
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(addResponsePayloadSchema)

export default addResponsePayloadSchema
