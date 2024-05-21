import React from 'react'
import { MainText, MainHeader, DropCap } from '../Styles'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { BoxMain2 } from '../../globalStyles'

const Tailspin = () => {

    const isSmallScreen = useMediaQuery("(max-width:899px)");

  return (
<>

<BoxMain2>

<Box sx={{ display: "flex", justifyContent: "center"}} pb={{ md: 6, sm: 2 }}>
<MainHeader>
⇝ In the Tailspin (from <i>Condemned to Cymru</i>)
  </MainHeader>
</Box>

<Box pr={4} pt={4} pb={4} sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center" }}>
<img src='../../../../CTC.jpg' alt="Teak Cabinet" width="200px" height="300px"></img>
  </Box>

<Grid container pl={0}>

    <Grid item xs={ isSmallScreen ? 0 : 3 } sx={{ display: { md: "flex", xs: "none" }}}>
        <Box>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        <img src='../../../../CTC.jpg' alt="Teak Cabinet" width="225px" height="300px"></img>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        </Box>
</Grid>

<Grid item xs={ isSmallScreen ? 12 : 9 }>

    <MainText pb={4}>
        <DropCap>O</DropCap>n the fifteenth of each month, five talespinners spin their tales in The Tailspin pub. I sat there in a snood and listened to them. 
    </MainText>

    <MainText pb={4}>
    The first was a frieze-clad oenophile in male form who spoke: “Claire was sat writing her thesis on molecular infometricals or something when she became extremely distracted by her breasts. My, what pleasant lacteal dugs I have, Claire thought. I could spend my life nourishing parched infants with these beauties and sending unsexed males into pitches of priapic madness with these well-proportioned milkbags. I will abandon this thesis on molecular infometricals or something at once and share my delights with the rest of the world. She moved to Newcastle, where she opened an office for those with infants needing succour and males needing a nippled orb to fondle for their amusement. She made over seven million pounds in the first week and opened a karaoke bar in Nigeria.” 
</MainText>

<MainText>
The audience received this in silence. It clunked like the carburettor on a vintage Dodge Charger having been crankshafted into oblivion. Two ladies in the front row snorted liquid fizz over the “nippled orbs”.    
</MainText>

<MainText pt={4} pb={4}>
The second was a shame-waisted aurorophile in female form who spoke: “Henning was an actress who longed to play the part of a teak cabinet on the stage. He decided, one day, to create the part for himself, since the role hadn’t come his way. He wrote <i>The Teak Cabinet Monologues</i> in nine minutes. In his potting shed he built a teak cabinet from scratch with a backdoor so he could sit inside and fully, literally, inhabit the cabinet. On show night, five stagehands lifted him (as cabinet) onstage, before a microphone. For two hours, the audience sat rapt as the cabinet made no sounds except odd creaks or coughs from Henning inside. The play received lukewarm reviews and a cult following.” 
</MainText>

<MainText>
Two audiencers clapped. A plus-sized man wanted to whoop but the unenthusiastic clapping blocked the whoop at throat level. 
</MainText>

<MainText pt={4} pb={4}>
The third was a wasp-hearted eurotophile in male form who spoke: “One time, eight-year-old Alice Leeward from Devonshire thought ‘I am the Trade Union leader Bill Callahan!’ She became the Trade Union leader Bill Callahan. One day, the Trade Union leader Bill Callahan thought, ‘I am a talking plastic chicken on a Nebraskan farm!’ He became a talking plastic chicken on a Nebraskan farm. One day, a talking plastic chicken on a Nebraskan farm thought, ‘I am a paperclip!’ He became a paperclip and so lost the power of thought. We might extract from this the shiver of a moral.” 
</MainText>

<MainText>
A whoop escaped someone’s lips. Four whoops followed. Soon most of the audience released unexpected whoops. This tale triggered a veritable Mexican wave of whoops and was perceived as the best so far. 
</MainText>

<MainText pt={4} pb={4}>
The fourth was a skull-headed macrophile in female form who spoke: “In the following story, an architect drops his pencil at the feet of an attractive lady, Teri. We are about to begin. He’s reluctant to reach down and pick up the pencil in case Teri thinks he’s looking up her skirt. All right, let’s start the story now. Michael is an architect. He is sitting at a table with several other architects at a convention of architects. As a speech is being made about architectural matters, he drops the pencil he was twirling in his hands to the floor. It lands at the feet of Teri, an attractive fellow architect wearing a slightly skimpy skirt. He is reluctant to reach down and pick up the pencil in case Teri thinks he is trying to look up her skirt and embarrassment ensues. In the story you have just heard, an architect named Michael was sitting twirling a pencil in his hands at an architects’ conference. He dropped the pencil at the feet of Teri, an attractive female fellow architect in a short skirt. He was reluctant to retrieve the pencil in case Teri accused him of ‘peeping’ up her skirt. Thank you for listening to my story.” 
</MainText>

<MainText>
The audience leapt from their seats and let rip a percussive strafe of appreciation with their mad clapping hands. Nine hundred whoops and one thousand bravos were heard across the hour of rapturous appreciation. Never in The Tailspin’s history had such a tale of sparkling magnificence sparkled in their earholes. 
</MainText>

<MainText pt={4} pb={4}>
The fifth was a sap-drenched plutophile in male form who spoke: “This is a realistic story. In this story, based on true-to-life events, Kevin sits in a pub and watches the football. Kevin enjoys the match until it becomes clear (having been spoken into existence only a sentence ago) he is a fictional character, so he decides to leave the story like in those clever metafictions by Flann O’Brien and Gilbert Sorrentino. Kevin says that, in real life, if he found out some bastard writer had written him into in a story without his knowledge, he’d be out of there so quick, the bastard would barely have time to wet his quill. This is a good point. It keeps the story true-to-life. But this leaves us with a dilemma. Since Kevin has left, there are no characters in this story. Any new character would soon become aware of his role as a fictional character and walk out. No narrative would take flight. This is essential for a story, you have to have willing characters. The solution is simple. I will put myself into the story, like in those clever metafictions, and watch the football. So there I am, in the pub, watching the football. But then it dawns on me that I hate both pubs and football, so I leave my story.”
</MainText>

<MainText>
A cough followed. This cough signalled that the talespinner was an incompetent waste of room. The clear winner, the fourth one, had already hopped on her moped and was last seen eating ragù in Caerleon. 
</MainText>

</Grid>

</Grid>

</BoxMain2>


   </>
  )
}

export default Tailspin
