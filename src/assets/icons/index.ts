import artillery from "@assets/icons/artillery";
import docker from "@assets/icons/docker";
import express from "@assets/icons/express";
import fastify from "@assets/icons/fastify";
import java from "@assets/icons/java";
import javascript from "@assets/icons/javascript";
import jenkins from "@assets/icons/jenkins";
import jest from "@assets/icons/jest";
import jwt from "@assets/icons/jwt";
import linux from "@assets/icons/linux";
import mariadb from "@assets/icons/mariadb";
import mui from "@assets/icons/mui";
import mysql from "@assets/icons/mysql";
import nest from "@assets/icons/nest";
import nginx from "@assets/icons/nginx";
import nodejs from "@assets/icons/nodejs";
import postman from "@assets/icons/postman";
import python from "@assets/icons/python";
import react from "@assets/icons/react";
import sass from "@assets/icons/sass";
import socketio from "@assets/icons/socketio";
import springboot from "@assets/icons/springboot";
import styledcomponent from "@assets/icons/styledcomponent";
import typescript from "@assets/icons/typescript";
import uwebsockets from "@assets/icons/uwebsockets";
import xterm from "@assets/icons/xterm";

export const Icons = {
  python,
  artillery,
  docker,
  express,
  fastify,
  javascript,
  jenkins,
  jest,
  jwt,
  linux,
  mariadb,
  mui,
  nest,
  nginx,
  nodejs,
  postman,
  react,
  sass,
  socketio,
  springboot,
  styledcomponent,
  typescript,
  uwebsockets,
  xterm,
  mysql,
  java,
} as const;
export type Icons = (typeof Icons)[keyof typeof Icons];
export type IconList = keyof typeof Icons;
