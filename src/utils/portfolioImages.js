const fs = require('fs');
const dir = "public/assets/portfolio/";
const publicFolder = "/assets/portfolio/";


export default function getFiles(location) {

    if (!fs.existsSync(dir+location)) {
      return false;
    }
  
    let files = fs.readdirSync(dir+location);
    
  
  
    const portfolioFiles = files.filter(k=> k.includes(".jpg")).map( (fileName) =>  ({
        location: publicFolder+location,
        thumb: publicFolder+location+"/thumb",
        name: fileName.slice(0, -4),
        file: fileName 
      }) )
    
    return portfolioFiles;
  
  }
  