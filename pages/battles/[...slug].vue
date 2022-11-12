<template>
  <main>
    <headerView />

    <div class="container">
     <div class="row">
       <div class="six columns">
         <h3>{{battle.name}}</h3>
         <p><b>Ciudad:</b> {{battle.location}}</p>
         <p><b>Comandante:</b> {{battle.attacker_commander}}</p>
 
       </div>
     </div>

   </div>
   <footerView />
  </main>
  </template>

<script setup>
const route = useRoute()
const battles = await queryContent('battles').only('items').findOne()
const battle = battles.items.find(book => book.id == route.params.slug)

</script>