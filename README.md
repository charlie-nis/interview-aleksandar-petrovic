#ToDoList Web App by Aleksandar Petrović
Version 1.0

-Frontend (www) - React (Create React App) with materialize.css
-Backend (api) - Node.js Express.js Caddy

Dockerized

Dockerfile within api folder creates backend with Node.js and Express.js
Dockerfile within www folder creates caddy server and copies www/build folder to srv folder in Caddy image (if you change source dont forget to run "npm run build" command in www folder)

"docker-compose up --build" will start MongoDB, frontend and backend, and install needed dependencies

Check project at http://127.0.0.1:8080
