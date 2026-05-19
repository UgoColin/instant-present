module.exports = {
  apps: [
    {
      name: 'instant-present',
      cwd: '/var/www/instant-present/app',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
}
