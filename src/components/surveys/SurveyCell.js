import React, { useContext } from 'react';
//icons
import { SurveyDone, SurveyEnd, SurveyDownload } from '../../assets/icons/icons';
const SurveyCell = props => {

    const { name, date, status, link, handleChangeStatusButton, handleModalVisibility } = props;

    return (
        <>
            <p className='survey__row--name'>{name}</p>
            <p className='survey__row--date'>{date}</p>
            <p className='survey__row--status'>{status ? <span style={{ color: 'hsl(120, 100%, 36%)' }}>Pomiar zakończony</span> : <span style={{ color: 'hsl(0, 100%, 36%)' }}>W trakcie pomiaru</span>}</p>
            <div className="survey__row--buttons">

                {status ?
                    <button data-type='survey-result' onClick={handleModalVisibility}>
                        <SurveyDone fill='hsl(235, 21%, 21%))' />
                    </button>
                    :
                    <button onClick={handleChangeStatusButton}>
                        <SurveyEnd fill='hsl(235, 21%, 21%)' />
                    </button>

                }
                <button onClick={() => window.open(link)}>
                    <SurveyDownload fill='hsl(235, 21%, 21%)' />
                </button>

            </div>
        </>
    )
}


export default SurveyCell