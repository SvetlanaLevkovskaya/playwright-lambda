import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/recorded.test.ts"],
  use: {
    headless: false
  }
  //reporter: 'html',
  };

  
export default config;
