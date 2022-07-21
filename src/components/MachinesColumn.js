import Machine from "./Machine";
import nozycoweIcon from "../assets/nozycowe.svg";
import ladowarkiTeleskopoweIcon from "../assets/ladowarkiTeleskopowe.svg";
import nozycoweElektryczneIcon from "../assets/nozywcoweElektryczne.svg";
import podestyMasztoweIcon from "../assets/podestyMasztowe.svg";
import podestyNaPrzyczepieIcon from "../assets/podestyNaPrzyczepie.svg";
import podestyRollliftIcon from "../assets/podestyRolllift.svg";
import podestyTeleskopoweIcon from "../assets/podestyTeleskopowe.svg";
import podestyTeleskopoweDieselIcon from "../assets/podestyteleskopowedisel.svg"
import podestyTeleskopoweElektryczneIcon from "../assets/podestyTeleskopoweElektryczne.svg";
import pojazdySpecjalneIcon from "../assets/pojazdySpecjalne.svg";


function MachinesColumn(props){
    let selectedMachineId = "";
    const machines = [
        {id: "podestyNozycoweElektryczne", range: 21.70, weight:550, engine:"elektryczny" , name:"Podesty nożycowe elektryczne", icon:nozycoweElektryczneIcon},
        {id: "podestyNozycoweDiesel", range: 21.70, weight:1134, engine:"spalinowy" , name:"Podesty nożycowe diesel" , icon:nozycoweIcon},
        {id: "podestyRollLift", range: 8.02, weight:272, engine:"" , name:"Podesty Roll-Lift", icon:podestyRollliftIcon},
        {id: "podestyTeleskopowoPrzeguboweDiesel", range: 48.2, weight:454, engine:"spalinowy" , name:"Podesty teleskopowo-przegubowe diesel", icon:podestyTeleskopoweDieselIcon},
        {id: "podestyTeleskopowe", range: 57, weight:567, engine:"" , name:"Podesty teleskopowe", icon:podestyTeleskopoweIcon},
        {id: "pojazdySpecjalne", range: 23, weight:2990, engine:"" , name:"Pojazdy specjalne", icon:pojazdySpecjalneIcon},
        {id: "podestyNaPrzyczepie", range: 25, weight:226, engine:"" , name:"Podesty na przyczepie", icon:podestyNaPrzyczepieIcon},
        {id: "podestyMasztowe", range: 12.7, weight:200, engine:"" , name:"Podesty masztowe", icon:podestyMasztoweIcon},
        {id: "podestyTeleskopowoPrzeguboweElektryczne", range: 28.0, weight:280, engine:"elektryczny" , name:"Podesty teleskopowo-przegubowe elektryczne", icon:podestyTeleskopoweElektryczneIcon},
        {id: "ladowarkiTeleskopowe", range: 26.05, weight:12000, engine:"" , name:"Ładowarki teleskopowe", icon:ladowarkiTeleskopoweIcon},
    ]
    function handleClick(id){
        let selectedMachine;
        machines.forEach(function (item, index){
           if(item.id === id){
               selectedMachine = item;
               selectedMachineId = item.id;
           }
        });
        console.log(selectedMachine);
        props.selectMachine(selectedMachine);
    }
    return(
        <div className="column">
            <ul className={"machinesList"}>
                {machines.map(({ id, range,weight, engine, name , icon}) => {
                    if(range < props.height || weight < props.weight || (engine !== props.engineType && props.engineType !== null)){
                        return <Machine key={id} id={id} range={range} name={name} handleClick={handleClick} conditionsNotMet={true} selectedMachineId={selectedMachineId} icon={icon}/>;
                    }
                    return <Machine key={id} id={id} range={range} name={name} handleClick={handleClick} conditionsNotMet={false} selectedMachineId={selectedMachineId} icon={icon}/>;
                })}
            </ul>
        </div>
    );
}

export default  MachinesColumn;