import React, { useContext } from 'react';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
//components
import DataModule from './DataModule';
//contexts
import { SidebarCtx } from '../../contexts/sidebar/SidebarContext';
import { AuthCtx } from '../../contexts/auth/AuthContext';
import './User.scss';
const User = props => {
    const { userMoviesList, currentUser } = props;
    const { isSidebarActive } = useContext(SidebarCtx);
    const { logout } = useContext(AuthCtx);

    const allMoviesList = userMoviesList.length;
    const inProgressMoviesList = userMoviesList.filter(item => !item.status).length;
    const doneMoviesList = userMoviesList.filter(item => item.status).length;

    return (
        <>
            {isSidebarActive &&
                <div className='user'>
                    {currentUser &&
                        <div className="user__header">
                            <div className="user__header--avatar">
                                <b>{currentUser.userShortName}</b>
                            </div>
                            <div className="user__header--user-info">
                                <b>{currentUser.userLongName}</b>
                                <button onClick={logout} className='secondary-btn'>
                                    <b>Wyloguj</b>
                                </button>
                            </div>
                        </div>
                    }
                    <div className="user__body">
                        <DataModule headline={'Wszystkie'} type={'data-neutral'} data={allMoviesList} />
                        <DataModule headline={'W trakcie'} type={'data-inprogress'} data={inProgressMoviesList} />
                        <DataModule headline={'Zakończone'} type={'data-done'} data={doneMoviesList} />
                    </div>
                </div>

            }
        </>
    )
}

export default User