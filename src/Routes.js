import React, { lazy } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import ProtectRoute from './globals/hoc/ProtectRoute';

const PageOne = lazy(() => import("./components/PageOne/PageOne"));
const PageTwo = lazy(() => import("./components/PageTwo/PageTwo"));
const PageThree = lazy(() => import("./components/PageThree/PageThree"));

const Routes = props => (
    <main>
        <Switch>
            <Route path="/page-one" exact render={() => <PageOne {...props} />} />
            <Route
                path="/page-two"
                exact
                render={() => <PageTwo {...props} />}
            />
            <Route
                path="/page-three"
                exact
                render={() => <PageThree {...props} />}
            />
            <Route path="/" render={() => <PageOne {...props} />} />
        </Switch>

    </main>
);

export default withRouter(ProtectRoute(Routes));