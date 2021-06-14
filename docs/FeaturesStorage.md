# Features: Storage

The storage feature is an feature that enables nodes to synchronize and store documents. It has structured handling of some document types and supports generic data storage.

## Use case

The use case for storage is a way to have a decentralized and distributed storage mechanism for data. The primary data type is text based documents in JSON format.

Documents must be signed by the original author and the signature must be included with the document for verification.

Data can be stored unencrypted and encrypted.

One example of use case is storing the personal contact list. This is something that typically would be stored encrypted and not readable by third parties.

Another example of use case is storing awards and certifications received, which can be used to lookup and verify completed courses and valid certifications.

## API

Most interactions with the storage feature is done through REST API that is made public available. It is also possible to run your own local node with the storage feature enabled.

Nodes that are public, are refered to as hubs.

## Identities

The main artefact of the storage feature, is identity. Identities are always synchronized across nodes. They are free of charge by users who use the APIs.

There is limit to fields that are allowed and length of the fields on the identity. Since the identities are free and shared across all nodes, they must be limited.

Everything is connected to the identities. A person can have one or multiple identities. A person can also make identities for their business entities and other resources, such as servers, hubs and more.

Your identities is the foundation of secure messaging, for verification and social networking and a lot more.

Example:

```json
{
  "version": 1,
  "id": "identity/P9ppftn667PgXwqCKNaUVnD8BS8rjmkcUo",
  "signature": "ICSoxi6ScRYozMeDGU0+gZAltyis27mUA16JeAT2u24xSH23LEaAKwXJjv4dbWPhvfZbTFmr/fy7/MWTbXpgdDY=",
  "content": {
    "identifier": "P9ppftn667PgXwqCKNaUVnD8BS8rjmkcUo",
    "height": 1,
    "name": "Sondre Bjellås",
    "shortName": "SondreB",
    "alias": "Vanarki",
    "title": null,
    "email": "sondre@outlook.com",
    "url": "https://www.sondreb.com",
    "image": "https://avatars1.githubusercontent.com/u/309938?s=460&u=c82ed1827100905dc561460fdfc68ca463b29194&v=4",
    "hubs": null
  }
}
```

The "id" on the "container" is based on the container and the identifier in the content.

The "content" is what consititutes the "document" and is signed. The "container" is not verified and can be modified by the nodes indiscriminately. You can only trust the "content", not the "container".

The "content/hubs" is a list of identifiers of hubs that the user uses to store their data. As mentioned before, identities is shared across all nodes, but identity is the only data that is shared like this. Other data is stored on specific hubs.

## Data

Data other than the identities is normally retrieved from known hubs.

If for example the "image" field on the identity contains a relative path, it means that the image is stored on the hubs.

Example:

```json
  {
  "content": {
    "identifier": "P9ppftn667PgXwqCKNaUVnD8BS8rjmkcUo",
    "image": "data/jysdfzx234.jpg",
    "hubs": ["P4xYftn667PgXwqCKNaUVnD8BS8rjmkcUo"]
  }
```

In the example above, the profile image can be retrieved using the following actions:

1. Query the identity API for the identity of the hub.
1. Get the "url" of the hub identity, e.g. "https://city.hub.blockcore.net".
1. Combine the URL of the hub with the relative path, e.g. "https://city.hub.blockcore.net/data/jysdfzx234.jpg"
1. Then you can either download that image, or show it to the users of your app.

Data structures are always stored under the identifier of an identity. Remember that identities is not just human beings, it can also be pets, hubs, servers and applications.

If you develop your own application named "CuteCatPhotos" which is a collection of links to externally hosted photos, your storage path might be:

/data/P1ppftn667PgXwqCKNaUVnD8BS8rjmkcUo/

When a user interacts with your application, content created might be stored under the identity of your application, or it might be stored under their own identity.

/data/P9ppftn667PgXwqCKNaUVnD8BS8rjmkcUo/

If data is stored under the identity of the user, it means that the user owns the data and is the only one that can edit or remove the data.

When the data is stored under the identity of the app, data can be updated by either the app, but also by the user, depending on how the application is developed.

### Payment

Data is stored on hubs and these are either free of charge, or based on agreements. Anyone can host their own hub if they want to.

Users can sign up and pay for subscriptions to a hub through various means, and then user management happens with API keys that the hub owner manages.

Last option is to utilize hubs that is built around automatic invoicing. These will invoice the identity on a regular interval for the amount of traffic and storage that is being consumed. If the user does not pay the invoice, their data might be deleted off the hub.

This means that there are limitless options on how to do payment for storage, compared to blockchain based storage solutions that uses transaction fees.

Payment like described here allows anyone to begin develop Web3 applications and use the storage functionality without the use of wallet and cryptocurrency.

## Signing

Identities are a known type and must follow a strict set of schema. This class must be marked with the [MessagePackObject] attribute.

Each of the properties must be marked with a fixed order, with attribute like [Key(0)].

When signing a document ("content"), you must first serialize your document using an Message Pack serializer. These are available for different languages and platforms, including JavaScript.

```C#
// Example on how to derive the key pair needed for an identity.
string recoveryPhrase = "mystery problem faith negative member bottom concert bundle asthma female process twelve";
var mnemonic = new Mnemonic(recoveryPhrase);
ExtKey masterNode = mnemonic.DeriveExtKey();
ExtKey identityRoot = masterNode.Derive(new KeyPath("m/302'"));
ExtKey identity = identityRoot.Derive(0, true);

// Create an identity profile that should be signed and published.
Identity identityModel = new Identity
{
   Identifier = identity0Id,
   Name = "John Doe",
   ShortName = "John",
   Alias = "JD",
   Title = "Hi.",
   Url = "https://",
   Image = "https://",
   Height = 10,
   Hubs = new string[1] { "PN9Gibo37UzogRC2cBxymvBtbM2p5eNfWi" }
};

// Serialize to MessagePack.
byte[] entityBytes = MessagePackSerializer.Serialize(identityModel);

string signature = identity.PrivateKey.SignMessage(entityBytes);

// Encapsulate the identity into a container
var identityContainer = new IdentityDocument
{
   Id = "identity/" + identityModel.Identifier,
   Content = identityModel,
   Signature = signature
};

// Publish to local node or public hub.
```

## Verification

Verification is done by redoing the message pack serialization, then checking to verify if the signature was signed with the private key of the public key (the identifier).

```C#
byte[] entityBytes = MessagePackSerializer.Serialize(document.Content);

// You need a reference to the ProfileNetwork.
var bitcoinAddress = (BitcoinPubKeyAddress)BitcoinPubKeyAddress.Create(address, ProfileNetwork.Instance);

var valid = bitcoinAddress.VerifyMessage(entityBytes, document.Signature);
```


## Synchronization

When nodes connect they will begin to exchange the signatures of all documents. This is done in chunks. As each node process the signatures of the other node, it will ask to retrieve documents that it is missing.

When the document is retrieved based on the signature, the document is serialized and signature is verified. If everything is OK, then the height is used to validate if the received document is older or newer than the current.

When a hub (node) receives a new or updated document through the REST API, it will immediately distribute the document to connected peers (nodes). A node that receives new/updated documents in full based on this push action, will forward a notification to all if its connected nodes with the signature it received. This ensures that there won't be duplicate transfer of documents and that newly observed documents are quickly distributed across the nodes.

1. Node A connects with Node B
1. Both send StoragePayload with list of supported collections and request to get signatures.
1. Both send StorageInvPayload with list of signatures in each of the collections supported.
1. When node discover a signature that is not available locally, it sends a StoragePayload request to retrieve the missing document.
1. When node receives missing document, it verifies if document is old or new version of existing document.

**Not implemented yet:** The final step is to perform a verification of synchronized state, if both nodes has the same set of data.

## Versioning

The root document has a version attribute, and the node has built into it a minimum version and maximum version of known document types and the generic document type. If an unsupported document is received, nothing will happen. The document will not be persisted.

Please note that the version on the container of the document, is not a revision number of the document itself. It is used for type compatibility checking.