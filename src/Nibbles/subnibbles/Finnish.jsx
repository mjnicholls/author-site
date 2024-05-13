import React from 'react'
import { MainText, MainHeader, DropCap } from '../Styles'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { BoxMain2 } from '../../globalStyles'

const Finnish = () => {

    const isSmallScreen = useMediaQuery("(max-width:899px)");

  return (
<>

<BoxMain2>

<Box sx={{ display: "flex", justifyContent: "center"}} pb={{ md: 6, sm: 2 }}>
<MainHeader>
⇝ My Top Ten Nordic Novels
  </MainHeader>
</Box>

<Box pr={4} pt={4} pb={4} sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center" }}>
<img src='../../../../finnish.png' alt="Collage of Finnish novels" width="215px" height="310px"></img>
  </Box>

<Grid container pl={0}>

    <Grid item xs={ isSmallScreen ? 0 : 3 } sx={{ display: { md: "flex", xs: "none" }}}>
        <Box>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        <img src='../../../../finnish.png' alt="Collage of Finnish novels" width="215px" height="310px"></img>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        </Box>

     
</Grid>

<Grid item xs={ isSmallScreen ? 12 : 9 }>

    <MainText pb={2}>
    <b>10. The Brahmadells — Jóanes Nielsen</b>
    </MainText>

    <MainText pb={4}>
    A sprawling historical novel centred round a clutch of titular devil-people, a well-populated saga with a plethora of vivid characters, spanning the early 19thC to the late 20th. An entertaining and ambitious Faroese mini-epic.
</MainText>

<MainText pb={2}>
    <b>9. Assisted Living — Nikanor Teratologen</b>
    </MainText>
<MainText pb={4}>
The Swedish Marquis de Sade serves up an unrelenting platter of child murder made humorous for the sick-minded with an abundance of hybridised neologisms and a tone of cartoon abandon.
</MainText>

<MainText pb={2}>
    <b>8. History. A Mess. — Sigrún Pálsdóttir</b>
    </MainText>
<MainText pb={4}>
The existential turmoil of having one’s academic thesis scuppered by two vital missing pages in a 17thC text is explored in this weird Icelandic novel. The narrative mode is interiorised to an opaque, strange degree, lingering on the minutiae of movements, recalling the detachment of the <i>nouveau roman</i>, leavened with an ironical wit that prevents the plotlessness from succumbing to snooziness.
</MainText>


<MainText pb={2}>
    <b>7. Egalia's Daughters: A Satire of the Sexes — Gerd Brantenberg</b>
    </MainText>
<MainText pb={4}>
 A riotous account of the menwib movement depicting the struggle during the unliberated sixties and beyond from the POV of Petronius and his family, ignited by a fearless menwim teacher who dared to buck the school conventions. Incendiary material.
</MainText>

<MainText pb={2}>
    <b>6. Tómas Jónsson, Bestseller — Guðbergur Bergsson</b>
    </MainText>
<MainText pb={4}>
A beguiling and baffling Icelandic monolith from the peak of the postmodern era (the 1960s). The prose, translated into stylish English by poet Lytton Smith, has a majestic weave, and each notebook unleashes a spume of challenging, fascinating, hilarious, disturbing, and headscratching digressions, making the novel an essential read for anyone interested in exploratory and original writing from anywhere outside their own backyard.
</MainText>

<MainText pb={2}>
    <b>5. The Tale of a Dog: From the Diaries and Letters of a Texan Bankruptcy Judge — Lars Gustafsson</b>
    </MainText>
<MainText pb={4}>
This Vonnegutesque novel features tales from the life of the titular Texan bankruptcy judge, a charming if suspicious late-middle-aged man pondering vicissitudes and eking out a surreal and questioning existence. This writer’s voice is unique and invites pleasing comparisons with luminaries Flann O’Brien and Raymond Queneau.
</MainText>

<MainText pb={2}>
    <b>4. Melancholy — Jon Fosse</b>
    </MainText>
<MainText pb={4}>
An exceptional attempt to penetrate into the artistic vision of Norwegian landscape painter Lars Hertervig. Using a striking technique of near maddening repetition, Fosse captures the inside of Lars’s mind—plagued with visions of smothering black and white clothes, prone to childhood daydreams, completely at remove from reality. A tremendous, painfully, painfully sad novel.
</MainText>

<MainText pb={2}>
    <b>3. Through the Night — Stig Sæterbakken</b>
    </MainText>
<MainText pb={4}>
This novel with its slow-burning terror, its epic heartbreak, its beyond-black humour, is simply magnificent. A punishing account of catastrophic grief and a fly-on-the-wall account of an extramarital affair, lacking any false glamour, all wrenching sadness. Final work from a unique Norwegian writer. 
</MainText>

<MainText pb={2}>
    <b>2. The Red Handler — Johan Harstad</b>
    </MainText>
<MainText pb={4}>
A riotous exercise in parody and metafictional horseplay. Sending up the pitiful prose of crime fiction hacks in tandem with the absurd nature of annotators paid to dream up meaning and significance where none exists, Harstad’s novel evokes the funniest tendencies of Gilbert Sorrentino, Flann O’Brien, <i>The Naked Gun</i>, Vladimir Nabokov, and M.J. Nicholls. An impish comedy that serves up a real smorgasbord of belly laughs, this is an intellectual frolic rich in digressions, randomness, and top-flight parody.
</MainText>

<MainText pb={2}>
    <b>1. The Faculty of Dreams — Sara Stridsberg</b>
    </MainText>
<MainText>
Valerie Solanas, known for the chuckle-packed S.C.U.M Manifesto and for putting a bullet into talentless human mop Andy Warhol, is taken on with a rollicking scabrousness and strange compassion in this Swedish novel. The result is an intoxicating and pungent alt-history, a sincere attempt to anglepoise some light onto a divisive figure.
</MainText>
</Grid>

</Grid>

</BoxMain2>


   </>
  )
}

export default Finnish
