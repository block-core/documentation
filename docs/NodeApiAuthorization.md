# Node API: Authorization

## RPC API

There are no authorization built into the RPC API, all users have full access to all API methods.

## REST API

The REST API have role based access control. Key and roles is controlled through the appsettings.json file.

```json
"Roles": [ "User", "Admin" ]
```

Authorization is handled through tags on controllers or operations.

Here is example taken from the Shutdown operation, which is only accessible for admin keys:

```C#
[Authorize(Policy = "OnlyAdmins")]
[HttpPost]
[Route("shutdown")]
[Route("stop")]
public IActionResult Shutdown([FromBody] bool corsProtection = true)
{
    this.fullNode?.NodeLifetime.StopApplication();
    return this.Ok();
}
```

### Unauthorized (401)

When a request is not authorized with the API key, it will return an HTTP 401 Unauthorized result. If you get HTTP 500 error, that means there might be a configuration or other issues with the node.

The JSON body result will be:

```json
{
  "type": "https://httpstatuses.com/401",
  "title": "Unauthorized",
  "status": 401
}
```