# Redwood

> **NOTICE:** RedwoodJS is very close to a stable version 1.0. In the last two years,
> the project has matured significantly and is already used in production by a number
> of startups. We intend to have a 1.0 release candidate before the end of 2021 and
> to release a truly production-ready 1.0 in early 2022.

## Getting Started

- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn rw dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.

After running this dev server, access the Graphql playground at: http://localhost:8910/api/graphql

Check out the components in Storybook

```terminal
yarn rw storybook
```

### Ngrok it to the web

```bash
# Example
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

Killing Docker

```bash
# WARNING: may kill other containers on your machine
sudo killall containerd-shim && docker-compose down

sudo netstat -tulpn | grep :8910
# or
sudo lsof -i tcp:8910
sudo kill 1888
sudo kill -9 $(sudo lsof -t -i:8910) && sudo kill -9 $(sudo lsof -t -i:8911)

docker kill CONTAINER
# kill stubborn container
sudo service docker restart
# kill running containers
docker kill $(docker ps -q)
# !!! Remove all containers~!!!
docker rm --force $(docker ps -a -q)

sudo /etc/init.d/docker restart
```
