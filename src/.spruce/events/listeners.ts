import { EventFeatureListener } from '@sprucelabs/spruce-event-utils'

const listeners: EventFeatureListener[] = [
	{
		eventName: 'add',
		eventNamespace: 'todos',
		version: 'v2022_10_08',
		callback: require('../../listeners/todos/add.v2022_10_08.listener').default,
	},
]

export default listeners
