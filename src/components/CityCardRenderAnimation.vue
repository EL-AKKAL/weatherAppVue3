<template>
     <div
          class="flex px-3 py-6 bg-secondaryColor/70 w-full rounded-md shadow-md"
     >
          <div class="flex flex-col flex-1 gap-2">
               <PlaceHolder class="max-w-[50%]" />
               <PlaceHolder class="max-w-[40%]" />
          </div>
          <div class="flex flex-col flex-1 items-end gap-2">
               <PlaceHolder class="max-w-[75px] w-full" />
               <PlaceHolder class="max-w-[75px] w-full" />
          </div>
     </div>
</template>

<script>
import PlaceHolder from "./PlaceHolder.vue";

export default { components: { PlaceHolder } };
</script>
