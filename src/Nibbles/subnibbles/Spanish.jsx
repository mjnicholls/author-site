import React from 'react'
import { MainText, MainHeader, DropCap } from '../Styles'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { BoxMain2 } from '../../globalStyles'

const Spanish = () => {

    const isSmallScreen = useMediaQuery("(max-width:899px)");

  return (
<>

<BoxMain2>

<Box sx={{ display: "flex", justifyContent: "center"}} pb={{ md: 6, sm: 2 }}>
<MainHeader>
⇝ My Top Ten Spanish Novels
  </MainHeader>
</Box>

<Box pr={4} pt={4} pb={4} sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center" }}>
<img src='../../../../spanish.jpg' alt="Collage of Spanish novels" width="215px" height="300px"></img>
  </Box>

<Grid container pl={0}>

    <Grid item xs={ isSmallScreen ? 0 : 3 } sx={{ display: { md: "flex", xs: "none" }}}>
        <Box>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        <img src='../../../../spanish.jpg' alt="Collage of Spanish novels" width="215px" height="300px"></img>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        </Box>

     
</Grid>

<Grid item xs={ isSmallScreen ? 12 : 9 }>

    <MainText pb={2}>
    <b>10. The Dolls' Room — Llorenç Villalonga</b>
    </MainText>

    <MainText pb={4}>
    A Catalan classic, this novel from the 1950s is a triumph of arch elegance, set in the Victorian era and written with a modernist bent. The live-in priest of a fading aristocratic couple relates episodes from their tumultuous lives in a compendium of amusing anecdote, erudition, and travelogue.
</MainText>

<MainText pb={2}>
    <b>9. Tomorrow in the Battle Think on Me — Javier Marías</b>
    </MainText>
<MainText pb={4}>
Serpentine sentences with compelling sequences of thoughts-within-thoughts, a near-metaphysical poetic lilt, a preference for the cosy comma over the sloppy semicolon, reported speech within parentheses, and luscious repetitions mark this author's singular style.
</MainText>

<MainText pb={2}>
    <b>8. Bartleby & Co. — Enrique Vila-Matas</b>
    </MainText>
<MainText pb={4}>
A delightful, compendious trivia-novel featuring a cast of characters who, in the manner of Herman Melville’s Bartleby, would prefer not to.
</MainText>


<MainText pb={2}>
    <b>7. Waltz — Francesc Trabal</b>
    </MainText>
<MainText pb={4}>
Similar to Felipe Alfau’s <i>Chromos</i>, this 1930s Catalan classic is ablaze with fragmented stories running into other stories, told in a richly comic style, full of frenzied action and a vibrant cast of characters.
</MainText>

<MainText pb={2}>
    <b>6. Christ Versus Arizona — Camilo José Cela</b>
    </MainText>
<MainText pb={4}>
Written in one comma-riddled meandering sentence, the novel is a barbed and horrific account of a senseless and bloodthirsty hellhole where violence, mayhem, murder and lunacy rules the roost. Glorious.
</MainText>

<MainText pb={2}>
    <b>5. The Adventures and Misadventures of the Extraordinary and Admirable Joan Orpí, Conquistador and Founder of New Catalonia — Max Besora</b>
    </MainText>
<MainText pb={4}>
An anarchic parody of the picaresque, launching a punny and playfully parodic assault on Middle English, with frequent forays into Ebonics by a dwarf rapper and Chicano smack.
</MainText>

<MainText pb={2}>
    <b>4. The Life of Lazarillo de Tormes — Anonymous</b>
    </MainText>
<MainText pb={4}>
This lesser-known novel was first published in 1554 and remains one of the finest picaresques ever written. 
</MainText>

<MainText pb={2}>
    <b>3. Chromos — Felipe Alfau</b>
    </MainText>
<MainText pb={4}>
A stunningly erudite mixture of stylistic, witty English with occasional Spanish flourishes, this proto-postmodernist novel is a delight of tales-within-tales. Profound, hilarious, darkly comic, wildly inventive.
</MainText>

<MainText pb={2}>
    <b>2. Larva: A Midsummer Night’s Babel — Julián Ríos</b>
    </MainText>
<MainText pb={4}>
The most pun-drunk of the pun-drunk novels. A novel with a toxic volume of Joyce in its bloodstream, laughing on its trip to the intensive care ward to have further puns pumped from its stomach. A brutal attack on the conventions of reading—its verso ‘footnotes’ and later-page ‘endnotes’—perform the same mind-warping as in Jacques Roubaud’s Great Fire of London novels. A feast for fans of multilingual punnage from heaven. 
</MainText>

<MainText pb={2}>
    <b>1. Don Quixote — Miguel de Cervantes</b>
    </MainText>
<MainText pb={4}>
Has a more entertaining, charming, rip-roaring, rollicking, hilarious, and truly, truly marvellous novel than <i>Don Quixote</i> ever been written?
</MainText>
</Grid>

</Grid>

</BoxMain2>


   </>
  )
}

export default Spanish
