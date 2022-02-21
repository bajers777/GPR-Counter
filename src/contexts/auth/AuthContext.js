import React from 'react'
import { db } from '../../firebase';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';

export const AuthCtx = React.createContext();
const surveyDatabaseRef = doc(collection(db, 'surveys'));

// async function postData(type, data) {
//     switch (type) {
//         case 'ADD':
//             return await setDoc(surveyDatabaseRef, data);
//         case 'PRINT':
//             'test');
//             break;
//         // return await getDocs(collection(db, 'surveys')).res.docs.map(item => item.data()));
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