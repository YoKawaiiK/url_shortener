<template>
  <div>
    <the-header></the-header>
    <the-list-url-short></the-list-url-short>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheListUrlShort from "@/components/TheListUrlShort";

export default {
  name: "ShortUrlList",
  components: { TheHeader, TheListUrlShort },
};
</script>
