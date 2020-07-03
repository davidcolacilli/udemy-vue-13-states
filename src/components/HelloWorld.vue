<template>
  <section>
      <!-- <h4>Props msg: {{ msg }}</h4> -->
      <h6>Msg: {{ $store.state.msg }}</h6>
      <h4>Name: {{$store.getters.getName}}</h4>
      <h3>Full Name: {{$store.getters.getFullName}}</h3>
      <hr>
      <h3>Friends</h3>
      <ul>
        <li v-for="(friend, index) in $store.state.friends" :key="index">
          <span>{{friend}}</span>
          <button @click="$store.dispatch('removeFriendAction', index)" class="btn btn-link">Delete</button>
        </li>
      </ul>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
section {
    background: #fcfcfc;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
}
* {
  font-size: .8em;
}
ul {
  margin: 0;
  padding: 0;
}
ul, li {
  font-size: 1em;
}
li {
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5em 0;
  margin-bottom: .5em;
}
li:first-child {
  border: none;
}
</style>
