import React from 'react';

class ArchitectNextSteps extends React.Component {

    render() {
        return(
            <div class="card">
            <div class="px-3 py-3">
                <div class="pb-2" id="card-header">
                    <h4><b>Congratulations!</b></h4> 
                </div>
                <div class="card-content">
                    <p>You've deployed your app locally. Now what?</p>
                    <ul>
                        <li>Deploy your app to the cloud via Architect</li>
                        <ul>
                            <li>Create an account at <a target={"_blank"} href="https://cloud.architect.io/signup">architect.io</a></li>
                            <li>Login from the CLI via <kbd>$ architect login</kbd></li>
                            <li>Register all your components created from the <kbd>init</kbd> command by running <kbd>$ architect register</kbd> in both the front-end folder and back-end folder</li>
                            <li>Go to the components page and deploy the app!</li>
                        </ul>
                        <li>Check out Hot-reloading</li>
                        <ul>
                            <li>Go to react/src/App.js in your project folder and open it.</li>
                            <li>Update the subtitle <kbd>“Favorite Horror Movies”</kbd> to <kbd>“&lt;Your name&gt;’s Favorite movies”</kbd></li>
                            <li>The app will automatically apply the new changes!</li>
                            <li>For additional information, check out our <a target={"_blank"} href="https://docs.architect.io/">docs</a>.</li>
                        </ul>
                    </ul>
                </div>
            </div>
            </div>
        )
    }
}

export default ArchitectNextSteps;