<template>
  <section class="Users">
    <div class="container">
      <div class="header">
        <h2 class="title">USERS</h2>
        <button class="button" @click="add">ADD USER</button>
      </div>

      <UserList />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import User from '@/models/User'
import UserList from './UserList.vue'

export default Vue.extend({
  components: {
    UserList
  },

  methods: {
    add (): void {
      User.insert({
        data: { name: '' }
      })
    }
  }
})
</script>

<style scoped>
@import "styles/variables";

.container {
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: var(--shadow-depth-3);
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
}

.title {
  line-height: 32px;
  font-size: 16px;
  color: var(--c-gray);
}

.button {
  border: 1px solid var(--c-gray-light);
  border-radius: 2px;
  padding: 0 16px;
  line-height: 30px;
  font-size: 12px;
  color: var(--c-gray);
  transition: all .3s;

  &:hover {
    border-color: var(--c-gray);
    color: var(--c-black);
  }
}
</style>
