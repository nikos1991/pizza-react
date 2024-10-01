import React, { useState,useEffect } from "react";
// import pizzaData from '../pizzas.json';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/store/pizzaSlice';

function PizzaCard ({name, image, price}){
  const [count, setCounter] = useState(0);
  function handleClickCounter(){
    setCounter(count +1);
    console.log(count);
  }
    return(
    <div class ="pizza-card">
                        <img src= {image} />
                        <div class="card-content flex-column">
                            <h3>{name}</h3>
                            <div class = "pizza-size-picker">
                                <div class = "bread-type">
                                    <span class="active">тонкое</span>
                                    <span>традиционное</span>
                                </div>
                                <div class = "pizza-diameter">
                                    <span class = "active">26 см.</span>
                                    <span>30 см.</span>
                                    <span> 40см.</span>
                                </div>
                            </div>
                            <div class = "pizza-properties">
                                <div class = "pizza-order">
                                    <span class = "pizza-price">{price}</span>
                                    <div onClick={handleClickCounter} class = "order-button">
                                        <span class = "plus-icon">+</span>
                                        <span  class = "order-button-text" >Добавить</span>
                                        {count != 0 ? <span class = "pizza-counter">{count}</span> : ''}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    

);
}

function PizzaList({pizzaData}) {
  const dispatch = useDispatch();
  const { pizzas, status } = useSelector((state) => state.pizza);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  if (status === 'loading') return <p>Загрузка...</p>;
  if (status === 'failed') return <p>Ошибка загрузки</p>;

    return (
      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <PizzaCard 
            name={pizza.name} 
            image={pizza.img} 
            price={pizza.price} 
          />
        ))}
      </div>
    );
  }
  
  export default PizzaList;