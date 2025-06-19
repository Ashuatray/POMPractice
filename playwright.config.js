// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig({
  testDir:'./tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 40000,
  },
  use: {
    browserName: 'chromium',
    screenshot:'on',
    trace : 'off'
  },
  reporter: 'html',

});

export default config;
