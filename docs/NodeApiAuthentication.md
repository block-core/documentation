# Node API: Authentication

## RPC API

Authentication on the RPC API is done using basic authentication.

You can configure the username and password in the .conf (ini) file or arguments when launching the node.

## REST API

Authentication in the REST API is off by default. You should never expose your node to public traffic until after you enable authentication.

By default, there are no authentication and no authorization on the REST API.

Enable authentication by setting the "enableAuth" configuration value to true.

*.conf file:
```ini
enableAuth=true
```

### API keys

Access to your node is controlled using API keys. You can create / generate as many API keys as you need.

Keys are stored in the appsettings.json file at the root of your node software.

API keys are automatically refreshed while a node is running, so you can add, remove or edit these keys without restarting your node software.

Example of API key:

```json
  "Blockcore": {
    "API": {
      "Keys": [
        {
          "Id": 1,
          "Enabled":  true,
          "Owner": "Admin",
          "Key": "1ca8f906-a23e-48b2-8b83-e95290986d0e",
          "Roles": [ "User", "Admin" ]
        }
      ]
    }
  }
```

A key can be disabled by setting the "Enabled" value to false. This will immediately stop access using that API key.

### Roles

There are currently two roles available, "User" and "Admin". Some API operations are only available to "Admin" role keys.

### Usage

To use the REST API with your API keys, you must supply them as an HTTP HEADER with the key "Node-Api-Key".


### Testing from OpenAPI documentation

Click the "Authorize" button, and enter the API key.

![](./img/OpenAPIAuth.png)

Click "Authorize" to save the key, and now all calls from the documentation UI will include the API key in the header.

## Security risk

Exposing your node software to the public and giving third parties, partners or users acecss using API keys is not without risk. The APIs can be used to shut down your node software (with "Admin" role), disconnect all connected peers through banning, and other operations that will make your node crash and non-functional.