
function Projects()
{
  const projects=[
    {
      title:"E-commerce application",
      description:"A web application similar to Amazon, Flipkart etc",
      link:"#"
    },
    {
      title:"E-Wallet",
      description:"A web application similar to Paytm, to shop things online",
      link:"#"
    }
  ]
  return (
    <section id='projects' className='project-section'>
    <h2>
      Projects
    </h2>
    <div className='projects-list'>
        {
        projects.map((project,index)=>
        (
          <div key={index} className='project-item'> 
          <h3>{project.title}</h3>
          <h3>{project.description}</h3>
          </div> 
        ))}
      
    </div>
    </section>
      );
  
  
}

export default Projects;