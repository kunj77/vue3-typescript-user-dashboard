<template>
  <div>
  <h4 class="career-goal-title">Career Goal</h4>
  <div class="career-goal-container">
    <p>Your progress</p>
    <CircleProgress :percent="goal?.progress" :show-percent="true" fill-color="#493DF5"/>
    <p class="goal-description">I want to become a</p>
    <h4 class="goal-position">{{goal?.name}}</h4>
    <button class="clear">View Insights</button>
  </div>
  </div>
</template>

<script lang="ts" src="./CareerGoal.ts"></script>

<style lang="scss" src="./CareerGoal.scss"></style>