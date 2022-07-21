function Machine(props){
    let classes = "machineContent";
    if(props.conditionsNotMet){
        classes += " conditionsNotMet";
    }
    if(props.selectedMachineId === props.id){
        classes += " selected";
    }
    return(
        <li className={classes} id={props.id} onClick={function (){props.handleClick(props.id)}}>
            <img className={"machineIcon"} src={props.icon} alt=""/>
            <div className="machineDescription">
                <p>do {props.range} m</p>
                <h3>{props.name}</h3>
            </div>
        </li>
    );
}

export default Machine;