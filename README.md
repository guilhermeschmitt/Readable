## READABLE

Final evaluation project of the Redux course at [Udacity](https://www.udacity.com/), where it is possible to create a web application containing publications and comments. You can create new posts in pre-defined categories, comment on posts and vote on both. You can also delete and edit your comments/posts. To perform these functions, a [local development server](https://github.com/udacity/reactnd-project-readable-starter) is provided.

### Start the application

Clone, install and start the local server:
- Clone/Download the local [server](https://github.com/udacity/reactnd-project-readable-starter)
- In the server directory, run the following commands:
- npm install
- node server

Clone, install and start the front-end application:
 - To install and start the aplicação front-end, run the following commands in this directory:
 - npm install
 - npm start
 
### The application consists of:

#### Authed user

This application is anonymous, without authentication or authorization.However, an authenticated user schema has been implemented in the shared action. The AUTHED_ID is placed manually, and is only used to simulate an authenticated user in the system, from it the author of the comment / post is validated.


#### Comments

Comments are attached to the parent posts. Each comment is composed of: Author, body, publishing / editing time and votes received. A comment can only be edited and removed by its author. They are only displayed below the post, if the post is deleted, they will no longer be displayed.

#### Posts

Publications are composed of: Category, title, body, author, publication time and votes received. They are displayed in categories, individually or next to all available publications. Just like the comments, a post can only be edited and removed by the author.

#### Categories

Categories are simple objects containing a name and a URL path (usually the same string).The server has no methods to create/modify/delete these categories. If you want to add categories to your app, simply add the desired object to the Array in categories.js on the provided server.
