export const formatDataTime = () => {
    let dataAtual = new Date();

    const day = String(dataAtual.getDate()).padStart(2, '0');  
    const month = String(dataAtual.getMonth() + 1).padStart(2, '0');  //
    const year = dataAtual.getFullYear();
    const hours = String(dataAtual.getHours()).padStart(2, '0');  
    const minutes = String(dataAtual.getMinutes()).padStart(2, '0');  
    const seconds = String(dataAtual.getSeconds()).padStart(2, '0'); 

    const dataTime = `${day}/${month}/${year}-${hours}:${minutes}:${seconds}`;
    
    return dataTime;
}
