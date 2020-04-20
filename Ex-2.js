

function compareToTen(num){
    p=new Promise((resolve,reject) => {
if(num>50){
    resolve(num+ "   is greater tahn 50,sucess!")
}else{
    reject(num+ " is less than 50,error!")
}
    })
    return p
}

compareToTen(55)
.then(result => console.log(result))
.catch(error => console.log(error))

compareToTen(8)
.then(result => console.log(result))
.catch(error => console.log(error))