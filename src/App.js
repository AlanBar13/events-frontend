import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'

import HomeScreen from "./screens/HomeScreen";
import CalendarScreen from "./screens/CalendarScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomeScreen}></Route>
      <Route path="/calendar" component={CalendarScreen}></Route>
      <Route path="/login" component={LoginScreen}></Route>
      <Route path="/profile" component={ProfileScreen}></Route>
    </Router>
  );
}

export default App;
