import React from "react";
// import pizzaData from '../pizzas.json';

function PizzaCard ({name, image, price}){
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
                                    <div class = "order-button">
                                        <span class = "plus-icon">+</span>
                                        <span class = "order-button-text" >Добавить</span>
                                        <span class = "pizza-counter">2</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    

);
}

function PizzaList({pizzaData}) {
  
    return (
      <div className="pizza-grid">
        {pizzaData.map((pizza) => (
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