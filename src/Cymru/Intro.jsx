import React from 'react'
import { Box } from "@mui/material";
import { MainHeader, MainTextCymru } from './Styles';

export default function Intro() {
  return (
    <>
    <Box pl={4} pt={4} pr={4} sx={{ fontSize: "25px" }}>
        <MainHeader>
      Author's Introduction
      </MainHeader>
    <hr />
    </Box>

    <Box pl={4} pb={2} pr={4} sx={{ fontSize: "16px" }}>
    <MainTextCymru><i>Condemned to Cymru</i> is a novel by M.J. Nicholls published in 2021 by <a href="https://www.saggingmeniscus.com/">Sagging Meniscus Press</a>.</MainTextCymru>
<MainTextCymru>The author originally intended the simultaneous publication of an online version &#40;this one&#41;, allowing the reader to read the centerpiece of the novel &#40;a list of fragments composed by the narrator in the Welsh locations indicated&#41; in any order, as an alternative to the alphabetised presentation of the fragments in the print version.</MainTextCymru>
<MainTextCymru>Because the author is excessively fond of sitting in bed reading novels and acutely aware that his fiction has an exceedingly teensy readership, often consisting solely of the author and publisher themselves, the motivation to complete this e-version flagged.</MainTextCymru>
<MainTextCymru>Now it exists, for the author to look at and say, “Well, that's a thing I did.”</MainTextCymru>
<MainTextCymru>Part One is the prologue that provides a narrative framing for the weirdness of Part Two. Part Two comprises the bulk of the novel. Each of the fragments, presented here by location as pins in a map, can be read in any order through bespoke selection. The intention is for the reader to recreate the state of existential drift in which the narrator finds himself. Part Three is the epilogue and provides a semblance of a conclusion, for those into that sort of thing.</MainTextCymru>
<MainTextCymru>For more information on the author, ask a rather glum sous chef named Hector at the Bosworth Bistro on Opus Street, he might know something.</MainTextCymru>
    </Box>
    </>
  )
}
