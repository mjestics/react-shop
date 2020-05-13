import {createStructuredSelector} from 'reselect';
import {isCollectionsLoaded} from '../../redux/shop/shop.selectors';
import CollectionsOverview from './collections-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';
import {connect} from 'react-redux';
import {compose} from 'redux';


const mapStateToProps = createStructuredSelector({
    isLoading: state => !isCollectionsLoaded(state)
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionsOverview);

export default CollectionsOverviewContainer;