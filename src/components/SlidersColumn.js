import {useLayoutEffect, useRef, useState} from "react";

function SlidersColumn(props){
    const heightSlider = useRef(null);
    const weightSlider = useRef(null)
    const [heightWidth, setHeightWidth] = useState(0);
    const [weightWidth, setWeightWidth] = useState(0);
    useLayoutEffect(() => {
        setHeightWidth(heightSlider.current.offsetWidth);
        setWeightWidth(weightSlider.current.offsetWidth);
    }, []);
    function handleHeightChange(event){
        props.setHeight(event.target.value);
        renderExcessesHeight(event.target.value);
    }
    function handleWeightChange(event){
        props.setWeight(event.target.value);
        renderExcessesWeight(event.target.value);
    }
    function renderExcessesHeight(value){
        if(props.machine != null) {
            let maxHeight = props.machine.range;
            console.log(maxHeight);
            let excess = document.getElementById("sliderHeightExcess");
            let widthPerOneMeter = Math.floor(heightWidth / 57);
            if(maxHeight >= value){
                excess.style.width=0 + "px";
                return;
            }
            console.log(heightWidth);
            let startOfExcess = maxHeight * widthPerOneMeter;
            let endOfExcess = value * widthPerOneMeter;
            let widthOfExcess = endOfExcess - startOfExcess;
            excess.style.width=widthOfExcess+ "px";
            excess.style.left=startOfExcess + "px";

        }
    }
    function renderExcessesWeight(value){
        if(props.machine != null) {
            let maxWeight = props.machine.weight;
            let excess = document.getElementById("sliderWeightExcess");
            let widthPerOneKilo = weightWidth / 12000;
            if(maxWeight >= value){
                excess.style.width=0 + "px";
                return;
            }
            console.log(heightWidth);
            let startOfExcess = maxWeight * widthPerOneKilo;
            let endOfExcess = value * widthPerOneKilo;
            if(endOfExcess > weightWidth){
                endOfExcess = weightWidth;
            }
            let widthOfExcess = endOfExcess - startOfExcess;
            excess.style.width=widthOfExcess+6 + "px";
            excess.style.left=startOfExcess + "px";

        }
    }
    function handleEngineSelect(e){
        props.setEngineType(e.target.value);
    }
    return(
        <div className="column sliderColumn">
            <div>
                <div className="titleAndValue">
                    <label htmlFor="inputHeight">Wysokość robocza</label>
                    <input type="text" value={props.height}/>
                </div>
                <div className="sliderContainer">
                    <span className="sliderExcess" id="sliderHeightExcess"></span>
                    <input ref={heightSlider} className="slider" id="sliderHeight" type="range" min="0" max="57" value={props.height} onChange={handleHeightChange}/>
                </div>
            </div>
            <div className="engineTypeContainer">
                <label htmlFor="engineType">Rodzaj napędu</label>
                <select name="engineType" id="engineType" onChange={handleEngineSelect} value={props.engineType}>
                    <option></option>
                    <option value="spalinowy">Spalinowy</option>
                    <option value="elektryczny">Elektryczny</option>
                    <option value="gazowy">Gazowy</option>
                    <option value="hybrid">Hybrid</option>
                </select>
            </div>
            <div>
                <div className="titleAndValue">
                    <label htmlFor="inputWeight">Udźwig</label>
                    <input type="text" value={props.weight}/>
                </div>
                <div className="sliderContainer">
                    <span className="sliderExcess" id="sliderWeightExcess"></span>
                    <input ref={weightSlider} className="slider" id="sliderWeight" type="range" min="0" max="12000" value={props.weight} onChange={handleWeightChange}/>
                </div>
            </div>
        </div>
    );
}

export default SlidersColumn;