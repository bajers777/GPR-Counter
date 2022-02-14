import React, { createContext, useState } from "react";


export const SurveyCtx = React.createContext();


const SurveyContext = props => {
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

    const [intervalSurvey, setIntervalSurvey] = useState([]);
    const [surveyCounter, setSurveyCounter] = useState(carSurveyDefault);
    const [surveyResult, setSurveyResult] = useState([]);
    const [surveySpot, setSurveySpot] = useState();
    const [isSurveySpotSet, setSurveySpotStatus] = useState(false);
    return (
        <>
            <SurveyCtx.Provider
                value={[intervalSurvey, setIntervalSurvey, surveyCounter, setSurveyCounter, carSurveyDefault, surveyResult, setSurveyResult, surveySpot, setSurveySpot, isSurveySpotSet, setSurveySpotStatus]}
            >
                {props.children}
            </SurveyCtx.Provider>
        </>
    );
};

export default SurveyContext;
