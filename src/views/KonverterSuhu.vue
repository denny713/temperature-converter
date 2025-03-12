<template>
    <div>
      <h2>Konverter Suhu (Celcius ⇄ Fahrenheit)</h2>
      <input v-model.number="celcius" placeholder="Masukkan Celcius" @input="convertToFahrenheit" />
      <p>{{ fahrenheit }}°F</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return { celcius: 0, fahrenheit: 0 };
    },
    methods: {
      convertToFahrenheit() {
        this.fahrenheit = (this.celcius * 9/5) + 32;
      }
    }
  };
  </script>
  