import React from 'react'
import { MainText, MainHeader, DropCap } from '../Styles'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { BoxMain2 } from '../../globalStyles'

const Stew = () => {

    const isSmallScreen = useMediaQuery("(max-width:899px)");

  return (
<>

<BoxMain2>

<Box sx={{ display: "flex", justifyContent: "center"}} pb={{ md: 6, sm: 2 }}>
<MainHeader>
⇝ On Gilbert Sorrentino's <i>Mulligan Stew</i>
  </MainHeader>
</Box>

<Box pr={4} pt={4} pb={4} sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center" }}>
<img src='../../../../stew.png' alt="Mulligan Stew" width="200px" height="300px"></img>
  </Box>

<Grid container pl={0}>

    <Grid item xs={ isSmallScreen ? 0 : 3 } sx={{ display: { md: "flex", xs: "none" }}}>
        <Box>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        <img src='../../../../stew.png' alt="Mulligan Stew" width="225px" height="300px"></img>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        </Box>
</Grid>

<Grid item xs={ isSmallScreen ? 12 : 9 } >

    <MainText pb={4}>
  <b>Imagining myself looking at myself, I seem to be relaxed. (p.9)</b>
    </MainText>

    <MainText>
        <DropCap>G</DropCap>ilbert Sorrentino’s <i>Mulligan Stew</i> is one of the Great Comic Novels and a hack-seeking exocet missile in the War Against Cliché. The novel recasts Antony Lamont from Flann O’Brien’s <i>At Swim-Two-Birds</i> as an arrogant, self-described avant-garde novelist, chronicling his hilarious descent into writerly oblivion. Lamont considers his first published work, <i>Three Deuces</i>—a pompous crime potboiler—to be among the Great Works of American literature. His follow-up novel <i>Guinea Red</i> (later <i>Crocodile Tears</i>) is labelled a Sur-Neofictional mystery and ups the ante in the indulgent, ponderous hackwork stakes. Sorrentino worked as an editor for Grove Press in the 1960s (helping elevate Hubert Selby to stardom), and exacts his revenge with these exquisite and riotous parodies of arrogant, overwritten, inelegant prose styles that make embarrassing gropes for the profound. Fourteen chapters of Lamont’s MS appear in MS and leave the reader rib-tickled and breathless in equal quantities—delirious exhaustion is this novel’s MO.
    </MainText>

    <MainText pt={4} pb={4}>
    <b>I did my best to leer appreciatively, while my heart twisted in me like a boiling lobster. (p50)</b>
</MainText>

<MainText>
Sorrentino modelled his structure on <i>At Swim-Two-Birds</i>, and expands upon O’Brien’s metafictional innovations with his characters plotting to escape from Lamont’s novel as the author loses control of his mind and MS. The weaving of intertextual references (characters are taken from O’Brien, James Joyce, and Dashiell Hammett), and the fondness for the relentless and freewheeling list (and there are a maddening number of lists) are homages to and continuations of Joyce’s vast literary legacy, as evidenced by his appearance in ‘The Masque of Fungo’ (a 40-page play indebted to the Circe chapter of <i>Ulysses</i>).
</MainText>

<MainText pt={4} pb={4}>
    <b>Ugo colored, blanched, then colored again and blenched. (p53)</b>
</MainText>

<MainText>
Among the copious delights are letters Lamont writes to his sister Sheila, ranting about the novel and his loathing for the successful and talented Dermot Trellis. There are bizarre parodies of academic mathematical papers, sophomoric erotic poems (‘The Sweat of Love’), and spam letters from two Mexican seducers, Corrie and Berthe, with whom Lamont becomes obsessed, and a late descent into middle-English (presaging the archaic forms Sorrentino parodies in his inventive if less successful novel <i>Blue Pastoral</i>).
</MainText>

<MainText pt={4} pb={4}>
    <b>At that moment her face took on the unmistakeable frown that one gets on a face when one smells gas. (p232)</b>
</MainText>

<MainText>
<i>Mulligan Stew</i> launches its assault on cliché, bad writing, writer egos, and literature as a capitalistic commodity, themes prevalent across Sorrentino’s career and in his incisive criticism (see <i>Something Said</i>), with an unrelenting blast of the original and unexpected: this masterpiece demonstrates a spellbinding comic imagination in full flight and a tireless passion for formal and artistic innovation—a lesson in what to strive for as a writer, a warning in what to sidestep as a writer, and a rewarding feast for the daring and willing reader. MS deserves to be savoured and re-read for generations.
</MainText>

<MainText pt={4} pb={4}>
    <b>Just the sounds that filled the dim boudoir were enough to make the thick honey of Amour flow copiously from the pounding beam I sedulously larrupped! (p326)</b>
</MainText>
</Grid>

</Grid>

</BoxMain2>


   </>
  )
}

export default Stew
