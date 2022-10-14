import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import todoSchema_v2022_10_08 from '#spruce/schemas/todos/v2022_10_08/todo.schema'

const listResponsePayloadSchema: SpruceSchemas.Todos.v2022_10_08.ListResponsePayloadSchema  = {
	id: 'listResponsePayload',
	version: 'v2022_10_08',
	namespace: 'Todos',
	name: '',
	    fields: {
	            /** . */
	            'todos': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: todoSchema_v2022_10_08,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listResponsePayloadSchema)

export default listResponsePayloadSchema
