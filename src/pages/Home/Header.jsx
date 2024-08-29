import "./Header.css";
import CoffeeMug from "../../assets/CoffeeMug.svg";

function Header(){
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className="header">
            <div className="logo">
                <img src={CoffeeMug} alt="coffee_mug" id='mug'></img>
                <p id='decaf'>DECAF</p>
            </div>
            <div className="navbar">
                <p onClick={() => scrollToSection('about')}>ABOUT</p>
                <p onClick={() => scrollToSection('sponsor')}>SPONSORS</p>
                <p onClick={() => scrollToSection('faq')}>FAQ</p>
                <p onClick={() => scrollToSection('contact')}>CONTACT</p>
            </div>
        </div>
    )
}

export default Header