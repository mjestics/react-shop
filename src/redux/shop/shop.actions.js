import {ShopActionTypes} from './shop.types';
import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils';

export const updateCollections = (collections) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collections
});

const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(snapshot => {
            const map = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(map));
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
};