import TodosCardViewController from '../../root/TodosCard.vc'

export default class SpyTodosCardViewController extends TodosCardViewController {
	public getListVc() {
		return this.listVc
	}
}
