<template>
  <v-app>
    <div id="app">
      <v-row class=" mx-auto my-auto  d-flex px-6">

        <v-col>
          <v-img contain src="./assets/logo.png" max-width="250"></v-img>
        </v-col>

        <v-col  class="px-6">
        </v-col>

        <v-col  class="mx-1 my-auto ">
          <v-btn color="green darken-3 white--text" elevation="5"
          block large
          @click="inicio()"
          >
          El Hotel
          </v-btn>
        </v-col>

        <v-col class="mx-1 my-auto ">
          <v-btn color="green darken-3 white--text" elevation="5"
          block large
          @click="habitaciones()"
          >
          Habitaciones
          </v-btn>
        </v-col>

        <v-col class="mx-1 my-auto ">
          <v-btn color="green darken-3 white--text" elevation="5"
          block large
          @click="tarifas()"
          >
          Tarifas
          </v-btn>
        </v-col>

        <v-col class="mx-1 my-auto ">
          <v-btn color="green darken-3 white--text" elevation="5"
          @click="reservar()"
          block large
          >
          Reservar
          </v-btn>
        </v-col>

        <v-col class="mx-auto my-auto ">
          <v-btn color="green darken-3 white--text" elevation="5"
          @click="contactenos()"
          block large
          >
          Contactenos
          </v-btn>
        </v-col>
      </v-row>
      <router-view />
    </div>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal green darken-4">
          <strong class="subheading"
            >Ingrese a las opciones de administrador</strong
          >

          <v-spacer></v-spacer>

          <v-col class="mx-1 my-auto ">
          <v-btn color="red darken-4 white--text" elevation="5"
          @click="admin()"
          block large
          >
          Admin
          </v-btn>
        </v-col>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Grupo 19 E-1</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
  }),
  methods: {
    inicio() {
      console.log("ir al inicio funcionando");
      this.$router.push("/");
    },
    habitaciones() {
      console.log("ir al habitaciones funcionando");
      this.$router.push("/habitacionesview");
    },
    tarifas() {
      console.log("ir al tarifas funcionando");
      this.$router.push("/tarifasview");
    },
    reservar() {
      console.log("ir al tarifas funcionando");
      this.$router.push("/reservasview");
    },
    contactenos() {
      console.log("ir al tarifas funcionando");
      this.$router.push("/contactoview");
    },
    admin() {
      console.log("ir al admin funcionando");
      this.$router.push("/adminview");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
