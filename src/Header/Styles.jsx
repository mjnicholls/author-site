import { styled } from '@mui/material/styles'
import { withTheme } from '@mui/system';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { c1, f1 } from '../globalStyles';


export const BoxColorOne = styled(Box)({
    backgroundColor: "#265479",
})

export const SubBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
})

export const HeaderText = styled(Typography)(({ theme }) => ({
    fontFamily: f1,
    [theme.breakpoints.down('md')]: {
        fontSize: "20px",
        padding: "0px 20px 0px 20px"
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "50px",
    },
    color: "white",
    marginRight: "15px",
}));

export const MenuText = styled(Typography)(({ theme }) => ({
    fontFamily: f1,
    [theme.breakpoints.down('md')]: {
        fontSize: "15px",
        padding: "0px 20px 0px 20px"
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "30px",
    },
    color: "white",
    "&:hover": {
        color: "black"
    }
    
}));
