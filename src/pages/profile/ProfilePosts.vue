<template>
  <div class="row q-col-gutter-md">
    <div v-for="n in 18" :key="n" class="col-12 col-sm-6 col-md-46 col-lg-3">
      <q-card class="my-card">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" ratio="1">
          <div
            class="absolute-bottom text-subtitle2 flex flex-center full-height"
          >
            Title
          </div>
        </q-img>
      </q-card>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
