import React, { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { store } from "../../store/store";

const App: FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
