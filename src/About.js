import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AboutImage from './img/about.png';

function About() {
  return (
    <Row>
      <Col 
      xs={{ span: 12, offset: 0, order: 2 }} 
      sm={{ span: 12, offset: 0, order: 2 }} 
      md={{ span: 12, offset: 0, order: 2 }} 
      lg={{ span: 4, offset: 1, order: 1 }}>
        <img src={AboutImage} alt="profile image" className="about-img" /> 
      </Col>


      <Col 
      xs={{ span: 12, offset: 0, order: 1 }} 
      sm={{ span: 12, offset: 0, order: 1 }} 
      md={{ span: 12, offset: 0, order: 1 }} 
      lg={{ span: 6, offset: 0, order: 2 }}>
        <h3>Hi, I'm Natasha!</h3>
        <p>I am a junior at the University of Washington majoring in <a href="https://www.hcde.washington.edu/" target="_blank" className="accent-color"> Human Centered Design & Engineering</a> (HCDE) with a concentration in Human Computer Interaction. I am also pursuing a minor in diversity and informatics.</p>
        <p>Coming into college, I wanted to be a Biomedical Engineer, since I thought this was the best way to have a meaningful and direct impact on others' lives. It wasn't until I took an introductory user-centered design course that I found UX design as a means to interact directly with humans and create impactful products that serve diverse communities.</p>
        <p>As a designer, I strive to create meaningful experiences that advocate for the story of my user. It is always my goal to exercise empathy and compassion to amplify user voices and have a positive impact on people's lives.</p>
        <p>When I am not designing, I love to go on hikes, play water polo, and make all kinds of smoothies.</p>
        <br/>
        {/* <p><a href="mailto:njschmid@uw.edu"><i class="far fa-envelope pr-2" aria-hidden="true"></i>njschmid@uw.edu</a></p> */}
        <br/>
      </Col>
    </Row>
  );
}

export default About;