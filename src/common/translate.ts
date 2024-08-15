import { IconList } from "@assets/icons";

const translate: Record<string, string> = {};
export default new Proxy(translate, {
  get(target, p: IconList, receiver) {
    switch (p) {
      case "javascript":
        return "JavaScript";
      case "java":
        return "Java";
      case "artillery":
        return "Artillery";
      case "express":
        return "ExpressJS";
      case "nest":
        return "NestJS";
      case "fastify":
        return "Fastify";
      case "jenkins":
        return "Jenkins";
      case "jwt":
        return "JsonWebToken";
      case "jest":
        return "Jest";
      case "nginx":
        return "Nginx";
      case "mysql":
        return "MySQL";
      case "nodejs":
        return "NodeJS";
      case "react":
        return "ReactJS";
      case "sass":
        return "Sass";
      case "socketio":
        return "Socket.io";
      case "typescript":
        return "TypeScript";
      case "uwebsockets":
        return "µWebSockets.js";
      case "docker":
        return "Docker";
      case "linux":
        return "Linux";
      case "mariadb":
        return "MariaDB";
      case "mui":
        return "MUI";
      case "postman":
        return "Postman";
      case "springboot":
        return "SpringBoot";
      case "styledcomponent":
        return "StyledComponent";
      case "xterm":
        return "xTerm";
      default:
        return p;
    }
  },
});
