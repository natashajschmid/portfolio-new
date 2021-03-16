import { Switch, Route } from "react-router-dom";

// import pages/components here
import Project from './components/Project';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CartoonImage from './img/cartoon-profile.png';
import ProxxmuCover from './img/proxxmu/proxxmu-cover.png';
import EqualiCareCover from './img/equalicare/equalicare-cover.png';
import RecoveryCover from './img/recovery/recovery-cover.png';
import ExtraWorksCover from './img/extraworks/extraworks-cover.png';


function Main() {
  return (
    <div>
      <Row className="main-row">
          <div className="intro">
            <div className="intro-text">
              <h2>Hi there, I'm Natasha.</h2>
              <h4>Human Centered Design & Engineering Student @ University of Washington</h4>
              <h4>Incoming Product Design Intern @ Alaska Airlines</h4>
            </div>
          </div>
      </Row>
      <Row>
        <Project
          link="/proxxmu"
          image={ProxxmuCover}
          title="Proxxmu"
          description="Helping neighbors stay connected and dependable when in need"
        //   tags={['UX', 'UI']}
        />

        <Project
          link="/equalicare"
          image={EqualiCareCover}
          title="EqualiCare"
          description="Mobile medical application providing universal healthcare for elderly immigrants"
        //   tags={['UX', 'UI']}
        />
        </Row>
        <Row>
          <Project
            link="/recovery-cafe"
            image={RecoveryCover}
            title="Recovery Café"
            description="Rebrand for Seattle non-profit organization"
            // tags={['UI', 'Branding']}
          />

          <Project
            link="/extra-works"
            image={ExtraWorksCover}
            title="Extra Works"
            description="A growing collection of side projects I have worked on!"
            // tags={['UX', 'UI']}
          />
        </Row>
    </div>

  );
}
  
  export default Main;