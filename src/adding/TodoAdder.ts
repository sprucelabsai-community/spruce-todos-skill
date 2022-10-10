import { StoreFactory } from '@sprucelabs/data-stores'
import TodosStore from '../stores/Todos.store'

export default class TodoAdder {
	private todos: TodosStore
	private constructor(todos: TodosStore) {
		this.todos = todos
	}

	public static async Adder(stores: Pick<StoreFactory, 'getStore'>) {
		const todos = await stores.getStore('todos')
		return new this(todos)
	}

	public async createTodo(todo: string, personId: string) {
		const created = await this.todos.createOne({
			target: {
				personId: personId!,
			},
			todo,
		})

		return created
	}
}
