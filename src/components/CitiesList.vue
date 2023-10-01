<script>
import axios from "axios";
import CityCard from "./CityCard.vue";
import { useRouter } from "vue-router";
export default {
     data() {
          return {
               savedCities: [],
               WeatherAPIKey: "dfbecde9c7ca1faa36ed29f04d911f0e",
               router: useRouter(),
          };
     },
     methods: {
          async getCities() {
               if (localStorage.getItem("savedCities")) {
                    const tempCities = JSON.parse(
                         localStorage.getItem("savedCities")
                    );
                    const requests = [];
                    tempCities.forEach((city) => {
                         requests.push(
                              axios.get(
                                   `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=${this.WeatherAPIKey}&units=metric`
                              )
                         );
                    });
                    await new Promise((res) => setTimeout(res, 1300));
                    const weatherData = await Promise.all(requests);
                    weatherData.forEach((value, index) => {
                         tempCities[index].weather = value.data;
                    });
                    this.savedCities = tempCities;
                    console.log(this.savedCities);
               }
          },
          goToCityView(city) {
               this.router.push({
                    name: "city",
                    params: {
                         country: city.country,
                         city: city.city,
                    },
                    query: {
                         id: city.id,
                         country: city.country,
                         city: city.city,
                    },
               });
          },
     },

     mounted() {
          this.getCities();
     },
     components: { CityCard },
};
</script>
<template>
     <p v-if="this.savedCities?.length === 0">
          no locations added yet m to add your favorite locations please search
          in the field above
     </p>
     <CityCard
          v-for="city in this.savedCities"
          :key="city.id"
          :city="city"
          @click="goToCityView(city)"
     />
</template>
