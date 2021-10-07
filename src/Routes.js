import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./product";
import Add from "./add";
import Edit from "./edit";
import Detail from "./detail";

export default function Routes(props) {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div className="nav-link">
                <NavLink to="/" activeClassName="active" exact>
                  home
                </NavLink>
              </div>
              <div className="nav-link">
                <NavLink to="/product" activeClassName="active" exact>
                  Product
                </NavLink>
              </div>
              <div className="nav-link">
                <NavLink to="/add" activeClassName="active">
                  Add Product
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact>
        <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNykePOiTDzB8JZ-BssrgCFB3KF5xsYCGi-w&usqp=CAU"
      className="img-fluid"
      style={{ width: 1500 }}
    />
        </Route>
        <Route path="/product" exact>
          <Product {...props} />
        </Route>
        <Route path="/add">
          <Add onAdd={props.onAdd} />
        </Route>
        <Route path="/product/edit/:id">
          <Edit onUpdate={props.onUpdate} />
        </Route>
        <Route path="/product/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}
