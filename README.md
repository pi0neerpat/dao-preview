<h1 align="center">Welcome to dao-preview 👋</h1>
<p>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/pi0neerpat" target="_blank">
    <img alt="Twitter: pi0neerpat" src="https://img.shields.io/twitter/follow/pi0neerpat.svg?style=social" />
  </a>
  <a href="https://twitter.com/enj4yy" target="_blank">
    <img alt="Twitter: enj4yy" src="https://img.shields.io/twitter/follow/enj4yy.svg?style=social" />
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

## Lessons Learned

Canvas has system dependencies (see [here](https://github.com/Automattic/node-canvas/wiki/Installation%3A-AWS-Lambda) and [here](https://github.com/vercel/vercel/issues/3460)) which makes it difficult to host in vercel. Playwright has similar issues as well. We switched to `@napi-rs/canvas`, but ran into an issue with missing import for `loadImage`. This can probably be solved with a bit more time.

We ended up just hosting it via a Digital Ocean Droplet, using `yarn rw serve`. This way, if it works locally, we know it will work in the Droplet, since its essentially the same environment.

Improvements to be made:

- `@napi-rs/canvas` could be used if we find a replacement for `loadImage`. This is probably the simplest and best way this could be improved. It would allow easy deployment on Vercel.
- Docker deployments would be nice, but 20 minutes for building the image is preventing me from trying. If you try this, don't forget you'll need the system deps for playwright or canvas (depending on which you choose).

In the process of learning these tools, I built a headless screenshot API [pi0neerpat/headless-screenshot](https://github.com/pi0neerpat/headless-screenshot), which lets you take pictures of websites just by creating a url. For example, the image below is just pointing to this url `https://headless-screenshot.vercel.app/api?url=https://oneclickdapp.com`. Pretty neat right?!

<img width="200px" src="https://headless-screenshot.vercel.app/api?url=https://oneclickdapp.com"/>

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

> NOTE: We could not get the docker hosting to work with playwright, due to system dependencies.

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
       -e .env
        pi0neerpat/dao-preview:latest
```

## Author

👤 **Patrick Gallagher**

- Website: https://patrickgallagher.dev
  - Twitter: [@pi0neerpat](https://twitter.com/pi0neerpat)
  - GitHub: [@pi0neerpat](https://github.com/pi0neerpat)

👤 **Kris Coulson**

- Website: http://kriscoulson.com
  - Twitter: [@enj4yy](https://twitter.com/enj4yy)
  - GitHub: [@KrisCoulson](https://github.com/KrisCoulson)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
