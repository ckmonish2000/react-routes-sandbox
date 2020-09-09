import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/shop">Shop</Link>{" "}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
