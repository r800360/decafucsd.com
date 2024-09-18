import './Sponsor.css'
import CoffeeMug from "../../assets/CoffeeMug.svg";
import Dynovas from "../../logos/Dynovas Matrix Logo (Final).jpg"
import LLNL from "../../logos/LLNLlogoBLACK.jpg"
import Viasat from "../../logos/Viasat_2018_Gradient_Web (1).jpg"

function Sponsor() {
    return(
        <div className='sponsor' id='sponsor'>
            <div className='title'><p>Sponsors</p></div>
            <div className='content'>
                <p>Gold</p>
                <div className='gold'>
                    <div>
                        <img src={CoffeeMug} alt="coffee_mug" id='mug'></img>
                        Coming Soon
                    </div>
                </div>
                <p>Silver</p>
                <div className='silver'>
                    <img src={Dynovas} alt="dynovas" className='logo'></img>
                    <img src={Viasat} alt="viasat" className='logo'></img>
                    <img src={LLNL} alt="llnl" className='logo'></img>
                    <div>
                        <img src={CoffeeMug} alt="coffee_mug" id='mug'></img>
                        Coming Soon
                    </div>
                    <div>
                        <img src={CoffeeMug} alt="coffee_mug" id='mug'></img>
                        Coming Soon
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor