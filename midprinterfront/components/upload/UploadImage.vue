<template>
  <div>
    <div
      class="preview-container bg-blue-grey-lighten-5 d-flex justify-center"
      style="--bs-bg-opacity: 0.5"
    >
      <img
        v-if="previewImage"
        class="preview my-3"
        :src="previewImage"
        alt=""
      />
    </div>
    <div class="d-flex justify-center">
      <v-file-input
        show-size
        label="Selectionner l'image"
        accept="image/*"
        prepend-icon="mdi-camera"
        v-model="currentImage"
        @change="selectImage"
      ></v-file-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
const emit = defineEmits<{
  onImageChanged: [selectedImage: any];
}>();
const currentImage: Ref<File[] | null> = ref(null);
const previewImage: Ref<string | null> = ref(null);

const selectImage = () => {
  if (currentImage.value != null) {
    previewImage.value = URL.createObjectURL(currentImage.value[0]);
    emit("onImageChanged", { selectedImage: currentImage.value });
  }
};
</script>

<style lang="scss">
.preview-container {
  width: 100%;
  height: 200px;

  .preview {
    object-fit: contain;
  }
}
</style>
