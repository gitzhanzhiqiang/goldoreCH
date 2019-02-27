<template>
  <div>
    <header-nav></header-nav>
    <div>
      <router-view style="padding-top: 100px;"></router-view>
    </div>
    <footer-nav style="height:400px;width: 100%;"></footer-nav>
  </div>
</template>
<script>
import headerNav from './header.vue';
import mainNav from './mainNav.vue';
import footerNav from './footerNav.vue';
  export default {
  components: {
    headerNav,
    mainNav,
    footerNav
  },
  computed: {
  },
  data(){
    return{
    }
  },
  created() {
  },
  methods: {
    
  	
  }
}
</script>
<style type="text/css">
</style>