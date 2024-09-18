import React from "react";
function Button(props){
    return(
        <a href ="#" onClick = {props.onClick} class ="cart-button">
        <div class = "price">520 ₽</div>
        <div class="button-divider"></div>
        <div class="icon">
            <img src="/img/icons/shopcart.svg" />
            <span>3</span>
        </div>

    </a>
    );
}
export default Button;