<template>
  <div class="progress-container">
      <ul class="progress-items">
        <li class="progress-item" :key="item.id" v-for="item in progressbar.items">
          <span :class="{'progress-active': item.active}"><router-link to="item.url">{{item.name}}</router-link></span>
        </li>
      </ul>
      <div class="progress-total"></div>
      <div class="progress-bar"></div>
      <div class="progress-num">{{progressbar.progress}}</div>
  </div>
</template>
