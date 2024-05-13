import React from 'react'
import { MainText, MainHeader, DropCap } from './Styles'
import { Grid, Box } from '@mui/material'
import { BoxMain2 } from '../globalStyles'

const Home = () => {
  return (
<>

<BoxMain2>

<Box sx={{ display: "flex", justifyContent: "center"}} pb={{ md: 6, sm: 2 }}>
<MainHeader>
⇝ Statement of Ill-Intent
  </MainHeader>
</Box>

  <Grid container>
    <Grid item xs={12} sm={12} md={6} pl={{ sm: 0, md:4 }} sx={{ borderRight: { sm: "none", md: "1px solid black"}}}>
  <MainText pt={4}>
<DropCap>A</DropCap>s things stand, I am unsure whether I can prevent myself fading into the subfusc of literary oblivion. A strange compulsion to pen a parody of 1960s Swedish erotica under a pseudonym has flitted for far too long across my unkempt mind. Whenever this urge rises within me—like the inevitable bloat following a platter of salt-saturated grease with lardish nibbles—I repair to a corner and hoot into a sock until the rationality of the morning returns me to a tolerable state. From there, I can potter across the linoleum in my kimono and tell myself that everything’s going to work out for somebody else, pending a thorough review.
</MainText>
</Grid>

<Grid item xs={12} sm={12} md={6} pl={{ sm: 0, md:4 }}>

  <MainText pt={4}>
<DropCap>B</DropCap>ut the happiness I derive from the humble carbonated beverage, the undisputed wondrousness of Larry Johnson’s acoustic blues and ditties, the unplumbed bibliographies of Alan Sillitoe, Isaac Bashevis Singer, and Iain Crichton Smith, and the possibility of living a life unmolested by nerve-shredding anxiety over the merest of circumstances, make progression possible. To tiptoe towards a qualmless moment and embrace the qualmless moment like a treehugger wrapping their waddling arms round a rotund cedarwood makes the whole remaining push of life seem less bastardly.
</MainText>
</Grid>

</Grid>

<Box sx={{ display: "flex", justifyContent: "center"}} pt={4}>
  <MainHeader>
  — Yours abundantly, M.J. Nicholls
  </MainHeader>
</Box>

</BoxMain2>


   </>
  )
}

export default Home
