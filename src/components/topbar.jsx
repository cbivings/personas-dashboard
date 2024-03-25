import { AppBar, Box, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Topbar  = () => {
    return <div>
        {/* TODO implement scrolling effects as in gml home */}
        <AppBar component="nav">
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '#757ce8' }}>PERSONAS</Typography>
                <Box component="img" 
                    sx={{ maxHeight: 75, width: 160, p: 2 }}
                    src="/Grey-Market-Logo_RGB.png">
                </Box>
            </Toolbar>
        </AppBar>
    </div>
}

export default Topbar;