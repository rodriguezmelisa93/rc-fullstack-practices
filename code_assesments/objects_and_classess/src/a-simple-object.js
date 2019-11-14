const simpleObject = {
    titular: 'Alex',
    saldo: 0,
    ingresar: function (cantidad) {
        this.saldo += cantidad;
    },
    extraer: function (cantidad) {
        this.saldo -= cantidad;
    },
    informar: function (cantidad) {
        return this.saldo;
    }
}

export default simpleObject
