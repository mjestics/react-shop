import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSingUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({user })
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth && this.unsubscribeFromAuth();
    }

    render() {
        console.log(this.state.user);
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/shop' component={ShopPage}/>
                        <Route path='/signin' component={SignInSingUp}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
