import React, { useContext, useEffect, useState } from 'react';
//contexts
import { SidebarCtx } from './contexts/sidebar/SidebarContext';
//components
import Display from './components/counter/Display';
import Survey from './components/surveys/Survey';
import Request from './components/request/Request';
import User from './components/user/User';
//database
import { getData, userList } from './firebase';
import Dashboard from './components/dashboard/Dashboard';
import { getDocs } from 'firebase/firestore/lite';
import { AuthCtx } from './contexts/auth/AuthContext';
import { Navigate, useNavigate } from 'react-router';

const CounterApp = props => {
    const { activePill, setActivePill } = useContext(SidebarCtx);
    const { isUserLogged } = useContext(AuthCtx);
    const [intervalSurvey, setIntervalSurvey] = useState([]);
    const [isUpdated, setUpdatedStatus] = useState(false);
    const [userMoviesList, setUserMoviesList] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const userId = localStorage.getItem('uid');
    const navigate = useNavigate();


    const handleDisplayShow = () => {
        switch (activePill) {
            case 'app':
                return <Display
                    intervalSurvey={intervalSurvey}
                    setIntervalSurvey={setIntervalSurvey}
                    inProgressUserMovies={[...userMoviesList].filter(item => !item.status)}
                    setUpdatedStatus={setUpdatedStatus}
                    activePill={activePill}
                    currentUser={currentUser}
                />
            case 'survey':
                return <Survey
                    userMoviesList={userMoviesList}
                    currentUser={currentUser}
                />
            case 'dashboard':
                return <Dashboard />
            case 'request':
                return <Request />
            default:
                break;
        }
    }
    useEffect(() => {
        if (!isUserLogged) {
            return navigate('/');
        }
    }, [isUserLogged])

    useEffect(async () => {

        const users = (await getDocs(userList)).docs.map(item => item.data());
        const userShortName = users.filter(item => item.uid === userId).pop().username;
        const userLongName = users.filter(item => item.uid === userId).pop().name;
        setCurrentUser({ userShortName, userLongName });
        setUserMoviesList(await getData(userShortName));
    }, [])
    return (
        <section className='display'>
            {handleDisplayShow()}
            <User userMoviesList={userMoviesList} currentUser={currentUser} />

        </section>
    );
};

export default CounterApp;
