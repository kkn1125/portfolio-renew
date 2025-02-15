import { projects } from "@storage/projects";
import * as fs from "fs";
import * as path from "path";
import { spawn } from "child_process";

// fs.mkdirSync(path.join(path.resolve(), "../dist/portfolio-renew/"), {
//   recursive: true,
// });

projects.forEach((project) => {
  fs.mkdirSync(path.join(path.resolve(), "../dist" + project.path), {
    recursive: true,
  });
});

fs.mkdirSync(path.join(path.resolve(), "../dist/portfolio"), {
  recursive: true,
});

fs.mkdirSync(path.join(path.resolve(), "../dist/about"), {
  recursive: true,
});

spawn("cp", [
  path.join(path.resolve(), "../dist/index.html"),
  path.join(path.resolve(), "../dist/portfolio"),
]);

spawn("cp", [
  path.join(path.resolve(), "../dist/index.html"),
  path.join(path.resolve(), "../dist/about"),
]);

projects.forEach((project) => {
  spawn("cp", [
    path.join(path.resolve(), "../dist/index.html"),
    path.join(path.resolve(), "../dist" + project.path),
  ]);
});
