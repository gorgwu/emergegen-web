import './welcome.css';
import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='wel'>
      <div className='container'>
        <img src="/HomeIMG/rect-logo.svg" alt="Logo" className='rectlogo'/>
      </div>

      <div className='wave'>
        <div className='youthled'>
          <p>Youth-led marketing and consulting agency.</p>
        </div>
        <div className='learnmore'>
          <Link to="/About">
            <button>Learn more</button>
          </Link>
        </div>
      </div>

      <div className='whatis'>
        <p>What is Emerge Gen?</p>
      </div>

      <div className='weare'>
        <div className='wearetext'>
          <p>Emerge Gen is a youth-led marketing and consulting agency with
          fresh and insightful perspectives, committed to empowering
          local businesses to thrive, with a focus on generational targeting.</p>
        </div>
      </div>
     </div> 
  );
}

export default App;