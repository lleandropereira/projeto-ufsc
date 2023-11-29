import { NavLink } from "react-router-dom";
import Logo from "../images/super-shoes.png";
import "./Home.css";
import RightArrow from "../images/216151_right_chevron_icon.png";
import { useGetData } from "../hooks/useGetData";
import { useRef } from "react";

const Home = () => {

    const url = "http://localhost:3000/products";

    const {data:items, loading, error} = useGetData(url);

    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        // console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };
    const handleRightClick = (e) => {
        e.preventDefault();
        // console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  return (
    <div>
        <h1>Sapataria Leandro!</h1>
        <div className="container" ref={carousel}>
            <div className="logo">
                <img src={Logo} alt="Logo da Sapataria" />
            </div>
            <div className="carousel">
                {items &&
                items.map((item) => (
                    <div className="item" key={item.id}>
                    <div className="image">
                        <img 
                            src={item.image} alt={item.name}
                        />
                    </div>
                    <div className="info">
                        <span className="name">{item.name}</span>
                        <span className="oldPrice">R$ {item.oldPrice}</span>
                        <span className="price">R$ {item.price}</span>
                    </div>
                </div>
                ))}
                
            </div>
            <p className="detalhes">
            <NavLink to="/products/${item.id}">Produtos</NavLink>
            </p>
            <div className="buttons">
                <button className="leftButton" onClick={handleLeftClick}>
                    <img src={RightArrow} alt="Scroll Left" />
                </button>
                <button className="leftButton" onClick={handleRightClick}>
                    <img src={RightArrow} alt="Scroll Right" />
                </button>
            </div>
            
        </div>
        
    </div>
  )
}

export default Home