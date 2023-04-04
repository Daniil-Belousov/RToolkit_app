import { useEffect } from "react"
import { PropsI } from "../List/types"
import { BackgroundModal, 
  ModalWrap, 
  ModalHeader, 
  ModalBody, 
  ModalTitle, 
  ModalFooter,
  CloseBtn, 
  SaveBtn, 
  TextField,
  Label} from "./styles"

const Modal = ({setOpen}: PropsI) => {

  const closeModal = (e: { keyCode: number }) => {
    if(e.keyCode === 27) setOpen(false);
  }

  useEffect(() => {
    document.addEventListener('keydown',closeModal)
    return () => document.removeEventListener('keydown', closeModal)
  })

  return (
    <>
      <BackgroundModal onClick={() => setOpen(false)}>Modal</BackgroundModal>
      <ModalWrap>
        <ModalHeader>
          <ModalTitle>Создание нового задания:</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Label> Тескт задания:
            <TextField rows={7}/>
          </Label>
        </ModalBody>
        <ModalFooter>
          <CloseBtn onClick= {() => setOpen(false)}>Закрыть</CloseBtn>
          <SaveBtn onClick={() => console.log('сохранить')}>Сохранить</SaveBtn>
        </ModalFooter>
      </ModalWrap>
    </>
  )
}

export default Modal