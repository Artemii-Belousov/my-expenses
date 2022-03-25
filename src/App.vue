<template>
  <div id="app">
    <div class="wrapper"></div>
      <header>
        <div class="title">My personal costs</div>
      </header>
      <main>
        <AddPaymentdForm @addNewPayment="addData"/>
        <PaymenptDisplay :list="paymentsList"/>
      </main>
  </div>
</template>

<script>
import AddPaymentdForm from './components/AddPaymentForm.vue'
 import PaymenptDisplay from './components/PymentDisplay.vue'

export default {
  name: 'App',
  components: {
    PaymenptDisplay,
    AddPaymentdForm,
  },
  data(){
    return{
      paymentsList: []
    }
  },
  methods:{
    fetchData(){
      return [
        {
          date: '28.03.2022',
          category: 'Food',
          value: 100,
    
        },
        {
          date: '28.03.2022',
          category: 'Thansport',
          value: 200,
         
        },
        {
          date: '28.03.2022',
          category: 'Food',
          value: 150,
          
        },
      ]
    },
    addData(data){
      this.paymentsList.push(data)
    }
  },
  created(){
    this.paymentsList = this.fetchData()
  },
  
}
</script>

<style lang='scss' scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper{
  font-style: 12px;
}
.title{
  font-size: 20px;
}
</style>
