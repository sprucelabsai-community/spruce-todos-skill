import {
	AbstractStore,
	UniversalStoreOptions,
	PrepareOptions,
	PrepareResults,
} from '@sprucelabs/data-stores'
import {
	buildSchema,
	dropFields,
	makeFieldsOptional,
	SchemaValues,
	SchemaFieldNames,
} from '@sprucelabs/schema'
import { StoreSeedOptions } from '@sprucelabs/spruce-test-fixtures'
import { generateId } from '@sprucelabs/test-utils'
import todoSchema from '#spruce/schemas/todos/v2022_10_08/todo.schema'

// The structure of the data you'll be returning from finds
const fullSchema = todoSchema

// The values you will accept when creating a record
const createSchema = buildSchema({
	id: 'createTodo',
	fields: {
		...dropFields(fullSchema.fields, ['id']),
	},
})

// The values you will accept when updating a record
const updateSchema = buildSchema({
	id: 'updateTodo',
	fields: {
		...makeFieldsOptional(dropFields(fullSchema.fields, ['id'])),
	},
})

// The values you will actually save to the databases (in this case, makes id required)
const databaseSchema = buildSchema({
	id: 'databaseTodo',
	fields: {
		...fullSchema.fields,
		id: {
			type: 'id',
			isRequired: true,
		},
	},
})

type FullSchema = typeof fullSchema
type CreateSchema = typeof createSchema
type UpdateSchema = typeof updateSchema
type DatabaseSchema = typeof databaseSchema

export type Todo = SchemaValues<FullSchema>
export type CreateTodo = SchemaValues<CreateSchema>
export type UpdateTodo = SchemaValues<UpdateSchema>
export type DatabaseTodo = SchemaValues<DatabaseSchema>
export type QueryTodo = Partial<Todo>

type TodoStoreOptions = UniversalStoreOptions

export default class TodosStore extends AbstractStore<
	FullSchema,
	CreateSchema,
	UpdateSchema,
	DatabaseSchema
> {
	public name = 'Todos'
	protected collectionName = 'todos'

	protected createSchema = createSchema
	protected updateSchema = updateSchema
	protected fullSchema = fullSchema
	protected databaseSchema = databaseSchema

	public static Store(options: TodoStoreOptions & UniversalStoreOptions) {
		return new this(options.db)
	}

	protected async willCreate(
		values: CreateTodo
	): Promise<Omit<DatabaseTodo, 'id'>> {
		return values
	}

	protected async willUpdate(values: UpdateTodo) {
		return values as Partial<DatabaseTodo>
	}

	protected async prepareRecord<
		IncludePrivateFields extends boolean,
		F extends SchemaFieldNames<FullSchema> = SchemaFieldNames<FullSchema>
	>(
		record: DatabaseTodo,
		_options?: PrepareOptions<IncludePrivateFields, FullSchema, F>
	) {
		return record as PrepareResults<FullSchema, IncludePrivateFields>
	}

	public async seed(options: StoreSeedOptions) {
		const { totalToSeed, TestClass } = options
		await Promise.all(
			new Array(totalToSeed).fill(0).map(() => {
				return this.createOne({
					target: {
						personId: TestClass.fakedPerson.id,
					},
					todo: generateId(),
				})
			})
		)
	}
}
