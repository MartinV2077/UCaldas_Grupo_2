//Componente VUE , Tarea Modularizacion para la comunicacion entre componentes en las propiedades.- Sprint 3
Vue.component('CoinDetail', {
  //Propiedad coin, Tarea Modularizacion Sp3
  props: ['coin'],
  //funcion data devuelve objeto, Tarea Modularizacion para la comunicacion entre componentes en las propiedades.- Sprint 3

  data () {
    return {
//propiedad showprices para ocultar/mostrar lista de precios, tarea Manejo de eventos,  Sp2

      showPrices: false,
      value: 0
    }
  },

//Metodo que permite toggle en showprices, Tarea Modularizacion para la comunicacion entre componentes en las propiedades.- Sprint 3

  methods: {
    toggleShowPrices () {
      this.showPrices = !this.showPrices


      this.$emit('change-color',
        this.showPrices ? 'FF96C8' : '3D3D3D')
    }
  },

//Objeto computed que devuelve valores con propiedad computada title, tarea Creacion computed y watchers,  Sp2
//title chequea valores o devuelve 0, Tarea Modularizacion para la comunicacion entre componentes en las propiedades.- Sprint 3

computed: {
  title () {
    return `${this.coin.name} - ${this.coin.symbol}`
  },
convertedValue() {
  if (!this.value) {
    return 0
  }
  return this.value / this.coin.price
}
},

//template en componente con codigo HTML, Tarea Modularizacion para la comunicacion entre componentes en las propiedades.- Sprint 3

template: `
  <div>
    <img 
      v-on:mouseover="toggleShowPrices"
      v-on:mouseout="toggleShowPrices"  
      v-bind:src="coin.img" v-bind:alt="coin.name">
    <h1 
      v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
      {{ title }}
      <span v-if="coin.changePercent > 0">👍</span>
      <span v-else-if="coin.changePercent < 0">👎</span>
      <span v-else>🤞</span>
      <span v-on:click="toggleShowPrices">
      {{ showPrices ? '🙈' : '🐵' }}</span>
    </h1>
    <input type="number" v-model="value">
      <span>{{ convertedValue }}</span>
      <ul v-show=showPrices>
      <li
        class="uppercase"
        v-bind:class="{ orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price }" 
        v-for="(p, i) in coin.pricesWithDays"
        v-bind:key="p.day">
        {{ i }} - {{ p.day }} - {{ p.value }}  
      </li>
    </ul>
</div>
`
})



//Creacion Atributos dinamicos Sprint_1

//Instancia de VUE Sp1
new Vue({
//Propiedad Sp1
  el: '#app',
//Funcion data que devuelve objeto return Sp1
  data () {
    return {
//Objeto btc, Tarea Modularizacion para la comunicacion entre componentes en las propiedades.- Sprint 3

    btc: {
//Propiedades Sp1
        name: 'Bitcoin',
//propiedad symbol, tarea Creacion computed y watchers,  Sp2
        symbol: 'BTC',

        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
//Propiedad nueva, tarea control flujo con directivas, Sp2
        changePercent: -10,
//Variable que define el precio del Bitcoin, Tarea Creacion de Clases en tiempo real - Sp2
        price: 8400,


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

    },
      color: 'f4f4f4',
  }

},
  


//propiedad methods para controlar eventos en vista, cambia a valores contrarios, tarea Manejo de eventos,  Sp2
  //Objeto methods, Tarea Modularizacion para la comunicacion entre componentes en las propiedades.- Sprint 3

    
    methods: {
      updateColor (color) {
        this.color = color || this.color
          .split('')
          .reverse()
          .join('')

      }
    }

})
 

  