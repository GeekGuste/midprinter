<template>
  <div>
    <v-stepper
      prev-text="Précédent"
      next-text="Suivant"
      :items="['Produit à imprimer', 'Selection de l\'image', 'Commande']"
    >
      <template v-slot:item.1>
        <v-row no-gutters>
          <v-col cols="12" sm="4">
            <v-card class="ma-2 pa-2">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
                <v-card-title class="text-white">
                  Coques de téléphone
                </v-card-title>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="ma-2 pa-2">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
                <v-card-title class="text-white">Tableaux</v-card-title>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="ma-2 pa-2">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
                <v-card-title class="text-white">Vêtements</v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:item.2>
        <v-row no-gutters align="center">
          <v-col cols="12" sm="4">
            <div class="pa-2">
              <UploadImage @onImageChanged="onImageSelect" />
            </div>
          </v-col>
          <v-col cols="12" sm="4">
            <div class="pa-2">
              <v-form validate-on="submit lazy" @submit.prevent="transformText">
                <v-text-field
                  :rules="[required]"
                  v-model="text"
                  label="Entrer le texte pour tranformer l'image"
                ></v-text-field>

                <v-btn
                  :loading="loading"
                  type="submit"
                  block
                  class="mt-2"
                  text="Charger"
                ></v-btn>
              </v-form>
            </div>
          </v-col>
          <v-col cols="12" sm="4">
            <div class="pa-2">
              <v-img
                :width="300"
                aspect-ratio="16/9"
                contain
                :src="generatedImageLink"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </template>

      <template v-slot:item.3>
        <v-card title="Step Three" flat>...</v-card>
      </template>
    </v-stepper>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, Ref } from "vue";
import { useGenerateImage } from "~/composable/services/useGenerateImage";

const loading = ref(false);

const loadedImage: Ref<File | null> = ref(null);
const generatedImage: Ref<string | undefined> = ref();

const generatedImageLink = computed(
  () =>
    generatedImage.value ??
    "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
);

const required = (v: any) => {
  return !!v || "Vous devez entrer un texte représentant l'image à générer";
};

const { generate1024ImageFromText, generate1024ImageFromTextAndImage } =
  useGenerateImage();

const transformText = async () => {
  if (text.value != "") {
    loading.value = true;
    console.log(loadedImage.value);
    // appel de DALL-E
    if (loadedImage.value != null) {
      generatedImage.value = await generate1024ImageFromTextAndImage(
        text.value,
        loadedImage.value
      );
    } else {
      generatedImage.value = await generate1024ImageFromText(text.value);
    }
    loading.value = false;
    console.log(generatedImage.value);
  }
};

const onImageSelect = (data: any) => {
  loadedImage.value = data.selectedImage[0];
  console.log(loadedImage.value);
};

const text = ref("");
/*const { imagine, result } = useMidJourney();
onMounted(() => {
  imagine(
    "cendrillon noir avec des mêches",
    "https://media.licdn.com/dms/image/C4D03AQF9ak9VYiJ1Ig/profile-displayphoto-shrink_800_800/0/1610747406859?e=2147483647&v=beta&t=Shok-E8T6oDU3XaUx_a4up7k_LO4zmbYOu9KGZL-q-s"
  );
  result("9856850a8ea7b4568052928f23a7ea9d").then((result) =>
    console.log(result.value)
  );
});*/
</script>
