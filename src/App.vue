<template>
  <div id="app">
    <div class="wrapper"></div>
    <header>
      <div class="title">My personal costs</div>
      <div>My total: {{ getFPV }}</div>
    </header>
    <main>
      <AddPaymentdForm @addNewPayment="addData" />
      <PaymenptDisplay :list="currentsElement" />
      <MyPagination :length="paymentsList.length" 
      :n="n" 
      :cur="cur"
      @changePage="onChangePage"
      />

    </main>
  </div>
</template>

<script>
import AddPaymentdForm from "./components/AddPaymentForm.vue";
import PaymenptDisplay from "./components/PymentDisplay.vue";
import {mapActions, mapGetters, mapMutations} from 'vuex';
import MyPagination from "./components/MyPagination.vue"

export default {
  name: "App",
  components: {
    PaymenptDisplay,
    AddPaymentdForm,
    MyPagination,
  },
  data() {
    return {
      n:3,
      cur: 1,
    };
  },
  computed:{
    ...mapGetters([
      'getFullPaymentValue',
      'getPaymentList'
    ]),
    getFPV(){
      return this.$store.getters.getFullPaymentValue
    },
    paymentsList(){
      return this.$store.getters.getPaymentList
    },
    currentsElement(){
      return this.paymentsList.slice(this.n * (this.cur -1), this.n  * (this.cur -1) + this.n)
    }
  },
  actions: {
    ...mapActions([
      'fetchData'
    ])
  },
  methods: {
    ...mapMutations([
      'setPaymentListData'
      ]),
    fetchData() {
      return [
        {
          date: "28.03.2022",
          category: "Food",
          value: 100,
        },
        {
          date: "28.03.2022",
          category: "Thansport",
          value: 200,
        },
        {
          date: "28.03.2022",
          category: "Food",
          value: 150,
        },
      ];
    },
    addData(data) {
      // this.paymentsList.push(data);
      this.$store.commit('addDataPaymentList', data)
    },
     onChangePage(p){
           this.cur = p
         },
  },
  created() {
    console.log(this.$store);
    // Global State
    // this.$store.commit("setPaymentListData", this.fetchData());
    // this.setPaymentListData(this.fetchData());
    // this.$store.dispatch('fetchData')
    // this.$store.dispatch('fetchCategoryList')
    
  },
  mounted(){
    this.$store.dispatch('fetchData')
  }
};
</script>

<style lang='scss' scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  font-style: 12px;
}
.title {
  font-size: 20px;
}
</style>
