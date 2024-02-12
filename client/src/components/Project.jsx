//import React from "react";
//import { Card, CardBody, CardTitle, CardText, Col } from "reactstrap";

const Project = ({ title, description, image, link }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} height={300} width={400}/>
      <p><a href={link}>view project</a></p>
    </div>
  );
};

export default Project;
