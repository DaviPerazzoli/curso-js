export const formatarData=(data, modo='-')=>{
    let dataFormatada;
    if(modo=='-'){
        dataFormatada = data.split('/');
        dataFormatada = `${dataFormatada[2]}-${dataFormatada[1]}-${dataFormatada[0]}`;
    }else if(modo=='/'){
        dataFormatada = data.split('-');
        dataFormatada = `${dataFormatada[2]}/${dataFormatada[1]}/${dataFormatada[0]}`;
    }
    
    return dataFormatada;
}