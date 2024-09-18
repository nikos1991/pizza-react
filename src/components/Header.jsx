import { useRef, useState } from "react";

function Header({Component}){

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/img/slider/images.jpg",
    "/img/slider/images (1).jpg",
    "/img/slider/images (2).jpg",
  ];

  const handleModalOpen = () => {
    setModalVisible(true);
    setTimeout(() => {
      setIsModalOpen(true); 
    }, 100); 

  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalVisible(false); 
    }, 1000); 
  };

 const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

    return(
        <div class="header">
        <div class = "title">
           <img  onClick={handleModalOpen} src="/img/icons/pizza.svg" />
           <div class ="title-text"> 
                <h1>REACT PIZZA</h1>
                <p>самая вкусная пицца по вселенной</p>
           </div>
        </div>
        {isModalVisible && (
        <div onClick={handleModalClose} className= {`modal  ${isModalOpen ? "modal-open" : ''}` }>
                <div onClick={(e) => e.stopPropagation()} class = "modal-content" >
                    <span onClick={handleModalClose} class="close">&times;</span>
                    <h1>Заголовок модалки</h1>

                    <p>Текст модалки. Это короче самая вкусная питса на районе.</p>
                    <div class = "slider">
                        <div onClick={handlePrevSlide} class ="left-button">←</div>
                        <div class ="slider-content">
                            <img  src={images[currentSlide]} />
                     
                        </div>
                        <div onClick={handleNextSlide} class = "right-button">→</div>
                    </div>
                    <button onClick={handleModalClose} class="button">Закрыть</button>
                </div>
               
            </div>
             )}
    {Component ? <Component /> : ''}
        
</div>
    );
}
export default Header;