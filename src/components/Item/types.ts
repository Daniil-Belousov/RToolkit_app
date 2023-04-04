export interface ItemI {
  id: number,
  text: string,
  title: string,
  isCompleted: boolean,
}

export interface ItemProps {
  item: ItemI;
}