<template>
  <main>
    <headerView />

    <div class="container">
     <div class="row">
       <div class="six columns">
         <h3>{{house.House_name}}</h3>
         <p><b>Ciudad:</b> {{house.Region}}</p>
       </div>
     </div>

   </div>
   <footerView />
  </main>
  </template>

<script setup>
const route = useRoute()
const houses = await queryContent('houses').only('items').findOne()
const house = houses.items.find(book => book.id == route.params.slug)

</script>