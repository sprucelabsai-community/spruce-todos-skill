import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const todoSchema: SpruceSchemas.Todos.v2022_10_08.TodoSchema  = {
	id: 'todo',
	version: 'v2022_10_08',
	namespace: 'Todos',
	name: 'Todo',
	    fields: {
	            /** First Field. */
	            'fieldName1': {
	                label: 'First Field',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Second Field. A hint */
	            'fieldName2': {
	                label: 'Second Field',
	                type: 'number',
	                isRequired: true,
	                hint: 'A hint',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(todoSchema)

export default todoSchema
