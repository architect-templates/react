import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const next_steps = { 
	header: "Next Steps",
	content: `
	Congratulations! Your App is deployed locally. Now what?

	You can deploy your app to the cloud through Architect.

	- Create an account at architect.io
	- Login from the CLI via $architect login
	- Register all your components created from the init command by running $ architect register
		in both the front-end folder and back-end folder
	- Go to the components page and deploy the app!`
}

const hot_reloading = {
	header: "Check out Hot-reloading",
	content: `
		Hot-reloading allows you to make real-time changes to your app. Let's try it out! \r\n
		- Go to react/src/App.js in your project folder and open it.
		- Update the subtitle “Favorite Horror Movies” to “<Your name>’s Favorite movies”\r\n
		The app will automatically apply the new changes!

		For additional information, check out our docs: 
		https://docs.architect.io/components/local-configuration/#hot-reloading`
}

class NextStepAccordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    render() {
        const { items } = this.props;
        return(
            <Accordion className="p-3 mb-4" defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{next_steps.header}</Accordion.Header>
                    <Accordion.Body>
                      <pre>{next_steps.content}</pre>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>{hot_reloading.header}</Accordion.Header>
                    <Accordion.Body>
                      <pre>{hot_reloading.content}</pre>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
        )
    }
}

export default NextStepAccordion;