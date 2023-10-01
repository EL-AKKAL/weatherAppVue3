<template>
     <div class="flex flex-col flex-1 items-center">
          <p
               v-if="route.query.preview"
               class="capitalize text-textColor text-center w-full bg-secondaryColor/50 p-4"
          >
               This City is in preview mode , click + icon to add it to your
               favorite list
          </p>
          <!-- city layout -->
          <div class="flex flex-col items-center py-12 text-textColor">
               <h2 class="text-4xl">{{ route.query.city }}</h2>
               <h3 class="text-xl text-textColor/40">
                    {{ route.query.country }}
               </h3>
               <div class="flex justify-center items-center flex-col">
                    <p class="text-8xl mb-8 font-bold">
                         {{ Math.round(cityWeatherData.main.temp) }}&deg;
                    </p>
                    <ul class="w-full gap-4 flex">
                         <li class="font-bold shadow-md px-5 py-2">
                              max :{{
                                   Math.round(cityWeatherData.main.temp_max)
                              }}&deg;
                         </li>
                         <li class="font-bold shadow-md px-5 py-2">
                              min :{{
                                   Math.round(cityWeatherData.main.temp_min)
                              }}&deg;
                         </li>
                    </ul>
                    <img
                         class="w-[150px] h-auto"
                         :src="`https://openweathermap.org/img/wn/${cityWeatherData.weather[0].icon}@2x.png`"
                         alt=""
                    />
               </div>
               <ul class="w-full flex flex-row bg-transparent gap-5">
                    <li class="px-4 py-2 text-xl bg-bgColor/50 shadow-md">
                         Weather <i class="fa-solid fa-cloud"></i> :
                         {{ cityWeatherData.weather[0].description }}
                    </li>
                    <li class="px-4 py-2 text-xl bg-bgColor/50 shadow-md">
                         Humidity <i class="fa-solid fa-droplet"></i> :
                         {{ cityWeatherData.main.humidity }}
                    </li>
                    <li class="px-4 py-2 text-xl bg-bgColor/50 shadow-md">
                         Wind <i class="fa-solid fa-wind"></i> :
                         {{ cityWeatherData.wind.speed }} km/h
                    </li>
               </ul>
          </div>
          <button
               @click="removeCity"
               class="bg-transparent text-red-700 font-medium outline-none"
          >
               <i class="fa-solid fa-trash"></i>
               Remove City
          </button>
     </div>
</template>

<script setup>
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const WeatherAPIKey = "dfbecde9c7ca1faa36ed29f04d911f0e";
const WeatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${route.query.city}&appid=${WeatherAPIKey}&units=metric`;

const getCityWeather = async () => {
     try {
          console.log(WeatherAPIUrl);
          const result = await axios.get(WeatherAPIUrl);
          return result.data;
     } catch (error) {
          console.log(error);
     }
};

const cityWeatherData = await getCityWeather();
const removeCity = () => {
     const cities = JSON.parse(localStorage.getItem("savedCities"));
     const updatedCities = cities.filter((city) => city.id !== route.query.id);
     localStorage.setItem("savedCities", JSON.stringify(updatedCities));
     router.push({ name: "home" });
};
</script>
