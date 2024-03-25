// Importing necessary modules and components
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css'; // Importing custom CSS for styling

// App component definition
const App = () => {
    return (
        <Router>
            <div className="app-container">
                <header className="header">
                    <h1 className="logo">My Travel App</h1>
                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
                            <li className="nav-item"><a href="/signup" className="nav-link">Signup</a></li>
                        </ul>
                    </nav>
                </header>
                <main className="main-content">
                    <Switch>
                        {/* Route for the Home page */}
                        <Route exact path="/" component={Home} />
                        
                        {/* Route for the Login page */}
                        <Route path="/login" component={Login} />
                        
                        {/* Route for the Signup page */}
                        <Route path="/signup" component={Signup} />
                    </Switch>
                </main>
                <footer className="footer">
                    <p>&copy; 2024 My Travel App. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
};

// Exporting the App component as the default export
export default App;
