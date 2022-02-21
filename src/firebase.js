import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, get, runTransaction, doc, updateDoc, getDoc, deleteDoc } from "firebase/firestore/lite";
// Your web app's Firebase configuration
const app = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
});

export const db = getFirestore(app);
const testUser = 'LB';
const user = doc(db, 'users', testUser);

export const postData = async (type, activeSurvey, updateData) => {

    const activeItemSurveyResult = JSON.parse(localStorage.getItem('ACTIVE_SURVEY'));
    try {
        const inProgressDoc = doc(user, 'movies', activeSurvey.name);
        switch (type) {
            case 'UPDATE_VALUE':
                try {
                    await runTransaction(db, async (transaction) => {
                        return transaction.update(inProgressDoc, { surveyResult: activeItemSurveyResult });
                    })
                } catch (err) {

                }
                // return updateDoc(inProgressDoc, { survey: surveyResult });

                break;
            case 'UPDATE_STATUS':
                // 
                // return updateDoc(inProgressDoc, { status: updateData })
                break;
            default:
                break;
        }
    } catch (err) {

    }
}

export const getData = async (type) => {
    try {
        const moviesList = (await getDocs(collection(user, 'movies'))).docs.map(item => item.data())
        switch (type) {
            case 'inprogress':
                return localStorage.setItem('ACTIVE_USER_MOVIES_LIST', JSON.stringify(moviesList));
            case 'completed':
                const completedList = moviesList.filter(item => item.status);

                return localStorage.setItem('ACTIVE_USER_COMPLETED_LIST', JSON.stringify(completedList));
            default:
                break;
        }

    } catch (err) {

    }
}

export default app;

