<template>
  <div>
    <v-app-bar title="Style AI"></v-app-bar>
    <slot />
    <v-footer>
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Style AI</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>
