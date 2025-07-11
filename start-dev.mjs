#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting Abhinav\'s Portfolio Development Server...');

const devServer = spawn('npm', ['run', 'dev'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true
});

devServer.on('close', (code) => {
  if (code !== 0) {
    console.error(`❌ Development server exited with code ${code}`);
  } else {
    console.log('✅ Development server stopped successfully');
  }
});

devServer.on('error', (err) => {
  console.error('❌ Failed to start development server:', err);
});
