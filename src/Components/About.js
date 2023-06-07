import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import './About.css'

function Aboutus() {
    return <div>
        <Navbar></Navbar>
        <div className="container">
            <div className="Row">
                <div className="col-sm-6 offset-md-3">
                    <h1>About Us</h1>
                    <p>
                    Pharmacy is the science and practice of discovering, producing, preparing, dispensing, reviewing and monitoring medications, aiming to ensure the safe, effective, and affordable use of medicines. It is a miscellaneous science as it links health sciences with pharmaceutical sciences and natural sciences. The professional practice is becoming more clinically oriented as most of the drugs are now manufactured by pharmaceutical industries. Based on the setting, pharmacy practice is either classified as community or institutional pharmacy. Providing direct patient care in the community of institutional pharmacies is considered clinical pharmacy.
                    </p>
                    <p>
                    The scope of pharmacy practice includes more traditional roles such as compounding and dispensing of medications. It also includes more modern services related to health care including clinical services, reviewing medications for safety and efficacy, and providing drug information. Pharmacists, therefore, are experts on drug therapy and are the primary health professionals who optimize the use of medication for the benefit of the patients.

An establishment in which pharmacy (in the first sense) is practiced is called a pharmacy (this term is more common in the United States) or chemists (which is more common in Great Britain, though pharmacy is also used)[citation needed]. In the United States and Canada, drugstores commonly sell medicines, as well as miscellaneous items such as confectionery, cosmetics, office supplies, toys, hair care products and magazines, and occasionally refreshments and groceries.
                    </p>
                    <Link to="/" className="btn btn-info">Go Home</Link>
                </div>
            </div>
        </div>
    </div>;
}

export default Aboutus;