import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import addEmitPayloadSchema_v2022_10_08 from '#spruce/schemas/todos/v2022_10_08/addEmitPayload.schema'

const addEmitTargetAndPayloadSchema: SpruceSchemas.Todos.v2022_10_08.AddEmitTargetAndPayloadSchema  = {
	id: 'addEmitTargetAndPayload',
	version: 'v2022_10_08',
	namespace: 'Todos',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: addEmitPayloadSchema_v2022_10_08,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(addEmitTargetAndPayloadSchema)

export default addEmitTargetAndPayloadSchema
