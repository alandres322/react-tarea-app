import ListaTareas from "./Componentes/ListaTareas";
import FormTareas from "./Componentes/FormTareas";

function App() {
  return (
    <main className="bg-blue-300 h-screen">
      <div className="container mx-auto p-13">
        <FormTareas />
        <ListaTareas />
      </div>
      
    </main>
  );
}

export default App;
