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
console.log(route.params.slug)
console.log(parseInt(route.params.slug))
let house;
if(parseInt(route.params.slug)){
  house = houses.items.find(book => book.id == route.params.slug)
}else{
  console.log()
  house = houses.items.find(book => book.House_name.includes(route.params.slug[0]))
}

console.log(house)
</script>