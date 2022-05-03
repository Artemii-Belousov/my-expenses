<template>
  <div class="wrapper">
    <header>
      <div class="title">My personal costs</div>
    </header>
    <main>
      <!-- <div @click="">добавить платеж категории Food с ценой 200</div> -->
      <!-- <div @click="addCategoryFood">добавить платеж категории Food с ценой 200</div> -->
      
      <!-- <button @click="showForm">{{ textBtn }}</button> -->
      <div>
        <AddPaymentForm @addNewPayment="addData" />
      </div>
      <PaymentDisplay :list="carrentElement" />
      <MyPagination
        :length="paymentsList.length"
        :n="n"
        :cur="cur"
        @changePage="onChangePage"
      />
    </main>
  </div>
</template>

<script>
import AddPaymentForm from "../components/AddPaymentForm.vue";
import PaymentDisplay from "../components/PymentDisplay.vue";
import MyPagination from "../components/MyPagination.vue";
export default {
  name: "PageDashboard",
  components: {
    PaymentDisplay,
    AddPaymentForm,
    MyPagination,
  },
  data() {
    return {
      // showBtnAdd: false,
      // textBtn: "Показать форму",
      n: 5,
      cur: 1,
    };
  },
  methods: {
    // showForm() {
    //   if (this.showBtnAdd === false) {
    //     this.showBtnAdd = true;
    //     this.textBtn = "Скрыть форму";
    //   } else {
    //     this.showBtnAdd = false;
    //     this.textBtn = "Показать форму";
    //   }
    // },
    addData(data) {
      this.$store.commit("addDataPaymentList", data);
    },
    onChangePage(namberPage) {
      this.cur = namberPage;
    },
  },
  // created() {
  //   this.$store.dispatch("fetchData");
  // },
  computed: {
    paymentsList() {
      return this.$store.getters.getPaymentList;
    },
    carrentElement() {
      return this.paymentsList.slice(
        this.n * (this.cur - 1),
        this.n * (this.cur - 1) + this.n
      );
    },
  },
  created(){
    console.log(this.$store)
  },
  async mounted(){
    // console.log('mount');
    await this.$store.dispatch("fetchData");
    this.cur = Number(this.$route.params.page)
  },
};
</script>

<style scoped>
.title{
  color: #42b983;
}
</style>