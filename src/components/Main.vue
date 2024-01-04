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
      src: '/rive/anime.riv',
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

        <div class="cta_container">
          <a href="/files/cv.pdf" download="cv.pdf" class="cta_button">Télecharger mon cv</a>
          </div>
          <br><br>

        <div class="bento">
          <div class="bentoContainer div1">
            <h4 class="bentoTitle">Me</h4>
            <p>
              Passionné par le dev web<br> 
              Actuellement à la recherche d'une alternance en janvier 2024
            </p>
            <img src="/img/photo.jpg" height="100px" alt="bento" class="bentoImg">
          </div>

          <div class="bentoContainer div2">
            <h4 class="bentoTitle">Langages, Frameworks, Outils...</h4>
            <div class="iconContainer">
              <img src="/img/icons/laravel.png " height="70px" alt="bento">
              <img src="/img/icons/react.png " height="70px" alt="bento">
              <img src="/img/icons/vuejs.png " height="70px" alt="bento">
              <img src="/img/icons/symfony.svg " height="70px" alt="bento">
              <img src="/img/icons/rive.png " height="70px" alt="bento">
              <img src="/img/icons/php.png" height="70px" width="70px" alt="bento">
              <img src="/img/icons/js.png " height="70px" alt="bento">
              <img src="/img/icons/css.png " height="70px" alt="bento">
              <img src="/img/icons/c++.png " height="70px" alt="bento">
              <img src="/img/icons/csharp.png " height="70px" alt="bento">
              <img src="/img/icons/dockertrue.png " height="70px" width="70px" alt="bento">
              <img src="/img/icons/strapi.png " height="70px" alt="bento">
              <img src="/img/icons/git.png " height="70px" alt="bento">
              <img src="/img/icons/postgresql.png " height="70px" alt="bento">
              <img src="/img/icons/mysql.jpg " height="70px" alt="bento">
            </div>
          </div>

          <div class="bentoContainer div3">
            <h4 class="bentoTitle">Créatif</h4>
            <div class="iconContainer">
              <img src="/img/icons/ps.png " height="70px" width="70px" alt="bento">
              <img src="/img/icons/premierepro.png " height="70px" width="70px"  alt="bento">
              <img src="/img/icons/ae.png " height="70px"  width="70px" alt="bento">
              <img src="/img/icons/blender.png " height="70px" width="70px"  alt="bento">
              <img src="/img/icons/unity.png " height="70px" width="70px"  alt="bento">
              <img src="/img/icons/figma.webp " height="70px"  width="70px" alt="bento">
           
             
            </div>
          </div>


          <div class="bentoContainer div4">
            <h4 class="bentoTitle">Github</h4>
            <p>
              Mon profil <a href="https://github.com/ycenta">Github</a> <br>
            </p>
            <a href="https://github.com/ycenta"><img src="/img/icons/github.png" height="100px" alt="bento" class="bentoImg"></a>
          </div>

          <div class="bentoContainer div5">
            <h4 class="bentoTitle">Experience</h4>
            <p>
              <ul>
                <li>2 ans+ en tant que developpeur web chez <b>CultureG</b></li>
                <li>6 mois de bénévolat en tant qu'animateur (cours de programmation / 3D) </li>
              </ul>
            </p>
          </div>

         
        </div>
        
      </section>


    <div class="cta_container">
        <router-link to="/work" class="cta_button">Mon travail</router-link>
    </div>

      <h1 class="pageTitle"><a href="https://www.linkedin.com/in/yohancentanni/" target="_blank" class="cta_button">Contactez moi</a></h1>
      

    </div>
  </div>
</template>

<style scoped>
</style>
