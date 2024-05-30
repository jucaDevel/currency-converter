<template>
  <CurrencyConverter/>
</template>

<script>

import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    CurrencyConverter: defineAsyncComponent(()=> import('@/components/CurrencyConverter.vue'))
  }
}
</script>
