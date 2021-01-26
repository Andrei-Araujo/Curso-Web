let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Eu sou a promise 1 ');
        //reject('Eu sou a promise 1');
    },3000);
});
let promise2 = new Promise((resolve,reject)=>{
     setTimeout(()=>{
         /* alternar entre reject e resolve e ver o resultado */
         resolve('Eu sou a promise 2');
        //reject('Eu sou a promise 2');
    },2000);
})

//Promise.all([promise1,promise2]).then().catch()
//Promise.all([promise1,promise2]).then(()=>{}).catch(()=>{})
Promise.all([promise1,promise2])
.then(([resultado1,resultado2])=>{
    console.log("Todas as Promises foram deram certo");
    console.log("Resolvido: "+resultado1);
    console.log("Resolvido: "+resultado2);
})
.catch((error)=>{
    console.log("Uma das promises deu errado");
     console.log("Rejeitado: "+error);
})