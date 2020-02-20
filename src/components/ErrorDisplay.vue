<template>
  <div class="error-disp animated jackInTheBox">
    <div class="alert alert-danger" role="alert">
      An error occured, did you type in a valid city?
    </div>
    <button class="btn btn-primary" @click="backToForm">Search Again</button>
  </div>
</template>

<script>
export default {
  methods: {
    backToForm() {
      this.$emit("backToForm");
    }
  }
};
</script>

<style>
.error-disp {
  padding-left: 50px;
}
</style>
