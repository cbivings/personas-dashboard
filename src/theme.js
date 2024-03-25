import { createTheme, responsiveFontSizes } from "@mui/material";

const font = "'Epilogue', sans-serif";

var theme = createTheme({
    //todo fix this
    typography: {
        fontFamily: font,
        h1: { fontSize: 69 },
        h2: { fontSize: 57 },
        h3: { fontSize: 48 },
        h4: { fontSize: 40 },
        h5: { fontSize: 33 },
        h6: { fontSize: 28 },
        subtitle1: { fontSize: 23 },
        subtitle2: { fontSize: 19 },
        body1: { fontSize: 19 },
        body2: { fontSize: 16 }
    },
    palette: {
        primary: {//primary ui elements
            light: '#757ce8',
            main: '#fff',
            dark: '#fff',
            contrastText: '#fff',
        },
        secondary: {//secondary ui elements
            light: '#fff',
            main: '#fff',
            dark: '#fff',
            contrastText: '#000',
        },
    },

    transitions: {
        easing: {
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }
    }
});
theme = responsiveFontSizes(theme);
export default theme;