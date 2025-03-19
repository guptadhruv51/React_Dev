function About()
{
  const name="Dhruv Gupta";
  const profession="Back End Developer, ML Engineer, Data Scientist";
  return (
    <section id='About' className='about-section'>
  <h2>
    About Me
  </h2>
  <p> Hello! I am {name} a passionate {profession}, and I'm a geek who helps building applications that solve real world 
    problems.</p>
  </section>
  );

}

export default About;