import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin:Partial<VitePWAOptions> = {
  registerType:"prompt",
  includeAssets:[],
  manifest:{
    name:"Dzylo Attandance",
    short_name:"Attandance",
    description:"",
    icons:[
     
    ],
    theme_color:"",
    background_color:'',
    display:'standalone',
    scope:"/",
    start_url:"/",
    orientation:'portrait'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
})
