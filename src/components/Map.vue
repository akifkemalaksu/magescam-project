<script setup>

import router from "@/router";

defineProps({
  height:{
    type:String,
  },
  width:{
    type:String,
  },
})

let gotoAddress = () => router.push({name:'address'})

let mapOptions = {
        draggable: false,
        zoomControl: true,
        scrollwheel: true,
        disableDoubleClickZoom: true,
  }

let center = { lat: 40.960823, lng: 29.267776 }
let markers = [
        {
          position: center,
        }
      ]
</script>
<template>
    <GMapMap
      :center="center"
      :zoom=15
      map-type-id="terrain"
      :options="mapOptions"
      :style="{width:width,height:height}"
    >
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      @click=gotoAddress
    >
    <GMapInfoWindow>
        Adres tarifi için tıklayın!
      </GMapInfoWindow>
  </GMapMarker>
    </GMapMap>
  </template>