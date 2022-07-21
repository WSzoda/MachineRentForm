import Column from "./components/Column";
import SlidersColumn from "./components/SlidersColumn";
import MachinesColumn from "./components/MachinesColumn";
import FormColumn from "./components/FormColumn";
import {useState} from "react";

function App() {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(0);
  const [selectedHeight, setSelectedHeight] = useState(0);
  const [selectedEngineType, setSelectedEngineType] = useState(null);


  return (
      <div className="App">
        <div className={"formContainer"}>
          <Column title={"1. Określ wymagania"} colNumber={"col1"}>
            <SlidersColumn machine={selectedMachine} weight={selectedWeight} height={selectedHeight} engineType={selectedEngineType} setWeight={setSelectedWeight} setHeight={setSelectedHeight} setEngineType={setSelectedEngineType}></SlidersColumn>
          </Column>
          <Column title={"2. Wybierz urządzenie"} colNumber={"col2"}>
            <MachinesColumn selectMachine={setSelectedMachine} weight={selectedWeight} height={selectedHeight} engineType={selectedEngineType}/>
          </Column>
          <Column title={"3. Wyślij zapytanie"} colNumber={"col3"}>
            <FormColumn machine={selectedMachine}/>
          </Column>
        </div>
      </div>
  );
}

export default App;
