import React, { useState, useEffect } from 'react';
import Result from './Components/Result/Result';
import Counter from './Components/Counter/Counter';
import Navbar from './Components/Navigation/Navbar';

import IntervalContext from './Contexts/Interval/IntervalContext';
import SurveyContext from './Contexts/SurveyContext/SurveyContext';

const App = () => {

  return (
    <>
      <IntervalContext>
        <SurveyContext>
          <Navbar />
          <Counter />
          <Result />
        </SurveyContext>
      </IntervalContext>
    </>
  )
}
export default App
