export const FormatToReal = (money) => {

    return money.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

}