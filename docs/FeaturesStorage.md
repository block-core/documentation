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

## Data

TBD

## Signing

TBD

## Verification

TBD


## Synchronization

When nodes connect they will begin to exchange the signatures of all documents. This is done in chunks. As each node process the signatures of the other node, it will ask to retrieve documents that it is missing.

When the document is retrieved based on the signature, the document is serialized and signature is verified. If everything is OK, then the height is used to validate if the received document is older or newer than the current.

When a hub (node) receives a new or updated document through the REST API, it will immediately distribute the document to connected peers (nodes). A node that receives new/updated documents in full based on this push action, will forward a notification to all if its connected nodes with the signature it received. This ensures that there won't be duplicate transfer of documents and that newly observed documents are quickly distributed across the nodes.

## Versioning

The root document has a version attribute, and the node has built into it a minimum version and maximum version of known document types and the generic document type. If an unsupported document is received, nothing will happen. The document will not be persisted.

Please note that the version on the container of the document, is not a revision number of the document itself. It is used for type compatibility checking.