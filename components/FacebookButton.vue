<template>
   <a :href="data.url" target="_blank">
          <i class="facebook-icon fa fa-facebook-square"></i>
          </a>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style>
.facebook-icon {
  font-size: 4em;
  color: #3b5998;
}

.facebook-icon:hover, .twitter-icon:hover {
  cursor: pointer;
}
</style>
