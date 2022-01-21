import React, { useEffect, useReducer } from 'react';
import Result from './Components/Result/Result';
import Counter from './Components/Counter/Counter';

const reducer = (state, action) => {
  state.forEach(pathItem => {
    //search in state array proper path value that user clicked
    if (pathItem.path === action.path) {
      //if it correct search for proper index of clicked key
      //searching all array with 'path: x' value. Array contains object with structure: {type: 'CAR_PERSONAL', directions: Array(3)}
      const carTypeIndex = pathItem.survey.map(item => item.type).indexOf(action.type); //get array id 
      pathItem.survey[carTypeIndex].directions.forEach(carSurveyValue => {
        //searching proper type e.q key 'q' responds 'CAR_PERSONAL' type and increase right value
        if (carSurveyValue.direction === action.direction) {
          carSurveyValue.ammount++;
        }
      });
    }
  })
  return state;
}

const App = () => {
  const [carSurvey, dispatch] = useReducer(reducer, [
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
      ]
    },
    {
      path: 3, survey: [
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
      ]
    },
  ]);
  return (
    <>
      <Counter dispatch={dispatch} />
      <Result data={carSurvey} />
      <button onClick={() => console.log(carSurvey)}>Pokaż pomiary</button>
    </>
  )
}
export default App
