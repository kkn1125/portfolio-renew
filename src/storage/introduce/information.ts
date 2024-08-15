import { JSIcon } from "@libs/js.icon";

export const Information = {
  name: "김경남",
  age: new Date().getFullYear() - 1993,
  skill: {
    main: [JSIcon("javascript"), JSIcon("typescript"), JSIcon("nodejs")],
    sub: [JSIcon("java"), JSIcon("python")],
  },
  stacks: [
    JSIcon("linux"),
    JSIcon("nginx"),
    JSIcon("jwt"),
    JSIcon("uwebsockets"),
    JSIcon("socketio"),
    JSIcon("express"),
    JSIcon("fastify"),
    JSIcon("mariadb"),
    JSIcon("mysql"),
    JSIcon("jenkins"),
    JSIcon("docker"),
    JSIcon("artillery"),
    JSIcon("jest"),
    JSIcon("react"),
    JSIcon("sass"),
    JSIcon("styledcomponent"),
    JSIcon("mui"),
    JSIcon("springboot"),
  ],
} as const;
export type Information = (typeof Information)[keyof typeof Information];
