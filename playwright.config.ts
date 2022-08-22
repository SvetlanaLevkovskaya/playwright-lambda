import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/login.test.ts"],
  reporter: 'html',
  };

  
export default config;
