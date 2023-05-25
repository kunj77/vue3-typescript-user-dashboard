<template>
  <div class="app">
    <div class="sidebar">
      <ul>
        <li v-for="route in routes" :key="route.path" @click="navigateTo(route.path)">
          <img v-if="route.icon" :src="getIconPath(route.icon)" :alt="route.name" />
          <div v-html="route.customIcon"></div>
        </li>
      </ul>
    </div>
    <div class="sidebar-content">
    <div class="header">
      <div class="image-container">
        <img alt="Notifications" src="../../assets/notification.png" />
      </div>
      <div class="user-menu">
        <div v-html="defaultLogo"></div>
          <p v-if="user?.data.name">{{user.data.name}}</p>
          <img alt="Menu" src="../../assets/down-arrow.png" />
        </div>
      </div>
      <div class="router-view-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./MainDashboard.ts"></script>

<style lang="scss" src="./MainDashboard.scss"></style>
