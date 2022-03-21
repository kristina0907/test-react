import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import Header from "./components/Header/Header";
// Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Campaigns from "./pages/Campaigns/Campaigns";
import Configure from "./pages/Configure/Configure";


const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <div className="wrapper">
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/campaigns"component={Campaigns} />
                        <Route path="/configure"component={Configure} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
