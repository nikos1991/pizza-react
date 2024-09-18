import React from "react";

function Modal({visible}){
    return(
        <div class="modal">
                <div className = {`modal-content" ${visible}`}>
                    <span class="close">&times;</span>
                    <h1>Заголовок модалки</h1>
                    <p>Текст модалки. Это короче самая вкусная питса на районе.</p>
                    <button class = "button">Ок!</button>
                </div>
            </div>
    );
}