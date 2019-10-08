Vue.component("NavInformation", {
  methods: {
    Log: function(event) {
      console.log(event);
    }
  },
  template: `
    <div class="nav">
      <div class="nav__barsMobileBalance"></div>
      <div class="nav__spacetricsMobile"></div>
      <div class="nav__barsMobile"></div>
      <div class="nav__boxLeft">
        <div class="nav__spacetrics"></div>
        <div>
          <p v-on:click=Log>Projects</p>
        </div>
        <div>
          <p v-on:click=Log>Templates</p>
        </div>
        <div>
          <p v-on:click=Log>Audience</p>
        </div>
      </div>
      <div class="nav__boxRight">
        <div class="nav__smiley"></div>
        <div v-on:click=Log class="nav__arrow"></div>
      </div>
    </div>
  `
});

var nav = new Vue({
  el: ".nav_container",
  template: `
    <div>
      <NavInformation/>
    </div>
  `
});
