import React from 'react'
import { MainText, MainHeader, DropCap } from '../Styles'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { BoxMain2 } from '../../globalStyles'

const Irish = () => {

    const isSmallScreen = useMediaQuery("(max-width:899px)");

  return (
<>

<BoxMain2>

<Box sx={{ display: "flex", justifyContent: "center"}} pb={{ md: 6, sm: 2 }}>
<MainHeader>
⇝ My Top Ten Irish Novels
  </MainHeader>
</Box>

<Box pr={4} pt={4} pb={4} sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center" }}>
<img src='../../../../irish.jpg' alt="Collage of Irish novels" width="215px" height="300px"></img>
  </Box>

<Grid container pl={0}>

    <Grid item xs={ isSmallScreen ? 0 : 3 } sx={{ display: { md: "flex", xs: "none" }}}>
        <Box>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        <img src='../../../../irish.jpg' alt="Collage of Irish novels" width="215px" height="300px"></img>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        </Box>

     
</Grid>

<Grid item xs={ isSmallScreen ? 12 : 9 }>

    <MainText pb={2}>
    <b>10. The Life of Riley — Anthony Cronin</b>
    </MainText>

    <MainText pb={4}>
    This novel owes much to Flann O’Brien in the deadpan, elaborately limned narration, following the titular Riley on his anti-picaresque trip from apathetic assistant-to-the-secretary to pub beggar to promising journalist to London slum-dweller to victim of the vicious therapy of an overbearing, monied spinster. Poet and biographer Cronin’s comic novel is a charmingly strange portrait of a postwar literary drifter singularly unimpressed by life.
</MainText>

<MainText pb={2}>
    <b>9. Inish — Bernard Share</b>
    </MainText>
<MainText pb={4}>
A non-fiction writer with books on Irish slang and the history of Aer Lingus, Share also penned a cult 1960s novel that Spike Milligan cited as one his favourites. Equally as possessed by the spirit of James Joyce and Flann O'Brien as the other writers mentioned so far, <i>Inish</i> is a riotous hoot riddled with strange, warped idioms, all wrapped up in a splendid nonsensical non-plot with the unrelenting, galloping prose style of a madman.
</MainText>

<MainText pb={2}>
    <b>8. King Goshawk and the Birds — Eimar O’Duffy</b>
    </MainText>
<MainText pb={4}>
A satirical novelist whose Cuanduine trilogy sent up the ravages of capitalism with full-toothed fervour. O’Duffy’s cutting wit is Flann-strength and the evergreen evil of his topic makes this novel entirely contemporary in spite of its 1926 publication date. The book is also a feast of playful play, with O’Duffy parodying newspaper columns, inventing new Irish myths, poking a toe out the fourth wall, and revelling in the vicious vamp of language.
</MainText>


<MainText pb={2}>
    <b>7. Balcony of Europe — Aidan Higgins </b>
    </MainText>
<MainText pb={4}>
A lyrical novel about a painter’s affair with a young Jewish lady is not an easy sell, but the euphony of the prose, the humorous dialogue, painterly evocations of the sun-baked landscapes, the revue of strange characters, the supremely brainy allusions and casual instances of French, German, Spanish and Gaelic phrases, contribute to making this novel an essential text and magnum opus from an overlooked Irish writer of great substance and power working in the shadow of Beckett and the European modernists.
</MainText>

<MainText pb={2}>
    <b>6. The Dirty Dust — Máirtín Ó Cadhain</b>
    </MainText>
<MainText pb={4}>
A classic of the Irish language and a lost modernist epic, a multitude of voices from beyond the grave narrate this foul-mouthed novel, led by the histrionic Caitriona Puadeen, keen to dispel gossip about her character from the longer-dead residents of the cemetery. A frenetic stream of insults, hearsay, banter, prattle, and bickering, the novel flits from one unidentified voice to another. Dense in allusions to the politics and references of the late 1940s, this blackly funny novel can be read for its wicked humour and sublime Irish banter by the plain-drinking masses, who may never see its like again.
</MainText>

<MainText pb={2}>
    <b>5. Down All the Days — Christy Brown </b>
    </MainText>
<MainText pb={4}>
One of the most raucous and vividly descriptive books of wartime and postwar Dublin in the canon of modern Irish literature. Wildly prolix, drunkenly musical, and fizzing over with lexical abandon, Brown's ear for the crudity and cruelty of the hard-bitten Irish tongue is sublime, and his seemingly eidetic skill for descriptive detail puts the reader at the nucleus of every character and set-piece. A stonkingly underappreciated novel, a hilarious, joyous, painful, and inventive tribute to the lunacy of life.
</MainText>

<MainText pb={2}>
    <b>4. Farewell to Prague — Desmond Hogan</b>
    </MainText>
<MainText pb={4}>
A wholly original polyphonic novel written in fragments of travelogue, baroquely descriptive sentences of photostatic recall, and autofictional encounters with past travelling companions, lovers, and friends. The result is a marvellous tapestry of wanderlust, a struggle for acceptance, and the shedding of traumas in a shapeshifting Europe in the last leg of the 20th century, composed with a poetic exactitude and a quietly haunting despair—in the same wheelhouse as W.G. Sebald and Aidan Higgins.
</MainText>

<MainText pb={2}>
    <b>3. The Poor Mouth — Flann O'Brien</b>
    </MainText>
<MainText pb={4}>
First published in Irish as <i>An Béal Bocht</i> by Myles na gCopaleen (the <i>nom de plume</i> Brian O'Nolan would use for his columns in the <i>Irish Times</i>) in 1941, this withering parody of Gaeltacht misery memoirs is quite simply one of the funniest novels ever written. 
</MainText>

<MainText pb={2}>
    <b>2. Molloy / Malone Dies / The Unnamable — Samuel Beckett</b>
    </MainText>
<MainText pb={4}>
This trilogy of existential novels interrogate the thing of narrative itself (and the thing of life itself) and opened me up to the power of modernism. Each novel in the trilogy is in turns hilarious, surreal, blackly comic, baffling, maddening, insane, and infinitely re-readable. The star is Beckett's divine, unbettered prose, hands-down syllable-for-syllable the finest modernist writing in the universe.
</MainText>

<MainText pb={2}>
    <b>1. Ulysses — James Joyce</b>
    </MainText>
<MainText pb={4}>
Obviously.
</MainText>
</Grid>

</Grid>

</BoxMain2>


   </>
  )
}

export default Irish
