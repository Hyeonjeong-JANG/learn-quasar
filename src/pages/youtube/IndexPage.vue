<template>
  <q-page padding>
    <section class="content">
      <div class="row q-col-gutter-x-md q-col-gutter-y-xl">
        <div v-for="n in 16" :key="n" class="col-12 col-sm-6 col-md-4 col-lg-3">
          <article>
            <q-img :ratio="16 / 9" src="/jung.png"></q-img>
            <div class="row q-col-gutter-x-sm q-mt-md">
              <div class="col-auto">
                <q-avatar size="md">
                  <img src="/insta-logo.png" />
                </q-avatar>
              </div>
              <div class="col">
                <div
                  class="text-subtitle1 text-weight-bold"
                  :style="{ lineHeight: '1.1em' }"
                >
                  퀘이사 강의 | Quasar Lecture
                </div>
                <div class="text-caption text-grey-9 q-mt-xs">쥬재 JOOOOOO</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <q-page-sticky expand position="top">
      <q-toolbar class="bg-white toolbar">
        <q-space />
        <q-btn
          v-for="title in filters"
          :key="title"
          outline
          rounded
          class="q-mx-xs"
          color="primary"
          size="12px"
          :label="title"
        />
        <q-space />
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const filters = ref(['전체', '실시간', '게임', '음악', '요리']);
</script>

<style lang="scss" scoped>
.content {
  margin-top: 50px;
}
.toolbar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
