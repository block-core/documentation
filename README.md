<p align="center">
  <p align="center">
    <img src="https://avatars3.githubusercontent.com/u/53176002?s=200&v=4" height="100" alt="Blockcore" />
  </p>
  <h3 align="center">
    About Blockcore Documentation
  </h3>
  <p align="center">
    Blockcore Platform Documentation for Users and Developers
  </p>
  <p align="center">
      <a href="https://github.com/block-core/documentation/actions"><img src="https://github.com/block-core/documentation/actions/workflows/publish.yml/badge.svg" /></a>
  </p>
</p>

# Blockcore Documentation

Collection of documents used as user guide, architecture and technical reference for implementation of Blockcore technologies.

These documents are free (see [LICENSE](LICENSE)) and anyone can contribute, please feel free to do a PR with suggestions, additions, fixes, etc.

Don't expect all ideas and features written in these documents to be implemented. They are guidance documents, they should
document what already exists, what is being worked on, what is planned and ideas for the future.

If you discover a bug or other problem with Blockcore or supporting technologies, please report it. The are two different processes, 
[responsible disclosure](SECURITY-ISSUES.md) for security bugs and public issue tracking ([Blockcore](https://github.com/block-core/blockcore/issues)) for all other bugs.

### Build the Documentation Locally

If you're on Windows, you can simply run `doc.bat`. If you have not installed Python3, you will get a notification on how to install. You can simply do `python3` in the command promt, which will launc the Windows Store and you can install Python3.

Manually building and locally hosting the documentation:

```sh
python3 -m pip install --upgrade pip
python3 -m pip install mkdocs
python3 -m pip install mkdocs-material
python3 -m pip install mkdocs-git-revision-date-plugin
python3 -m pip install mkdocs-exclude-search
python3 -m mkdocs serve
```

## Contents

* [Contributing](CONTRIBUTING.md)
* [Coding Style](CODING-STYLE.md)
* [Security Issues](SECURITY-ISSUES.md)
* [Signing Commits](signing-commits.md)
* [Architecture](architecture/)

## Contributing

Pull requests are welcome and appreciated. To contribute to Blockcore Documentation, first check the [contributing guidelines](docs/Contribute.md).
