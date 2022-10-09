import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const addEmitTargetSchema: SpruceSchemas.Todos.v2022_10_08.AddEmitTargetSchema  = {
	id: 'addEmitTarget',
	version: 'v2022_10_08',
	namespace: 'Todos',
	name: '',
	    fields: {
	            /** Update me. */
	            'aTextField': {
	                label: 'Update me',
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(addEmitTargetSchema)

export default addEmitTargetSchema
