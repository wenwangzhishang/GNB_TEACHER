<template>
 <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>

<script>
import store from '@/store'
import modules from '../modules/store'

export default {
  name: 'myDownload',
  beforeCreate () {
    store.registerModule('myDownload', {
      ...modules
    })
  }
}
</script>
