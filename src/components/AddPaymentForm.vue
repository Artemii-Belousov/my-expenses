<template>
  <div>
      <input placeholder="Amount" v-model="value" />
      <input placeholder="Category" v-model="category" />
      <input placeholder="Date" v-model="date" />
      <button @click="onSave">Save</button>
  </div>
</template>

<script>
export default {
    name: "AddPaymentdForm",
    data(){
        return{
            value: '',
            category: '',
            date: '',
        }
    },
    computed:{
        getCarrentDate(){
            const today = new Date()
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()
            
            return  `${d}. ${m}.${y}`
        }
    },
    methods:{
        onSave(){
            const data = {
                value: this.value,
                category: this.category,
                date: this.date || this.getCarrentDate,
                id: new Date()
            }
            this.$emit('addNewPayment', data)
        }
    }

}
</script>

<style>

</style>