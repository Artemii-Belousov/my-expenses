<template>
  <div>
      <div class="list">
          <div class="item">
              <div class="element bold">#</div>
              <div class="element bold">Category</div>
              <div class="element bold">Date</div>
              <div class="element bold">Value</div>
          </div>
          <div class="item" v-for="(item,i) in list" :key="i">
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
    .bold{
        font-weight: 600;
    }
</style>