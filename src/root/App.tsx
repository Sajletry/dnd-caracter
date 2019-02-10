import * as React from 'react';
import {Provider} from "react-redux";
import {store} from "../store/index";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";

import {MainScene} from "../scenes/main";
import {SpellBookComponent} from "../scenes/spellBook";

class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <Grid item={true} xs={12} style={{padding: 20}}>
                <Provider store={store}>
                    <Router>
                        <Switch>
                            <Route exact={true}  path="/" component={MainScene}/>
                            <Route path="/allSpells" component={SpellBookComponent}/>
                        </Switch>
                    </Router>
                </Provider>
            </Grid>
        );
    }
}

export default App;
