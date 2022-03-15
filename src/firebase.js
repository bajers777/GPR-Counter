import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, get, runTransaction, doc, updateDoc, getDoc, deleteDoc } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
export const app = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
});
export const db = getFirestore(app);
export const auth = getAuth(app);
export const userList = collection(db, 'users');

export const postData = async (type, activeSurvey, updateData, user) => {
    try {
        const inProgressDoc = doc(db, 'users', user, 'movies', activeSurvey.name);
        switch (type) {
            case 'UPDATE_VALUE':
                try {
                    await runTransaction(db, async (transaction) => {
                        return transaction.update(inProgressDoc, { surveyResult: updateData });
                    })
                } catch (err) {

                }

                break;
            case 'UPDATE_STATUS':

                return updateDoc(inProgressDoc, { status: updateData });

            default:
                break;
        }
    } catch (err) {

    }
}
export const getData = async (user) => {
    try {
        return (await getDocs(collection(doc(db, 'users', user), 'movies'))).docs.map(item => item.data());
    } catch (err) {

    }
}


export default app;

