import React, { useState } from 'react';

function PizzaPicker ({items}){
    
    const [activeCategory, setActiveCategory] = useState(0);
    console.log(activeCategory);
    console.log(setActiveCategory);
    const handleCategoryClick = (index) => {
        setActiveCategory(index);
       
      };
      
    return(
        
        <div class = "pizza-category">
          <div class = "category"
            className={`category ${activeCategory === 0 ? 'category-active' : ''}`}
            onClick={() => handleCategoryClick(0)}
          >
            Все
            </div>
            {
                items.map((name, index) => (
                    <li  
                    className={`category ${activeCategory === index + 1  ? 'category-active' : ''}`}
                    onClick={() => handleCategoryClick(index + 1)}
               
                    >
                    
                    {name}
                </li>))
            }
        </div>
  
       
    );


}

export default PizzaPicker;