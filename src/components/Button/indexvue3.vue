<script setup>
import { ref } from 'vue';
const props = ({
    content : String,
    lien : String,
    size : String,
    variant : String,
});
const classname = ref(`button ${props.variant=== "rounded" ? "-rounded" : ""} ${props.size=== "small" ? "-Small" : ""}`);
// export default {
//     props:{
//         content : String,
//         lien : String,
//         size : String,
//         variant : String,
//     },
//     data() {
//         return {
//             classname: `button ${this.variant=== "rounded" ? "-rounded" : ""} ${this.size=== "small" ? "-Small" : ""}`
//         }
//     },
// };
</script>
<template>
  <a v-if="lien" :href="lien" :class="classname"><slot></slot></a>
  <button v-else :class="classname"><slot></slot></button>
</template>

<style lang="scss" scoped>
.button {
  background-color: $primary-color;
  background: linear-gradient(180deg, $secondary-color 0%, $primary-color 100%);
  border: none;
  border-radius: 15px;
  gap: 10px;
  padding: rem(33) rem(67);
  font-size: $regular-font-size;
  color: $White;
  font-weight: 600;
  font-family: $font-family;
  word-wrap: break-word;
  display: inline;
  text-decoration: none;
  &.-rounded{
    border-radius: 37px;
    background: var(--Tangerine, #F48E28);
    padding: rem(26) rem(64);
    font-weight: 500;
    }
    &.-Small{
        padding: rem(14) rem(29);
        font-weight: 400;
        font-size: $small-font-size;
    }
}
</style>
