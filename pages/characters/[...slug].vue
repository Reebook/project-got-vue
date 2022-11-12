<template>
  <main>
    <headerView />

    <div class="container">
     <div class="row">
       <div class="six columns">
         <h2>{{character.characterName }}</h2>
         <p><b>Casa:</b>  <NuxtLink :to="`/houses/${character.houseName}`">{{character.houseName}}</NuxtLink></p>
        
         <img v-if="character.characterImageFull !== undefined" :src="`${character.characterImageFull}`" :alt="`${character.characterName}`">
       </div>
     </div>

   </div>
   <footerView />
  </main>
  </template>

<script setup>
const route = useRoute()
const characters = await queryContent('characters').only('characters').findOne()
const character = characters.characters.find(book => book.characterName == route.params.slug)

</script>