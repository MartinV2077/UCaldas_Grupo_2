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
//propiedad symbol, tarea Creacion computed y watchers,  Sp2
        symbol: 'BTC',

        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
//Propiedad nueva, tarea control flujo con directivas, Sp2
        changePercent: -10,
//Variable que define el precio del Bitcoin, Tarea Creacion de Clases en tiempo real - Sp2
        priceToday: 8400,
//Propiedad Value en 0,  Tarea Modelado Two way data binding - Sp2
        value: 0,

        color: 'f4f4f4',

//Array de objetos con propiedades day y value, tarea renderizado listas, precio Bitcoin,  Sp2
      pricesWithDays:[
        { day: 'Lunes', value: 8400 },
        { day: 'Martes', value: 7900 },
        { day: 'Miercoles', value: 8200 },
        { day: 'Jueves', value: 9000 },
        { day: 'Viernes', value: 9400 },
        { day: 'Sabado', value: 10000 },
        { day: 'Domingo', value: 10200 },

      ],

//propiedad showprices para ocultar/mostrar lista de precios, tarea Manejo de eventos,  Sp2
      showPrices: false,
    }
  },
  //Objeto computed que devuelve valores con propiedad computada title, tarea Creacion computed y watchers,  Sp2
  computed:{
    title(){
      return `${this.name} - ${this.symbol}`
    

  },
//Propiedad computada que reacciona segun value, Tarea Modelado Two way data binding - Sp2
  convertedValue(){
    if (!this.value){
      return 0
    }

    return this.value / this.priceToday
    }
  },
//funcion watch para cambios en los valores, tarea Creacion computed y watchers,  Sp2
  watch:{
    showPrices(newValue, oldValue){
      console.log(newValue, oldValue)
    }
  },

//propiedad methods para controlar eventos en vista, cambia a valores contrarios, tarea Manejo de eventos,  Sp2
  methods: {
    toggleShowPrices(){
      this.showPrices = !this.showPrices
//Array de color ajustado hacia un string para un cambio a tono contrario, Tarea ajuste de estilos en tiempo real - Sp2
      this.color = this.color.split('')
        .reverse().join('')

    }
  }

}) 

   