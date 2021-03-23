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
      <a href="https://github.com/block-core/documentation/actions"><img src="https://github.com/block-core/documentation/workflows/Build%20and%20Release%20Documentation/badge.svg?branch=dev" /></a>
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

```sh
# Install dependencies
npm install

# Serve locally (by default on port 8080)
npm start
```

## Contents

* [Contributing](CONTRIBUTING.md)
* [Coding Style](CODING-STYLE.md)
* [Security Issues](SECURITY-ISSUES.md)
* [Signing Commits](signing-commits.md)
* [Architecture](architecture/)

## Contributing

Pull requests are welcome and appreciated. To contribute to Blockcore Documentation, first check the [contributing guidelines](docs/Contribute.md).

If you're beginner, take a look at the step by step guide (made for BTCPay Server) on how to contribute to Blockcore Documentation below.

[![Contributing to Documentation](https://img.youtube.com/vi/bSDROcdSSWw/mqdefault.jpg)](https://www.youtube.com/watch?v=bSDROcdSSWw "How BTCPay Server Works")

### Text Highlights

There are [three types of text highlights](https://vuepress.vuejs.org/guide/markdown.html#custom-containers) that can be used to display different colored boxes.

A green box displaying a friendly tip:

```md
:::tip
foo
:::
```

A yellow box with a cautious warning:

```md
:::warning
foo
:::
```

A red box with a clear danger, you can also add a title `foo` to any container:

```md
:::danger foo
bar
:::
```

### Embedding YouTube videos

To add a YouTube video with a preview, you can so so by linking to it like this:

```md
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/mqdefault.jpg)](https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```

Note that the link item need to be a preview image (either from YouTube or a custom one) to result in an embedded video.

### Check for broken links

The GitHub Actions pipeline checks for broken links after deploying the production site.
You can also run the link check locally using `npm run linkcheck:local`.
The dev server needs to be running alongside for this to work.
