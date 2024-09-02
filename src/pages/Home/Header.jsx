import "./Header.css";
import CoffeeMug from "../../assets/CoffeeMug.svg";

function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
        <p id="decaf">DECAF</p>
      </div>
      <div className="whitespace"></div>
      <div className="navbar">
        <div onClick={() => scrollToSection("about")} className="clickable">
          ABOUT
        </div>
        <div onClick={() => scrollToSection("sponsor")} className="clickable">
          SPONSORS
        </div>
        <div onClick={() => scrollToSection("faq")} className="clickable">
          FAQ
        </div>
        <div onClick={() => scrollToSection("contact")} className="clickable">
          CONTACT
        </div>
      </div>
    </div>
  );
}

export default Header;
