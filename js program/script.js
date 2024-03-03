// function loadingData(){
//     return new Promise((resove,reject)=>{
//         setTimeout(()=>{
//             console.log(resove,"loadingData");
//             reject();
//         },1000)

//     })

//   }
//   function collectingData(){
//     return new Promise((resove,reject)=>{
//         setTimeout(()=>{
//             console.log(resove,"collectingData");
//             resove();
//         },2000)

//     })

//   }
//   function approvingData(){
//     console.log(3,"loadingData")



//   }
//   function approvedData(){
//     console.log(4,"loadingData")

//   }
//   async function Ex(){
//     await loadingData();
//     await collectingData();
//     await approvingData();
//     await approvedData();


//   }
//   Ex().then().catch(console.error("err"));



// let obj1={
//     fname:"ankit",
//     age:24,
// };

// obj2=Object.create(obj1)
// obj2.lname="amit";
// console.log(obj2.lname);


// function Person(name, age) {

//     this.name = name;
//     this.age = age;

// }
// Person.prototype.greet = function () {
//     console.log('hello{this.name}')
// }
// let user = new Person("john", 8)
// user.greet();
// console.log(user); 



// console.log("first");
// setTimeout(() => {
//     console.log("second");

// }, 2000);


// function fun(){
//     console.log("third");

// }
// setTimeout(fun,5000)



// call back
// function add(a,b,callback){
//     let sum=a+b;
//     callback(sum);

// }
// add(5,10,value)
// function value(val){
//     console.log(val);

// }


// call back hell

// function loadingData(callback) {
//     setTimeout(() => {
//         console.log(1, "loadingData")
//         callback();

//     }, 4000)
// }
// function collectingData(callback) {
//     setTimeout(() => {
//         console.log(2, "collectingData")
//         callback();

//     }, 1000)
// }
// function approvingData() {
//     setTimeout(() => {
//         console.log(3, "approvingData")

//     }, 5000)
// }
// function approvedData() {
//     setTimeout(() => {
//         console.log(4, "approvedData")

//     }, 2000)
// }
// loadingData(function(){
//     collectingData(function(){
//         approvedData();
// approvedData();

//     });


// });


// function fun(task){
//     return new Promise((resolve,reject)=>{
        
//         if(task){
//             resolve ("complete");
//         }else{
//             reject("not complete");
//         }
//     })
// }

// let onResolve=(res)=>{
//     console.log(res)
// }
// let onReject=(err)=>{
//     console.log(err)
// }
// fun(true).then(onResolve).catch(onReject);


// var a=1
// function outsinde(){
//     console.log(1,a)
//     function inside(){
//         // var a=2;
//         console.log(2,a);

//     }
//     inside();
// }
// outsinde();


// let num=[10,20,30,40,500,60,70,90];

// let a=num.filter((val)=>{
//     if(val>=10 && val<=25){
//         return val;
//     }
// })
// console.log(a);
// console.log(num);

// let num=[10,20,30,40,500,60,70,90];

// var sum=num.reduce(function(acc,number){
//     return acc+number;
// })
// console.log(sum)