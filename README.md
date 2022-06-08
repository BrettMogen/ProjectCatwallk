# Project Catwalk

The purpose of this project was to rebuild an outdated client-facing retail web-portal. Team SamWise was hired by the original website owners to do a complete overhaul of both the front-end and server side code over the course of 2-3 weeks.

## Sections View

### Overview
![](/images/Overview.jpeg)

### Questions and Answers
![](/images/QuestionsandAnswers.jpeg)

### Ratings and Reviews
![](/images/RatingsandReviews.jpeg)

## Getting Started
### Prerequisites

Requirements for the software and other tools to build, test, and push:
- [node](https://nodejs.org/en/)
- [npm](https://docs.npmjs.com/cli/v7/configuring-npm/install)

### Installing

First, install node/npm by following the links in the Prerequisites section above.

To make sure you have the same version of node installed (v14.18.0) that was used in this project, run the following command:

    node -v
    
Next, install all the dependencies included in package.json by running the following command:
    
    npm install
    
Next, create a file titled **'config.js'** in the main directory. Inside this file, copy and save the following code: 

    module.exports = {
    TOKEN: 'YOUR_TOKEN_HERE',
    URL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-den'
    }
    
Next, you will need to create your own Personal Access Token. To do this, navigate [**here**](https://github.com/settings/tokens).
Click the button labled **Generate new token**.

![](/images/GenerateTokenStep1.jpeg)

Give the Token a Description ("Project Catwalk", or whatever is most descriptive to you).

![](/images/GenerateTokenStep2.jpeg)

Under Select Scopes, select the following:
- read:org
- user
- read:user
- user:email
- user:follow

![](/images/GenerateTokenStep3.jpeg)

Click the **Generate Token** button, found towards the botton of the page.

![](/images/GenerateTokenStep4.jpeg)

Once your **Personal Access Token** has been created, copy it and replace the YOUR_TOKEN_HERE text within the object contained in your **config.js** file.
Save this file.

![](/images/GenerateTokenStep5.jpeg)
    
Next, run the following command to run webpack and transpile the .jsx code:
    
    npm run react-dev
    
Next, get the node server up and running with the following command:
    
    npm run start
    
Finally, open your browser, select your address bar, and enter:
    
    localhost:3000
    
## Authors

- [**Zach Fry**](https://github.com/ZachFry98) - *Created the Overview Components*

- [**Prith Jaganathan**](https://github.com/prith98) - *Created the Questions and Answers Components*

- [**Brett Mogen**](https://github.com/BrettMogen) - *Created the Ratings and Reviews Components*

## Acknowledgements

- Team SamWise
- Hack Reactor
- DEN16
- [Neil Mosser](https://github.com/NeilMosser)
- [Benjamin Cunningham](https://github.com/my-name-is-ben)
