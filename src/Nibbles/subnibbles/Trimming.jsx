import React from 'react'
import { MainText, MainHeader, DropCap } from '../Styles'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { BoxMain2 } from '../../globalStyles'

const Trimming = () => {

    const isSmallScreen = useMediaQuery("(max-width:899px)");

  return (
<>

<BoxMain2>

<Box sx={{ display: "flex", justifyContent: "center"}} pb={{ md: 6, sm: 2 }}>
<MainHeader>
⇝ A Flocculent Foul (from <i>Trimming England</i>)
  </MainHeader>
</Box>

<Box pr={4} pt={4} pb={4} sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center" }}>
<img src='../../../../TE.jpg' alt="The 1002nd Book" width="225px" height="300px"></img>
  </Box>

<Grid container pl={0}>

    <Grid item xs={ isSmallScreen ? 0 : 3 } sx={{ display: { md: "flex", xs: "none" }}}>
        <Box>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        <img src='../../../../TE.jpg' alt="The 1002nd Book" width="225px" height="300px"></img>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        </Box>

     
</Grid>

<Grid item xs={ isSmallScreen ? 12 : 9 }>

    <MainText pb={0}>
        <DropCap>I</DropCap> am The Writer’s Writer. The Writer’s Writer is not be to confused with The Writers’ Writer. The Writer’s Writer is a writer read only by other writers, whereas The Writers’ Writer is a writer who writes on behalf of other writers. These are not to be confused with The Writers Writer, who writes only about writers, or The Writer Writer, who writes about only one writer, known as A. Writer. One time, the four writers met up to discuss being writers, their writing, and other writers. The Writer’s Writer (me) complained his writing was read only by other writers, and The Writers’ Writer complained his work was written for other writers and no one credited him as a writer. The Writers Writer said that those qualities are what made them respectively The Writer’s Writer and The Writers’ Writer, and if they were any different they would simply be known as The Writer and The Writer, like the other writers. The Writers Writer complained that too many people were writers nowadays, and it was impossible to write about all The Writers out there, while The Writer Writer complained that A. Writer was hard to write as a writer, since he only ever wrote about the one topic: riders. The Writer’s Writer (me) suggested The Writers Writer should write about writers who had written a richness of writings and not the writers who had written little, and that The Writer Writer should write a new character, I. Writer, who wrote about writers who only ever wrote about riders. At that point, The Written Writer entered the room along with The Writ Writer, who issued the writers with writs for plagiarising the writings of The Written Writer. The Writer’s Writer burst out laughing and explained that The Written Writer was a fictional writer and a writer can’t plagiarise writing from a fictional writer—whoever wrote The Written Writer was entitled to sue, but not The Written Writer itself, who was merely a written construct. The Written Writer and The Writ Writer were then written out by The Writer of These Writers, who wrote the other writers out too before they realised they were really The Written Writers themselves. I stabbed a sheep.
    </MainText>


</Grid>

</Grid>

</BoxMain2>


   </>
  )
}

export default Trimming
