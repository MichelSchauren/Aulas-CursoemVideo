        var res = document.querySelector('h2#hres')
        var numero = 0
        var numero2 = 0
        var operador = ''

        function Numero(num) {
        if (numero == 0) {
        numero = num
        }
        else {
           numero += num
        }
        MostrarResultado();
        }

        function Operador(op) {
            operador = op
            numero2 = numero
            numero = 0
            res.innerHTML = ''
        }

        function CalcResult() {
            if (operador == '+') {numero = Number(numero2) + Number(numero)}
            if (operador == '-') {numero = Number(numero2) - Number(numero)}
            if (operador == '*') {numero = Number(numero2) * Number(numero)}
            if (operador == '/') {numero = Number(numero2) / Number(numero)}
            if (operador == '%') {numero = Number(numero2) / 100 * Number(numero)}
            MostrarResultado()
        }

        function MostrarResultado() {
            res.innerHTML = numero
        }

        function ApagarTudo() {
            res.innerHTML = ''
            numero = 0
            operador = ''
        }

        function Apagar() {
            numero = numero.slice(0, numero.length - 1) // não precisa do numero.length
            MostrarResultado()
        }