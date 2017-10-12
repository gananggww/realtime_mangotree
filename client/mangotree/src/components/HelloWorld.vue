<template>
  <div class="">
    <div class="ui container">
      <div class="ui stackable two column grid segment">
        <div class="eight wide column">
          <div class="ui">
            <img v-if="age5" src="../assets/mango/2.png" alt="">
            <img v-else-if="age10" src="../assets/mango/4.png" alt="">
            <img v-else-if="age20" src="../assets/mango/6.png" alt="">
            <img v-else-if="age30" src="../assets/mango/8.png" alt="">
            <img v-else-if="tree.healthyStatus === false" src="../assets/mango/12.png" alt="">
          </div>
        </div>
        <div class="eight wide column">
         <div class="ui segment">
           <Table/>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table'
export default {
  components: {
    Table
  },
  firebase () {
    return {
      tree: {
        source: this.$db.ref('tree'),
        asObject: true
      }
    }
  },
  computed: {
    age5 () {
      return this.tree._age <= 2 && this.tree.healthyStatus
    },
    age10 () {
      return this.tree._age <= 5 && this.tree.healthyStatus
    },
    age20 () {
      return this.tree._age <= 8 && this.tree.healthyStatus
    },
    age30 () {
      return this.tree._age <= this.tree.maxAge && this.tree.healthyStatus
    }
  },
  created () {
    console.log(this.tree.healthyStatus)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
