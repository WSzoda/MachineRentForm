function Column(props){
    return(
        <div className={props.colNumber}>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    );

}
export default Column;