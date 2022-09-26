// include fs-extra package
import { copy } from 'fs-extra';
//console.log("Current directory:", process.cwd());
import path from 'path';
import { cwd } from 'process';
import fs from 'fs';


const directoryName = path.basename(cwd());
const parent = path.dirname(cwd());
console.log(directoryName);
console.log(parent);
const copySettings = fs.readdirSync(parent, { withFileTypes: true })
    .filter((item) => {
        if (!item.isDirectory()) return false;
        if (item.name.startsWith('.')) return false;
        if (item.name === directoryName) return false;
        return true;
    })
    .map((item) => {
        return {
            from: path.join(parent, item.name, 'dist'),
            to: path.join(cwd(), 'public', 'external', item.name)
        }
    });

console.log(copySettings);
copySettings.forEach((item) => {
    copy(item.from, item.to, (err) => {
        if (err) {
            console.error(err);
        }else{
            console.log("Copied", item.from, "to", item.to);
        }
    });
});
// const externalPaths = [
//     {
//         from: '../grid/dist',
//         to: 'host/external-folder'
//     },
//     {
//         from: 'host/external-folder-2',
//         to: 'host/external-folder-2'
//     }
// ];
// const source = '../grid/dist'
// const destination = './public/external/grid';
//  console.log("Copying files from " + source + " to " + destination);
// // copy source folder to destination
// function copyFiles(source, destination) {
//     copy(source, destination, function (err) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("success!", `${source} copy to ${destination}`);
//     });
// }
