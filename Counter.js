var Counter = function (array) {
    return console.log('There are ' + array.length + 'is This');
}
var Name = function (name) {
    return console.log('His Name is '+name)
}
// Counter(["Ali","Asghar","Karani"])
module.exports.Count= Counter;
module.exports.Nm= Name;