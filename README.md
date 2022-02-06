<h1 align="center">Welcome to dao-preview 👋</h1>
<p>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/pi0neerpat" target="_blank">
    <img alt="Twitter: pi0neerpat" src="https://img.shields.io/twitter/follow/pi0neerpat.svg?style=social" />
  </a>
  <a href="https://twitter.com/pi0neerpat" target="_blank">
    <img alt="Twitter: pi0neerpat" src="https://img.shields.io/twitter/follow/pi0neerpat.svg?style=social" />
  </a>
</p>

> An easy way for everyone to &#34;get the scoop&#34; on your DAO

### 🏠 [Homepage](https://daopreview.com)

## Install

```sh
yarn install
```

## Usage

```sh
yarn rw dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.

After running this dev server, access the Graphql playground at: http://localhost:8910/api/graphql

Check out the components in Storybook

```terminal
yarn rw storybook
```

## Run tests

```sh
yarn rw test api
```

## Ngrok it to the web

Demo the app.

```bash
ngrok http --host-header=rewrite 10.61.141.234:8910
```

## Docker

Images are built via Github Action. To build the images locally:

```bash
docker build . -t pi0neerpat/dao-preview
```

Explore image contents:

```bash
docker run --rm -it --entrypoint=/bin/bash <image>
```

Run an image locally:

Create a `GITHUB_PAT` in your Github "Developer Settings" with permissions `read:packages`

```bash
# Authenticate
docker login https://ghcr.io -u USERNAME -p GITHUB_PAT

# Pull the images (web and api)
docker pull ghcr.io/pi0neerpat/dao-preview:latest

# Start the image
docker-compose up

# Or run the image manually
docker run -it --rm \
       -p 8910:8910 \
        pi0neerpat/dao-preview:latest
```

## Author

👤 **Patrick Gallagher**

- Website: https://patrickgallagher.dev
  - Twitter: [@pi0neerpat](https://twitter.com/pi0neerpat)
  - GitHub: [@pi0neerpat](https://github.com/pi0neerpat)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
