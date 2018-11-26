var Counter = function (array) {
    return console.log('There are ' + array.length + 'is This');
}
var Name = function (name) {
    return console.log('His Name is '+name)
}
var check=true;
// Counter(["Ali","Asghar","Karani"])
module.exports={
    Count:Counter,
    Nm:Name,
    ck:check,
}
// module.exports.Count= Counter;
// module.exports.Nm= Name;
// module.exports.ck= check;