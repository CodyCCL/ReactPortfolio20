//import { Link } from "react-router-dom";
import {
  Container,
  Row
} from 'react-bootstrap';
import Project from '../components/Project';
const portfolio = () => {
  const projects = [
    { 
    title: "Project 1", 
    description: "First Group Project allowed us to create website with limited functionality", 
    image: '../../public/p1.jpg',
    link: "https://codyccl.github.io/WellmatesProject-1/"
  },
  { 
    title: "Project 2", 
    description: "Second Group Project explored storing local data into the backend using Mongo", 
    image: "../../public/p2.jpg",
    link: "https://github.com/CodyCCL/NutriFlexLife-Project-2.git"
  },
  { 
    title: "Express Notepad", 
    description: "This challenge had us use express to create a note taking app that saves and deletes notes", 
    image: "../../public/p3.png", 
    link: "https://codyccl.github.io/Notepad-app-11/"
  },
  { 
    title: "Javascript quiz", 
    description: "Using Javascript to create a timed quiz that tally correct responses", 
    image: "../../public/p4.png",
    link: "https://codyccl.github.io/Code-Quiz-Challenge4/" 
  },
  { 
    title: "SVG Logo generator", 
    description: "Using Node.js command line to taker user input to generate a logo", 
    image: "../../public/p5.png",
    link: "https://github.com/CodyCCL/SVG-Logo-Maker10.git"
  },
  ];
  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Created Projects</h1>
              <Row className="text-center">
              {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
              </Row>
        
      </Container>
      </div>
    </>
  );
};

export default portfolio;
