var arrayofwords=['bat','cat','mat']
var arrWords=['bat',8,false]

function toCap(array){
     return new Promise((resolve,reject) => {
         let capsArray=array.map(word =>{
             if(typeof word === 'string'){
                 return word.toUpperCase()
             }else{
                 reject('Error: all items are not string')
             }
         })
    resolve(capsArray)
    })
}

function sortWords(array){
    return new Promise((resolve,reject)=>{
        if(array){
            array.forEach((el)=>{
                if(typeof el !== 'string'){
                    reject('Error:not sorting')
                }
            })
            resolve(array.sort());
        }else{
            reject('Error:not sorting')
        }
        
    })
}

toCap(arrayofwords)
.then(sortWords)
.then(result => console.log(result))
.catch(error => console.log(error))

toCap(arrWords)
.then(sortWords)
.then(result => console.log(result))
.catch(error => console.log(error))