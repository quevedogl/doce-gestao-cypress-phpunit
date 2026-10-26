const { defineConfig } = require('cypress');
const { execSync } = require('child_process');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8000',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      on('task', {
        resetDatabase() {
          execSync('docker compose exec -T app php artisan migrate:fresh --seed', {
            stdio: 'inherit'
          });
          return null;
        }
      });
      return config;
    }
  }
});
