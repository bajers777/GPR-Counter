import React, { useEffect } from 'react';
import Sidebar from './components/navigation/sidebar/Sidebar';
import Display from './Display';
//Contexts
import ModalContext from './contexts/modal/ModalContext';
import ActivePillContext from './contexts/sidebar/ActivePillContext';
import SurveyContext from './contexts/survey/SurveyContext';
import IntervalContext from './contexts/interval/IntervalContext';

import AuthContext from './contexts/auth/AuthContext';
//firebase connection
import { getData, postData } from './firebase';
//CSS
import './styles/style.scss';

const App = () => {
  useEffect(() => {
    getData('inprogress');
  }, []);

  return (
    <>
      {/* <AuthContext> */}
      <ModalContext>
        {/* <Keyshortcuts /> */}
        <ActivePillContext>
          <IntervalContext >
            <SurveyContext>
              <Sidebar />
              <Display />
            </SurveyContext>
          </IntervalContext>
        </ActivePillContext>
      </ModalContext>
      {/* </AuthContext> */}
    </>
  )
}
export default App
