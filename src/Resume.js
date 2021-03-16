import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ResumePNG from './img/NatashaSchmid_Resume_Win20.png';
import ResumePDF from './img/NatashaSchmid_Resume_Win20.pdf';

function Resume() {
  return (
    <div>
      <Row style={{justifyContent: "center"}}>
        <button style={{ margin: '0rem 1.5rem 1rem 1.5rem'}}><a href={ResumePDF} download><i class="fas fa-download pr-2" aria-hidden="true"></i>Download</a></button>
        <button style={{ margin: '0rem 1.5rem 1rem 1.5rem'}}><a href={ResumePDF} target="_blank" open><i class="fas fa-external-link-alt"></i> Open in New Tab</a></button>
      </Row>
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
        {/* <Col> */}
          <img src={ResumePNG} alt='my resume' style={{borderRadius: "0.25rem", maxWidth: '800px'}} />
        </Col>
      </Row>

    </div>
  );
}
  
  export default Resume;






