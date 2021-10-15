<template>
  <v-app>
    <h1 class="text-center">Listado de Reservas</h1>
    <v-row justify="center" class=" mx-8 my-8  d-flex  pb-4 ">
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr class="green lighten-3">
          <th class="text-left font-weight-black"> Nombres </th>
          <th class="text-left font-weight-black"> Apellidos </th>
          <th class="text-left font-weight-black"> Cédula</th>
          <th class="text-left font-weight-black"> Ciudad de origen </th>
          <th class="text-left font-weight-black"> Teléfono </th>
          <th class="text-left font-weight-black"> Email </th>
          <th class="text-left font-weight-black"> Num personas </th>
          <th class="text-left font-weight-black"> Habitación/es </th>
          <th class="text-left font-weight-black"> Fecha de ingreso </th>
          <th class="text-left font-weight-black"> Fecha de salida </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="reserva in Reservas"
          :key="reserva._id"
        >
          <td class="text-left">{{ reserva.nombresClient }}</td>
          <td class="text-left">{{ reserva.apellidosClient }}</td>
          <td class="text-left">{{ reserva.cedulaClient }}</td>
          <td class="text-left">{{ reserva.ciudadOrigenClient }}</td>
          <td class="text-left">{{ reserva.telefonoClient }}</td>
          <td class="text-left">{{ reserva.emailClient }}</td>
          <td class="text-left">{{ reserva.numPersonas }}</td>
          <td class="text-left">{{ reserva.infoHabitacion}}</td>
          <td class="text-left">{{ reserva.fechaIngreso }}</td>
          <td class="text-left">{{ reserva.fechaSalida }}</td>
          <td>
              <router-link
                :to="{ name: 'edit', params: { id: reserva._id } }"
                class="btn btn-success"
                >Edit
              </router-link>
              <v-btn
                @click.prevent="deleteReserva(reserva._id)"
                class="red darken-4  mb-4"
                x-small
              >
                <span class="white--text">Delete</span>
              </v-btn>
            </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </v-row>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Reservas: [],
    }
  },

    created() {
    let apiURL = "https://backendhotel-backup.herokuapp.com/api/reserva/";
    axios
      .get(apiURL)
      .then((res) => {
        this.Reservas = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    deleteReserva(id) {
      let apiURL = `https://backendhotel-backup.herokuapp.com/api/reserva/delete/${id}`;
      let indexOfArrayItem = this.Reservas.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Reservas.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>
