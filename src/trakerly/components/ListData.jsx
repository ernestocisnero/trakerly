import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"

export const ListData = ({ data, type }) => {
    console.log(data)
    return (
        <Box>
            <Typography component='h3' variant="h5">{ type }</Typography>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                }}
                subheader={<li />}
            >
                {data.map((dta, index) => (
                    <ListItem key={index} component="div" disablePadding>
                        <ListItemButton>
                            { type === 'Incomes' 
                            ? <ListItemText primary={`${dta.category}: $${dta.income}`} />
                            : <ListItemText primary={`${dta.category}: $${dta.expense}`} />
                            }
                            
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
