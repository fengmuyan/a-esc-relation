<template>
  <div class="app-wrapper">
    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <app-main />
    </div>
  </div>
</template>

<script>
import AppMain from "./components/AppMain.vue";

export default {
  name: "Layout",
  components: {
    AppMain
  },
  data() {
    return {
      needTagsView: []
    };
  }
};
</script>
