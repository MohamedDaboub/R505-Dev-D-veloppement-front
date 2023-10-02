<template>
  <main class="layout">
    <header class="layout__header">
        <slot name="header">

        </slot>
    </header>

        <aside class="layout__aside">
            <slot name="aside">

            </slot>
        </aside>
        <article class="layout__article">
            <slot >

            </slot>
        </article>

    <footer class="layout__footer">
        <slot name="footer">

        </slot>
    </footer>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped >

    .layout{
        display: grid;
        height: 100vh;

        grid-template: 
        "header"
        "article"
        "aside"
        "footer";
        @include medium-up{
            grid-template: 
        "header header header"
        "aside article article"
        "footer footer footer";

        }
        > * {
            padding: rem(16);
        }
        &__header{
            grid-area: header;
            background: $primary-color;


        }
        &__aside{
            grid-area: aside;


        }
        &__article{
            grid-area: article;


        }
        &__footer{
            grid-area: footer;
            background: $primary-color;


        }
    }

</style>