import './App.css';
import Testimonial  from './components/Testimonial';
import reviews from "./data"
function App() {
  return (
    <div className="App">
    <div className='wrapper'>
    <h1 className='texti'>Our Testimonials</h1>
     <div className='underline'></div>
     <Testimonial reviews={reviews}/>
     <h1>ggfgyhhgj</h1>
    </div>
    
    </div>
  );
}

export default App;
