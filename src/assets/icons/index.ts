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
import awsEc2 from "./aws.ec2";
import bootstrap from "./bootstrap";
import formik from "./formik";
import gulp from "./gulp";
import mybatis from "./mybatis";
import swagger from "./swagger";
import typeorm from "./typeorm";
import vite from "./vite";
import vitest from "./vitest";
import webpack from "./webpack";
import webrtc from "./webrtc";

export const Icons = {
  artillery,
  docker,
  express,
  fastify,
  java,
  javascript,
  jenkins,
  jest,
  jwt,
  linux,
  mariadb,
  mui,
  mysql,
  nest,
  nginx,
  nodejs,
  postman,
  python,
  react,
  sass,
  socketio,
  springboot,
  styledcomponent,
  typescript,
  uwebsockets,
  xterm,
  awsEc2,
  bootstrap,
  formik,
  gulp,
  mybatis,
  swagger,
  typeorm,
  vite,
  vitest,
  webpack,
  webrtc,
} as const;
export type Icons = (typeof Icons)[keyof typeof Icons];
export type IconList = keyof typeof Icons;
