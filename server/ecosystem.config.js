module.exports = {
  apps: [
    {
      name: 'project-management',
      script: 'bun',
      args: 'dev',
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
