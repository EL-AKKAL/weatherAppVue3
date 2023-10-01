<template>
     <div
          class="flex px-3 py-6 bg-secondaryColor/70 w-full rounded-md shadow-md cursor-pointer"
     >
          <div class="flex flex-col flex-1">
               <h2 class="text-xl font-medium text-textColor">
                    {{ city.city }}
               </h2>
               <h3 class="text-base text-textColor/50">{{ city.country }}</h3>
          </div>
          <div class="flex flex-col gap-2">
               <div class="flex flex-row gap-2">
                    <img
                         class="w-[30px] h-auto self-end"
                         :src="`https://openweathermap.org/img/wn/${city.weather.weather[0].icon}@2x.png`"
                         alt=""
                    />
                    <p class="text-xl font-medium self-end">
                         {{ Math.round(city.weather.main.temp) }}&deg;
                    </p>
               </div>
               <div class="flex gap-2">
                    <span class="text-xs">
                         H: {{ Math.round(city.weather.main.temp_max) }}&deg;
                    </span>
                    <span class="text-xs">
                         L: {{ Math.round(city.weather.main.temp_min) }}&deg;
                    </span>
               </div>
          </div>
     </div>
</template>

<script>
export default {
     props: ["city"],
};
</script>
