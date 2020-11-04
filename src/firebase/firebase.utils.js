import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB_0KFbNWxMJh1jxwuqHwSN2zzP2BMnpQg",
    authDomain: "react-shop-d1135.firebaseapp.com",
    databaseURL: "https://react-shop-d1135.firebaseio.com",
    projectId: "react-shop-d1135",
    storageBucket: "react-shop-d1135.appspot.com",
    messagingSenderId: "637086355075",
    appId: "1:637086355075:web:69e6e90fcfbdc5263115b6"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const userSnapShot = await userRef.get()

    if (!userSnapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt =  new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message)
        }
    }

    return userRef
}

// Firebase add batch data
// export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
//     const collectionRef = firestore.collection(collectionKey)
//     const batch = firestore.batch()

//     objectToAdd.forEach(obj => {
//         const newDocRef = collectionRef.doc()
//         batch.set(newDocRef, obj)
//     })

//     return await batch.commit()
// }

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase