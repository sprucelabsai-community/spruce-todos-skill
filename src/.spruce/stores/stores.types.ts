import TodosStore from '../../stores/Todos.store'

declare module '@sprucelabs/data-stores/build/types/stores.types' {
	interface StoreMap {
                todos: TodosStore
	}

	interface StoreOptionsMap {
                todos: Omit<Parameters<typeof TodosStore['Store']>[0], keyof UniversalStoreOptions>   
        }
}