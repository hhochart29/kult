<template>
  <div class="date">{{ date }}</div>
</template>

<script>
import mapState from 'vuex'

export default {
  computed: {
    ...mapState({
      date: 'date'
    })
  }
}
</script>
