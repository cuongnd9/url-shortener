import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-primary align-center mt-3 mb-5">URL Shortener</h1>
        <form>
          <div className="row no-gutters align-items-center">
            <div className="col">
              <input
                className="form-control form-control-lg form-control-borderless"
                type="search"
                placeholder="Enter your URL..."
              />
            </div>
            {/*end of col*/}
            <div className="col-auto">
              <button className="btn btn-lg btn-success" type="submit">
                Shorten
              </button>
            </div>
            {/*end of col*/}
          </div>
        </form>
      </div>
    );
  }
}

export default App;
