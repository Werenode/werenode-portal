# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

Il faut node 18  utilisé par défaut 
```console 
nvm use 18
```

Don't forget to commit your changes on master before you deploy !

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
GIT_USER=arnolchi USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
``
tester  ssh -T git@github.com
si ko : 
ssh-keygen -t ed25519 -C "git@github.com"
ssh-add ~/.ssh/id_ed25519
cat ~/.ssh/id_ed25519.pub
ajouter la clé dans github en read/write
