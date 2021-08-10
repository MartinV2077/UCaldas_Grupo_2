//Creacion Atributos dinamicos Sprint_1

//Instancia de VUE Sp1
new Vue({
//Propiedad Sp1
  el: '#app',
//Funcion data que devuelve objeto return Sp1
  data () {
    return {
//Propiedades Sp1
        name: 'Bitcoin',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
//Propiedad nueva, tarea control flujo con directivas, Sp2
        changePercent: -10,
//Array plano, propiedad nueva, tarea renderizado listas, precio Bitcoin,  Sp2
        prices:[8400, 7900, 8200, 9000, 9400, 10000, 10200],
//Array de objetos con propiedades day y value, tarea renderizado listas, precio Bitcoin,  Sp2
      pricesWithDays:[
        { day: 'Lunes', value: "8400" },
        { day: 'Martes', value: "7900" },
        { day: 'Miercoles', value: "8200" },
        { day: 'Jueves', value: "9000" },
        { day: 'Viernes', value: "9400" },
        { day: 'Sabado', value: "10000" },
        { day: 'Domingo', value: "10200" },

      ]

    }
  }

}) 

   