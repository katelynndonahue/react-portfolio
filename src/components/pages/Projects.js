import React from 'react';
import Card from '../layout/Cards';
import '../assets/styles/Project.css';

const projects = [
  {
    name: "Project 1",
    description: "My New Best Friend",
    link: "https://katelynndonahue.github.io/my-new-best-friend/",
    github: "https://github.com/katelynndonahue/my-new-best-friend"
  },
  {
    name: "Project 2",
    description: "Podcast 411",
    link: "https://obscure-tor-30961.herokuapp.com/",
    github: "https://github.com/katelynndonahue/Podcast411"
  },
  {
    name: "Project 3",
    description: "Code Quiz",
    link: "https://katelynndonahue.github.io/Code-Quiz/",
    github: "https://github.com/katelynndonahue/Code-Quiz"
  },
  {
    name: "Project 4",
    description: "Code Quiz",
    link: "https://katelynndonahue.github.io/Weather-Dashboard/",
    github: "https://github.com/katelynndonahue/Weather-Dashboard"
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
