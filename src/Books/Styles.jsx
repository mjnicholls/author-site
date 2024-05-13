import { styled } from '@mui/material/styles'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid, Button } from '@mui/material'
import { f1, c1 } from '../globalStyles';


export const SubBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
})


export const HeaderText = styled(Typography)(({ theme }) => ({
    fontFamily: f1,
    [theme.breakpoints.down('md')]: {
        fontSize: "22px"
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "30px"
    },
    color: "black",
    paddingBottom: "0px"
}));

export const MainText = styled(Typography)(({ theme }) => ({
    fontFamily: "Cormorant Infant",
    [theme.breakpoints.down('md')]: {
        fontSize: "18px",
        fontWeight: 500
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "25px",
        fontWeight: 500
    },
    color: "black",
}));

export const ButtonOrder = styled(Button)({
    backgroundColor: c1,
    borderRadius: "10px",
    "&:hover": {
        backgroundColor: "#aeaeae"
    }
})

export const MainTextButton = styled(Typography)({
    fontFamily: f1,
    fontSize: "20px",
    color: "white",
})

export const GridStyle = styled(Grid)(({ theme }) => ({
    fontFamily: f1,
    color: "black",
    [theme.breakpoints.down('md')]: {
        fontSize: "25px"
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "40px",
    },
}));