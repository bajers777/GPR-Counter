// import React from 'react';
// import IntervalCell from './table/IntervalCell';
// import IntervalResultCell from './IntervalResultCell';

// const IntervalCounter = props => {
//     const type = props.data.filter(item => item.path == props.pathValue).map(item => item.survey).map(item => item.map(item => item.type)).pop();
//     const intervalSurvey = props.data.filter(itemPath => itemPath.path == props.pathValue).map(itemSurvey => itemSurvey.survey).map(item => item.map(itemDirections => itemDirections)).pop();

//     return (
//         <tr>
//             <td className='result-table__body--interval'>
//                 {props.interval}
//             </td>
//             {intervalSurvey.map(item => <IntervalCell key={item.type} data={item.directions.filter(item => item.direction === props.filterOption).pop()} />)}
//         </tr>
//     )
// };

// export default IntervalCounter;
