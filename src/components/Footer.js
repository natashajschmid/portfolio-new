import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
      <div className="footer-container">
        <div className="footer">
          <div className="footer-statement">Let's connect!</div>
          <div className="social-links">
            <a style={{paddingTop: "0rem"}} href="https://www.linkedin.com/in/natashajschmid/" target="_blank" rel="noopener noreferrer" alt="linkedin logo"> <i class="fab fa-linkedin-in" aria-hidden="true"></i> </a>
            <a style={{paddingTop: "0rem"}} href="mailto:njschmid@uw.edu" target="_blank" rel="noopener noreferrer" alt="email logo"> <i class="fas fa-envelope"></i> </a>
          </div>
          <div className="footer-copyright">© 2021 Natasha Schmid. Designed & coded from scratch.</div>
        </div>

        {/* <Row>
          <Col lg className="footer">
            <a style={{paddingTop: "0rem"}} href="https://www.linkedin.com/in/natashajschmid/" target="_blank" rel="noopener noreferrer" alt="linkedin logo"> <i class="fab fa-linkedin-in" aria-hidden="true"></i> </a>
            <a style={{paddingTop: "0rem"}} href="mailto:njschmid@uw.edu" target="_blank" rel="noopener noreferrer" alt="email logo"> <i class="fas fa-envelope"></i> </a>
            <a style={{paddingTop: "0rem"}}  href="https://github.com/natashajschmid" target="_blank" rel="noopener noreferrer"> <i class="fab fa-github" aria-hidden="true"></i> </a>
          </Col>
          <Col lg className="footer">
            <p><i class="far fa-copyright" aria-hidden="true"></i>  2021 Natasha Schmid</p>
          </Col>
          <Col lg className="footer">
            <p>Designed & coded from scratch.</p>
          </Col>
        </Row> */}
      </div>
    );
  }
  
  export default Footer;