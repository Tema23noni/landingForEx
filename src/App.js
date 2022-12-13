import { useRef } from 'react';
import AboutTheatre from './components/AboutTheatre/AboutTheatre';
import BeMaecenas from './components/BeMaecenas/BeMaecenas';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Partners from './components/Partners/Partners';
import Productions from './components/Productions/Productions';
import TheBestTheater from './components/TheBestTheater/TheBestTheater';
function App() {
  const objectToLink ={
    main : useRef(null),
    aboutTheatre : useRef(null),
    productions : useRef(null),
    theBestTheater : useRef(null),
    partners : useRef(null),
    beMaecenas : useRef(null),
  }  
  const scrollToSection = (elementREf) =>{
    console.log(elementREf)
    window.scrollTo({
      top: elementREf.current.offsetTop -50,
      behavior: 'smooth',
    })
  }
  return (
    <div className="App">
      
        <Header scrollToSection={scrollToSection} objectToLink={objectToLink}/>
        <Main linkRef ={objectToLink.main}/>     
   
        <AboutTheatre linkRef ={objectToLink.aboutTheatre}/>
        <Productions linkRef ={objectToLink.productions}/>
        <TheBestTheater linkRef ={objectToLink.theBestTheater}/>
        <Partners linkRef ={objectToLink.partners}/>
        <BeMaecenas linkRef ={objectToLink.beMaecenas}/>
    </div>
  );
}

export default App;
