import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';

function Project(props) {
  // const tags = props.tags;
  // const listTags = tags.map((tag) =>
  //     <span className="badge mb-4">{tag}</span>
  // );

  return (
    <Col lg className="proj-col">
      <div className="proj-hover">
        <Link to={props.link}>
          <div className="overflow">
            <img src={props.image} alt='' />
          </div>
          <h2 className="mt-3 pb-0">{props.title}</h2>
        </Link>
        <p>{props.description}</p>
        {/* {listTags} */}
      </div>
    </Col>
  );
}

export default Project;