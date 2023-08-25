/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from 'qr-image';
import fs from 'fs'

const questions = {
    'type': 'input',
    'name': 'URL',
    'message': 'What is your url ?'
}


inquirer
    .prompt([
        questions
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_png = qr.image(url, { type: 'png' });
        var pathName = './ur1l.txt';
        qr_png.pipe(fs.createWriteStream('qr_ne2w.png'));
        fs.writeFile(pathName, url, (err) => {
            if (err) throw err;
            console.log("File written success");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });