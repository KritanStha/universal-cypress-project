const path = require('path');
const fs = require('fs');

// Mock environment for testing init.js
const testTargetDir = path.join(__dirname, 'test_scaffold');

if (fs.existsSync(testTargetDir)) {
    fs.rmSync(testTargetDir, { recursive: true, force: true });
}
fs.mkdirSync(testTargetDir);

// Mock process.cwd
process.cwd = () => testTargetDir;

// Run init
require('../bin/init.js');
