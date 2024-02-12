//import { Link } from 'react-router-dom';
import {
  Container,
  Row,
} from 'react-bootstrap';
import { Button } from 'reactstrap';


const resume = () => {
  return (
    <>
      <div  className="text-light bg-dark p-5">
        <Container>
          <h1>Resume</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          Do not have a presentable Resume Yet
        </h2>
        <Button href='www.linkedin.com/in/cody-lin-a69945159'>LinkedIn Profile: www.linkedin.com/in/cody-lin-a69945159</Button>
        <Row>
        
        </Row>
      </Container>
    </>
  );
};

export default resume;
