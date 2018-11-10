# sese-loewe

Spring Boot and Angular 6 project, based on this template: https://dzone.com/articles/building-a-web-app-using-spring-boot-angular-6-and




## Project outline
The project is configured so that the REST API also serves the Angular App on `/`. 

The sources for the REST API live in the `server` directory and the sources for the Angular app are located in the `web/src/main/web` directory.


To run execute `mvn clean install` in the root directory (compiles the Angular project) and then `mvn spring-boot:run` in the `server` directory.
 