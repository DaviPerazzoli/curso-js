function* fibonacciGenerator(numero){
    let x = 0
    let seq1 = 0
    let seq2 = 1
    
    while(x < numero){
        if(x == 1){
            yield seq1
            continue
        }else if(x == 2){
            yield seq2
            continue
        }
        res = seq1 + seq2
        yield res
        seq1 = seq2
        seq2 = res
        x++
    }
}

const gen = fibonacciGenerator(7)

for(const num of gen){
    console.log(num)
}