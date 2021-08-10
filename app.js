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

//Array de objetos con propiedades day y value, tarea renderizado listas, precio Bitcoin,  Sp2
      pricesWithDays:[
        { day: 'Lunes', value: "8400" },
        { day: 'Martes', value: "7900" },
        { day: 'Miercoles', value: "8200" },
        { day: 'Jueves', value: "9000" },
        { day: 'Viernes', value: "9400" },
        { day: 'Sabado', value: "10000" },
        { day: 'Domingo', value: "10200" },

      ],

//propiedad showprices para ocultar/mostrar lista de precios, tarea Manejo de eventos,  Sp2
      showPrices: false,
    }
  },
//propiedad methods para controlar eventos en vista, cambia a valores contrarios, tarea Manejo de eventos,  Sp2
  methods: {
    toggleShowPrices(){
      this.showPrices = !this.showPrices

    }
  }

}) 

   