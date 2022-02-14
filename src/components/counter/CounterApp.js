import React, { useContext, useEffect } from 'react';

//Components
import Counter from './Counter';
import SurveySpot from './SurveySpot';
//Contexts
import { IntervalCtx } from '../../contexts/interval/IntervalContext';
import { SurveyCtx } from '../../contexts/survey/SurveyContext';

const CounterApp = () => {
    const [intervalSurvey, setIntervalSurvey, surveyCounter, setSurveyCounter, carSurveyDefault, surveyResult, setSurveyResult, surveySpot, setSurveySpot, isSurveySpotSet, setSurveySpotStatus] = useContext(SurveyCtx);
    const [interval, setInterval] = useContext(IntervalCtx);

    const handleCounterAction = (type, direction, path) => {
        const data = carSurveyDefault;
        const activeInterval = localStorage.getItem('ACTIVE_INTERVAL');
        if (type === 'END_INTERVAL') {
            setIntervalSurvey(prevState => {
                const countedInterval = [...prevState, { activeInterval, survey: [...data] }];
                localStorage.setItem('INTERVAL_SURVEY', JSON.stringify(countedInterval));
                return countedInterval;
            });
        }
        else {
            return data.filter(itemPath => itemPath.path === path).map(itemSurvey => itemSurvey.survey.filter(itemType => itemType.type === type)).pop().map(itemDirections => itemDirections.directions.filter(itemDirection => itemDirection.direction === direction)).pop().map(itemAmmount => itemAmmount.ammount++);
        }
    }

    useEffect(() => {
        const isActive = localStorage.getItem('ACTIVE_SURVEY');
        return isActive && setSurveySpotStatus(true);
    }, []);

    return (
        <section className='counter-app'>
            {isSurveySpotSet ? <Counter handleCounterAction={handleCounterAction} /> : <SurveySpot />}
        </section>
    );
};

export default CounterApp;
