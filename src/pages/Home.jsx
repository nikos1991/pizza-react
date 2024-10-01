import Header from '../components/Header';
import Button from '../components/Button';
import PizzaPicker from '../components/PizzaPicker';
import PizzaList from '../components/PizzaCard';
import PizzaSort from '../components/PizzaSort';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import React from 'react';


function Home(){   
   
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
                <PizzaSort items = {[{name: 'популярности', type:'popular'},{name: 'цене', type:'pprice'},{name: 'алфавит', type:'alphabet'}]} />
           </div>
            <div class ="content-header">Все пиццы</div>
                    <PizzaList pizzaData={pizzas}/>
                    <PizzaList pizzaData={pizzas}/>
                </div>
    
                
            </div>
      );
    
}

export default Home;