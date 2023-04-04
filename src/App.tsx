import { Background, LogoText } from "./styles";
import List from "./components/List/List";
import { useEffect, useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [isOpen, setOpen] = useState(false)

useEffect(() => {
  setTimeout(() => {setLoading(false)}, 2000)
}, []);

  return (
    <Background className="App">
      {isLoading ? (
        <LogoText>Loading, please wait...</LogoText>
      ):(
        <>
          <LogoText>Belousovsky ToDo List</LogoText>
          <List setOpen={setOpen}/>
        </>
      )}
      {isOpen && <Modal setOpen={setOpen}/>}
    </Background>
  );
}

export default App;
