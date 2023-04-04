import Item from "../Item/Item"
import { ItemI, PropsI } from "./types"
import { WrapList, HeaderList, BodyList, TitleList, AddBtn, ColumnList, HeaderContainer } from "./styles"

const TASKS: ItemI[] = [
  {
    id: Date.now(),
    text: 'Задание текст',
    title: 'Задание тайтл',
    isCompleted: false,
  },
  {
    id: Date.now() + 1,
    text: 'Задание текст 1',
    title: 'Задание тайтл 1',
    isCompleted: false,
  },
  {
    id: Date.now() + 2,
    text: 'Задание текст 2',
    title: 'Задание тайтл 2',
    isCompleted: false,
  },
  {
    id: Date.now() + 3,
    text: 'Задание текст 3',
    title: 'Задание тайтл 3',
    isCompleted: false,
  },
  {
    id: Date.now() + 4,
    text: 'Задание текст 4',
    title: 'Задание тайтл 4',
    isCompleted: true,
  }
]

const List = ({setOpen}: PropsI) => {
  return (
   <WrapList>
    <HeaderList>
      <HeaderContainer>
        <TitleList>Список дел:</TitleList>
        <AddBtn onClick={() => setOpen(true)}>Добавить задачу</AddBtn>
      </HeaderContainer>
      <HeaderContainer>
        <TitleList>В процессе:</TitleList>
        <TitleList>Выполненные:</TitleList>
      </HeaderContainer>
    </HeaderList>
    <BodyList>
      <ColumnList className="inProgress">
        {TASKS.map((item) => {
          return(
            <Item key={item.id} item={item}/>
          )
        })}
      </ColumnList>
      <ColumnList className="completed"></ColumnList>
    </BodyList>
   </WrapList>
  )
}

export default List