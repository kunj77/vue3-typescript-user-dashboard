<template>
    <h2 class="title">Hi, {{user.data.name}} 👋</h2>
    <p class="subtitle">{{subtitle}}</p>
    <div class="content">
        <CareerGoal v-if="userType === 'managed'"></CareerGoal>
        <DocumentsList :showPagination="false" :rowsPerPage="5"></DocumentsList>
    </div>
</template>

<script lang="ts" src="./UserHome.ts"></script>

<style lang="scss" src="./UserHome.scss" scoped></style>