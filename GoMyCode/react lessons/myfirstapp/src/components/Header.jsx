import React from "react";
const Header = () => {
  return (
    <div>
      <header>
        <table className="stats">
          <tbody>
            <tr>
              <td>Players:</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Total Points:</td>
              <td>276</td>
            </tr>
          </tbody>
        </table>
        <h1>scoreboard</h1>
      </header>
    </div>
  );
};

export default Header;
