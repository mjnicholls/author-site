import { styled } from '@mui/material/styles'
import Box from "@mui/material/Box";

export const c1 = "#265479"
export const c2 = "#6F8990"
export const f1 = "IM Fell Double Pica SC"

export const BoxColorOne = styled(Box)({
    backgroundColor: c1,
})

export const BoxCentred = styled(Box)({
   display: "flex", 
   justifyContent: "center"
})


export const BoxMain2 = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        padding: "20px 20px 20px 20px"
    },
    [theme.breakpoints.up('md')]: {
        padding: "30px 120px 30px 120px"
    },
}));