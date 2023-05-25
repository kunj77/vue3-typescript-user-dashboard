<template>
  <div>
    <div v-if="!dataLoaded" class="selection-container">
      <p class="title">Select the type of user to view the Dashboard</p>
      <p v-if="errorMsg" class="error">{{errorMsg}}</p>
      <div class="button-container">
        <button @click="selectUserType('personal')">Personal User</button>
        <button @click="selectUserType('managed')">Managed User</button>
      </div>

      <div v-if="spinnerProgress !== 0" class="block-full-screen">
        <CircleProgress
          :percent="spinnerProgress"
          :size="100"
          :animationDuration="50"
        />
      </div>
    </div>
    <MainDashboard v-if="dataLoaded" />
  </div>
</template>

<script lang="ts" src="./UserSelection.ts"></script>

<style lang="scss" src="./UserSelection.scss"></style>
