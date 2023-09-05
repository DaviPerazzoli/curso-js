let valores=[1,2]

const op=[
    (val)=>{
        let res=0
        for(v of val){
            res+=v
        }
        return res
    },
    (val)=>{
        let res=1
        for(v of val){
            res*=v
        }
        return res
    },
    (val)=>{
        for(v of val){
            console.log(v)
        }
    }
]

console.log(op[0](valores))
console.log(op[1](valores))
op[2](valores)