function promises() {
    const successfulPromise=timeout(100).then(result =>'success: ${result}')
    const failingPromise=timeout(200,true).then(null,error => Promise.reject('niepowowdzenie: ${error}'),
    )

const recoveredPromise = timeout(300,true).then(null,error => Promise.resolve('nie powiodło się i odzyskano: ${error}'),
)
successfulPromise.then(log,logError)
failingPromise.then(log,logError)
recoveredPromise.then(log,logError)
}
 function asyncAwaits(){
     async function successfulAnycAwait(){
         const result=await timeout(100)
         return `sukces: ${result}`
     }
     async function failedAsyncAwait(){
         const result = await timeout(200,true)
         return `nie powiodło się:${result}`
     }
     async function recoveredAsyncAwait(){
         let result
         try{
             result = await timeout(300,true)
return `nie powiodło się: ${result}`//to nie będzie wykonane
         }catch(error){
             return `nie powiodło się i odzyskano: ${error}`
         }
     }
successfulAnycAwait().then(log,console.logError)
failedAsyncAwait().then(log,logError)
recoveredAsyncAwait().then(log,logError)
    }

    function log(...args){
        console.log(...args)
    }
    function logError(...args){
        console.error(...args)
    }
    //to jest najważniejszy elemnt wszystkich asymchronicznych działań
    function timeout(duration=0,shouldReject=false){
        return new Promise((resolve,reject)=>{
            setTimeout(() =>{
                if(shouldReject){
                    reject(`rejected after ${duration}ms`)
 }else{
     resolve(`resolved after ${duration}ms`)
 }
            },duration)
        })
    }