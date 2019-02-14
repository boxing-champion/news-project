<template>
  <div>
    <input type="text" v-model="num">
    <transition-group v-on:before-enter="beforeEnter"
                      v-on:enter="enter"
                      v-on:leave="leave">
      <li v-for="(item,index) of computedList" :key="item.msg" :data-index="index">
        {{item.msg}}
      </li>
    </transition-group>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import Velocity from "velocity-animate"

  export default {
    name: "home-page",
    data() {
      return {
        num: "",
        list: [
          {msg: "1111111111"},
          {msg: "2222222222"},
          {msg: "3333333333"},
          {msg: "4444444444"},
        ]
      }
    },
    mounted() {
      this.$store.dispatch("getMun")
    },
    computed: {
      ...mapState(["mum"]),
      computedList: function () {
        var vm = this
        return this.list.filter(function (item) {//模糊搜索
          return item.msg.toLowerCase().indexOf(vm.num.toLowerCase()) !== -1
        })
      }
    },
    methods: {
      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.height = 0
      },
      enter: function (el, done) {
        var delay = el.dataset.index * 150
        setTimeout(function () {
          Velocity(
            el,
            {opacity: 1, height: '1.6em'},
            {complete: done}
          )
        }, delay)
      },
      leave: function (el, done) {
        var delay = el.dataset.index * 150
        setTimeout(function () {
          Velocity(
            el,
            {opacity: 0, height: 0},
            {complete: done}
          )
        }, delay)
      }
    },
  }
</script>

<style scoped>

</style>
