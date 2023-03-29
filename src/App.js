import {Switch, Route} from 'react-router-dom'
import LanguageLandingPage from './components/LanguageLandingPage'
import AboutUs from './components/AboutUsPage'
import './App.css'

const App = () => (
  <Switch>
    <Route path="/" component={LanguageLandingPage} />
    <Route exact path="/about" component={AboutUs} />
  </Switch>
)

export default App
