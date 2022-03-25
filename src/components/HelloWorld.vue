<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <hr />

    <!-- <input type="text" @blur="onValidator"> -->
    <input type="number" v-model.number="operand1">
    <input type="number" v-model.number="operand2">

    {{result}}
    {{ error }}

<div>
  <button @click="calc('+')">+</button>
  <button @click="calc('-')">-</button>
  <!-- <button @click="multiply">*</button>-->
  <button @click="calc('/')">/</button> 
</div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      operand1: 0,
      operand2: 0,
      result: 0,
      error: '',
      }
  },
  methods: {
    calc(operarion = '+'){
      this.error == ''
      switch(operarion){
        case "+":
          this.add()
          break;
        case "-":
          this.minus()
          break;
        case "/":
          this.divide()
          break;
      }
    },
    add(){
      this.result = this.operand1 + this.operand2
    },
    minus(){
     
      this.result = this.operand1 - this.operand2
    },
    divide(){
      
      if(this.operand2 === 0){
        this.error = 'На 0 делить нельзя'
        return;
      }
      else{
      this.result = this.operand1 / this.operand2
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
