# Node API

The Blockcore node software exposes a few ports for different usages.

There are three APIs available that can be consumed on a Blockcore based node, they are RPC, REST and Web Socket based.

BEWARE: You should normally never expose these APIs to the public, they should be protected behind firewall.

## RPC API

The RPC API is mainted to be compatible with Bitcoin Core and other chains that are forks or modifications of the original Bitcoin source code.

## REST API

The REST API has more functionality and is continuously improved upon.

You can use the OpenAPI documentation to investigate what functionality is available in the API.

```
http://localhost:PORT/docs/index.html
```

## WEB SOCKET API

