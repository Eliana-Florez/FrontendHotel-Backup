<template>
    <v-app>
        <v-sheet  class=" mx-16 my-12"
            color="white"
            elevation="6"
            rounded
            height= auto
        >
            <v-row class=" red darken-4 mx-auto my-auto rounded-t-lg d-flex px-10 py-6 ">
                <h2 class="white--text">Contáctanos</h2>
            </v-row>
            <v-row justify="center" class=" mx-auto my-auto  d-flex  pt-6 ">
                <i class="fa fa-comment" aria-hidden="true"></i><span>&nbsp;  +57 320 678 4534</span>
            </v-row>
            <v-row justify="center" class=" mx-auto my-auto  d-flex  pb-4 ">
                <i class="fa fa-phone fa-rotate-90" aria-hidden="true"></i><span>&nbsp;&nbsp;&nbsp;  +57 606 XX 4534</span>
            </v-row>

            <v-row justify="center" class="mx-auto my-auto  d-flex px-10  py-6">
                <form>
                    <v-container bg fill-height>
                    <v-row class=" d-flex">
                        <v-text-field
                            v-model="contacto.nombreUser"
                            :counter="30"
                            label="Nombres y Apellidos"
                            required
                        ></v-text-field>
                    </v-row>

                    <v-row>
                        <v-text-field
                            v-model="contacto.emailUser"
                            label="E-mail"
                            required
                        ></v-text-field>
                    </v-row>

                    <v-row>
                        <v-text-field
                            v-model="contacto.telefonoUser"
                            :counter="10"
                            label="Teléfono"
                            required
                        ></v-text-field>
                    </v-row>

                    <v-row>
                        <v-textarea
                            v-model="contacto.mensajeUser"
                            label="Dinos algo que podamos solucionarte"
                            required
                        ></v-textarea>
                    </v-row>

                    <v-row justify="center" class="mt-10">
                        <v-btn @click="submit"
                        class="mr-10  red darken-4 px-10 mb-4"
                        type="submit"
                        >
                            <span class="white--text">Enviar</span>
                        </v-btn>
                        <v-btn @click="clear" class="mr-10 red darken-4 px-10 ">
                            <span class="white--text">Limpiar</span>
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
            let apiURL = "https://backendhotel-backup.herokuapp.com/api/contacto/add";

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
            this.nombreUser = ''
            this.emailUser = ''
            this.telefonoUser = ''
            this.mensajeUser = ''
            this.$refs.observer.reset()
        },
        },
};
</script>

