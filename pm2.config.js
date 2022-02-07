const name = 'dao-preview' // Name to use in PM2
const repo = 'git@github.com:pi0neerpat/dao-preview.git' // Link to your repo
const user = 'patrick' // Server user
const path = `/home/${user}/${name}` // Path on the server to deploy to
const host = 'daopreview.com' // Server hostname
const port = 8910 // Port to use locally on the server
const build = `yarn install && yarn rw build`

module.exports = {
  apps: [
    {
      name,
      node_args: '-r dotenv/config',
      cwd: `${path}/current/`,
      script: 'yarn rw serve',
      args: `--port ${port}`,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      user,
      host,
      ref: 'origin/master',
      repo,
      path,
      ssh_options: 'ForwardAgent=yes',
      'post-deploy': `${build} && pm2 reload pm2.config.js --env production && pm2 save`,
    },
  },
}
