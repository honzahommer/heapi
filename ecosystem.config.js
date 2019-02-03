module.exports = {
  apps: [{
    name: 'heapi',
    script: 'server.js',
    post_update: ['npm install'],
    watch: true,
    ignore_watch: ['node_modules', 'logs', '.git'],
    merge_logs: true,
    max_restarts: 20,
    instances: 1,
    max_memory_restart: '64M',
    env: {
      PORT: 3000,
      NODE_ENV: "development"
    },
    env_production: {
      NODE_ENV: "production"
    }
  }]
}
