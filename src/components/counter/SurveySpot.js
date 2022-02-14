import React, { useContext, useState } from 'react';
//components
//contexts
import { SurveyCtx } from '../../contexts/survey/SurveyContext';

const SurveySpot = () => {
  const [intervalSurvey, setIntervalSurvey, surveyCounter, setSurveyCounter, carSurveyDefault, surveyResult, setSurveyResult, surveySpot, setSurveySpot, isSurveySpotSet, setSurveySpotStatus] = useContext(SurveyCtx);

  const handleSubmitForm = e => {
    e.preventDefault();
    return !surveySpot ? alert('Wybierz punkt do policzenia!') : (setSurveySpotStatus(true), localStorage.setItem('ACTIVE_SURVEY', JSON.stringify(surveySpot.pop())));

  }
  const handleSelectChange = e => {
    const selectedSurveySpot = userMovies.filter(item => item.id === e.target.value);
    return setSurveySpot(selectedSurveySpot);
  }
  const userMovies = JSON.parse(localStorage.getItem('ACTIVE_USER_MOVIES_LIST'));
  return (
    <div className="counter-app__survey-spot">
      {userMovies &&
        <form onSubmit={handleSubmitForm}>
          <label>Punkt do rozliczenia: </label>
          <select defaultValue={null} onChange={handleSelectChange}>
            <option value={null}>Wybierz punkt</option>
            {userMovies.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
          <button type='submit' className='primary-btn'>Wybierz</button>
        </form>}
    </div>
  )
}

export default SurveySpot