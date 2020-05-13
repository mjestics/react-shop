import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {connect} from 'react-redux';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {createStructuredSelector} from 'reselect';
import {isCollectionsLoaded} from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    componentDidMount() {
        this.props.fetchCollectionsStartAsync();
    }

    render() {
        const {match, isCollectionLoaded} = this.props;
        return (<div className='shop-page'>
                <Route exact
                       path={`${match.path}`}
                       render={(props) => <CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded} {...props}/>}
                />
                <Route path={`${match.path}/:collectionId`}
                       render={(props) => <CollectionsPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>}
                />
            </div>
        )
    };
};

const mapStateToProps = createStructuredSelector({
    isCollectionLoaded: isCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);