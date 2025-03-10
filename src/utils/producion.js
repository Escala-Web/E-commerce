export const producion = (bool) => {

    let url;

    if(bool) {
        console.log(window.location.host)
    }else {
        url = 'http://192.168.15.9/api-php/';
    }

    return url;

}