import fs from "fs";
import path from "path";
// import routes from "../src/routes/index.js";

const baseIndex = fs
  .readFileSync(path.join(path.resolve(), "dist", "index.html"))
  .toString("utf-8")
  .replace(
    /<base href="http:\/\/localhost:3000\/" \/>/g,
    '<base href="https://kkn1125.github.io/portfolio-renew/" />'
  );

// const file = fs.readFileSync(
//   path.join(path.resolve(), "src/routes/index.js"),
//   "utf8"
// );

// console.log(
//   file
//     .split(/export default/gm)[1]
//     .split(/\r\n/gm)
//     .slice(1)
//     .filter(
//       (line) =>
//         !(line === "" || line.match(/^import/) || line.match(/^export|\]/))
//     )
// );

// const routes = JSON.parse(
//   "[" +
//     file
//       .split(/export default/gm)[1]
//       .split(/\r\n/gm)
//       .slice(1)
//       .filter(
//         (line) =>
//           !(line === "" || line.match(/^import/) || line.match(/^export|\]/))
//       )
//       .map((line) =>
//         line
//           .trim()
//           .replace(/, page:\s[A-Za-z0-9_-]+/, "")
//           // .replace(/, page:\s[\w]+[(\w),\s{]+}\)/, "")
//           .replace(/([\w]+):/g, ($1, $2) => `"${$2}":`)
//           .trim()
//       )
//       .join("")
//       .slice(0, -1) +
//     "]"
// ).filter((page) => page.path !== "/");

const routes = [
  "index",
  "portfolio",
  "about",
  "404",
  "portfolio/gantt-chart",
  "portfolio/m-backoffice",
  "portfolio/m-api-server",
  "portfolio/live-commerce",
  "portfolio/webrtc",
  "portfolio/metaverse-socket",
  "portfolio/nftmarket",
  "portfolio/documentify",
  "portfolio/projectnarang",
  "portfolio/solitaire",
  "portfolio/typer",
  "portfolio/mentees",
  "portfolio/treeparser",
];

for (let route of routes) {
  console.log(route);
  if (route.match(/\//g)) {
    fs.mkdirSync(path.join(path.resolve(), "dist", route.split("/")[0]), {
      recursive: true,
    });
  }
  const dirPath = path.join(path.resolve(), "dist", route + ".html");
  // const directory = fs.readdirSync(dirPath, {
  //   recursive: true,
  // });
  // console.log(directory);
  // if (directory !== undefined || directory.length === 0) {
  //   console.log("새로 생성");
  // }
  fs.writeFileSync(path.join(dirPath), baseIndex);
  // try {
  //   // fs.readdirSync(dirPath, {
  //   //   recursive: true,
  //   // });
  // } catch (error) {
  //   // fs.mkdirSync(dirPath, {
  //   //   recursive: true,
  //   // });
  // } finally {
  //   const directory = fs.readdirSync(dirPath, {
  //     recursive: true,
  //   });
  //   console.log(directory);
  //   if (directory !== undefined || directory.length === 0) {
  //     console.log("새로 생성");
  //   }
  //   fs.writeFileSync(path.join(dirPath, "index.html"), baseIndex, {});
  // }
}
fs.writeFileSync(path.join(path.resolve(), "dist", ".nojekyll"), "");
