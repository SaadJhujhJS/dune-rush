module.exports = {
  apps: [
    {
      name: "dunerush",
      script: ".output/server/index.mjs",
      exec_mode: "cluster",
      instances: "max",
      env: {
        PORT: 3001,
        NODE_ENV: "production",
      },
    },
  ],
};
