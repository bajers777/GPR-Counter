import React, { useContext, useState } from 'react';
import { SidebarCtx } from '../../contexts/sidebar/SidebarContext';
//components
//contexts
export let activeItemSurveyResult;
const SurveySpot = props => {
  const { setSurveySpotStatus, setActiveSurvey, inProgressUserMovies, setSurveyResult } = props;
  const [surveySpot, setSurveySpot] = useState();
  const { setSidebarActiveStatus } = useContext(SidebarCtx);
  const handleSubmitForm = e => {
    e.preventDefault();

    if (!surveySpot) {
      return alert('Wybierz punkt do policzenia!');
    }
    localStorage.setItem('isCounterActive', true);
    setSurveySpotStatus(true);
    setSidebarActiveStatus(false);
    setSurveyResult(surveySpot.surveyResult);
    setActiveSurvey(surveySpot);

    //get data from firebase and set surveyResult state to fetched data, when user click endHour function, check prevState and set actual hourId then add next counted hour
  }
  const handleSelectChange = e => {
    const selectedSurveySpot = inProgressUserMovies.filter(item => item.id === e.target.value);
    return setSurveySpot(selectedSurveySpot.pop());
  }

  return (
    <>

      <div className="counter-app__survey-spot">
        {inProgressUserMovies &&
          <form onSubmit={handleSubmitForm}>
            <label><h2>Punkt do rozliczenia</h2></label>
            <select defaultValue={null} onChange={handleSelectChange}>
              <option value={null}>Wybierz punkt</option>
              {inProgressUserMovies.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
            <button type='submit' className='primary-btn'>Wybierz</button>
          </form>}
      </div>
    </>
  )
}

export default SurveySpot