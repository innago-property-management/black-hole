import { expect } from "./deps.ts";
import { handler } from "./handler.ts";

Deno.test("should return a 204 No Content response", async () => {
  const req = new Request("https://example.com/");

  const res = await handler(req);

  expect(res.status).toBe(204);
});

Deno.test("should return a 204 No Content response for different request methods", async () => {
  const methods = ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"];

  for (const method of methods) {
    const req = new Request("https://example.com/", { method });

    const res = await handler(req);

    expect(res.status).toBe(204);
  }
});

Deno.test("should return a 204 No Content response for different request urls", async () => {
  const urls = [
    "https://example.com/",
    "https://example.com/test",
    "https://example.com/test/path",
    "https://example.com/test/path/with/params?param1=value1&param2=value2",
  ];

  for (const url of urls) {
    const req = new Request(url);

    const res = await handler(req);

    expect(res.status).toBe(204);
  }
});

Deno.test("should return a 204 No Content response for different request headers", async () => {
  const headers: HeadersInit[] = [
    { "Content-Type": "application/json" },
    { "Accept": "application/json" },
    { "Authorization": "Bearer token" },
    { "X-Custom-Header": "custom value" },
  ];

  for (const header of headers) {
    const req = new Request("https://example.com/", {
      headers: new Headers(header),
    });

    const res = await handler(req);

    expect(res.status).toBe(204);
  }
});

Deno.test("should return a 204 No Content response for a request with a body", async () => {
  const body = JSON.stringify({ test: "test" });
  const req = new Request("https://example.com/", { method: "POST", body });

  const res = await handler(req);

  expect(res.status).toBe(204);
});
