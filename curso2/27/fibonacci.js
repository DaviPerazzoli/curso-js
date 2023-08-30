function* fibonacciGenerator(numero){
    if(numero <=0){
        return
    }

    let primeiro = 0
    let segundo = 1
    yield primeiro

    if(numero >= 2){
        yield segundo
    }
    
    let c = 0
    while(c < numero - 2){
        let res = primeiro + segundo
        yield res
        primeiro = segundo
        segundo = res
        c++
    }
}

const gen = fibonacciGenerator(1)

for(const num of gen){
    console.log(num)
}