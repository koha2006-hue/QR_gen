const fs = require('fs');

const jsonData = {
    "name": "Dam Huu Khoa",
    "status": "USTH Student",
    "major": "ICT (Information and Communication Technology)",
    "interests": ["Technology", "Programming", "ICT Innovations"],
    "current_status": "Learning and exploring the vast field of Information and Communication Technology at USTH."
    };
const filePath = 'create.json';
const jsonString = JSON.stringify(jsonData, null, 2);
fs.writeFile(filePath, jsonString, 'utf8', (err) => {
    if (err) {
        console.error('Error writing JSON file:', err);
    } else {
        console.log(`JSON file '${filePath}' has been created successfully.`);
    }
});

