import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b:base, l:limit, s:showTable } = yarg;
let outputMessage = '';
const headerMessage = `
==================================
       Tabla del ${ base }
==================================\n
`;

for( let i = 1; i <= limit; i++ ) {
  outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
}

outputMessage = headerMessage + outputMessage;

if ( showTable ) {
  console.log(outputMessage);
}

const outputPath = `outputs`;


fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);
console.log('File created!');

// grabar en el archivo de salida
// path: outputs/tabla-5.txt