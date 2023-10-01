<template>
     <div>
          <Suspense>
               <AsyncCityView />
               <template #fallback>
                    <CityViewRenderAnimation />
               </template>
          </Suspense>
     </div>
</template>

<script>
import AsyncCityView from "../components/AsyncCityView.vue";
import CityViewRenderAnimation from "../components/CityViewRenderAnimation.vue";

export default {
     name: "CityView",
     components: {
          AsyncCityView,
          CityViewRenderAnimation,
     },
};
</script>
