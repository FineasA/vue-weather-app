<template>
  <div class="loading-wheel animated fadeIn">
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loadTimer() {
      setTimeout(() => {
        this.$emit("icon-loaded");
      }, 1500);
    }
  },
  created() {
    this.loadTimer();
  }
};
</script>

<style>
.loading-wheel {
  padding-left: 50px;
}
</style>
