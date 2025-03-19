import './App.css'
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header';
import Projects from './components/projectlist';
import Footer from './components/footer';

function App() 
{

  // const name="Dhruv Gupta";
  // const profession="Back End Developer, ML Engineer, Data Scientist";

// const projects=[
//   {
//     title:"E-commerce application",
//     description:"A web application similar to Amazon, Flipkart etc",
//     link:"#"
//   },
//   {
//     title:"E-Wallet",
//     description:"A web application similar to Paytm, to shop things online",
//     link:"#"
//   }
// ]


return (

  
  <div className='App'>
    {/* Header section */}
  <Header/>
  
  
  {/* About section */}


  <About/>

  {/* Project Section*/}
  <Projects/>


{/* Contact section */}
  <Contact/>


{/* Footer section */}
<Footer/>


  </div>
)
  
}

export default App
