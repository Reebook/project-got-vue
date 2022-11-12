<template>
    <main>
      <headerView/>
      <div class="container">
        <div class="row">
          <h2 style="margin-top: 15px">List battles</h2>

     <ul>
       <li v-for="battle in battles" :key="battle.id">
         <NuxtLink :to="`/battles/${battle.id}`">{{battle.name}}</NuxtLink>
       </li>
     </ul>
        </div>
      </div>
      <FooterView/>
    </main>
  </template>
  
  <script setup>
      const data = await queryContent('battles').only('items').findOne()
      const battles = data.items
  
  </script>
  