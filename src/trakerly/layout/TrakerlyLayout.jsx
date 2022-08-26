import { Box } from "@mui/material"
import { Navbar } from "../components"




export const TrakerlyLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>

            <Navbar />
            
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
            >
                {children}
            </Box>

        </Box>
    )
}
