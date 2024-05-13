import React from 'react'
import { MainText, MainHeader, DropCap, MainTextLink } from './Styles'
import { Grid, Box } from '@mui/material'
import { BoxMain2 } from '../globalStyles'
import { useNavigate } from 'react-router-dom';

const Nibbles = () => {

    const history = useNavigate();
  
    const handleNavigation = (link) => {
      history(link);
    };

    const listLeft = [
      {
        title: "On Gilbert Sorrentino's <i>Mulligan Stew</i>",
        link: "/nibbles/stew",
      },
      {
        title:
          "Scottish Interest Books (from <i>The House of Writers</i>)",
        link: "/nibbles/house",
      },
      {
        title: "I'm Still Sorry (from <i>Scotland Before the Bomb</i>)",
        link: "/nibbles/scotland",
      },
      {
        title: "A Tribute to Royce M. Becker",
        link: "/nibbles/royce",
      },
      {
        title: "No Story to Tell",
        link: "/nibbles/story",
      },
      {
        title: "My Top Ten Irish Novels",
        link: "/nibbles/top-ten-irish-novels",
      },
      {
        title: "My Top Ten Spanish Novels",
        link: "/nibbles/top-ten-spanish-novels",
      },
      {
        title: "A Flocculent Foul (from <i>Trimming England</i>)",
        link: "/nibbles/trimming",
      },
    ];

    const listRight = [
      {
        title: "A Slapdown of <i>The Skinny</i>",
        link: "/nibbles/skinny",
      },
      {
        title:
          "Ian Rankin: A Disembodied Screed",
        link: "/nibbles/rank",
      },
      {
        title: "Kyrgyzstan: The Novel",
        link: "/nibbles/kyrgyzstan",
      },
      {
        title: "A Disquisition on the Parameters of Orkney Inbreeding",
        link: "/nibbles/orkney",
      },
      {
        title: "In the Tailspin (from <i>Condemned to Cymru</i>)",
        link: "/nibbles/tailspin",
      },
      {
        title: "Readers & Their Fates (from <i>The 1002nd Book</i>)",
        link: "/nibbles/thousand",
      },
      {
        title: "My Top Ten Nordic Novels",
        link: "/nibbles/top-ten-nordic-novels",
      },
    
    ];

  return (
<>

<BoxMain2>

<Box sx={{ display: "flex", justifyContent: "center"}} pb={{ md: 6, sm: 2 }}>
<MainHeader>
⇝ Nibbles
  </MainHeader>
</Box>

  <Grid container>
    <Grid item xs={12} sm={12} md={6} pl={{ sm: 0, md:4 }} sx={{ borderRight: { sm: "none", md: "1px solid black"}}}>

{listLeft.map((i) => 
    <MainTextLink onClick={() => handleNavigation(i.link)}>
  <span dangerouslySetInnerHTML={{ __html: i.title }} />
</MainTextLink>
)}

</Grid>

<Grid item xs={12} sm={12} md={6} pl={{ sm: 0, md:4 }}>

{listRight.map((i) => 
    <MainTextLink onClick={() => handleNavigation(i.link)}>
  <span dangerouslySetInnerHTML={{ __html: i.title }} />
</MainTextLink>
)}
</Grid>

</Grid>

</BoxMain2>


   </>
  )
}

export default Nibbles
