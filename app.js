// La comunicación entre padres e hijos es por medio de propiedades y la de hijos a padres es atra ves de eventos 


// Crear un componente (Nombre del componente, objeto con la configuración)
Vue.component('CoinDetail', {
  // El componente padre pasa el valor de changeapaercent(o los valores de props) a un hijo
  props: ['coin'],

  // Caso contrario pasa los valores al padre
  data() {
    return {
      showPrices: false,
      value: 0,
    }
  },


  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices

      // Emitir un evento
      this.$emit('change-color',
        this.showPrices ? '#FF96C8' :'#3D6D3D')
    }


  },

  computed: {
    title() {
      return `${this.coin.name} - ${this.coin.symbol}`
    },


    // Chequear si tiene algun valor si no , devuelve cero
    convertedValue() {
      if (!this.value) {
        return 0
      }

      return this.value / this.coin.priceToday
    }
  },

  watch: {
    showPrices(newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  },

  // El contenido del componente se define en template
  template:
    ` <div>
        <img v-bind:src="coin.img" v-bind:alt="coin.name" 
        v-on:mouseover="toggleShowPrices"
        v-on:mouseOut="toggleShowPrices">
        <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red' ">{{ title }}
            <span v-if="coin.changePercent > 0">👍</span>
            <span v-else-if="coin.changePercent < 0">👎</span>
            <span v-else>🤞</span>

            <span v-on:click="toggleShowPrices"> {{ showPrices ? '🙈' : '🙉' }} </span>
        </h1>
        <input type="number" v-model="value">
          <span>{{ convertedValue }}</span>


          <slot name="link"></slot>


        <ul v-show=showPrices>
          <li 
            class="uppercase"
            v-bind:class="{ orange: price.value  == coin.priceToday, red: price.value < coin.priceToday, green: price.value > coin.priceToday }"
            v-for="(price, indice) in coin.pricesWithDays"
            v-bind:key="price.day"> 
            {{ indice }} = {{price.day}} = {{ price.value }}
          </li>
        </ul>

      </div>
      `
})


new Vue({
  el: '#app',

  data() {
    return {
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',

        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: -10,
        priceToday: 8400,
        pricesWithDays: [
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

  // Enva¿ar parametro de hijo a padre
  methods: {
    updateColor(color) {
      this.color = color || this.color
        .split('')
        .reverse()
        .join('')
    }
  },

  // Sirve para tener información de una api rest o servidor 
  created(){
    console.log("Created...")
  },

  // 
  mounted(){
    console.log("Mounted...")
  }







    // END new Vue
  })