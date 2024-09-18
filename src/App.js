import logo from './logo.svg';
import Header from './components/Header';
import Button from './components/Button';
import PizzaPicker from './components/PizzaPicker';
import PizzaList from './components/PizzaCard';
import { useEffect, useState } from 'react';
import React from 'react';



function App() {
    const [pizzas, setPizzasState] = useState([]);
    useEffect(() => { fetch('http://localhost:3000/db/pizzas.json').then((response) => response.json()).then((json) => setPizzasState(json.pizzas))},[]);
    console.log(pizzas);
     return (
    <div class="wrapper" >

           
            <Header Component={Button} />
        
            <div class = "divider"></div>
            <div class="content">
            <div class = "pizza-picker">
            <PizzaPicker items={['Мясные','Вегетарианская', 'Гриль', 'Острые','Закрытые']}/>
            <div class = "pizza-sort">
           <span class ="sort-text">Сортировка по: </span>
           <div class = "sort-picker">
               <p> популярности</p>
               <div class = "sort-list">
                   <span class = "list-active">популярности</span> 
                   <span>цене</span> 
                   <span>по алфавиту</span>   
               </div>
           </div>
       </div> 
       </div>
        <div class ="content-header">Все пиццы</div>
                <PizzaList pizzaData={pizzas}/>
                <PizzaList pizzaData={pizzas}/>
            </div>

            
        </div>
  );
}

export default App;
