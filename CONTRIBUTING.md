Contributing to Blockcore
================================

Try to follow the [.NET Core](https://github.com/dotnet/coreclr/blob/master/Documentation/project-docs/contributing.md) guidlines.

Commit Messages
---------------

Please format commit messages as follows (based on this [excellent post](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)):

```
Summarize change in 50 characters or less

Provide more detail after the first line. Leave one blank line below the
summary and wrap all lines at 72 characters or less.

If the change fixes an issue, leave another blank line after the final
paragraph and indicate which issue is fixed in the specific format
below.

Fix #42
```

DOs and DON'Ts
--------------

* **DO** follow our [coding style](./coding-style.md)
* **DO** follow our [code commenting policy and guidelines](./commenting-policy.md)
* **DO** give priority to the current style of the project or file you're changing even if it diverges from the general guidelines.
* **DO** include tests when adding new features. When fixing bugs, start with
  adding a test that highlights how the current behavior is broken.
* **DO** keep the discussions focused. When a new or related topic comes up
  it's often better to create new issue than to side track the discussion.
* **DO** blog and tweet (or whatever) about your contributions, frequently!

* **DON'T** surprise us with big pull requests. Instead, file an issue and start
  a discussion so we can agree on a direction before you invest a large amount
  of time.
* **DON'T** commit code that you didn't write. If you find code that you think is a good fit to add to .NET Core, file an issue and start a discussion before proceeding.
* **DON'T** submit PRs that alter licensing related files or headers. If you believe there's a problem with them, file an issue and we'll be happy to discuss it.

Contributing
------------

By contributing to this repository, you agree to license your work under the 
[BlockCore](./LICENSE) license unless specified otherwise at 
the top of the file itself. Any work contributed where you are not the original 
author must contain its license header with the original author(s) and source.