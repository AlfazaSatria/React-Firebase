import React from "react";
import routes from "./routes";
import {Link} from "react-router-dom";

const Header = () => (
    <ul className="nav">
        {routes.map((routes, i) => (
            <li key = {i}>
                <Link to = {routes.path}>{routes.name}</Link>
            </li>
        ))}
    </ul>
);

export default Header;