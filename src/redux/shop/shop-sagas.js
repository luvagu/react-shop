import { takeEvery, all, call, put } from 'redux-saga/effects'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import shopActionTypes from './shop-types'
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop-actions'

export function* fetchCollectionsAsync() {
    try {

        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
        
    } catch (err) {
        yield put(fetchCollectionsFailure(err.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(
        shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}