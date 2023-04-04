import { ItemWrap, ItemTitle } from './styles'
import { ItemProps } from './types'

const Item = ({item}: ItemProps) => {
  const {id, title, text, isCompleted} = item;

  return (
    <ItemWrap isCompleted={isCompleted}>
      <ItemTitle>{title}</ItemTitle>
    </ItemWrap>
  )
}

export default Item