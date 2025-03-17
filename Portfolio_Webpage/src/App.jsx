import './App.css'


function App() 
{
const name="Dhruv Gupta";
const profession="Back End Developer, ML Engineer, Data Scientist";

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

  <div className='App'>
    <header className='header'>
    <h1>{name}</h1>
    <p>{profession}</p>
    <nav>
      <a href='#about'> About</a>
      <a href='#projects'> Projects </a>
      <a href='#contact'> Contact </a>
    </nav>
    </header>
  {/* About section */}


  <section id='About' className='about-section'>
  <h2>
    About Me
  </h2>
  <p> Hello! I am {name} a passionate {profession}, and I'm a geek who helps building applications that solve real world 
    problems.</p>
  </section>

  {/* Project Section*/}
  <section id='projects' className='project-section'>
  <h2>
    Projects
  </h2>
  <div className='projects-list'>
      {projects.map((project,index)=>
      (
        <div key={index} className='project-item'> 
        <h3>{project.title}</h3>
        <h3>{project.description}</h3>
        </div> 
      ))}
    
  </div>
  </section>

  <section id='contact' className='contact'>

    <h2> Contact Me</h2>
    <p> Get in touch Email: <a href='mailto:guptadhruv51@gmail.com'>guptadhruv51@gmail.com</a></p>
  </section>

<section>
  <footer className='footer'>
      <p>
        2025. All rights Reserved
      </p>
  </footer>
</section>


  </div>
)
  
}

export default App
