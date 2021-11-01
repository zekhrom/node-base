# node-base

## node.js docker webapp + mongodb connection

##### node API to manage 'Tasks'



**API List:**

**Get all Tasks:** 
  ```GET:'v1/task/all'  ```

**Get Task by Id:** 
  ```GET:'v1/task/:id'  ```

**Create new Task:** 
  ```POST:'v1/task'  ```

**Update Task:** 
  ```PATCH:'v1/task/:id'  ```
  
  *******************************************************************************************
  ## Docker Instructions
  
  >Go to the directory that has your Dockerfile and run the following command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the docker images command:
  
   ``` docker build . -t <your username>/node-base  ```
   
   >Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container. Run the image you previously built:
   
   ``` docker run -p 49160:8080 -d <your username>/node-base  ```
   
   
   
   
   **DOCUMENTATION:** [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) 
