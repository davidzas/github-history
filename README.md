# Github History

This project shows the commits history of this very git repostory. In order to run locally please follow the instructions below:


## Step 1: Install dependencies

Open 2 terminals in the root of the repository. In one terminal inside the root of the repository please run 

### `npm i` 

Then use the other terminal to run 

### `cd backend`

Being in the second terminal please run 

### `npm i`

## Step 2: Create a github personal token

Follow the instruction here https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token 

## Step 3: Create a .env file

In the second terminal where you installed the backend dependencies, please create a new file called `.env` This way you can set the following environment variable:

### `TOKEN=**********`

The value of the TOKEN variable should be the token you created in the step before this one

## Step 4: Run the backend

In the terminal where you installed the back end dependencies you need to run 

### `npm start`

This command will compile the typescript files and will connect start the server as well

## Step 5: Run the front-end application

In the terminal at the root of the repository you need to run 

### `npm start` or `yarn start`

This will start compiling the React application and start the server to be open in the browser, it will use the last browser window you interacted with.

# Further information

This application will automatically update the latests commits made to this repository by default, if you want to connect another repo you will have to do the following:

## Step 1: Change the repository history url

Inside the `/backend/socket/index.ts` you will find the line 
#### `const REPO_URL = 'https://api.github.com/repos/davidzas/github-history/commits';`

Change the `REPO_URL` varaible for your own where 
#### `https://api.github.com/repos/{REPOSITORY_OWNER_USERNAME}/{REPOSITORY_NAME}/commits`

This way you will have the ability to connect to another repo and watch in real time its commit history