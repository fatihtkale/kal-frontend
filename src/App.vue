<template>
  <Layout-Top v-if="!auth.check() && route.fullPath !== '/login' && route.fullPath !== '/register'" />
  <Layout-TopLogged v-if="auth.check()" />
  <router-view :key="route.fullPath"></router-view>
  <Layout-footer v-if="!auth.check() && route.fullPath !== '/login' && route.fullPath !== '/register'"/>
</template>
<script setup>
  import { useRoute } from "vue-router/dist/vue-router";
  import { Auth } from "@/store/auth";
  import { Global } from "@/store/global";

  const auth = Auth();
  const route = useRoute();
  const global = Global();

  if ( auth.check() ) {
    global.setGlobalData();
  }
</script>