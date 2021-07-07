import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <main className="main">
            <Switch>
              <Route component={HomePage} exact path="/" />
            </Switch>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
