import { generateId } from '@sprucelabs/test-utils'
import { Todo } from '../../todo.types'

export default function generateTodoValues(): Todo {
	return {
		id: generateId(),
		todo: generateId(),
		target: {
			personId: generateId(),
		},
	}
}
