<template>
    <v-app>
        <v-sheet  class=" mx-16 my-12"
            color="white"
            elevation="6"
            rounded
            height= auto
        >
            <v-row class=" red darken-4 mx-auto my-auto rounded-t-lg d-flex px-10 py-6 ">
                <h2 class="white--text">Reserve con nosotros</h2>
            </v-row>

            <v-row justify="center" class="mx-15 my-8  d-flex px-10  py-6">
                <form >
                    <v-container bg fill-height>
                    <v-row class=" d-flex">
                        <v-col class="mr-8">
                        <v-text-field
                            v-model="names"
                            :rules="nameRules"
                            label="Nombres"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                        <v-col>
                        <v-text-field
                            v-model="lastName"
                            :rules="lastNameRules"
                            label="Apellidos"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class=" d-flex">
                        <v-col class="mr-8">
                        <v-text-field
                            v-model="names"
                            :rules="nameRules"
                            label="Documento de identidad"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                        <v-col>
                        <v-text-field
                            v-model="lastName"
                            :rules="lastNameRules"
                            label="Ciudad de Origen"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col class="mr-8">
                        <v-text-field
                            v-model="phoneNumber"
                            :rules="phoneRules"
                            label="Teléfono"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                        <v-col>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col class="mr-8">
                        <v-text-field
                            v-model="numPersons"
                            :rules="numPersonsRules"
                            label="Número de personas"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                        <v-col>
                        <v-autocomplete
                            v-model="bedrooms"
                            :items="items"
                            small-chips
                            label="Habitaciones"
                            multiple
                            solo
                        ></v-autocomplete>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col class="mr-8 ml-n8" >
                        <v-text-field
                            v-model="dateRangeText"
                            label="Fecha de reserva"
                            prepend-icon="mdi-calendar"
                            solo
                        ></v-text-field>
                        </v-col>
                        <v-col>
                        <v-date-picker
                            v-model="dates"
                            range
                        ></v-date-picker>
                        </v-col>

                    </v-row>

                    <v-row justify="center" class="mt-10">
                        <v-btn @click="clear" class="mr-10 red darken-4 px-10 ">
                            <span class="white--text">Limpiar</span>
                        </v-btn>
                        <v-btn @click="submit"
                        class="mr-10  red darken-4 px-10 mb-4"
                        type="submit"
                        >
                            <span class="white--text">Enviar</span>
                        </v-btn>
                    </v-row>
                    </v-container>
                </form>
            </v-row>
        </v-sheet>
    </v-app>
</template>




<script>
import axios from "axios";
export default {
    data() {
        return {
            contacto: {
                nombreUser: '',
                emailUser: '',
                telefonoUser: '',
                mensajeUser: ''
            }
        }
    },

        methods: {
        submit() {
            let apiURL = "https://backendhotel-backup.herokuapp.com/api/cliente/add";

        axios
            .post(apiURL, this.contacto)
            .then(() => {
            this.$router.push("/");
            this.contacto = {
                nombreUser: "",
                emailUser: "",
                telefonoUser: "",
                mensajeUser: ""
            };
            })
            .catch((error) => {
            console.log(error);
            });
        },
        clear () {
            this.names = ''
            this.lastName = ''
            this.phoneNumber = ''
            this.email = ''
            this.numPersons = ''
            this.bedrooms = ''
            this.dateRangeText= ''
            this.$refs.observer.reset()
        },
        },
};
</script>

