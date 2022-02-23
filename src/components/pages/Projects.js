import React from 'react';
import Card from '../layout/Cards';

const projects = [
  {
    name: "project1",
    description: "something something",
    link: "",
    github: ""
  },
  {
    name: "project2",
    description: "something else",
    link: "",
    github: ""
  },
  {
    name: "project3",
    description: "something new",
    link: "",
    github: ""
  },
  {
    name: "project4",
    description: "something different",
    link: "",
    github: ""
  },
]

export default function Projects() {
  return (
    <div>
      <h1>Projects Page</h1>
      {projects.map((project, id) => (
        <Card 
          project={project}
          key={"project"+id}
          />
      ))}
      
    </div>
  );
}
