import Header from "./Header"
import "./Home.css"

function Home(){
    return(
        <div className="home">
            <Header/>
            <div className="content">
                <div className="title">
                    <p id="heading">DECaF 2024</p>
                    <p id="subheading">Disciplines of Engineering Career Fair</p>
                    <p id="venue">Qualcomm Conference Center, UC San Diego</p>
                    <p id="venue">October 9th 2024, 10am - 2pm</p>
                    <div className="buttons">
                        <div className="button" id='student'>Student Registration</div>
                        <div className="button" id='company'>Company Registration</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home