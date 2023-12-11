import { purple, red } from "@mui/material/colors";

const MainThemes = {
    palette: {
        primary: {
            main:'#fc5e6a'},
        secondary: purple,
        custom:{
            100:"#fff"
        },
      },
}

export default MainThemes;



// declarations



declare module '@mui/material/styles' {
    interface Palette {
      custom: Palette['primary'];
    }
  
    interface PaletteOptions {
      custom?: PaletteOptions['primary'];
    }
  }

  // Update the Button's color prop options
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        custom: true;
    }
  }
  
  declare module '@mui/material/Alert' {
    interface AlertPropsColorOverrides {
        custom: true;
    }
  }