import React from 'react'
import { MainText, MainHeader, DropCap } from '../Styles'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { BoxMain2 } from '../../globalStyles'

const Argentina = () => {

    const isSmallScreen = useMediaQuery("(max-width:899px)");

  return (
<>

<BoxMain2>

<Box sx={{ display: "flex", justifyContent: "center"}} pb={{ md: 6, sm: 2 }}>
<MainHeader>
⇝ My Top Ten Argentinian Novels
  </MainHeader>
</Box>

<Box pr={4} pt={4} pb={4} sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center" }}>
<img src='../../../../argentina.jpg' alt="Collage of Argentine novels" width="215px" height="310px"></img>
</Box>

<Grid container pl={0}>

    <Grid item xs={ isSmallScreen ? 0 : 3 } sx={{ display: { md: "flex", xs: "none" }}}>
        <Box>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        <img src='../../../../argentina.jpg' alt="Collage of Argentine novels" width="215px" height="310px"></img>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        </Box>

     
</Grid>

<Grid item xs={ isSmallScreen ? 12 : 9 }>

    <MainText pb={2}>
    <b>10. Petite Fleur — Iosi Havilio</b>
    </MainText>

    <MainText pb={4}>
    A surreal, hypnotic one-paragraph novella where a househusband recursively murders his next-door neighbour while his depressive wife falls under the sway of a guru influenced by Alejandro Jodorowsky. A captivating tale that successfully seduces the reader into weaves of warped illogic.
</MainText>

<MainText pb={2}>
    <b>9. Asleep in the Sun — Adolfo Bioy Casares</b>
    </MainText>
<MainText pb={4}>
This surreal anthropomorphic bodyswap novel contains as much wit as that other canine comedy, Mikhail Bulgakov’s <i>Heart of a Dog</i>. Lucio, in a series of implausible “letters” written from a mental asylum, narrates his tale of wife-fixing gone awry. A diverting slice of unusualness for a lazy weekend with a fine, fine moral: never send your wife to an asylum for excessive nagging.
</MainText>

<MainText pb={2}>
    <b>8. The No Variations: Diary of an Unfinished Novel — Luis Chitarroni</b>
    </MainText>
<MainText pb={4}>
Is the future of the novel scraps, notes, remarks, aides-mémoire, seemingly connexionless musings, and sections from the various plotlines that might have emerged had the novel been written? In the what-might-have-beens, in allowing each idea to flourish alongside the others culled for personal or commercial reasons? Why can’t art be made from scaffolding? The fictions that run throughout are dense, allusive, playful and one large self-generating Wikipedia.
</MainText>


<MainText pb={2}>
    <b>7. On Elegance While Sleeping — Vizconde de Lascano Tegui</b>
    </MainText>
<MainText pb={4}>
A glorious novel told in elegant poetic chapters, tinier than a thimbleful of sand, but wittier than four Javier Maríases and smarter than one Fernando Pessoa. Written in an undated diary format, the narrator recounts his experiences as a man of leisure, from his manicured beginnings, his syphilitic middles, to his murderous ends. 
</MainText>

<MainText pb={2}>
    <b>6. Op Oloop — Juan Filloy</b>
    </MainText>
<MainText pb={4}>
A little pearl of outrageously elegant and insightful prose. Mr. Filloy lived to 106 (died in 2000), and refereed boxing matches and wrote 6000 palindromes. This novel concerns a Finnish statistician on the day of his 1000th sexual conquest. Sublime.
</MainText>

<MainText pb={2}>
    <b>5. Gesell Dome — Guillermo Saccomanno</b>
    </MainText>
<MainText pb={4}>
An unrelenting trip to the Inferno (with Dante as our tour guide, cast here as a discerning hack), featuring a revue of crooked businessmen, politicians, lawyers, and powermakers, stomping on the bedraggled masses in the most violent and messed-up Argentine villa to ever set itself up as a utopian tourist beach resort. Opening with a case of child molestation known as los abusaditos, a foul stench that permates the novel, the pages proceed to pile up with one shooting, suicide, murder, corrupt activity, and gruesome child killing after another. A blackly comic history of violence. 
</MainText>

<MainText pb={2}>
    <b>4. The Book of Imaginary Beings — Jorge Luis Borges</b>
    </MainText>
<MainText pb={4}>
A magical love song to the imagination.
</MainText>

<MainText pb={2}>
    <b>3. The Museum of Eterna's Novel — Macedonio Fernández</b>
    </MainText>
<MainText pb={4}>
An Argentinian <i>At Swim-Two-Birds</i>, a precursor to sixties metafiction that trumps most of the novels to emerge from that boom. 
</MainText>

<MainText pb={2}>
    <b>2. The Invented Part — Rodrigo Fresán</b>
    </MainText>
<MainText pb={4}>
 A 545-page maximalist masterwork (part of a trilogy) with the frenetic pace and encyclopedic scope of David Foster Wallace, an impressive sprawling stream of low-to-high musical and literary references, essays, interpretations, and freewheeling opinions. An ur-meta novel that attempts the insane feat of encapsulating the whole world of writing and writers in a sweeping swooning style that is packed with hilarious, lyrical, thoughtful reflection and satire, and a rapturous repository for the author’s passions and obsessions.
</MainText>

<MainText pb={2}>
    <b>1. Hopscotch — Julio Cortázar</b>
    </MainText>
<MainText>
Obviously.
</MainText>
</Grid>

</Grid>

</BoxMain2>


   </>
  )
}

export default Argentina
