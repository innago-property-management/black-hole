import { handler } from "./handler.ts";

const port: number = parseInt(Deno.env.get("BLACK_HOLE_PORT") ?? "8080");

const server = Deno.serve({ handler, port });
console.log(`HTTP webserver running. Access it at:  http://localhost:${port}/`);

await server.finished;
