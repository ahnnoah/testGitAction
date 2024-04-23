module.exports = {
  apps: [
    {
      name: 'cache-test',
      script: 'npm run start:dev',
      mode: 'cluster',
      instance: 2,
    },
  ],
};
