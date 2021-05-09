# ToDoList Web App

Version 1.0

by Aleksandar Petrovic

-Frontend (www) - React (Create React App) with materialize.css
-Backend (api) - Node.js Express.js Caddy

- Dockerfile within "api" folder creates backend with Node.js and Express.js
- Dockerfile within "www" folder creates image with node.js, builds project and than share folder build to Caddy image
- Dockerfile within "caddy" starts Caddy server

"docker-compose up --build" will start MongoDB, frontend and backend, and install needed dependencies

Check project at http://127.0.0.1:8080
