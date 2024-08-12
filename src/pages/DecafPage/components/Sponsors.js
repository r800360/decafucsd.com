import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SponsorLogos from '../data/SponsorLogos';

import potHead from '../assets/pot-head.svg';
import buford from '../assets/buford.svg';
import shadow from '../assets/pot-head-shadow.svg';

import Seismic from '../assets/sponsors/seismic.svg';
import AppliedMedical from '../assets/sponsors/appliedmedical.svg';
import Dynovas from '../assets/sponsors/dynovas.svg';
import Viasat from '../assets/sponsors/viasat.svg';
import Keller from '../assets/sponsors/keller.png';
import HughesNetworkSystem from '../assets/sponsors/hughes_network_system.svg';
import L3Harris from '../assets/sponsors/l3harris.svg';
import GeneralAtomics from '../assets/sponsors/general_atomics.svg';
import Leidos from '../assets/sponsors/leidoslogo.png';

const Sponsors = () => {
    return (
        <section className="decaf-sponsors">
            <Container>
                {/* <h1 className="decaf-sponsors__title">
                    ATTENDING
                    <br />
                    <span>SPONSORS</span>
                </h1> */}
                <Row>
                    <p className="decaf-sponsors__contact">
                        Contact us at{' '}
                        <a
                            href="mailto:sponsor@tesc.ucsd.edu"
                            style={{ color: '#29193E' }}
                        >
                            sponsor@tesc.ucsd.edu
                        </a>{' '}
                        if you have any questions!
                    </p>
                </Row>
            </Container>
        </section>
    );
};

export default Sponsors;
