<template>
  <div class="home">
  <LED/>
  </div>
</template>

<script>
// @ is an alias to /src
import LED from '@/components/led.vue'

export default {
  name: 'Home',
  components: {
    LED
  }
}
</script>
