<template>
    <main>
      <headerView/>
      <div class="container">
        <div class="row">
          <h2 style="margin-top: 15px">List of characters</h2>
     <ul>
       <li v-for="character in characters" :key="character.characterName">
         <NuxtLink :to="`/characters/${character.characterName}`">{{character.characterName}}</NuxtLink>
       </li>
     </ul>
        </div>
      </div>
      <FooterView/>
    </main>
  </template>
  
  <script setup>
      const data = await queryContent('characters').only('characters').findOne()
      const characters = data.characters
  
  </script>
  