<template>
  <main>
    <headerView />
    <div class="container">
      <div class="row align-items-start" >
        <h1 style="margin-top: 15px">Game of thrones</h1>
      
        <div class="col">
          <div class="card" style="width: 18rem">
          <img
            src="../assets/images/battles.jpg"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h3><NuxtLink :to="`/index_battles/`">Battles</NuxtLink></h3>
          </div>
        </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
          <img
            src="../assets/images/Game-Of-Thrones-Great-Houses-Feature-Collage.jpg"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">    
            <h3><NuxtLink :to="`/index_houses/`">Houses</NuxtLink></h3>
            
          </div>
        </div>
        
      </div>
        <div class="col">
          <div class="card" style="width: 18rem">
          <img
            src="../assets/images/characters.png"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h3><NuxtLink :to="`/index_characters/`">Characters</NuxtLink></h3>
          </div>
        </div>
        </div>
    </div>
  </div>
    <FooterView />
  </main>
</template>

