<template>
  <div class="v-flights">
    <v-flights-item v-for="flight in filterData" :key="flight.id" :flight="flight"/>
  </div>
</template>

<script>
import vFlightsItem from './v-flights-item'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    vFlightsItem
  },
  data() {
    return {
      filtration: []
    }
  },
  computed: {
    ...mapGetters([
      'flights',
      'selected',
      'categories'
    ]),
    filterData () {
      let data = []
      if (this.categories.length) {
        data = this.filtration.filter(item => 
          this.categories.indexOf(item.itineraries[0][0].carrier_name.toString()) != -1
        )
      } else {
        data = this.filtration
      }
      return data
    }
  },
  methods: {
    ...mapActions([
      'get_flights'
    ]),
    filtrationFlights() {
      if (this.selected !== 'Все') {
        this.filtration = this.flights.filter(item => {
          return item.itineraries[0][0].segments[0].dest.includes(this.selected)
        })
      } else {
        this.filtration = this.flights
      }
    }
  },
  watch: {
    selected() {
      this.filtrationFlights(this.selected)
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
