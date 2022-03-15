import React, { useContext, useEffect, useState } from 'react';

//Components
import Counter from './Counter';
import SurveySpot from './SurveySpot';


const Display = props => {
    const [intervalSurvey, setIntervalSurvey] = useState([]);
    const [surveyResult, setSurveyResult] = useState([]);
    const [isSurveySpotSet, setSurveySpotStatus] = useState([]);
    const [activeSurvey, setActiveSurvey] = useState({});

    const carSurveyDefault = [
        {
            path: 1, survey: [
                {
                    type: 'MOTORCYCLIST', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_PERSONAL', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_DELIVERY', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_W-TRAILER-TRUCK', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_TRAILER-TRUCK', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_TOURING', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_TRACTOR', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CYCLIST', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
            ]
        },
        {
            path: 2, survey: [
                {
                    type: 'MOTORCYCLIST', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_PERSONAL', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_DELIVERY', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_W-TRAILER-TRUCK', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_TRAILER-TRUCK', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_TOURING', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_TRACTOR', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CYCLIST', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
            ]
        },
        {
            path: 3, survey: [
                {
                    type: 'MOTORCYCLIST', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_PERSONAL', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_DELIVERY', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_W-TRAILER-TRUCK', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_TRAILER-TRUCK', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_TOURING', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CAR_TRACTOR', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
                {
                    type: 'CYCLIST', directions: [
                        { direction: 'LEFT', ammount: 0 },
                        { direction: 'UPRIGHT', ammount: 0 },
                        { direction: 'RIGHT', ammount: 0 }
                    ]
                },
            ]
        }
    ];

    const isCounterActive = JSON.parse(localStorage.getItem('isCounterActive'));
    const handleCounterAction = (type, direction, path) => {
        const data = carSurveyDefault;
        const activeInterval = localStorage.getItem('ACTIVE_INTERVAL');
        if (type === 'END_INTERVAL') {
            setIntervalSurvey(prevState => [...prevState, { activeInterval, survey: [...data] }]);
        }
        else {
            return data.filter(itemPath => itemPath.path === path).map(itemSurvey => itemSurvey.survey.filter(itemType => itemType.type === type)).pop().map(itemDirections => itemDirections.directions.filter(itemDirection => itemDirection.direction === direction)).pop().map(itemAmmount => itemAmmount.ammount++);
        }
    }

    return (
        <section className='counter-app'>
            {isCounterActive ?
                <Counter
                    intervalSurvey={intervalSurvey}
                    setIntervalSurvey={setIntervalSurvey}
                    handleCounterAction={handleCounterAction}
                    setUpdatedStatus={props.setUpdatedStatus}
                    activeSurvey={activeSurvey}
                    setActiveSurvey={setActiveSurvey}
                    surveyResult={surveyResult}
                    setSurveyResult={setSurveyResult}
                    setSurveySpotStatus={setSurveySpotStatus}
                    currentUser={props.currentUser}
                />
                :
                <SurveySpot
                    setSurveySpotStatus={setSurveySpotStatus}
                    setActiveSurvey={setActiveSurvey}
                    inProgressUserMovies={props.inProgressUserMovies}
                    setSurveyResult={setSurveyResult}
                />}
        </section>
    );
};

export default Display;
