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
        
    }
  }
})