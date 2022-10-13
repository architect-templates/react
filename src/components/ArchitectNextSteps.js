import React from 'react';

class ArchitectNextSteps extends React.Component {

    render() {
        return(
            <div className="card">
                <div id="card-header">
                    <h4><b>Congratulations!</b></h4>
                </div>
                <div className="card-content">
                    <p>You've deployed your app locally. Now what?</p>
                    <p>Below are additional steps you can try out with your newly deployed <a target={"_blank"} rel="noreferrer" href='https://docs.architect.io/tutorial/create-component/'>component</a>.</p>
                    <ul>
                        <li>Check out Hot-reloading</li>
                            <ul>
                                <li>Go to <kbd>react/src/App.js</kbd> in your project folder and open it.</li>
                                <li>Uncomment line 9 to show the h1 tag, and save the file.</li>
                                <li>The app will automatically apply the new changes! For more info, checkout out our <a target={"_blank"} rel="noreferrer" href="https://docs.architect.io/">docs</a>.</li>
                            </ul>
                        <li>Deploy your app to the cloud via Architect <b>(Recommended)</b></li>
                            <ul>
                                <li>Create an account at <a target={"_blank"} rel="noreferrer" href="https://cloud.architect.io/signup">architect.io</a></li>
                                <li>Login from the CLI via <kbd>architect login</kbd></li>
                                <li>Register this component created from the <kbd>init</kbd> command by running <kbd>architect register</kbd></li>
                                <li>Go to the components page and deploy the app!</li>
                            </ul>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ArchitectNextSteps;

