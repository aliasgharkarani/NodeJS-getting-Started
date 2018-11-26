var fs=require('fs');

//Sync
// var read=fs.readFileSync('data.txt','utf8');
// console.log(read)

//Async
// var read=fs.readFile('data.txt','utf8',function(error,data){
// console.log(data);
// });

// var write=fs.writeFileSync('data.txt','Kamran Shahid');

//To Delete A file from Directory!
// fs.unlink('unlink.js')

//Creating A Directory
// fs.mkdirSync('hi')

//Remove A Directory
// fs.rmdirSync('hi')

// fs.mkdir('stuff',function(){
// fs.readFile('data.txt','utf8',function(error,data){
//     fs.writeFile('./stuff/write.txt',data)
// })
// })

fs.unlink('./stuff/write.txt')
fs.rmdirSync('stuff')

// console.log("Ali");