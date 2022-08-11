import { Box, Button, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"


export const LandingPage = () => {
    let navigate = useNavigate();

    const handleClickLinkLogin = (event)=>{
        event.preventDefault();
        navigate("../auth", { replace: true });
    }

    const handleClickLinkRegister = (event)=>{
        event.preventDefault();
        navigate("../auth/register", { replace: true });
    }

    return (
        <Box className="landing-container">
            <Box>
                <Typography 
                component='p' 
                variant="p" 
                className="p1"
                sx={{ color:'#FFFFFF', mx:{ xs: 5, md:8 }, display:{ xs:'none', md:'block' } }}

                >
                The first step to be successful is to control your finances. <br />
                Keep an eye on how your money is moving. <br /> All your incomes and outcomes in one place
                </Typography>

                <Box sx={{ display:{ xs:'block', md:'none' },  mx:{xs:5, md:8} }}>
                    <img src="assets/images/cards.png" alt="" />
                </Box>

                <Typography 
                component='h1' 
                variant="h1" 
                className="trakerly"
                sx={{ color:'#FFFFFF', mx:{ xs: 3, md:8 }, fontSize:{ xs:100, md:150 }}}
                >
                    Trakerly
                </Typography>

                <Stack direction="row" spacing={2}  sx={{ mx:{xs:1, md:8},mt:2 }}>
                    <Button 
                        variant="contained" 
                        sx={{ color:'#8D8CC0', mx:8, backgroundColor:'#D9D9D9', ":hover":{ backgroundColor:'#D9D9D9' } }}
                        // component={Link} 
                        // to="/auth"
                        // replace="true"
                        onClick={ handleClickLinkLogin }
                    >
                        Login
                    </Button>

                    <Button 
                        variant="contained" 
                        sx={{ color:'#8D8CC0', mx:8, backgroundColor:'#D9D9D9', ":hover":{ backgroundColor:'#D9D9D9' } }}
                        onClick={ handleClickLinkRegister }
                    >
                        Register
                    </Button>
                </Stack>
            </Box>

            <Box sx={{ display:{ xs:'none', md:'block' } }}>
                <img src="assets/images/cards.png" alt="" />
            </Box>
        </Box>

    )
}
