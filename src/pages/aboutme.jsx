
import {
  Container,
} from 'react-bootstrap';

const aboutme = () => {
  
  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>ABOUT ME</h1>
        </Container>
      
      <Container>
        <h2 className='pt-5'>
          <img src='/Headshot.jpg' height='150' />
        </h2>
        <p>
          Hello, I am taking a coding bootcamp on fullstack engineering. I am working as an Environmental Consultant as of now but want to transition into the computer science field
        </p>
      </Container>
      </div>
    </>
  );
};

export default aboutme;
