import React from 'react';
import Result from './Components/Result/Result';
import Counter from './Components/Counter/Counter';
import Navbar from './Components/Navigation/Navbar';
import Sidebar from './Components/Navigation/Sidebar/Sidebar';

import IntervalContext from './Contexts/Interval/IntervalContext';
import SurveyContext from './Contexts/SurveyContext/SurveyContext';

import './styles/style.scss';

const App = () => {

  return (
    <>
      <Sidebar />
      <IntervalContext>
        <SurveyContext>
          <section className='counter-app'>
            <Navbar />
            <Counter />
            <Result />
          </section>
        </SurveyContext>
      </IntervalContext>
    </>
  )
}
export default App
