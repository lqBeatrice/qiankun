import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

const About = () => {
  return <h3>About</h3>
}

const Inbox = () =>
  <div>
    <h2>Inbox</h2>
  </div>

const App1 = () =>
  <div>
    <h2>App</h2>
  </div>

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "";
console.log(BASE_NAME)
function App() {
  return (
    <div className="App">
      这是qq
      <Router basename={BASE_NAME}>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/ass">App</Link></li>
        </ul>
        <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox} />
        <Route path="/ass" component={App1} />
      </Router>
    </div>
  );
}

export default App;
