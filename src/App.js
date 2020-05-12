import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Redirect, Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSingUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {addCollectionAndDocuments, auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import CheckoutPage from './pages/checkout/checkout.component';
import {selectCollectionsForPreview} from './redux/shop/shop.selectors';

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser, collectionsArray} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    console.log('snapshot: %O', snapshot);
                    setCurrentUser({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            } else {
                setCurrentUser(null);
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth && this.unsubscribeFromAuth();
    }

    render() {
        // console.log('app render user %O', this.state.currentUser);
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
    setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
