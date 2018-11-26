// setTimeout(()=>{
//     console.log('hey')
// }
// ,3000
// )
// console.log(__dirname)//Full Directory
// console.log(__filename)//Full Directory will File Name
// time=0;
// var Interval= setInterval(()=>{
//     if(time >= 1)
//     {
//         clearInterval(Interval)
//     }
//     console.log('hey'+time)
//     time++;
// }
// ,2000
// )
// var HI=function()
// {
//     console.log("Hi")
// }

// function CallFunc(func)
// {
// func();
// }

// CallFunc(HI);

var Import=require('./Counter.js');
Import.Count(["Ali","Asghar","Karani"])
Import.Nm("Ali")
console.log(Import.ck);
// var events=require('events')
// events.on('click',()=>{console.log("Ali")})
