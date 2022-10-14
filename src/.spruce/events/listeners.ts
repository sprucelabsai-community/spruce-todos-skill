import { EventFeatureListener } from '@sprucelabs/spruce-event-utils'

const listeners: EventFeatureListener[] = [
	{
		eventName: 'list',
		eventNamespace: 'todos',
		version: 'v2022_10_08',
		callback: require('../../listeners/todos/list.v2022_10_08.listener')
			.default,
	},
	{
		eventName: 'did-boot',
		eventNamespace: 'skill',
		version: 'v2022_10_09',
		callback: require('../../listeners/skill/did-boot.v2022_10_09.listener')
			.default,
	},
	{
		eventName: 'will-boot',
		eventNamespace: 'skill',
		version: 'v2022_10_09',
		callback: require('../../listeners/skill/will-boot.v2022_10_09.listener')
			.default,
	},
	{
		eventName: 'add',
		eventNamespace: 'todos',
		version: 'v2022_10_08',
		callback: require('../../adding/listeners/todos/add.v2022_10_08.listener')
			.default,
	},
]

export default listeners
