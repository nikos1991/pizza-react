import Reactq, { useState } from "react";

function PizzaSort() {
    const [pickState, setpickState] = useState(false);
    const [dropdownState, setDropdownState] = useState(false);

    function handleSortClick() {
        setDropdownState((prevState) => !prevState);
        console.log(dropdownState);
 
    }

    function handlePickState() {
        pickState(true);
    }



    return(
        <div class = "pizza-sort">
        <span class ="sort-text">Сортировка по: </span>
        <div onClick = {() => handleSortClick()} class = "sort-picker">
            <p> популярности</p>
            <div   className = {`sort-list ${ dropdownState ? "sort-list-active" : ''}`}>
                <span  class = "list-active">популярности</span> 
                <span >цене</span> 
                <span >по алфавиту</span>   
            </div>
        </div>
    </div>
    );
}
export default PizzaSort;