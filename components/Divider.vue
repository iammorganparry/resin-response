<template>
  <div class='divider-border'>
  <span class="primary--text divider-text">
    {{dividerText}} <!--Padding is optional-->
  </span>
  </div>
</template>

<script>
export default {
  props: {
    dividerText:{
      type: String
    }
  }
}
</script>

<style scoped>
.divider-border {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid rgba(0,0,0,0.12);
  text-align: center
}
.divider-text {
  font-size: 40px; background-color: white; padding: 0 10px 0 10px;
}


@media only screen and (max-width: 850px) {
  .divider-border {
  width: 100%;
  height: 25px;
}
.divider-text {
  font-size: 30px; background-color: white; padding: 0 10px 0 10px;
}
}
</style>
