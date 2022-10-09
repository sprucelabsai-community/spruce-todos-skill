import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const todoTargetSchema: SpruceSchemas.Todos.v2022_10_08.TodoTargetSchema  = {
	id: 'todoTarget',
	version: 'v2022_10_08',
	namespace: 'Todos',
	name: 'Todo Target',
	    fields: {
	            /** . */
	            'personId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(todoTargetSchema)

export default todoTargetSchema
