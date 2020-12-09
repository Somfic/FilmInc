<template>
  <div class="list-group-item">
    <div class="row">
      <div class="col">
        <button
          role="button"
          class="btn btn-secondary w-100 py-3"
          @click="cancel"
        >
          <i class="fas fa-ban" />
        </button>
      </div>
      <div class="col">
        <button role="button" class="btn btn-primary w-100 py-3" @click="next">
          <i class="fas fa-check-circle" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutOptions",
  methods: {
    cancel() {
      this.$emit("cancel");
    },

    next() {
      this.$emit("confirm");
    },
  },
};
</script>