<template>
  <option>
    {{flight.itineraries[0][0].segments[0].dest}}
  </option>
</template>

<script>
export default {
  props: {
    flight: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
