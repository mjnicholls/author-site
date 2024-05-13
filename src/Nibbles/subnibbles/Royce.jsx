import React from 'react'
import { MainText, MainHeader, DropCap } from '../Styles'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { BoxMain2 } from '../../globalStyles'

const Royce = () => {

const isSmallScreen = useMediaQuery("(max-width:899px)");

return (
<>
<BoxMain2>

<Box sx={{ display: "flex", justifyContent: "center"}} pb={{ md: 6, sm: 2 }}>
<MainHeader>
⇝ A Tribute to Royce M. Becker
  </MainHeader>
</Box>

<Box pr={4} pt={4} pb={4} sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center" }}>
<img src='../../../../royce.jpg' alt="Royce M. Becker" width="200px" height="250px"></img>
  </Box>

<Grid container pl={0}>

    <Grid item xs={ isSmallScreen ? 0 : 3 } sx={{ display: { md: "flex", xs: "none" }}}>
        <Box>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        <img src='../../../../royce.jpg' alt="Scotland Before the Bomb" width="225px" height="300px"></img>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        </Box>
</Grid>

<Grid item xs={ isSmallScreen ? 12 : 9 }>

    <MainText pb={4}>
        <DropCap>M</DropCap>publisher, Sagging Meniscus Press, lost Royce M. Becker, their supremely talented in-house artist last week (in 2020) after a long illness. Royce’s flamboyant, eccentric, and meticulously crafted book designs were lovingly paired with the prose and poetry of many talented writers—among them Stephen Moles, Kurt Luchs, Lee Klein, Seth Rogoff, Marvin Cohen, Doug Nufer, Guillermo Stitch, and sundry other legends—to create the sort of books that instantly inflame your eyeballs in bookstores. In an age when cover art in large publishing houses can suffer from a uniformity of style to attract the middlebrow reader, or lazily rely on name recognition to shift units, Royce’s covers were wilfully kaleidoscopic, lively, and artistically independent—everything you’d crave from an indie press.
    </MainText>

    <MainText pb={4}>
    For my own books, Royce created covers revelling in the comic spirit of the novels, matching the playfulness of the prose with a playfulness in her artwork. For <i>The House of Writers</i>, the title and author name are stacked imposingly in Atari-type fontage with staircases unfurling between the block letters, nailing the tone of impish dystopia the novel is striving for. For The 1002nd Book, a series of splayed novels envelop the bottom half of the cover, smothering the protagonist in a temple of texts, while behind piles and piles of unreads loom with equal invitation and menace. For my two favourites, <i>The Quiddity of Delusion</i> and <i>Scotland Before the Bomb</i>, Royce uses a motif of a mind in a tumultuous fug, whether consumed by a tornado of letters, or popped in a puff of blue smoke ringed by quote marks.
</MainText>

<MainText>
The Sagging Shorts series has a splendiferous style, framing the central image and title in one block, with the author’s name below, bordered by barmy, outré colour schemes. The inverted spire-cum-coffee cup in Errata, the Surrealist hall of pillars with wonky clock suspended above in Please State the Nature of Your Emergency, the beehive head assaulted by a swarm in Agitprop for Bedtime, are among the funkiest images in this series. The best way to appreciate these is to see them, <a href="https://www.saggingmeniscus.com/shorts/">so check them out here.</a>
</MainText>

<MainText pt={4} pb={4}>
In all of Royce’s covers, striking typography is paired with skilfully blended colours, hilarious and compelling images and tableaux. Her covers work in complete creative synchronicity with the texts—her reading and appreciation for each author is immediately apparent and deeply appreciated by everyone lucky enough to receive her cover treatment. The reverence and consideration invested in each of these covers is what made Royce’s work for Sagging Meniscus Press an integral part of the project. The visual aesthetic of a small publisher is more important than most authors appreciate, and Royce’s sterling work helped the press to become the coolest and hippest indie in the stratosphere.
</MainText>

<MainText>
There’s no finer satisfaction for an author than the cover art popping into your inbox and smacking you senseless. I always had nothing except sputtering superlatives whenever Royce’s covers appeared. They enhance, elevate, and enchant my texts.
</MainText>

<MainText pt={4} pb={4}>
Stay weird, stay sensational, Royce.
</MainText>

<MainText>
<a href="https://www.saggingmeniscus.com/catalog/">Browse the full SM catalogue of covers.</a>
</MainText>


</Grid>

</Grid>

</BoxMain2>


   </>
  )
}

export default Royce
