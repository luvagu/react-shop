import shopActionTypes from './shop-types'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsStartAsync = () => {
    return (dispatch) => {
        const collectionRef = firestore.collection('collections')

        dispatch(fetchCollectionsStart())

        // Observable patern
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }, (err) => dispatch(fetchCollectionsFailure(err.message)))

        // Promise patern
        // collectionRef.get().then(snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        //     dispatch(fetchCollectionsSuccess(collectionsMap))
        // }).catch(err => dispatch(fetchCollectionsFailure(err.message)))
    }
}

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = (errMessage) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errMessage
})