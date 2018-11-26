var events =require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',(msg)=>{
//     console.log(msg)
// })
// myEmitter.emit('someEvent','Hi Bye');

var util=require('util');

var Person =function(name){
this.name = name;
}
util.inherits(Person,events.EventEmitter)

var James=new Person('james')
var John=new Person('john')
var Kamran=new Person('Kamran')

var array=[James,John,Kamran];

array.forEach((array)=>{
    array.on('speak',(msg)=>{
        console.log(array.name+" / "+msg)
    })
})
James.emit('speak','Hi there')