import React from "react";

function Cart() {
    return(
        <div class ="wrapper">
        <div class="header">
            <div class = "title">
               <img src="img/icons/pizza.svg" />
               <div class ="title-text"> 
                <h1>REACT PIZZA</h1>
                <p>самая вкусная пицца по вселенной</p>
               </div>
            </div>
         </div>
        <div class = "divider"></div>
        <div class = "content">
            <div class = "cart">
                <div class = "cart-header">
                    <div class="cart-title flex">
                        <img src = "img/icons/shop-cart-black.svg" />
                        <span><h1>Корзина</h1></span>
                    </div>
                    <div class="clear-button">
                        <img src ="img/icons/trash-bin.svg" />
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div class ="cart-items">
                    <div class = "cart-item">
                        <div class = "cart-item">
                            <div class = "cart-item-title">
                                <img src="img/pizza/cheesechicken.svg" />
                                <div class ="cart-item-title-text"> 
                                    <h2>Сырный цыпленок</h2>
                                    <p>тонкое тесто, 26 см.</p>
                                </div>
                            </div>
                            <div class ="cart-counter flex">
                              <img src = "img/icons/circle-minus.svg" />
                              <span>2</span>  
                              <img src = "img/icons/circle-plus.svg" />
                            </div>
                            <span>770 ₽</span>
                            <img src ="img/icons/circle-cross.svg" />
                        </div> 
                    </div>
                    <div class = "cart-item">
                        <div class = "cart-item">
                            <div class = "cart-item-title">
                                <img src="img/pizza/shrimps.svg" />
                                <div class ="cart-item-title-text"> 
                                    <h2>Креветки по-азиатски</h2>
                                    <p>толстое тесто, 40 см.</p>
                                </div>
                            </div>
                            <div class ="cart-counter flex">
                              <img src = "img/icons/circle-minus.svg" />
                              <span>2</span>  
                              <img src = "img/icons/circle-plus.svg" />
                            </div>
                            <span>770 ₽</span>
                            <img src ="img/icons/circle-cross.svg" />
                        </div> 
                    </div>
                    <div class = "cart-item">
                        <div class = "cart-item">
                            <div class = "cart-item-title">
                                <img src="img/pizza/cheesechicken.svg" />
                                <div class ="cart-item-title-text"> 
                                    <h2>Чизбургер-пиццца</h2>
                                    <p>толстое тесто, 40 см.</p>
                                </div>
                            </div>
                            <div class ="cart-counter flex">
                              <img src = "img/icons/circle-minus.svg" />
                              <span>2</span>  
                              <img src = "img/icons/circle-plus.svg" />
                            </div>
                            <span>770 ₽</span>
                            <img src ="img/icons/circle-cross.svg" />
                        </div> 
                    </div>
                </div>
                <div class = "pizza-summary">
                    <span>Всего пицц: <b>3 шт.</b></span>
                    <span>Сумма заказа: <b>900 Р</b></span>

                </div>
                <div class = "pizza-cart-actions">
                    <span>Вернуться назад</span>
                    <span>Оплатить сейчас</span>
                </div>

            </div>
        </div>
    </div>
    );
}
export default Cart;