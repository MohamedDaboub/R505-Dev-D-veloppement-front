<script setup>
// import Button from '@/components/Button/indexvue2.vue'
import Button from '@/components/Button/indexvue3.vue'
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import MyBackGroundScroll from '../components/MyBackGroundScroll.vue';
</script>

<template>
  <main>
    <DefaultLayout>
      <template v-slot:header>
          <nav>
            <ul>
              <li><a href="#">link 1</a></li>
              <li><a href="#">link 2</a></li>
              <li><a href="#">link 3</a></li>
            </ul>
          </nav>
      </template>
      <template v-slot:aside>
        <nav>
          <ul>
            <li><a href="#">aside link 1</a></li>
            <li><a href="#">aside link 2</a></li>
            <li><a href="#">aside link 3</a></li>
          </ul>
        </nav>
      </template>
      <MyBackGroundScroll>
        
      </MyBackGroundScroll>
      <template #footer>
        <Button size="small" variant="rounded" >
      my small rounded button
    </Button>
        </template>
    </DefaultLayout>
<!-- 
    <Button size="small" variant="rounded" >
      my small rounded button
    </Button>
    <Button lien="/about">
      my link button
    </Button>
    <Button
      class="rounded"
      @click="() => $router.push('/about')"
    >ffjf</Button> -->
  </main>
</template>
