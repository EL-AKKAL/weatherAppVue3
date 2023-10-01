<template>
     <div>
          <Suspense>
               <AsyncCityView />
               <template #fallback>
                    <p>loading...</p>
               </template>
          </Suspense>
     </div>
</template>

<script>
import AsyncCityView from "../components/AsyncCityView.vue";

export default {
     name: "CityView",
     components: {
          AsyncCityView,
     },
};
</script>
