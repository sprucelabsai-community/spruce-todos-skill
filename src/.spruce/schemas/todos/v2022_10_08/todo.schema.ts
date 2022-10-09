import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import todoTargetSchema_v2022_10_08 from '#spruce/schemas/todos/v2022_10_08/todoTarget.schema'

const todoSchema: SpruceSchemas.Todos.v2022_10_08.TodoSchema  = {
	id: 'todo',
	version: 'v2022_10_08',
	namespace: 'Todos',
	name: 'Todo',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'todo': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: todoTargetSchema_v2022_10_08,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(todoSchema)

export default todoSchema
