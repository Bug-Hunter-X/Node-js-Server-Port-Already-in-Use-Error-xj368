const http = require('http');
const { isPortTaken } = require('is-port-taken');

async function startServer(port) {
  const isTaken = await isPortTaken(port);
  if (isTaken) {
    console.error(`Port ${port} is already in use.`);
    return;
  }

  const requestListener = (request, response) => {
    response.writeHead(200);
    response.end('Hello, World!');
  };

  const server = http.createServer(requestListener);

  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

const port = 8080;
startServer(port); 