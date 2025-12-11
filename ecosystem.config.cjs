module.exports = {
  apps: [
    {
      name: "thebestprop-lnd",
      script: "npm",
      args: "run preview -- --port 4005 --host",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
