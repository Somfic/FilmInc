<template>
  <div class="w-100 rounded border my-3 bg-light p-3 text-center">
    <div class="row">
      <div class="col">
        <span class="text-muted">FilmInc</span>
      </div>

      <div class="col">
        <span class="text-muted">{{ name() }}</span>
      </div>

      <div class="col">
        <span class="text-muted">Lucas de Jong - 2158725</span>
      </div>
    </div>
  </div>
</template>
<script>
import cacheService from "../../services/cache";
import jwt from "jsonwebtoken";

export default {
  name: "Footer",
  data() {
    return {
      name: () => {
        let token = cacheService.read("token");
        let payload = jwt.decode(token);

        return payload.name.toString();
      },
    };
  },
};
</script>
