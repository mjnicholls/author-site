import React from 'react'
import { MainText, MainHeader, DropCap } from '../Styles'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { BoxMain2 } from '../../globalStyles'

const Kyrgyzstan = () => {

    const isSmallScreen = useMediaQuery("(max-width:899px)");

  return (
<>

<BoxMain2>

<Box sx={{ display: "flex", justifyContent: "center"}} pb={{ md: 6, sm: 2 }}>
<MainHeader>
⇝ Kyrgyzstan: The Novel
  </MainHeader>
</Box>

<Box pr={4} pt={4} pb={4} sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center" }}>
<img src='../../../../kyr.png' alt="Kyrgyzstan flag" width="200px" height="200px"></img>
  </Box>

<Grid container pl={0}>

    <Grid item xs={ isSmallScreen ? 0 : 3 } sx={{ display: { md: "flex", xs: "none" }}}>
        <Box>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        <img src='../../../../kyr.png' alt="Kyrgyzstan flag" width="225px" height="225px"></img>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        </Box>
</Grid>

<Grid item xs={ isSmallScreen ? 12 : 9 }>

    <MainText pb={4}>
        <DropCap>D</DropCap>arkness has ended. The swift unblurring of dreams. A small child kicking me in the shins. 
    </MainText>

    <MainText pb={4}>
    A yawning mandible, spooned with wheat paste. A love of eyes. 
    </MainText>

    <MainText pb={4}>
“That fucker has shat himself again,” my wife said. 
</MainText>

<MainText pb={4}>
A preening skittle, skittering on two fat limbs. 
</MainText>

<MainText pb={4}>
“That little fucker needs to belt up,” my wife said. 
</MainText>

<MainText>
I received a phone call informing me my brother was found hanged in a shack in Kyrgyzstan. 
</MainText>


</Grid>

</Grid>

</BoxMain2>


   </>
  )
}

export default Kyrgyzstan
