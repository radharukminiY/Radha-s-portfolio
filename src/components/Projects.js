import React, { Component } from 'react';

class Projects extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        return  <li key={projects.text}>
               <h2>{projects.pname}</h2>
               <cite>{projects.text}</cite><br/>
               <h5>{projects.link}</h5><hr/>
         </li>
      })
    }

    return (
      <section id="projects">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>projects</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {projects}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Projects;
