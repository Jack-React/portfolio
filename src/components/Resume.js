import React, { Component } from 'react';
export default  class Resume extends Component {

  // converts points to list format
  toList(points) {
    console.log(points);
    var list = points.map(function (point) {
        return <li>{point}</li>;
      });

    return list

  }



  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <ul>
                          {this.toList(item.Points)}
                        </ul>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Projects</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.projects && resumeData.projects.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <ul>
                          {this.toList(item.Points)}
                          </ul>
                       </div>

                    </div>

                  )
                })
              }
            </div>
         </div>

         <div className="row experience">
             <div className="three columns header-col">
                <h1><span>Experience</span></h1>
             </div>

             <div className="nine columns main-col">
               {
                 resumeData.experience && resumeData.experience.map((item) => {
                   return(
                     <div className="row item">
                        <div className="twelve columns">
                           <h3>{item.CompanyName}</h3>
                           <p className="info">
                           {item.specialization}
                           <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                           <ul>
                           {this.toList(item.Points)}
                           </ul>
                        </div>

                     </div>

                   )
                 })
               }
             </div>
          </div>

          <div className="row individual projects">
              <div className="three columns header-col">
                 <h1><span>Individual Projects</span></h1>
              </div>

              <div className="nine columns main-col">
                {
                  resumeData.individualProjects && resumeData.individualProjects.map((item) => {
                    return(
                      <div className="row item">
                         <div className="twelve columns">
                            <h3>{item.CompanyName}</h3>
                            <p className="info">
                            {item.specialization}
                            <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                            <ul>
                            {this.toList(item.Points)}
                            </ul>
                         </div>

                      </div>

                    )
                  })
                }
              </div>
           </div>

           <div className="row leadership roles">
               <div className="three columns header-col">
                  <h1><span>Leadership Roles</span></h1>
               </div>

               <div className="nine columns main-col">
                 {
                   resumeData.leadershipRoles && resumeData.leadershipRoles.map((item) => {
                     return(
                       <div className="row item">
                          <div className="twelve columns">
                             <h3>{item.CompanyName}</h3>
                             <p className="info">
                             {item.specialization}
                             <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                             <ul>
                             {this.toList(item.Points)}
                             </ul>
                          </div>

                       </div>

                     )
                   })
                 }
               </div>
            </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}
