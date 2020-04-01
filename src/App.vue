<template>
  <div class="App">
    <AppHeader />

    <AppDescription />

    <div class="container">
      <div class="users"><UsersSection /></div>
      <div class="todos"><TodosSection /></div>
    </div>

    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import data from '@/data'
import User from '@/models/User'
import AppHeader from './components/AppHeader.vue'
import AppDescription from './components/AppDescription.vue'
import UsersSection from './components/UsersSection.vue'
import TodosSection from './components/TodosSection.vue'
import AppFooter from './components/AppFooter.vue'

export default Vue.extend({
  components: {
    AppHeader,
    AppDescription,
    UsersSection,
    TodosSection,
    AppFooter
  },

  created () {
    // Here we are stubbing the initial data. In the real world, this
    // should be the response from the API Backend.
    const initialData = data

    User.insert({ data: initialData })
  }
})
</script>

<style src="./styles/bootstrap.css"></style>

<style scoped>
.App {
  padding: 96px 48px 128px;
}

.container {
  display: flex;
  margin: 0 auto;
  width: 960px;
}

.users {
  padding-right: 48px;
  width: calc(100% / 3);
}

.todos {
  width: calc((100% / 3) * 2);
}
</style>
