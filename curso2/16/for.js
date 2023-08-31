let num = [10, 20, 30, 40, 50]

/* 
* for(let i=0;i<num.length;i++){
*     document.writeln(num[i])
* }
*/

const objs = document.getElementsByTagName('div')

for(i in num){
    console.log(num[i])
}

for(i of num){
    console.log(i)
}

for(o of objs){
    o.innerText = 'ola'
}