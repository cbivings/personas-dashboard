import React from "react";
import { Box, Container, Collapse, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,Typography, Paper, TextField, IconButton, 
    Button, ThemeProvider } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PropTypes from 'prop-types';
import { createTheme } from '@mui/material/styles';
import { Weather } from './weather.jsx';

const tableTheme = createTheme({
    components: {
        // Name of the component
        MuiPaper: {
            styleOverrides: {
            // Name of the slot
            root: {
                background: 'rgba(255,255,255,0.15)',
            },
            },
        },
        MuiTableCell: {
            styleOverrides: {
            root: {
                // borderColor: 'rgba(255,255,255,0.3)',
                borderColor: '#06C4FF',
                color: 'white',
            },
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    color: 'white',
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: 'white',
                },
            },
        },
    },
});

const capitalize = (s) => { return s.charAt(0).toUpperCase() + s.slice(1); }
// create each row for the table and nested user info section
function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                    {row.name.first} {row.name.last}
                </TableCell>
                <TableCell align="left">{row.location.latitude}, {row.location.longitude}</TableCell>
                <TableCell align="left">{capitalize(row.location.currentWeather.condition)}, {row.location.currentWeather.temperature}°</TableCell>
            </TableRow>
            <TableRow>
                <TableCell sx={{ paddingBottom: 0, paddingTop: 0, background:'linear-gradient(-250deg, #2977b4 30%, #3a2a90 100%)' }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1, display: 'flex', alignItems:'center' }}>
                            <Container sx={{flex: '4', textAlign: 'left'}}><Typography variant="h4">{row.name.first} {row.name.last}</Typography></Container>
                            <Container sx={{flex: '1', textAlign: 'right'}}><Button variant="contained" color="primary">edit</Button></Container>
                        </Box>
                        <Box sx={{ margin: 1, display: 'flex', alignItems:'center' }}>
                            <Container sx={{flex: '1', textAlign:'center'}}>
                                <Typography variant="h6" sx={{color:'rgba(255,255,255,0.35)'}} component="div">
                                    Interests:
                                </Typography>
                                <Typography variant="body1">{row.interests.map((interest => (<Typography>{capitalize(interest)}</Typography>)))}</Typography>
                            </Container>
                            <Container sx={{flex: '1'}}>
                                <Typography variant="h6" component="div" sx={{textAlign:'center', color:'rgba(255,255,255,0.35)'}}>
                                    {/* would put an api in here to pull a map location from the coords */}
                                    Location: 
                                </Typography>
                                <Typography variant="body1" sx={{textAlign: 'center '}}>{row.location.latitude}, {row.location.longitude}</Typography>
                            </Container>
                            <Container sx={{flex: '1', textAlign:'center'}}>
                                <Typography variant="h6" sx={{color:'rgba(255,255,255,0.35)'}} component="div">
                                    Temperature:
                                </Typography>
                                <Typography variant="body1">{row.location.currentWeather.temperature}</Typography>
                            </Container>
                            <Container sx={{flex: '1'}}><Weather weather={row.location.currentWeather.condition}/></Container>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

// basic table structure
function PersonasTable(props){
    return (
        <ThemeProvider theme={tableTheme}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, stickyHeader: "true" }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                    <TableCell />
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Location</TableCell>
                        <TableCell align="left">Current Weather</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.personas.map((row) => (
                            <Row key={row.id} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}

// api structure
Row.propTypes = {
    row: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.shape({
        first: PropTypes.string.isRequired,
        last: PropTypes.string.isRequired,
      }).isRequired,
      interests: PropTypes.arrayOf(PropTypes.string).isRequired,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        currentWeather: PropTypes.shape({
          condition: PropTypes.string.isRequired,
          temperature: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
};

export default PersonasTable;

