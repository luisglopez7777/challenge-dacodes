
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../styles/App.css'
import Home from '../pages/Home'
import Character from '../pages/Character'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:characterId" component={Character} />
            </Switch>
        </BrowserRouter>

    );
}

export default App;