<template>
  <div>
    <div class="w-full bg-primary/10 py-2">
      <div class="content flex items-center justify-between">
        <div class="flex items-center">
          <img src="@/assets/images/logo_primary.png" alt="kal2 logo" class="w-16 mx-auto lg:mx-0" />
          <div class="font-inter font-bold text-[32px] ml-[3px]">.dk</div>
        </div>
        <nav class="font-bold tracking-normal hidden lg:block">
          <ul class="flex space-x-8 font-mulish">
            <li><RouterLink to="/login" class="py-2 hover:opacity-75 hover-transition">Log ind</RouterLink></li>
            <li><RouterLink to="#" class="py-2 bg-primary text-white px-5 font-mulish rounded-full leading-none hover:bg-primary-Darker hover-transition">Opret konto</RouterLink></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="content hidden lg:block">
      <nav class="font-semibold tracking-tight text-[17px] font-mulish mt-3 text-gray-700">
        <ul class="flex items-center gap-x-10">
          <li><RouterLink to="/">Forside</RouterLink></li>
          <li><RouterLink to="#" class="flex items-center">Produkt <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 ml-[6px]"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg></RouterLink></li>
          <li><RouterLink to="#">Priser</RouterLink></li>
          <li><RouterLink to="#">Ressourcer</RouterLink></li>
          <li><RouterLink to="#">Support</RouterLink></li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router/dist/vue-router";

const route = useRoute();
</script>