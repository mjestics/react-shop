import React from 'react';

import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';

const CollectionsOverview = ({collections}) => (
    <div className='shop-page'>
        {
            collections.map(({id, ...other}) => (
                <CollectionPreview key={id} {...other}/>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);