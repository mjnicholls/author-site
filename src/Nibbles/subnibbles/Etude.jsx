import React from 'react'
import { MainText, MainHeader, DropCap } from '../Styles'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { BoxMain2 } from '../../globalStyles'

const Etude = () => {

    const isSmallScreen = useMediaQuery("(max-width:899px)");

  return (
<>

<BoxMain2>

<Box sx={{ display: "flex", justifyContent: "center"}} pb={{ md: 6, sm: 2 }}>
<MainHeader>
⇝ No Story to Tell
  </MainHeader>
</Box>

<Box pr={4} pt={4} pb={4} sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center" }}>
<img src='../../../../clarks.png' alt="Clarks Store" width="225px" height="180px"></img>
  </Box>

<Grid container pl={0}>

    <Grid item xs={ isSmallScreen ? 0 : 3 } sx={{ display: { md: "flex", xs: "none" }}}>
        <Box>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        <img src='../../../../clarks.png' alt="Clarks Store" width="225px" height="180px"></img>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        </Box>

     
</Grid>

<Grid item xs={ isSmallScreen ? 12 : 9 }>

    <MainText pb={4}>
        <DropCap>“A</DropCap>n étude on the perils of writing?” Vaughan Grenade asked me in an unnamed bar. 
    </MainText>

    <MainText pb={4}>
    “No,” I replopped. 
</MainText>

<MainText pb={4}>
“I will begin. I once wrote a story. When I began this story, I had six friends. In the first draft the protagonist was Michael Vincent Smith, the managing director of Clarks for the East Lothian region. The plot centred around Michael’s fear that the shoe-shop chain might become obsolete in the region due to the harsh economic reality that people were too poor to buy shoes directly from a retailer—it was cheaper to source second-hand (or second-foot) shoes from £1 shops or branches of Oxfam. The story ended with Michael stepping down from his position as managing director after a nervous breakdown. 
</MainText>


<MainText pb={4}>
“I showed this story to my friend Michael Vincent Smith, the managing director for Clarks in the West Lothian region who had recently had a nervous breakdown due to economic pressures. He explained that the story took certain aspects of his life that he wasn’t comfortable being made public. I told him I had changed his location from East to West Lothian and that should be sufficient to protect his identity. I also explained no one would likely read this story, since I was an obscure writer unpublished by major presses or magazines. He wasn’t satisfied and threatened to end our friendship if I continued with the story. I stuck to my artistic guns. We parted as enemies. 
</MainText>

<MainText pb={4}>
“After receiving a threatening legal document from Michael I rewrote the story around a couple, Sara and Bob Fenton, two cake decorators from Niddrie who caught diphtheria on holiday last year. My story was about two cake directors from Riddrie who, etc. I pleaded with them to remain in the story, but legal documents were issued yet again. My three remaining friends were part of a Bulgarian soccer team. In 2009 they won a local tournament, let the success get to their heads, and ended up sacked from the squad for taking too much heroin on the pitch. I put them into the third draft, to the same outcome. 
</MainText>

<MainText>
“I now have no friends, no one to write about, and no story to tell.”  
</MainText>

</Grid>

</Grid>

</BoxMain2>


   </>
  )
}

export default Etude
