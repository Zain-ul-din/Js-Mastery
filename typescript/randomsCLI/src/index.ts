#!/usr/bin/env node
// Randoms CLI Working with files

import { existsSync, mkdirSync, copyFile } from "fs";
import { readdir, lstat,  } from "fs/promises";
import { extname } from "path";

const environment:string = "testing";

const targetFiles:Array <string> = process.argv

targetFiles.splice (0,2); // removes 1st two argu

console.log (targetFiles);

var root: string = process.cwd(); // absolute path
const folderPrefix: string = "RANDOM";
async function isFolder(path: string): Promise<boolean> {
  return (await lstat(path)).isDirectory();
}

function getFileName(filePath: string): string {
  const paths: Array<string> = filePath.split("\\", filePath.length);
  return paths[paths.length - 1];
}

async function addFileToRoot(filePath: string) {

  if (environment == "testing") return;
  const extName: string = extname(filePath).replaceAll(".", "");
  const folderName: string = (folderPrefix + "_" + extName).replaceAll(
    " ",
    "_"
  );
  var absFolderPath: string = root + "\\" + folderName;
  if (!existsSync(absFolderPath)) {
    mkdirSync(absFolderPath);
  }

  absFolderPath += "\\" + getFileName(filePath);
  
  
  
  // Add File to Folder
  if (targetFiles.length == 0)
  {
    copyFile(filePath, absFolderPath, (err)=>{
      console.log (err)
    });

    return;
  }

  if (targetFiles.includes(extName))
    console.log ( ">" + absFolderPath);
}

async function readDirectory(root: string): Promise<void> {
  if (!(await isFolder(root))) {
    addFileToRoot(root);
    return;
  }

  const files: string[] = await readdir(root);
  for (let i: number = 0; i < files.length; i += 1)
    readDirectory(root + "\\" + files[i]);
}

console.log ("Copying Files...");
setTimeout (()=> {
  console.log ("Making Dirs...");
} , 1000);
await readDirectory(root);
