<template>
  <div>
      <div class="list">
          <div class="item" v-for="(item,i) in list" :key="item">
              <div class="element">{{i + 1}}</div>
              <div class="element">{{item.category}}</div>
              <div class="element">{{item.date}}</div>
              <div class="element">{{item.value}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'PaymentsDisplay',
    props: {
        list: {
            type: Array,
            default: ()=>[]
        }
    }

}
</script>

<style>
    .item{
        display: flex;
    }
    .element{
        width: 100px
    }
</style>