# Github History

This project shows the commits history of this very git repository. To run locally please follow the instructions below:

## Pre-requisites:

For this application to ever work you must install [NodeJs](https://nodejs.org/es/). Follow the instructions found [here](https://nodejs.org/es/download/).

Minimum Version should be 14


## Step 1: Install dependencies

Open 2 terminals in the root of the repository. In one terminal inside the root of the repository please run 

### `npm i` 

Then use the other terminal to run 

### `cd backend`

Being in the second terminal please run 

### `npm i`

## Step 2: Create a GitHub personal token

Follow the instruction here https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token 

Make sure to check this field when creating your personal token
![image](https://user-images.githubusercontent.com/5615224/119268331-1378ea00-bbb8-11eb-858a-1cfc9fb12d16.png)


## Step 3: Create a .env file

Use your ide or file explorer to enter the `backend` folder, being inside thsi directory create a `.env` like this:

![image](https://user-images.githubusercontent.com/5615224/119286091-3384c980-bc09-11eb-830a-ade17e26399c.png)

Once this files is created please put the following line inside of it:

### `TOKEN=**********`

The value of the TOKEN variable should be the token you created in the step before this one

## Step 4: Run the backend

In the terminal where you installed the back end dependencies, you need to run 

### `npm start`

This command will compile the typescript files and will connect start the server as well

## Step 5: Run the front-end application

In the terminal at the root of the repository you need to run 

### `npm start` or `yarn start`

This will start compiling the React application and start the server to be open in the browser, it will use the last browser window you interacted with.

# Further information

This application will automatically update the latest commits made to this repository by default, if you want to connect another repo you will have to do the following:

## Step 1: Change the repository history URL

Inside the `/backend/socket/index.ts` you will find the line 
#### `const REPO_URL = 'https://api.github.com/repos/davidzas/github-history/commits';`

Change the `REPO_URL` varaible for your own where 
#### `https://api.github.com/repos/{REPOSITORY_OWNER_USERNAME}/{REPOSITORY_NAME}/commits`

This way you will have the ability to connect to another repo and watch in real-time its commit history
