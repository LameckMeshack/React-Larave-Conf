import React from "react";
import ReactDOM from "react-dom";
function MyApp() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2>I am react app</h2>
                </div>
            </div>
        </div>
    );
}
export default MyApp;
if (document.getElementById("app")) {
    ReactDOM.render(<MyApp />, document.getElementById("app"));
}
