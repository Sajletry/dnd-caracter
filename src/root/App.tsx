import * as React from 'react';
import {Provider} from "react-redux";
import {store} from "../store/index";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";

import {MainPage} from "../features/mainPage";
import {SpellBook} from "../features/spellBook";
import {CharacterClasses} from "../features/characterClasses";
import { AvailableCharacters } from "../features/availableCharacters";

class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <Grid item={true} xs={12} style={{padding: 20}}>
                <Provider store={store}>
                    <Router>
                        <Switch>
                            <Route exact={true}  path="/" component={MainPage}/>
                            <Route path="/allSpells" component={SpellBook}/>
                            <Route path="/characterClasses" component={CharacterClasses}/>
                            <Route path="/availableCharacters" component={AvailableCharacters}/>
                        </Switch>
                    </Router>
                </Provider>
            </Grid>
        );
    }
}

export default App;
