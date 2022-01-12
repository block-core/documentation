# Release Process

## Blockchain Release Process

Instructions to release your own blockchain software will be added here.

## Official Blockcore Release Process

This process describes the steps that is needed to go through to release new and updated packages and software.

### RocksDB Native and NuGet package

1: [https://github.com/block-core/blockcore-rocksdb-native](https://github.com/block-core/blockcore-rocksdb-native)

2: [https://github.com/block-core/blockcore-rocksdb](https://github.com/block-core/blockcore-rocksdb)

If there is a new release of RocksDB, then RocksDB native must be built and released. Next step is to build the NuGet package, then release when ready.

After releasing on NuGet, wait at least 10 minutes before proceeding to ensure scanning, approval and indexing of the package is completed.

### Blockcore NuGet packages

3: [https://github.com/block-core/blockcore](https://github.com/block-core/blockcore)

The main repository that contains the majority of our NuGet packages, must be updated to new version. After a build is completed from the `master` branch, 
then a new release will be added to the repository, in draft state.

Verify the NuGet packages locally by downloading and installing, if possible.

To publish new version of NuGet packages to the NuGet website, simply edit the new draft release and publish it. This will automatically trigger an 
workflow that will publish the NuGet packages.

Wait at least 10 minutes before proceeding, as the NuGet packages must be scanned for malware, approved and indexed.

### Blockcore Features

4: [https://github.com/block-core/blockcore-features](https://github.com/block-core/blockcore-features)

We maintain some custom features that extends the basic functionality. Upgrade the version number, perform a build, and publish the draft release.

The source code has reference to Blockcore NuGet packages in the pattern "1.1.*", which means each build will always take the latest available. There is 
no need to manually update NuGet packages from Visual Studio, except of course other third party packages that might need to be updated.

Wait at least 10 minutes before proceeding, due to NuGet scanning, approval and indexing.

### Blockcore Reference Nodes

5: [https://github.com/block-core/blockcore-nodes](https://github.com/block-core/blockcore-nodes)

We maintain an multi-node that can be utilized to run all the Blockcore-based blockchains using a single package.

Upgrade the version number, perform a build, and publish the draft release.

The source code has reference to Blockcore NuGet packages in the pattern "1.1.*", which means each build will always take the latest available. There is 
no need to manually update NuGet packages from Visual Studio, except of course other third party packages that might need to be updated.

When the draft release is published, the workflow will automatically build and publish container images to Docker Hub.

Image: [https://hub.docker.com/repository/docker/blockcore/node-multi](https://hub.docker.com/repository/docker/blockcore/node-multi)

### Blockcore Indexer

6: [https://github.com/block-core/blockcore-indexer](https://github.com/block-core/blockcore-indexer)

Add any new network NuGet packages, if new blockchains has been added.

When the draft release is published, the workflow will automatically build and publish container images to Docker Hub.

Image: [https://hub.docker.com/repository/docker/blockcore/indexer](https://hub.docker.com/repository/docker/blockcore/indexer)

### Blockcore Explorer

7: [https://github.com/block-core/blockcore-explorer](https://github.com/block-core/blockcore-explorer)

Update the version, also verify if there is any NPM packages that should be updated on the UI project.

When the draft release is published, the workflow will automatically build and publish container images to Docker Hub.

Image: [https://hub.docker.com/repository/docker/blockcore/explorer](https://hub.docker.com/repository/docker/blockcore/explorer)

### Blockcore TipBot

8: [https://github.com/block-core/blockcore-tipbot](https://github.com/block-core/blockcore-tipbot)

The Tipbot is hosted by Blockcore as a community service, but we advice teams to use their own dedicated tipbot for individual blockchains.

### Blockcore Hub

9: [https://github.com/block-core/blockcore-hub](https://github.com/block-core/blockcore-hub)

Blockcore Hub requires that the multi-node to be released first, it embeds the full node software.

Upgrade packages and version, then publish the draft release after build is complete.

### Chains configurations

10: [https://github.com/block-core/chaininfo](https://github.com/block-core/chaininfo)

The Blockcore software utilizes an hosted server for configuration. This makes it possible to update configurations of software 
without re-installations and updated releases.

It is the responsibility of individual blockchains to maintain their own configurations, but the Blockcore team will support 
and help with instructions.

The configurations are published on the website: [https://chains.blockcore.net/](https://chains.blockcore.net/)
