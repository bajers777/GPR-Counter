import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, runTransaction, doc, updateDoc } from "firebase/firestore/lite";
// Your web app's Firebase configuration
const app = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
});

// export const auth = app.auth();
export const db = getFirestore(app);
export const usersCollection = collection(db, 'users');
const testUser = 'LB';
const user = doc(db, 'users', testUser);

export async function handleDatabaseRequest(type, activeSurvey, updateType, updateData) {
    const inProgress = (await getDocs(collection(user, 'inProgress'))).docs.map(item => item.data());
    const surveyResult = JSON.parse(localStorage.getItem('SURVEY_RESULT'));
    try {
        switch (type) {
            case 'UPDATE_SURVEY':
                const inProgressDoc = doc(user, 'inProgress', activeSurvey.name);
                const completedDoc = doc(user, 'completed', activeSurvey.name);
                switch (updateType) {
                    case 'UPDATE_VALUE':

                        // try {
                        //     await runTransaction(db, async (transaction) => {
                        //         return transaction.update(inProgressDoc, { surveyResult });
                        //     })
                        // } catch (err) {
                        //     console.log(err);
                        // }
                        // return updateDoc(inProgressDoc, { surveyResult });
                        break;
                    case 'UPDATE_STATUS':
                        console.log(inProgressDoc);
                        return updateDoc(inProgressDoc, { status: updateData })
                        break;
                    default:
                        break;
                }
                break;
            case 'GET_DATA':
                return localStorage.setItem('ACTIVE_USER_MOVIES_LIST', JSON.stringify(inProgress));
            case 'PRINT_SURVEYS':
                break;
        }
    } catch (err) {
        console.log(err);
    }
}

export default app;