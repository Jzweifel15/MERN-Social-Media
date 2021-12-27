# MERN-Social-Media
 A web application utilizing the MERN stack. MERN stands for MongoDB, Express, React, and Node.JS. This project is for learning purposes and is not my own. The tutorial for this project can be found on YouTube and was made by the YouTube JavaScript Mastery

## Frontend Dependencies Used
1. **axios**: used for making API requests
2. **moment**: MomentJS is a package for easily working with time and dates
3. **react-file-base64**: used to convert images
4. **redux**: a state container for our app
5. **react-redux**: this package is needed that will allow us to connection Redux with our React project
6. **redux-thunk**: used for asynchronous actions using Redux
7. **@material-ui/core** & **@material-ui/icons**: a popular UI kit used in conjunction with React; it allows us to create nice looking apps without a lot of styling
    - NOTE: Keep in mind that using a `.css` file or using a CSS framework (Bootstrap, SASS, etc.) for styling is still always an option when creating styles, even in conjunction with `@material-ui`

## Backend Dependencies Used
1. **body-parser**: gives us the ability to send `POST` requests
2. **cors**: enables Cross Origin Requests
3. **express**: a JavaScript framework that is used for the routing of the app
4. **mongoose**: allows us to easily create models
5. **nodemon**: used for refreshing the server whenever there is a change to the app, so we do not have to do it manually
6. **dotenv**: a package used for easier access to environment variables. This will typically be used when you're trying to hide sensitive data inside of a `.env` file, which you would then add the `.env` file to the `.gitignore` file
    1. If you're using the **React** framework for your frontend, the `react-scripts` package has the functionality that allows you to create any env variables that you'll need for your frontend, so no need to install `dotenv`. The only difference is that when naming our env variables, we have to start the name of the variables with `REACT_APP_`. This will notify `react-scripts` that it needs to look for that env variable inside of a `.env` file located somewhere inside the project