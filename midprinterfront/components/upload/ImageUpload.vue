<template>
  <div>
    <b-img
      v-if="!!url"
      :src="url"
      max-width="100%"
      fluid
      alt="Responsive image"
    ></b-img>
    <b-form-group label="Image:">
      <b-form-file
        v-model="file"
        :state="Boolean(file)"
        accept="image/*"
        @change="onSelect"
        :required="!url"
        placeholder="selectionnez une image"
        drop-placeholder="Cliquer-glisser ici"
      ></b-form-file>
    </b-form-group>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ImageUpload",
  props: {
    imageUrl: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  data() {
    return {
      file: [] as unknown,
      loadedUrl: "",
    };
  },
  computed: {
    url() {
      return !!this.loadedUrl ? this.loadedUrl : this?.imageUrl;
    },
  },
  methods: {
    onSelect(event: any) {
      this.file = event.target.files[0];
      if (!!this.file) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.loadedUrl = e?.target?.result as string;
        };
        reader.readAsDataURL(this.file as Blob);
        this.$emit("onSelect", { image: this.file });
      }
    },
    clear: function () {
      this.loadedUrl = "";
    },
  },
});
</script>
