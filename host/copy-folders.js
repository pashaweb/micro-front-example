// include fs-extra package
import { copy } from 'fs-extra';
 
const source = '../grid/dist'
const destination = './public/external/grid';
 console.log("Copying files from " + source + " to " + destination);
// copy source folder to destination
copy(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});