import React from 'react';

//Components
import Navbar from './navigation/Navbar';
import Counter from './Counter';
import Result from './result/Result';

//Contexts
import IntervalContext from '../../contexts/interval/IntervalContext';
import SurveyContext from '../../contexts/survey/SurveyContext';

const CounterApp = () => {
    return (
        <IntervalContext>
            <SurveyContext>
                <section className='counter-app'>
                    <Navbar />
                    <Counter />
                    <Result />
                </section>
            </SurveyContext>
        </IntervalContext>
    );
};

export default CounterApp;
