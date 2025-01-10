module.exports = {
  apps: [
    {
      name: 'project-management',
      script: 'bun',
      args: 'bun dev',
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
