import { EventFeatureListener } from '@sprucelabs/spruce-event-utils'

const listeners: EventFeatureListener[] = [
    {
        eventName: 'did-boot',
        eventNamespace: 'skill',
        version: 'v2022_10_09',
        callback: require('../../listeners/skill/did-boot.v2022_10_09.listener').default,
        isGlobal: require('../../listeners/skill/did-boot.v2022_10_09.listener').isGlobal,
    },
    {
        eventName: 'will-boot',
        eventNamespace: 'skill',
        version: 'v2022_10_09',
        callback: require('../../listeners/skill/will-boot.v2022_10_09.listener').default,
        isGlobal: require('../../listeners/skill/will-boot.v2022_10_09.listener').isGlobal,
    },
    {
        eventName: 'list',
        eventNamespace: 'todos',
        version: 'v2022_10_08',
        callback: require('../../listeners/todos/list.v2022_10_08.listener').default,
        isGlobal: require('../../listeners/todos/list.v2022_10_08.listener').isGlobal,
    },
    {
        eventName: 'add',
        eventNamespace: 'todos',
        version: 'v2022_10_08',
        callback: require('../../adding/listeners/todos/add.v2022_10_08.listener').default,
        isGlobal: require('../../adding/listeners/todos/add.v2022_10_08.listener').isGlobal,
    },
]

export default listeners