<template>
  <div>
    <h1>Hello!</h1>
    <router-link to="/bye">Bye</router-link>
    <span>|</span>
    <router-link to="/secret">Secret</router-link>

    <p>
      <input
        type="radio"
        name="role"
        value="admin"
        v-model="role"
        @change="onRoleChange" />
      <label>Admin</label>
    </p>
    <p>
      <input
        type="radio"
        name="role"
        value="user"
        v-model="role"
        @change="onRoleChange" />
      <label>Regular User</label>
    </p>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';

  export default {
    computed: {
      ...mapState([
        'user',
      ]),
    },

    data() {
      return {
        role: 'admin',
      };
    },

    mounted() {
      this.role = this.user.info.role;
    },

    methods: {
      ...mapMutations([
        'changeRole',
      ]),

      onRoleChange() {
        this.changeRole(this.role);
      },
    },
  };
</script>
