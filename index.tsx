import { renderToString } from "react-dom/server";
import Home from "./components/Home";
const server = Bun.serve({
  port: 3000,
  async fetch(request) {
    const html = renderToString(<Home />);
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
