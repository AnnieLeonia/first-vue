<template>
  <div>
    <header>
      <h1>{{title}}</h1>
      <h2>{{msg}}</h2>
      <div class="under">
        <p>{{fullname}}</p>
        <p v-if="user.gender=='female'">GirlPower</p>
        <p v-else-if="user.gender=='male'">Boys will be toys</p>
        <p v-else>You are one of a kind</p>
      </div>
    </header>
    <main>
      <form>
        <label>ID: </label><input type="text" disabled v-model="user.id">
        <label>Firstname: </label><input type="text" v-model="user.firstName">
        <label>Lastname: </label><input type="text" v-model="user.lastName">
        <label>Gender:</label>
        <ul class="gender">
          <li><input type="radio" id="female" value="female" v-model="user.gender">
            <label for="female">Female</label></li>
          <li><input type="radio" id="male" value="male" v-model="user.gender">
            <label for="male">Male</label></li>
          <li><input type="radio" id="other" value="other" v-model="user.gender">
            <label for="other">Other</label></li>
        </ul>
      </form>
      <section>
        <button type="button" v-on:click="greet(user.firstName)">Say Greeting</button>
        <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="hitEnter" />
      </section>
      <h2>List of friends</h2>
      <ul class="friends">
        {users.map()}
        <li v-for="friend in friends" :key="friend.name">
          {{friend.name}}
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: "test",
  props: {
    msg: {
      type: String,
      default: "In case nothing else shows up"
    }
  },
  data() {
    return {
      title: "Welcome",
      user: {
        id: "9305026461",
        firstName: "Annie",
        lastName: "Önnered",
        gender: "female"
      },
      friends: [
        { name: "Victor", age: 23 },
        { name: "Linnéa", age: 25 },
        { name: "Maby", age: 32 },
        { name: "Cleo", age: 14 }
      ]
    };
  },
  methods: {
    greet: function(name) {
      alert("Hello " + name + "!");
    },
    pressKey: function(event) {
      console.log(event.target.value);
    },
    hitEnter: function() {
      console.log("You hit enter");
    }
  },
  computed: {
    fullname: function() {
      return this.user.firstName + " " + this.user.lastName;
    }
  }
};
</script>

<style scoped>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

header {
  background-color: #4fc08d;
  text-align: center;
}

header .under {
  background-color: #a9ecce;
  border-top: solid 1px #34495e;
  padding: 0.5em;
}

h1,
h2 {
  text-align: center;
  color: #34495e;
  margin: 0;
}

p {
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style-type: none;
}

form {
  width: 50%;
  clear: both;
  overflow: hidden;
  margin: 0 auto;
  text-align: center;
}

form button {
  font-size: 16px;
  padding: 0.5em;
  margin: 0.5em;
}

form label {
  float: left;
  width: 100px;
  text-align: right;
}
form input {
  float: left;
  margin: 0.2em 0.5em;
  width: calc(100% - 100px - 2em);
  font-size: 14px;
}

.gender {
  width: calc(100% - 100px - 2em);
  display: inline-flex;
  justify-content: space-around;
}

.gender input {
  width: 10px;
  margin-top: 0.5em;
}

.gender label {
  width: auto;
}

section {
  text-align: center;
  margin: 0.5em;
}

.friends {
  text-align: center;
}
</style>