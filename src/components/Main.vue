<script setup>
import { ref, onMounted } from 'vue'
import { Rive } from '@rive-app/canvas';

const scrollToContent = () => {
  const content = document.querySelector('.content')
  content.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  const canvas = document.querySelector('canvas')
  if (canvas) {
    new Rive({
      canvas,
      src: '/public/rive/anime.riv',
      autoplay: true,
      stateMachines: "State Machine 1"
    })
  }
})
</script>

<template>
  <div>
    <h2 class="pageTitle">Fullstack developer</h2>
    <div class="cta_container">
      <button class="cta_button" @click="scrollToContent">Me découvrir</button>
    </div>
    <div class="riveContainer">
        <canvas class="riveAnimation" ref="canvas" width="400" height="400"></canvas>
      </div>
    <div class="content">

     
      <section class="bentoSection">
        <h3 class="sectionTitle">Yohan Centa</h3>

        <div class="bento">
          <div class="bentoContainer div1">
            <h4 class="bentoTitle">Me</h4>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> 
              lorem ipsum dolor sit amet, consectetur adipiscing Nulla <br>
              azeaez
            </p>
            <img src="/img/photo.jpg" height="100px" alt="bento" class="bentoImg">
          </div>

          <div class="bentoContainer div2">
            <h4 class="bentoTitle">Langages, Frameworks...</h4>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> 
              lorem ipsum dolor sit amet, consectetur adipiscing Nulla <br>
              azeaez
            </p>
            <img src="/img/avatar.jpg" height="100px" alt="bento" class="bentoImg">
          </div>

          <div class="bentoContainer div3">
            <h4 class="bentoTitle">Créatif</h4>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> 
              lorem ipsum dolor sit amet, consectetur adipiscing Nulla <br>
              azeaez
            </p>
            <img src="/img/avatar.jpg" height="100px" alt="bento" class="bentoImg">
          </div>


          <div class="bentoContainer div4">
            <h4 class="bentoTitle">Github</h4>
            <p>
              Mon profil <a href="https://github.com/ycenta">Github</a> <br>
            </p>
            <img src="/img/avatar.jpg" height="100px" alt="bento" class="bentoImg">
          </div>

          <div class="bentoContainer div5">
            <h4 class="bentoTitle">Experience</h4>
            <p>
              <ul>
                <li>lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
            </p>
            <img src="/img/avatar.jpg" height="100px" alt="bento" class="bentoImg">
          </div>
        </div>
      </section>


    <div class="cta_container">
        <router-link to="/work" class="cta_button">Mon travail</router-link>
    </div>

      <h1 class="pageTitle cta_button">CONTACTEZ MOI </h1>

    </div>
  </div>
</template>

<style scoped>
</style>
