<template>
  <div class="v-search">
    <select v-model="dest">
      <option v-for="option in destOptions" :key="option.index">
        {{option}}
      </option>
    </select>
    <img src="../../assets/img/filter/search.png" alt="">
    <select v-model="origin">
      <option>Все</option>
      <option>Алматы</option>
    </select>
    <!-- <div class="button button_search" @click="search">Найти</div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'flights'
    ]),
    destOptions() {
      return this.getOptions('dest')
    }
  },
  data() {
    return {
      dest: 'Все',
      origin: 'Все',
      filtration: []
    }
  },
  methods: {
    ...mapActions([
      'get_flights'
    ]),
    ...mapMutations([
      'set_selected'
    ]),
    getOptions(key) {
      let result = ['Все']
      this.filtration.map((item) => {
          result.push(item.itineraries[0][0].segments[0][key].toString())
      })
      return result = [...new Set(result)]
    },
    searchFlights() {
      const dest = this.dest
      this.set_selected(dest)
    }
  },
  watch: {
    dest() {
      this.searchFlights(this.dest)
    }
  },
  mounted() {
    this.get_flights()
    .then(() => {
      this.filtration = [...this.flights]
    })
  }
}
</script>

<style lang="scss">
.v-search {
  background: #fff;
  margin-bottom: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  select {
    width: 209.39px;
    height: 44px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    background: #e5e5e5;
  }
  img {
    margin-right: 15px;
    margin-left: 15px;
  }
  .button_search {
    margin-left: 10px;
  }
}
</style>
