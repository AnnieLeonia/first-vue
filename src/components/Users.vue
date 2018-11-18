<template>
    <div>
        <h1>Users</h1>
        <form v-on:submit="addUser">
            <input type="text" v-model="newUser.name" name="name" placeholder="Enter ame">
            <input type="text" v-model="newUser.email" name="email" placeholder="Enter email">
            <input type="text" v-model="newUser.phone" name="phone" placeholder="Enter phone">
            <input type="submit" value="Submit">
        </form>
        <ul>
            <li v-for="user in users" :key="user.name">
                <input type="checkbox" class="toggle" v-model="user.contacted">
                <span v-bind:class="{contacted : user.contacted, notContacted : !user.contacted}">
                    <b>{{user.name}}</b>, {{user.email}}, {{user.phone}}
                    <button v-on:click="deleteUser(user)">X</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      newUser: {},
      users: []
    };
  },
  methods: {
    addUser: function(e) {
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        phone: this.newUser.phone,
        contacted: false
      });

      this.newUser.name = this.newUser.email = this.newUser.phone = "";
      e.preventDefault();
    },
    deleteUser: function(user) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  },
  created: function() {
    console.log("Created ran");
    this.$http
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function(response) {
        this.users = response.data;
      });
  }
};
</script>

<style>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

h1 {
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

.contacted {
  color: green;
}

.notContacted {
  color: brown;
}
</style>
