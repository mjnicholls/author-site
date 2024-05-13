import { styled } from '@mui/material/styles'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { c1, f1 } from '../globalStyles';


export const BoxMain2 = styled(Box)({
    padding: "60px 120px 60px 120px"
})

export const BoxMain = styled(Box)({
    backgroundColor: c1,
    height: "200px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
})


export const MainText = styled(Typography)(({ theme }) => ({
    fontFamily: f1,
    color: "black",
    [theme.breakpoints.down('md')]: {
        fontSize: "20px"
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "25px",
    },
}));

export const MainHeader = styled(Typography)(({ theme }) => ({
    fontFamily: f1,
    color: "black",
    [theme.breakpoints.down('md')]: {
        fontSize: "25px"
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "40px",
    },
}));

export const HeaderText = styled(Typography)({
    fontFamily: f1,
    fontSize: "50px",
    color: "black",
    transform: "rotate(-30deg)",
    marginRight: "15px"
})

export const DropCap = styled(Typography)({
    backgroundColor: c1,
    float: "left",
    fontSize: "5em",
    lineHeight: 1,
    marginRight: "0.1em",
    fontFamily: f1,
})