import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAkR3NDKEi_lyGbtqVFcFNEmefxkyAZN7w",
    authDomain: "crown-db-3b7f9.firebaseapp.com",
    databaseURL: "https://crown-db-3b7f9.firebaseio.com",
    projectId: "crown-db-3b7f9",
    storageBucket: "crown-db-3b7f9.appspot.com",
    messagingSenderId: "361298804349",
    appId: "1:361298804349:web:7fdae502e8e88776ab7b14"

}
 



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log("error creating user", error.message)
        }
    }

    // console.log(userRef)
    return userRef;
}


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;

