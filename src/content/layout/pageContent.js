import Login from "../authen/loginCreen"
import Dashboard1 from "../dashboard/dashboard1"
import Dashboard2 from "../dashboard/dashboard2"

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

const PageContent = () => {
    return (
      <div>
        <Router>
            {/* page content */}
            <Switch>
              {/* <Route path="/" exact component={DashBoard} ></Route> */}
              <Route path="/" exact component={Login} ></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/dash1" exact component={Dashboard1}></Route>
              <Route path="/dash2" exact component={Dashboard2}></Route>
              <Redirect to="/"></Redirect>
            </Switch>
        </Router>
      </div>
    )
}

export default PageContent;
