import { styled } from '@mui/material/styles'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { c1, f1 } from '../globalStyles';


export const SubBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
})


export const HeaderText = styled(Typography)(({ theme }) => ({
    fontFamily: f1,
    [theme.breakpoints.down('sm')]: {
        fontSize: "15px",
        padding: "0px 20px 40px 20px"
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "25px",
        paddingBottom: "40px"
    },
    color: "white",
}));