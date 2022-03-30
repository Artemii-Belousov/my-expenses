<template>
  <div>
      <button @click="visible = !visible">{{ btnText }}</button>
    <div v-show="visible">
      <input placeholder="Amount" v-model.number="value" />
      <div class="categoryList" v-if="categoryList">
        <select v-model="category">
          <option v-for="(option, idx) in categoryList" :key="idx">{{ option }}</option>
        </select>
      </div>
      <!-- <input placeholder="Category" v-model="category" /> -->
      <input placeholder="Date" v-model="date" />
      <button @click="onSave">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentdForm",
  data() {
    return {
      value: "",
      category: "",
      date: "",
      visible: false,
    };
  },
  computed: {
    getCarrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();

      return `${d}. ${m}.${y}`;
    },
    btnText(){
        if(this.visible == false){
            return "Add new costs +"
        }
            return "Hide"
        
    },
    categoryList(){
      return this.$store.getters.getCategoryList
    }
  },
  methods: {
    onSave() {
      const data = {
        value: this.value,
        category: this.category,
        date: this.date || this.getCarrentDate, 
        id: new Date(),
      };
      this.$emit("addNewPayment", data);
    },
  },
  async mounted(){
    if(!this.categoryList.length){
      await this.$store.dispatch('fetchCategoryList')
      this.category = this.categoryList[0]
    }
  }
};
</script>

<style>
</style>