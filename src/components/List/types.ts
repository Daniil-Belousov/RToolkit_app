export interface ItemI {
  id: number,
  text: string,
  title: string,
  isCompleted: boolean,
}

export interface PropsI {
  setOpen: (value: boolean) => void;
}