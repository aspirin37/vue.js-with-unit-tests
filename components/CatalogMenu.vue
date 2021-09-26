<template>
  <v-dialog
    v-model="isMenuVisible"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <v-card class="position-relative">
      <v-toolbar
        dark
        color="deep-purple darken-2"
        class="menu-header"
      >
        <v-toolbar-title>Каталог</v-toolbar-title>
        <v-spacer />
        <v-btn
          icon
          dark
          @click="SET_MENU_VISIBLE(false)"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-treeview
        :items="catalogItems"
        item-children="submenu"
      >
        <template v-slot:label="{ item }">
          <nuxt-link :to="item.url">
            {{ item.name }}
          </nuxt-link>
        </template>
      </v-treeview>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import cloneDeep from 'lodash/cloneDeep';

export default {
  name: 'MobileMenu',
  computed: {
    ...mapState('the_menu', [
      'menu', 'isMenuVisible',
    ]),
    catalogItems() {
      const linkify = (arr, url) => arr.map((it) => {
        if (!url) {
          it.url = `/catalog/${it.slug}/`;
        } else {
          it.url = `${url}${it.slug}/`;
        }

        if (it.submenu) {
          it.submenu = linkify(it.submenu, it.url);
        }
        return it;
      });
      return linkify(cloneDeep(this.menu));
    },
  },
  methods: {
    ...mapMutations('the_menu', [
      'SET_MENU_VISIBLE',
    ]),
  },
};
</script>

<style lang="scss">
.menu-header {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
