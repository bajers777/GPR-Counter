// import React from 'react';
// import HourCell from './table/HourCell';
// import IntervalRow from './table/IntervalRow';


// const IntervalResult = props => {
//     //props: {id: 2, data: Array(4), pathValue: 1, filterOption: 'UPRIGHT'}
//     //props.data:
//     //0: {survey: Array(3), activeInterval: ':00 - :15'}
//     // 1: {survey: Array(3), activeInterval: ':15 - :30'}
//     // 2: {activeInterval: ':30 - :45', survey: Array(3)}
//     //     {activeInterval: ':45 - 00', survey: Array(3)}
//     // activeInterval: ":45 - 00"
//     // survey: Array(3)
//     // 0:
//     // path: 1
//     // survey: Array(8)
//     // 0: {type: 'MOTORCYCLIST', directions: Array(3)}
//     // 1: {directions: Array(3), type: 'CAR_PERSONAL'}
//     // 2: {type: 'CAR_DELIVERY', directions: Array(3)}
//     // 3: {directions: Array(3), type: 'CAR_W-TRAILER-TRUCK'}
//     // 4: {type: 'CAR_TRAILER-TRUCK', directions: Array(3)}
//     // 5: {type: 'CAR_TOURING', directions: Array(3)}
//     // 6: {directions: Array(3), type: 'CAR_TRACTOR'}
//     // 7: {directions: Array(3), type: 'CYCLIST'}

//     //const type = props.data.filter(item => item.path == props.pathValue).map(item => item.survey).map(item => item.map(item => item.type)).pop();
//     // const intervalSurvey = props.data.survey.filter(itemPath => itemPath.path == props.pathValue).map(itemSurvey => itemSurvey.survey).map(item => item.map(itemDirections => itemDirections)).pop();
//     //
//     return (
//         // <>
//         //     <HourCell key={props.id} id={props.id} />
//         //     {/* <IntervalCell /> */}
//         //     {props.data.map(item => {
//         //         const intervalSurvey = item.survey.filter(itemPath => itemPath.path == props.pathValue).map(itemSurvey => itemSurvey.survey).map(item => item.map(itemDirections => itemDirections)).pop();
//         //         return (
//         //             <tr>
//         //                 <td className='result-table__body--interval'>
//         //                     {item.activeInterval}
//         //                 </td>

//         //                 {intervalSurvey.map(item => <IntervalCell key={item.type} data={item.directions.filter(item => item.direction === props.filterOption).pop()} />)}

//         //             </tr>
//         //         )
//         //     })}
//         // </>
//         <>
//             <tr>
//                 <td className='result-table__body--interval'>
//                     {props.data[0].activeInterval}
//                 </td>
//                 {/* {props.data} */}
//                 {/* <td className='result-table__body--cell'>
//                     {props.data.ammount}
//                 </td> */}
//             </tr>
//         </>
//     )
// }
// //<IntervalCell key={item.type} data={item.directions.filter(item => item.direction === props.filterOption).pop()} />
// export default IntervalResult