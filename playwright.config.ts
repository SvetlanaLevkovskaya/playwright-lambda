import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/recorded.test.ts"],
  //reporter: 'html',
  };

  
export default config;
