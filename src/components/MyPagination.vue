<template>
  <div :class="[$style.wrp]">
      <div  class="wrp__item" @click="onClick(cur - 1)">-</div>

        <div
        v-for="i in amount" 
        :key="i" @click="onClick(i)" 
        :class="{[$style.active]: cur === i}"
        >
        {{ i }}
        </div>

      <div  class="wrp__item" @click="onClick(cur + 1)">+</div>
  </div>
</template>

<script>
export default {
    name: 'MyPagination',
    props: {
        length: Number,
        n: Number,
        cur: Number,
    },
    computed: {
        amount(){
            return Math.ceil(this.length / this.n)
        }
    },
    methods: {
         onClick(p){
             if (p < 1 || p > this.amount) {
                 return
             }
             this.$emit('changePage', p)
         },
        
    },


}
</script>


<style module lang="scss">
.wrp {
  display: flex;
  & > div {
    padding: 10px;
    &.active {
      background: #ccc;
    }
  }
}
</style>