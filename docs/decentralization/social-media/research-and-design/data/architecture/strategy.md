**Strategy and Tactics for Decentralized Data Storage and Retrieval**

The purpose of this document is to identify decentralized strategy and tactics for storage and retrieval of data files.

First Idea.

Use Filebase's S3 Compatible interface (backed by IPFS and Sia) to provide a clean API for the decentralized storage and retrieval of files

**IPFS - The Interplanetary File System**: [https://ipfs.io/#why](https://ipfs.io/#why)

**FileBase**: [https://blog.ipfs.io/2022-04-14-filebase/](https://blog.ipfs.io/2022-04-14-filebase/)

**What is  FileBase?** [https://docs.filebase.com/what-is-filebase/master](https://docs.filebase.com/what-is-filebase/master)

“Filebase is the first S3-compatible object storage platform that allows you to store data in a secure, redundant, and performant manner across multiple decentralized storage networks.”

Note: Filebase is offering the first five gigabytes of storage for free. Which means that we can create a contraint on our file cache to always delete the oldest files when the cache size nears the free data limit. This is a tactic to get our decentralized storage up and running.

The user would register an account through our platform and be able directly own and control all their data with no centralized intermediary. The message and data they share on the platform would be in the form of S3 links to their data.

