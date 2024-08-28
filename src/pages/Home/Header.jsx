import "./Header.css";
import CoffeeMug from "../../assets/CoffeeMug.svg";

function Header(){
    return (
        <div className="header">
            <div className="logo">
                <img src={CoffeeMug} alt="coffee_mug" id='mug'></img>
                <p id='decaf'>DECAF</p>
            </div>
            <div className="navbar">
                <p >HOME</p>
                <p>ABOUT</p>
                <p>SPONSORS</p>
                <p>FAQ</p>
            </div>
        </div>
    )
}

export default Header