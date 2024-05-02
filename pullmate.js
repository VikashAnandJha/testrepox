const { exec } = require('child_process');
const path = require('path');

// Function to pull changes from the repository
function pullChanges() {
    exec('git pull', { cwd: __dirname }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error pulling changes: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Git stderr: ${stderr}`);
            return;
        }
        console.log(`Changes pulled successfully:\n${stdout}`);
    });
}

// Schedule pulling changes every 5 seconds
setInterval(() => {
    console.log('Checking for changes...11');
    pullChanges();
}, 3000);

console.log('Script running. Press Ctrl+C to exit.');
