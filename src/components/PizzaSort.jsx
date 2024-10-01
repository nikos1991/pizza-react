import Reactq, { useState } from "react";

function PizzaSort({items}) {
    const [pickState, setpickState] = useState(false);
    const [dropdownState, setDropdownState] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
  //  const activeSort = items[activeItem].name;

    function handleSortClick() {
        setDropdownState((prevState) => !prevState);
        console.log(dropdownState);
 
    }

    function handleActiveItem(index) {
        setActiveItem(index);
        console.log(index);
 
    }

    function handlePickState() {
        pickState(true);
    }



    return(
        <div class = "pizza-sort">
        <span class ="sort-text">Сортировка по: </span>
        <div onClick = {() => handleSortClick()} class = "sort-picker">
        <p>{items[activeItem].name}</p>
        
            <ul class = "sort-list">
                {items &&
                    items.map((item, index) => (
                        <li 
                        onClick ={()=> handleActiveItem(index)}
                        className = {activeItem === index ? 'list-active' : ''}
                        >
                            {item.name}
                        </li>



                    ))
                }

            </ul>

        </div>
    </div>
    );
}

export default PizzaSort;