import React from 'react'
import { MainText, MainHeader, DropCap } from '../Styles'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { BoxMain2 } from '../../globalStyles'

const Thousandth = () => {

    const isSmallScreen = useMediaQuery("(max-width:899px)");

  return (
<>

<BoxMain2>

<Box sx={{ display: "flex", justifyContent: "center"}} pb={{ md: 6, sm: 2 }}>
<MainHeader>
⇝ Readers & Their Fates (from <i>The 1002nd Book</i>)
  </MainHeader>
</Box>

<Box pr={4} pt={4} pb={4} sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center" }}>
<img src='../../../../TTSB.jpg' alt="The 1002nd Book" width="225px" height="300px"></img>
  </Box>

<Grid container pl={0}>

    <Grid item xs={ isSmallScreen ? 0 : 3 } sx={{ display: { md: "flex", xs: "none" }}}>
        <Box>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        <img src='../../../../TTSB.jpg' alt="The 1002nd Book" width="225px" height="300px"></img>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        </Box>

     
</Grid>

<Grid item xs={ isSmallScreen ? 12 : 9 }>

    <MainText pb={4}>
        <DropCap>B</DropCap>ack in class, I offered the following overview: “In my experience, there are six kinds of readers. The first aspire to omnilegence, i.e. to have read and absorbed all worthwhile books in existence, leaping with hopeless indiscrimination from a lesser title in Zola’s Rougon-Macquart sequence, to a Stewart Home novel with a non-provocative title, to a former rock musician’s valiant first-novel failure, to an obscure 1000-page Zimbabwean epic about crooked agribusiness, to an elegiac Frank Kermode memoir. The second are strategically voracious, selecting the crème of an oeuvre, skipping the minor works in favour of a realistic overview of one school of writing: for example, with the French decadents, tackling the central authors (Huysmans, Mirbeau, Verlaine), skipping the more marginal figures (Schwob, Montesquiou, de Gourmont), or with the Dickens canon, sidestepping such filler as <i>Barnaby Rudge</i>, <i>Dombey and Son</i>, and <i>The Old Curiosity Shop</i>.
    </MainText>

    <MainText pb={4}>
    The third are the careful sluggards, reading fewer books per annum than the first two, choosing an eclectic mix from various periods, schools, and presses, making them knowledgeable about a wide range of essential texts. The fourth are the occasional toe-dippers, taking on a classic from time to time, sticking to more digestible and popular fare, preferring their pages plot-packed and readable, i.e. easier to finish over the course of a month. The fifth are the one-bookers: people who select a novel (if a classic, <i>Jane Eyre</i> or <i>Great Expectations</i>), to read, and prolong the process over a full annum, sometimes not even finishing the text. The sixth are the one-bookers who read the latest bestseller and rave about this one book to colleagues, friends, and family for the whole annum, until the next one comes around, and repeat the revolting cycle until death. These are the six reader classifications.” 
</MainText>

<MainText pb={4}>
This provoked further contemplations about the aleatory nature of reading. How one man can walk the planet and never crack open <i>Don Quixote</i>, how one woman can enjoy a century of existence, and never read a sentence of Roderick Random. It made me wonder about all the novels I enshrine, and their strange pathways through time. Has President Obama ever muscled through <i>Tristram Shandy</i>, including endnotes? Has Black Francis of Pixies read W.G. Sebald’s <i>The Emigrants</i>? Has Paul McCartney ever chortled at Flann O’Brien? How much Ali Smith has Patti Smith read, and how much Zadie Smith has Patti Smith read, and how much Stevie Smith have they all read? Has that one cool dude on the underground reading Perec’s <i>Things</i> ever lost himself in Roubaud’s <i>Great Fire of London</i>? Is there a life-changing novel making an orbit round the world towards me that will, by fluke of chance, be purchased ten minutes by someone else before I arrive at the book shop? Is there, beneath that pile of books stacked up in the corner, an obscure author’s forgotten masterpiece, waiting to be unearthed? How many not-quite-right books do I plough through in place of the perfect ones that might forever elude my eyes? Why do certain books arrive at the wrong time in one’s life, and find themselves forever blacklisted? Why do books once rapturously received collapse upon second readings? Do books have a life after that one rapturous reading? How can it be one person’s lot to only finish reading Stephen King’s <i>The Stand</i> in the course of their lives, and another’s to read the entire pantheon of Boxall-approved world classics from Homer to now? 
</MainText>


<MainText pb={4}>
Should a reader have a ‘conscience’ about what is read in their lifetimes? Does someone serious about literature have an obligation to read the books less conscientious readers will never think to pick up? Or is the reader, regardless of their powers, allowed to read whatever takes their fancy, neglecting lesser-known books in favour of franchise sci-fi or other popular brands? There are readers with degrees in literature who, upon graduating and moving into their non-literary professions, spend their lives reading bestsellers and franchise books, have “tackled” the classics in their late teens. There are readers whose large intellects take them into taxing occupations, leaving them so frazzled in the evening, the first novel reached for is something light and brainless, like the works of Toby Litt. There are readers who, seduced by the lure of the zeitgeist, snack on the latest craze in book, film, and music, in a desperate need to be included in the often vapid and boring public discourse. These are readers who, capable of tackling <i>Ulysses</i> or other “difficult” books, wimp out to watch boxsets. 
</MainText>

<MainText pb={4}>
There is no public pressure on intelligent people to read widely, indiscriminately, and madly. In Britain, the most popular outlets for literature are focused on middlebrow novels from large publishers. There are few programmes or articles appreciating the works of hundreds of past masters, because of their “limited appeal”. The reader is never pushed into eclecticism. On BBC Radio 4, the tone of literature programmes is one of “reading is fun”, and that all literature is equal. Kafka, George R.R. Martin, Proust, Ian Rankin ... there is no difference. It’s all reading. Reading is awesome. Councils and libraries, with their events, are continually promoting events with authors dragged up through their awards schemes, initiatives, awards: a cosy ecosystem allowing for the safe collaboration between companies and councils, keeping the agenda safe and unprovocative. Logging on to the Edinburgh International Book Festival, one of the first things I saw promoted: an evening with Jeffrey Archer. 
</MainText>

<MainText>
Enough said. 
</MainText>

</Grid>

</Grid>

</BoxMain2>


   </>
  )
}

export default Thousandth
