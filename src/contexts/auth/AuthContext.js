import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';

export const AuthCtx = React.createContext();


const AuthContext = props => {
    const [currentUser, setCurrentUser] = useState({});
    const [isUserLogged, setUserStatus] = useState(false);
    const [loginErr, setError] = useState('');
    const navigate = useNavigate();

    const login = async data => {
        try {
            const user = await signInWithEmailAndPassword(auth, data.email, data.password);
            setUserStatus(prevState => !prevState);
            localStorage.setItem('uid', user.user.uid);
            navigate('/counter-app');
            return user;
        }
        catch (err) {
            if (err.message.includes('auth/wrong-password') || err.message.includes('auth/user-not-found')) {
                setError('auth/wrong-data');
            } else if (err.message.includes('auth/too-many-requests')) {
                setError('auth/too-many-requests');
            }
        }
    }

    const logout = async () => {
        await signOut(auth);
        setUserStatus(prevState => !prevState);
        localStorage.removeItem('uid');
        return navigate('/');
    }
    const value = {
        currentUser,
        setCurrentUser,
        isUserLogged,
        login,
        logout,
        loginErr,
        setError
    };

    useEffect(() => {
        const isLogged = localStorage.getItem('uid');
        if (isLogged === null) {
            return setUserStatus(false);
        }
        return setUserStatus(true);
    }, [])
    return (
        <AuthCtx.Provider value={value}>
            {props.children}
        </AuthCtx.Provider>
    )
}

export default AuthContext;