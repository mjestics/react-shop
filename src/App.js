import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Redirect, Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSingUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {connect} from 'react-redux';
import {checkUserSession} from './redux/user/user.actions';
import CheckoutPage from './pages/checkout/checkout.component';
import {selectCollectionsForPreview} from './redux/shop/shop.selectors';

class App extends React.Component {

    componentDidMount() {
        const {checkUserSession} = this.props;
        checkUserSession();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/checkout' component={CheckoutPage}/>
                    <Route
                        exact
                        path='/signin'
                        render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInSingUp/>)}
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    collectionsArray: selectCollectionsForPreview(state)
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
