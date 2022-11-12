<template>
    <main>
      <headerView/>
      <div class="container">
        <div class="row">
          <h2 style="margin-top: 15px">List of houses</h2>
     <ul>
       <li v-for="house in houses" :key="house.id">
         <NuxtLink :to="`/houses/${house.id}`">{{house.House_name}}</NuxtLink>
       </li>
     </ul>
        </div>
      </div>
      <FooterView/>
    </main>
  </template>
  
  <script setup>
      const data = await queryContent('houses').only('items').findOne()
      const houses = data.items
  
  </script>
  