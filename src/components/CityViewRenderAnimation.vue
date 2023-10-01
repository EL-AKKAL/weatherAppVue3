<template>
     <div class="flex flex-col flex-1 items-center">
          <div
               class="flex flex-col items-center py-12 w-[360px] text-textColor"
          >
               <PlaceHolder class="max-w-[200px] h-[70px] mb-2 w-full" />
               <PlaceHolder class="max-w-[220px] mb-8 h-[40px] w-full" />
               <PlaceHolder class="max-w-[200px] h-[140px] mb-8 w-full" />
               <div class="w-full gap-4 flex">
                    <PlaceHolder class="max-w-[220px] h-[40px] w-full" />
                    <PlaceHolder class="max-w-[220px] h-[40px] w-full" />
                    <PlaceHolder class="max-w-[220px] h-[40px] w-full" />
               </div>
          </div>
          <PlaceHolder class="max-w-[120px] mb-12 h-[40px] w-full shadow-md" />
     </div>
</template>
<script setup>
import PlaceHolder from "./PlaceHolder.vue";
</script>
