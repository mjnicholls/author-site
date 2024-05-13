import React from 'react'
import { BoxMain2 } from '../globalStyles'
import { MainText, HeaderText, ButtonOrder, MainTextButton } from './Styles'
import Box from "@mui/material/Box";
import { Grid, useMediaQuery } from '@mui/material'
import { MainHeader } from '../Home/Styles';

const Books = () => {

const isSmallScreen = useMediaQuery("(max-width:899px)");

const book = [
    {
        title: "../../../APB.jpg",
        alt: "A Postmodern Belch"
    },
    {
        title: "../../../THOW.jpg",
        alt: "The House of Writers"
    },
    {
        title: "../../../TQOD.jpg",
        alt: "The Quiddity of Delusion"
    },
    {
        title: "../../../TTSB.jpg",
        alt: "The 1002nd Book to Read Before You Die"
    },
    {
        title: "../../../SBTB.jpg",
        alt: "Scotland Before the Bomb"
    },
    {
        title: "../../../TE.jpg",
        alt: "Trimming England"
    },
    {
        title: "../../../CTC.jpg",
        alt: "Condemned to Cymru"
    },
    {
        title: "../../../VS.jpg",
        alt: "Violent Solutions to Popular Problems"
    },
    {
        title: "../../../TFAF.jpg",
        alt: "The Fall & Fall of Derek Haffman"
    }
]

  return (
    <BoxMain2>

<Box sx={{ display: "flex", justifyContent: "center"}} pb={6}>
<MainHeader>
⇝ Books
  </MainHeader>
</Box>

<Box pr={4} pb={ isSmallScreen ? 2 : 0} pt={ isSmallScreen ? 0 : 0} sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center" }}>
    <img src={book[8].title} alt={book[8].alt} width="140px" height="200px" />
  </Box>

<Grid container>

<Grid item pr={{ md: 4, sm: 0}} sx={{ display: "flex", flexDirection: { md: "row", sm: "none" }}}>
  
  <Box pr={4} sx={{ display: { md: "flex", xs: "none" }}}>
    <img src={book[8].title} alt={book[8].alt} width="140px" height="200px" />
  </Box>


  <Box>
  <HeaderText>
  {book[8].alt}
  </HeaderText>
  <MainText>
    <p>Verily miffed by the chancres of chance, chronically ineffective politician Derek Haffman affects to effect an unspecified political revolution by pickpocketing his colleagues in the lobby of the Scottish Parliament. In the wake of the abject failure of this objectless mission, repercussions naturally unfold in painfully precise procession, forcing Derek and his chronically untalented mistress, the singer in an avant-garde rock band too toxic for human ears, to flee to Cádiz. An unexpected visit from disgraced former politician and bestselling author Jethro Quiver unpeels another layer from the onion of shame in this shambling comic novel that chronicles the descent of a passionately aimless man, a rebel unable to think up an appropriate cause to lend his rebelling talents.
    </p>
    <p>Sagging Meniscus Press. May 2024. 332pp. </p>

    <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "left" }}}>
    <ButtonOrder>
        <a href="https://www.amazon.co.uk/Fall-Derek-Haffman/dp/1952386748" style={{ textDecoration: "none"}} target="_blank" rel="noreferrer">
        <MainTextButton>
        Order
        </MainTextButton>
        </a>
    </ButtonOrder>
    </Box>

  </MainText>
  </Box>

  </Grid>

  </Grid>

<Box pt={4} pb={6}>
  <hr width="200px" />
</Box>

<Grid container>

<Grid
        item
        pr={{ md: 4, sm: 0}}
        xs={isSmallScreen ? 12 : 6}
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
<Box pr={2} pb={ isSmallScreen ? 2 : 0} sx={{ display: "flex", justifyContent: "center" }}>
    <img src={book[7].title} alt={book[7].alt} width="140px" height="200px" />
  </Box>

  <Box>
  <HeaderText>
  {book[7].alt}
  </HeaderText>
  <MainText>
    <p>Extracted from the maw of a resting shrew, these ten cankers reek of huff and qualm. For the first time in my life, I have written a collection of prose fit for hexagonal man.</p>
    <p>Sagging Meniscus Press. August 2023. 148pp. </p>

    <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "left" }}}>
    <ButtonOrder>
        <a href="https://www.amazon.co.uk/Violent-Solutions-Popular-Problems-Nicholls/dp/1952386535/" style={{ textDecoration: "none"}} target="_blank" rel="noreferrer">
        <MainTextButton>
        Order
        </MainTextButton>
        </a>
    </ButtonOrder>
    </Box>

  </MainText>
  </Box>
  </Grid>

  <Grid
        pt={0}
        pr={{ md: 4, sm: 0}}
        item
        xs={isSmallScreen ? 12 : 6}
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >

<Box pr={2} pb={ isSmallScreen ? 2 : 0} pt={ isSmallScreen ? 4 : 0} sx={{ display: "flex", justifyContent: "center" }}>
<img src={book[6].title} alt={book[6].alt} width="140px" height="200px" />
</Box>

<Box>
<HeaderText>
{book[6].alt}
</HeaderText>
<MainText>
<p>At the Husavík Research Institute, a paradise of Nordic perfection where the blemished are banished and the pretty are promoted, acne-ridden Magnus is sent on a bogus anthropological fact-finding mission to visit every village, town, and city in Wales to file reports for Iceland's upcoming colonisation. A comico-pimply picaresque.</p>
<p>Sagging Meniscus Press. May 2022. 214pp. </p>

<Box sx={{ display: "flex", justifyContent: { xs: "center", md: "left" }}}>
<ButtonOrder>
        <a href="https://www.amazon.co.uk/Condemned-Cymru-M-J-Nicholls/dp/1952386241" style={{ textDecoration: "none"}} target="_blank" rel="noreferrer">
        <MainTextButton>
        Order
        </MainTextButton>
        </a>
    </ButtonOrder>
    </Box>

</MainText>
</Box>

</Grid>

  </Grid>


  <Box pt={4} pb={6}>
  <hr width="200px" />
</Box>

<Grid container>

<Grid
        item
        pr={{ md: 4, sm: 0}}
        xs={isSmallScreen ? 12 : 6}
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
<Box pr={2} pb={ isSmallScreen ? 2 : 0} sx={{ display: "flex", justifyContent: "center" }}>
    <img src={book[5].title} alt={book[5].alt} width="140px" height="200px" />
  </Box>

  <Box>
  <HeaderText>
  {book[5].alt}
  </HeaderText>
  <MainText>
    <p>A stark and uncompromising account of the bizarre and regrettable period when the British Prime Minister Frank Oakface elected to rid each English county of its most irritating citizen, deporting them for a period of incarceration in Jersey's one-star Hotel Diabolique.</p>
    <p>Sagging Meniscus Press. Dec 2020. 256pp. </p>

    <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "left" }}}>
    <ButtonOrder>
        <a href="https://www.amazon.co.uk/Trimming-England-M-J-Nicholls/dp/1952386047" style={{ textDecoration: "none"}} target="_blank" rel="noreferrer">
        <MainTextButton>
        Order
        </MainTextButton>
        </a>
    </ButtonOrder>
    </Box>

  </MainText>
  </Box>
  </Grid>

  <Grid
        pt={0}
        pr={{ md: 4, sm: 0}}
        item
        xs={isSmallScreen ? 12 : 6}
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >

<Box pr={2} pb={ isSmallScreen ? 2 : 0} pt={ isSmallScreen ? 4 : 0} sx={{ display: "flex", justifyContent: "center" }}>
<img src={book[4].title} alt={book[4].alt} width="140px" height="200px" />
</Box>

<Box>
<HeaderText>
{book[4].alt}
</HeaderText>
<MainText>
<p>In 2060, Scotland was annihilated in a series of merciless nuclear strikes from Luxembourg. In response to a curious public's growing hunger for a definitive history of the long-lost nation, M.J. Nicholls provides the most complete account available of Scottish life starting with the failed independence referendum of 2014.</p>
<p>Sagging Meniscus Press. December 2019. 250pp. </p>

<Box sx={{ display: "flex", justifyContent: { xs: "center", md: "left" }}}>
<ButtonOrder>
        <a href="https://www.amazon.co.uk/Scotland-Before-Bomb-M-Nicholls/dp/1944697802" style={{ textDecoration: "none"}} target="_blank" rel="noreferrer">
        <MainTextButton>
        Order
        </MainTextButton>
        </a>
    </ButtonOrder>
</Box>

</MainText>
</Box>

</Grid>

  </Grid>

  <Box pt={4} pb={6}>
  <hr width="200px" />
</Box>

<Grid container>

<Grid
        item
        pr={{ md: 4, sm: 0}}
        xs={isSmallScreen ? 12 : 6}
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
  <Box pr={4} pb={ isSmallScreen ? 2 : 0} sx={{ display: "flex", justifyContent: "center" }}>
    <img src={book[3].title} alt={book[3].alt} width="140px" height="200px" />
  </Box>

  <Box>
  <HeaderText>
  {book[3].alt}
  </HeaderText>
  <MainText>
    <p>A light comedy with a sunny paradisiac quality, rich in verbal virtuosity, Rabelaisian lists, and the occasional outburst of cheerful, cathartic violence, the ultimate summer novel against summer novels.</p>
    <p>Sagging Meniscus Press. June 2018. 218pp. </p>

    <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "left" }}}>
    <ButtonOrder>
        <a href="https://www.amazon.co.uk/Trimming-England-M-J-Nicholls/dp/1952386047" style={{ textDecoration: "none"}} target="_blank" rel="noreferrer">
        <MainTextButton>
        Order
        </MainTextButton>
        </a>
    </ButtonOrder>
    </Box>

  </MainText>
  </Box>
  </Grid>

  <Grid
        pt={0}
        pr={{ md: 4, sm: 0}}
        item
        xs={isSmallScreen ? 12 : 6}
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >

<Box pr={2} pb={ isSmallScreen ? 2 : 0} pt={ isSmallScreen ? 4 : 0} sx={{ display: "flex", justifyContent: "center" }}>
<img src={book[2].title} alt={book[2].alt} width="140px" height="200px" />
</Box>

<Box>
<HeaderText>
{book[2].alt}
</HeaderText>
<MainText>
<p>An obsessive monologue vaguely after the manner of Thomas Bernhard wherein a socially inept writer tries to get to the bottom of an embarrassing incident from his childhood, with anti-climactic non-results.</p>
<p>Sagging Meniscus Press. June 2017. 50pp. </p>

<Box sx={{ display: "flex", justifyContent: { xs: "center", md: "left" }}}>
<ButtonOrder>
        <a href="https://www.amazon.co.uk/Quiddity-Delusion-M-J-Nicholls/dp/194469725X" style={{ textDecoration: "none"}} target="_blank" rel="noreferrer">
        <MainTextButton>
        Order
        </MainTextButton>
        </a>
    </ButtonOrder>
    </Box>

</MainText>
</Box>

</Grid>

  </Grid>

  <Box pt={4} pb={6}>
  <hr width="200px" />
</Box>
    
    <Grid container>

    <Grid
        item
        pr={{ md: 4, sm: 0}}
        xs={isSmallScreen ? 12 : 6}
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
      <Box pr={4} pb={ isSmallScreen ? 2 : 0} sx={{ display: "flex", justifyContent: "center" }}>
        <img src={book[1].title} alt={book[1].alt} width="140px" height="200px" />
      </Box>

      <Box>
      <HeaderText>
      {book[1].alt}
      </HeaderText>
      <MainText>
        <p>A surreal entertainment, a bracing satire, a verbal tour de force, a good-spirited dystopian comedy, and a loving homage to language, literature, and the imagination.</p>
        <p>Sagging Meniscus Press. August 2016. 320pp. </p>
        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "left" }}}>
        <ButtonOrder>
        <a href="https://www.amazon.co.uk/House-Writers-M-J-Nicholls/dp/1944697063" style={{ textDecoration: "none"}} target="_blank" rel="noreferrer" >
        <MainTextButton>
        Order
        </MainTextButton>
        </a>
    </ButtonOrder>
    </Box>
      </MainText>
      </Box>
      </Grid>

      <Grid
        pt={0}
        pr={{ md: 4, sm: 0}}
        item
        xs={isSmallScreen ? 12 : 6}
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >

<Box pr={2} pb={ isSmallScreen ? 2 : 0} pt={ isSmallScreen ? 4 : 0} sx={{ display: "flex", justifyContent: "center" }}>
   <img src={book[0].title} alt={book[0].alt} width="140px" height="200px" />
 </Box>

 <Box>
 <HeaderText>
 {book[0].alt}
 </HeaderText>
 <MainText>
   <p>My first novel. A painfully immature attempt to parody metafiction.</p>
   <p>Self-published, obviously. October 2012. 334pp. </p>
   <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "left" }}}>
   <ButtonOrder>
        <a href="https://www.amazon.co.uk/Postmodern-Belch-M-J-Nicholls/dp/1291980342" style={{ textDecoration: "none"}} target="_blank" rel="noreferrer" >
        <MainTextButton>
        Order
        </MainTextButton>
        </a>
    </ButtonOrder>
    </Box>
 </MainText>
 </Box>

 </Grid>

      </Grid>
    </BoxMain2>
  )
}

export default Books