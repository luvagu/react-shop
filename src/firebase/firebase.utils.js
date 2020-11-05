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
    const userSnapshot = await userRef.get()

    if (!userSnapshot.exists) {
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

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformCollection = collections.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title: title,
            items
        }
    })

    return transformCollection.reduce((ac, collection) => {
        ac[collection.title.toLowerCase()] = collection
        return ac
    }, {})
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

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe()
            resolve(userAuth)
        }, reject)
    })
}

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase