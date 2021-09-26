<template>
  <v-app>
    <h1 class="visually-hidden">
      ГдеМатериал.Ру
    </h1>
    <PageHeader />
    <nuxt />
    <PageFooter />
  </v-app>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import PageFooter from '~/components/PageFooter.vue';

export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<style lang="scss">
@import "~assets/base.scss";
</style>
