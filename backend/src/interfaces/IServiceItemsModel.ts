import AddItem from './AddItem';

export default interface IServiceItemsModel {
  addItemInService(items: AddItem[]): Promise<{ count: number }>;
}