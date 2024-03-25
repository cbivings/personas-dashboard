import React from "react";
import { Container, TextField, ThemeProvider } from "@mui/material";
import { mockDataPersonas } from "../../data/mockData.js";
import { createTheme } from '@mui/material/styles';
import PersonasTable from "../../components/personasTable.jsx";


//get data from mock data 
const personas = mockDataPersonas.personas;

const searchFieldTheme = createTheme({
    components: {
        // Name of the component
        MuiFormLabel: {
          styleOverrides: {
            // Name of the slot
            root: {
              color: '#fff',
              '&.Mui-focused': {
                    color: '#fff',
              },
            },
          },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '80%',
                    background:'rgba(255,255,255,0.1)',
                    color:'white',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.42)',
                },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    width: '80%',
                    background:'rgba(255,255,255,0.1)',
                    color:'white',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.42)',
                },
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    color: 'white',
                    width: '80%',
                    '&::after': {
                        borderBottom: '2px solid #fff',
                    }
                },
                input: {
                    width: '80%',
                    background:'rgba(255,255,255,0.1)',
                }
            },
        },
      },
    },
    },
});

const UserDashboard = () => {
    return (
        <Container component="main" sx={{ overflow: 'auto', marginTop: '120px', paddingBottom: '24px'}}>
            <Container sx={{ margin: "10px", textAlign: 'center', width: 'auto'}}>
                <ThemeProvider theme={searchFieldTheme}>
                    <TextField id="filled-search" label="Search field" type="search" variant="filled" />
                </ThemeProvider>
            </Container>
            <PersonasTable personas={personas} />
        </Container>
    );
    
}

export default UserDashboard;
