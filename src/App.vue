<template> 
  <div id="app"> 
    <HeaderH01 /> 
    <router-view /> 
  </div> 
</template> 
 
<script> 
import HeaderH01 from './components/HeaderH01.vue'; 
 
export default { 
  components: { HeaderH01 }, 
}; 
</script> 
 
<style> 
/* Global styles */ 
</style>