<template>
    <v-app>
        <v-sheet
            class="mx-16 my-12"
            color="white"
            rounded
            height="auto"
            elevation="6">
        <v-row
            class="red darken-4 mx-auto my-auto rounded-t-lg d-flex px-10 py-6"
        >
            <v-img
                max-height="58"
                max-width="auto"
                align-end
                contain
                src="../assets/img/hotel-b.png"
                ></v-img>
        </v-row>

        <v-row class=" mx-auto my-10  d-flex ">
            <v-col class="mr-4 ml-15 my-auto"
            cols="6"
            md="4"
            >
                <v-img
                src="../assets/fachada.jpg"
                aspect-ratio="1.5"
                
                >
                </v-img>
            </v-col>
            
            <v-col  class="mr-15 ml-4 my-auto text-justify">
            <p>
                En Circasia Quindí­o, en el corazón del eje cafetero, se levanta su Hotel "Aroma Cafetera", queremos brindarle a nuestros huéspedes la mejor experiencia de la cultura cafetera de nuestra región, comida tí­pica, 10 cómodas habitaciones, arte y arquitectura propias de una finca cafetera, entre otros.
            </p>
            <p>
                Estamos cerca de todo: Pereira (30 km), Armenia (7 km), el Aeropuerto Internacional Matecaña (40 km), Aeropuerto Internacional El Edén (27 km) y los principales atractivos turí­stico de la zona; Montenegro con su Parque del Café (15 km), Salento y su hermoso valle del Cocora (14 km), Quimbaya y las atracciones de Panaca (25 km), Filandia (18 km) y muchísimos más.
            </p>
            
            </v-col>
        </v-row>

        <v-row class=" mx-auto my-10  d-flex ">
            <v-col>
                <v-img
                max-height="46"
                max-width="auto"
                align-end
                contain
                src="../assets/img/mision.png"
                ></v-img>
            </v-col>
            <v-col  class="mr-15 ml-4 my-auto text-justify">
                <p>
                    Brindar un servicio hotelero de excelencia, ofreciendo hospitalidad, un trato individualizado, por parte de un personal altamente motivado, buscando superar las expectativas de
                    nuestros visitantes.
                </p>
            </v-col>
        </v-row>
        <v-row class=" mx-auto my-10  d-flex ">
            <v-col>
                <v-img
                max-height="49"
                max-width="auto"
                align-end
                contain
                src="../assets/img/vision.png"
                ></v-img>
            </v-col>
            <v-col  class="mr-15 ml-4 my-auto text-justify">
                <p>
                    Somos una casa hotel, buscamos que nuestros huéspedes vivan una experiencia única, conociendo la cultura arquitectura y demás costumbres de la región, contando con cómodas instalaciones para su descanso.
                </p>
                <br>
            </v-col>
        </v-row>
        <v-row justify="center" class="mx-auto my-auto  d-flex px-10  py-6">
                <v-carousel>
                    <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel>
            </v-row>
        </v-sheet>
    </v-app>
</template>

<script>
export default {
        data () {
            return {
                items: [
                    {
                        src: 'https://viride21.com/photos/aroma01.jpg',
                    },
                    {
                        src: 'https://viride21.com/photos/aroma04.jpg',
                    },
                    {
                        src: 'https://viride21.com/photos/aroma07.jpg',
                    },
                    {
                        src: 'https://viride21.com/photos/aroma09.jpg',
                    },
                    {
                        src: 'https://viride21.com/photos/aroma11.jpg',
                    },
                    {
                        src: 'https://viride21.com/photos/aroma05.jpg',
                    },
                ],
            }
        },
    }
</script>

