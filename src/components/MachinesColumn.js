import Machine from "./Machine";
import nozycoweIcon from "../assets/nozycowe.svg";
import ladowarkiTeleskopoweIcon from "../assets/ladowarkiTeleskopowe.svg";
import nozycoweElektryczneIcon from "../assets/nozywcoweElektryczne.svg";
import ladowarkiSamochodweIcon from "../assets/ladowarkiSamochodwe.svg";
import podestyTeleskopoweDieselIcon from "../assets/podestyteleskopowedisel.svg"
import podestyTeleskopoweElektryczneIcon from "../assets/podestyTeleskopoweElektryczne.svg";
let selectedMachineId = "";

function MachinesColumn(props){
    const machines = [
        {id: "podestyNozycoweElektryczne", range: 16.0, weight:450, engine:"elektryczny" , name:"Podesty nożycowe elektryczne", icon:nozycoweElektryczneIcon},
        {id: "podestyNozycoweDiesel", range: 18.0, weight:1020, engine:"spalinowy" , name:"Podesty nożycowe diesel" , icon:nozycoweIcon},
        {id: "podestyTeleskopowoPrzeguboweDiesel", range: 58.0, weight:340, engine:"spalinowy" , name:"Podesty teleskopowo-przegubowe diesel", icon:podestyTeleskopoweDieselIcon},
        {id: "podestyTeleskopowoPrzeguboweElektryczne", range: 20.0, weight:230, engine:"elektryczny" , name:"Podesty teleskopowo-przegubowe elektryczne", icon:podestyTeleskopoweElektryczneIcon},
        {id: "podestyNaSamochodzie", range: 18.0, weight:220, engine:"spalinowy" , name:"Podesty na samochodzie", icon:ladowarkiSamochodweIcon},
        {id: "ladowarkiTeleskopowe", range: 30.0, weight:6000, engine:"spalinowy" , name:"Ładowarki teleskopowe", icon:ladowarkiTeleskopoweIcon},
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