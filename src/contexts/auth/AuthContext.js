import React from 'react'
import { db } from '../../firebase';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';

export const AuthCtx = React.createContext();
const surveyDatabaseRef = doc(collection(db, 'surveys'));

// async function handleDatabaseRequest(type, data) {
//     switch (type) {
//         case 'ADD':
//             return await setDoc(surveyDatabaseRef, data);
//         case 'PRINT':
//             console.log('test');
//             break;
//         // return await getDocs(collection(db, 'surveys')).res.docs.map(item => console.log(item.data()));
//     }
// }

const AuthContext = props => {

    return (
        <AuthCtx.Provider>
            {props.children}
        </AuthCtx.Provider>
    )
}

export default AuthContext;