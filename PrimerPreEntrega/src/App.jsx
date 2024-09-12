
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <>
  
    <NavBar />
    <ItemListContainer greeting='Bienvenido a Neil Indumentaria'/>
    <ItemListContainer parrafo={'¡Elige lo que estas buscando!'}/>
    </>

  )
}

export default App;