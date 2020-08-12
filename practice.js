// let subscritionCounter = 0;
// let hasSubscribe = false;

// const intervalId= setInterval(() => {
//     if(subscritionCounter === 3 || hasSubscribe ){
//         clearInterval(intervalId);
//         return;
//     }
//     console.log('Подпишись на рассылку')
//     hasSubscribe = false;
//     subscritionCounter +=1;
// }, 1000);


// const toShowDelay = function(delay) {
//     const promise = new Promise((resolve,reject) => {
//         setTimeout(() => {console.log(resolve(delay))},delay)
//     })
//     console.log(delay);
//     return promise;
// };

// const logger = (ms) =>console.log(`функция выполнилась с задержкой ${ms}`);

// toShowDelay(0).then(logger);
// toShowDelay(1000).then(logger);
// toShowDelay(660).then(logger);
// console.log(toShowDelay(0));

// const students = [{
//     name: 'user1',
//     student: true,
//     age: 21,
// },
// {
//     name: 'user2',
//     student: true,
//     age: 23,
// },{
//     name: 'user3',
//     student: true,
//     age: 20,
// },{
//     name: 'user4',
//     student: false,
//     age: 21,
// }];
// const updateStudentStatus = function(arr,name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const newStudent = arr.find((elem)=>{
//                if (elem.name===name) {!elem.student;
//             resolve (elem)}
            
//             else{
//                 reject('dada')
//             }
//         });
         
            
//         },0)
//     });
// };

// function toShowStudent(student){
//     console.log(student);
// }
// updateStudentStatus(students,'user1').then(toShowStudent);
// updateStudentStatus(students,'user131').then(toShowStudent).catch(error=>console.log(error));

// const toSearchStudent = function(arr,min,max) {
//     return new Promise((res,rej)=> {
//         setTimeout(() => {
//         const newArr = arr.filter((student) => student.age >= min & student.age <= max)
//         ;
//         if(newArr.length)
//         {res(newArr);}
//         else{rej('нет');
//     }

//     },0);
// });
// }
// const toShowStudent = function (elem){
//     console.log(elem);
// };
// const greeting = function(){
//     console.log("hello")
// }
// toSearchStudent(students,12,25).then(toShowStudent).finally(greeting)


// const product1 = {
//     id:1,
//     price:100,
//     count : 10
// }

// const product2 = {
//     id:2,
//     price:200,
//     count : 45
// }

// const product3 = {
//     id:3,
//     price:400,
//     count : 32
// }

// const product4 = {
//     id:4,
//     price:100,
//     count : 35
// }


// const toGetSum = function(obj,num){
//     return new Promise((res,rej)=>{setTimeout(()=>{
// if(obj.count >= num){
//     obj.price * num;
//     res(obj.price*num)}
// else
//  {res(`у этого продукта ${obj.id} осталось ${obj.count} единиц`)}
//     },1000)})
// };
// const log = function(sum){
//     console.log(`сумма вашего заказа ${sum} `)
// };
// toGetSum (product1,31).then(log);

// const toGetSum = function(obj){
//     let num = Math.floor(Math.random()*(20-1) + 1);
//     let ms = Math.floor(Math.random()*(3000-1000+1) + 1000)
//     console.log(num);
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
// if(obj.count >= num){
//     obj.price * num;
//     res({sum: obj.price*num, delay:ms});
// }
// else
//  {
//      rej(obj);
//     }
//     },ms);
// });
// };

// const errLog = function ({ id, count }) {
//     console.log(` в данном обькте ${id} осталось ${count} единиц`)
// };
// const  succesLog = function ({ sum, delay }) {
//     console.log(`ваш заказ на ${sum} будет выполнен через ${delay}`);
// };
// toGetSum(product4, 1000).then(succesLog).catch(errLog);
// toGetSum(product2, 789).then(succesLog).catch(errLog);
// console.log(toGetSum(product4,1000));