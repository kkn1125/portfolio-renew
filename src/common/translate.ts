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
      case "gulp":
        return "Gulp";
      case "mybatis":
        return "MyBatis";
      case "python":
        return "Python";
      case "typeorm":
        return "TypeORM";
      case "vitest":
        return "Vitest";
      case "webpack":
        return "Webpack";
      case "vite":
        return "Vite";
      case "webrtc":
        return "WebRTC";
      case "awsEc2":
        return "Amazon EC2";
      case "postgresql":
        return "PostgreSQL";
      case "prisma":
        return "Prisma";
      case "reactQuery":
        return "React Query";
      case "recoil":
        return "Recoil";
      case "swagger":
        return "Swagger";
      default:
        return p;
    }
  },
});
