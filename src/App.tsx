import * as React from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import { SpellBookComponent } from "./features/spellBook";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";

class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <Grid item={true} xs={12} style={{ padding: 20 }}>
                <Provider store={store}>
                    <Router>
                        <Route path="/" component={SpellBookComponent}/>
                    </Router>
                </Provider>
            </Grid>
        );
    }
}

export default App;
