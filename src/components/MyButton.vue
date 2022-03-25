<template>
  <div>
      <button @click="onClick">Clicked{{counter}}</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            counter: 0,
        }
    },
    methods:{
        onClick(){
            this.counter ++
        }
    },
    created(){
        this.counter = 10
    }
}
</script>

<style>

</style>