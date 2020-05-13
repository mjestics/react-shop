import {createStructuredSelector} from 'reselect';
import {isCollectionsLoaded} from '../../redux/shop/shop.selectors';
import CollectionPage from './collection.component';
import WithSpinner from '../with-spinner/with-spinner.component';
import {connect} from 'react-redux';
import {compose} from 'redux';


const mapStateToProps = createStructuredSelector({
    isLoading: state => !isCollectionsLoaded(state)
});

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionPage);

export default CollectionPageContainer;