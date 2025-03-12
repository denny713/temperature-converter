<template>
    <div>
      <h2>Konverter Berat (Kg ⇄ Gram)</h2>
      <input v-model.number="kg" placeholder="Masukkan kg" @input="convertToGram" />
      <p>{{ gram }} gram</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return { kg: 0, gram: 0 };
    },
    methods: {
      convertToGram() {
        this.gram = this.kg * 1000;
      }
    }
  };
  </script>
  