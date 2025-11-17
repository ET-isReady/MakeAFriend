console.log('Hello, Git! This is a new string of text.')

// Typical git command sequence to add file: 
// git add ./
// git commit -m 'Add such and such file'
// git push -u origin <branch_name> usually 'main' -- git push -u origin main

// Typical git command sequence to add folder: 
// git add <folder name>
// git commit -m 'Add such and such file'
// git remote add origin <remote-url>
//git push origin main

// Typical git command sequence to remove folder/file: 
// git rm filename/foldername
// git commit -m "Remove filename/foldername"
// git push origin <branch_name> -- git push origin main

// Typical git command to remove file/folder remotely, but keep it locally:
// git rm --cached filename
// git commit -m "Remove filename from repo only"
// git push origin branch_name