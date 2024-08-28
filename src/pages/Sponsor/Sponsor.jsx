import './Sponsor.css'
import CoffeeMug from "../../assets/CoffeeMug.svg";

function Sponsor() {
    return(
        <div className='sponsor' id='sponsor'>
            <div className='title'><p>Sponsors</p></div>
            <div className='content'>
                <p>Platinum</p>
                <div className='plat'>
                    <div>
                        <img src={CoffeeMug} alt="coffee_mug" id='mug'></img>
                        Future Sponsor
                    </div>
                </div>
                <p>Gold</p>
                <div className='gold'>
                    <div>
                        <img src={CoffeeMug} alt="coffee_mug" id='mug'></img>
                        Future Sponsor
                    </div>
                    <div>
                        Coming Soon
                    </div>
                    <div>
                        <img src={CoffeeMug} alt="coffee_mug" id='mug'></img>
                        Future Sponsor
                    </div>
                </div>
                <p>Silver</p>
                <div className='silver'>
                    <div>
                        <img src={CoffeeMug} alt="coffee_mug" id='mug'></img>
                        Future Sponsor
                    </div>
                    <div>
                        Coming Soon
                    </div>
                    <div>
                        Coming Soon
                    </div>
                    <div>
                        <img src={CoffeeMug} alt="coffee_mug" id='mug'></img>
                        Future Sponsor
                    </div>
                    <div>
                        <img src={CoffeeMug} alt="coffee_mug" id='mug'></img>
                        Future Sponsor
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor