<template>
  <div>
    <h1>Welcome to the homepage</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useMidJourney } from "../composable/useMidJourney";

const { imagine, result } = useMidJourney();
onMounted(() => {
  console.log("we'll imagine");
  imagine(
    "cendrillon noir avec des mêches",
    "https://media.licdn.com/dms/image/C4D03AQF9ak9VYiJ1Ig/profile-displayphoto-shrink_800_800/0/1610747406859?e=2147483647&v=beta&t=Shok-E8T6oDU3XaUx_a4up7k_LO4zmbYOu9KGZL-q-s"
  );
  /*result("9856850a8ea7b4568052928f23a7ea9d").then((result) =>
    console.log(result.value)
  );*/
});
</script>
