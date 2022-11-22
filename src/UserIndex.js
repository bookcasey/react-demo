import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import User from './User';
import UserPosts from "./UserPosts";

export default function UserIndex() {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <nav>
        <li><NavLink to={url}>Profile</NavLink></li>
        <li><NavLink to={`${url}/posts`}>Posts</NavLink></li>
      </nav>
      <Switch>
        <Route path={`${path}/posts`}>
          <UserPosts />
        </Route>
        <Route path={path}>
          <User />
        </Route>
      </Switch >
    </div>
  );
}