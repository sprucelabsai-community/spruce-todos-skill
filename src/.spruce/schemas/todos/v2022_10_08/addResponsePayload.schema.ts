import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import todoSchema_v2022_10_08 from '#spruce/schemas/todos/v2022_10_08/todo.schema'

const addResponsePayloadSchema: SpruceSchemas.Todos.v2022_10_08.AddResponsePayloadSchema  = {
	id: 'addResponsePayload',
	version: 'v2022_10_08',
	namespace: 'Todos',
	name: '',
	    fields: {
	            /** . */
	            'todo': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: todoSchema_v2022_10_08,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(addResponsePayloadSchema)

export default addResponsePayloadSchema
