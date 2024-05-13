import React from 'react'
import { MainText, MainHeader, DropCap } from '../Styles'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { BoxMain2 } from '../../globalStyles'

const Skinny = () => {

    const isSmallScreen = useMediaQuery("(max-width:899px)");

  return (
<>

<BoxMain2>

<Box sx={{ display: "flex", justifyContent: "center"}} pb={{ md: 6, sm: 2 }}>
<MainHeader>
⇝ A Slapdown of <i>The Skinny</i>
  </MainHeader>
</Box>

<Box pr={4} pt={4} pb={4} sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center" }}>
<img src='../../../../skinny.png' alt="The Skinny" width="200px" height="300px"></img>
  </Box>

<Grid container pl={0}>

    <Grid item xs={ isSmallScreen ? 0 : 3 } sx={{ display: { md: "flex", xs: "none" }}}>
        <Box>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        <img src='../../../../skinny.png' alt="The Skinny" width="225px" height="300px"></img>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        </Box>
</Grid>

<Grid item xs={ isSmallScreen ? 12 : 9 }>

    <MainText pb={4}>
        <DropCap>B</DropCap>ook reviewers for established cultural organs are a strange, unknowable species. Their forms are manifold, from frustrated unpublished novelists, PR-or-admin folks with twelve poems in a drawer, published novelists reviewing their mates or settling scores, to hacks marking time until the big feature opp, voracious power-readers, or Eng Lit grads eager to vindicate their student debts. These reviewers exist in unknowable realms, lost within the haze that separates critic from author, protected via the code that the writer writes, the critic criticises, and the two must remain separate for humanitarian reasons. Aside from the more prominent critics in perennial reviewing outlets like <i>The Guardian</i> and their ilk, we know little about the people pronouncing opinions on our novels, whether we can trust their pronouncements, or cast aside their judgements as ill-brained skronk.
    </MainText>

    <MainText pb={4}>
    An author seeking a review is a pitiful thing—a crouched, shivering, naked hump, parked on a street corner with cap in hand seeking a crumb of acknolwedgement from someone with less literary talent than them, some unknown whoman like Ham Chester or Linda Pootle whose reading credentials are accepted as up to snuff based on the reputation of the organ. The author, resentful at being put in the position of having their work scrutinised by people who consider Yann Martel “literary”, who wield the power to bring him further readers and plaudits, loathes the reviewer up to the point that reviewer reviews their work favourably, at which point that reviewer becomes a lifelong friend and permanent source for blurbage and favours—always with that underlying resentment that that reviewer might have somehow contributed to them selling more copies of their book, when the novel should have powered its way into readers’ hearts through sheer prose-power alone. The relationship is a toxic one, marked by a mutually unreciprocated savage bitterness and  loathing. 
</MainText>

<MainText>
Now, to my scrawny ass. As an author releasing novels in a hostile, ultra-competitive non-market—a viperous nest of rabid ambition where novels from large presses can pass sans comment, where agent-backed fiction sells less-than-enough to leave both parties embittered, and the notion of a literary “career” is as laughable a phrase as “sexy humous” or “luscious polyp”, authors rely on reviewers more and more for the teensiest nip of attention for their latest offerings. The reviewer wields a mild power, like Hugo Speer. The reviewer, from their position of unchallenged nous, can crush the author under their heel with an arch accusing tone, well-chosen references, short putdowns, heinous contextless excerpts. The reviewer, that necessary asshole, that useful prick, that oft-needed buttweasel, can perform that heroic feat all authors live for: making some open-mouthed twitter halfwit poke a link—that all-important link that represents your two-year toil, slowly trickling into irrelevance as further cultural happenings load and load and load, until you can’t take another new thing by some new artist making significant things like all the time, always, all the time, new art, new art, begging and screaming for your attention, endlessly, endlessly, screaming and begging. 
</MainText>

<MainText pt={4} pb={4}>
I am erring on the side of optimism. The reviewer, unless that reviewer is a prominent name in literature, like Mil Millington, has no powers whatsoever. The reviewer is, for the most, a powerless automaton. A random name on a website writing style-free plot summaries for “exposure” or 50p a pop. They cannot “make or break” an author. A review, whether rapturous write-up or sadistic slam, has all the market power of a haggis stand on the Gaza Strip. A review will, most likely, have no influence on whether the novel sells. There are other forces at work. The novels that sell are the result of a collusion between agents, publishers, and magazines, each of whom must swoop down on a handful of titles selected to be “big”, which are then larded up and inserted into the unenquiring reader’s maw. In sadder words, like all corporate schemes, the literary game is rigged.
</MainText>

<MainText>
To return to the crux of this cruxless cant. The reviewer is a necessary barnacle, and some of them are tremendous peeps, with an insatiable passion for text. Some of them are personal heroes. But some of them ...  well ... lack flair in their critiquing. The review must work in creative tandem with the novel to benefit author and reviewer. The reviewer must showcase their own prose talents in the review to prove themselves on a par with the prose writer under review. The reader must know the reviewer can stitch together an elegant sentence if we are to trust their critical acumen. The review, if the reviewer is passionate about the book, must work whatever voodoo possible to provoke a real reaction from the reader, to make that lazy, apathetic twithead actually consider parting with pounds. Too many reviewing organs have no notion of the reviewer-as-artist. And this is the nagging niggle with contemp reviewage, and the one I am about to pound into the ground in a further moment. 
</MainText>

<MainText pt={4} pb={4}>
<i>An Aside — Personally, I favour the unpredictable whirligig reviewing found on Goodreads. On that site, in certain corners (the non-YA ones), from a smattering of impassioned freaksticks from unknown backgrounds, write free from the sort of proscriptive reviewerese, the template-tethered, or the mannered banalisms of the publication seeking safe profit. On Goodreads, the reviews flit from parodic invention, incisive criticism, searching rambles, to personal digressions, and literary puzzles. This ragbag of talented, witty, and hyperliterate people, have reimagined the literary review in a spirit of gleeful spontaneity, and the unrestrained and creative nature of this is more in keeping with creative bliss than the formal air of respectableness, or the cacademic “criticism” broadcast by organ reviewers of varying stripes.</i>
</MainText>

<MainText>
This aside aside, these organs have readers and an audience. Quality is paramount. This brings me wheezing toward the first example of below-par reviewing, <i>The Skinny</i>. This is a print and online magazine with a print-run of 63,000 across six northern UK cities that practises (per strap) “independent cultural journalism”, that bloomed from a volunteer-run collective to a small-time biggish deal that dispenses dispatches from various cultural portals, mixing offbeat with popular art in a slick millennial manner. I find the mag’s hipper-than-thou trendsetting attitude arrogant—exuding coolness, in-ness, and an air of “we have the cultural lowdown”—however, among less cynical bastards than me, the pub is well-liked and firmly embedded in the Scottish cultural sphincter, so deserves a critical perusal as a cultural conduit. I would suggest that, as far as the book section is concerned, their house style undercuts their mission to provide “informed, entertaining coverage”. 
</MainText>

<MainText pt={4} pb={2}>
Book reviews in <i>The Skinny</i> cleave to an airless 300-word template, in which the reviewers spend the bulk of the reviews summarising plotlines (i.e. rewriting the blurbs in their own words), transplanting material from press releases (awards won, author whoops seen, PR statements reworded), padding the reviews with buzzphrases tailormade for the next book’s “praise-for” page (“the literary equivalent of blackberry wine”, for e.g.), before a short paragraph making broad summing-up opinions that constitute the “review” element. There are almost no reviews in these reviews. This restrictive format inhibits the reviewers, who are not permitted the space to probe further into the books, are not allowed express themselves using their own stylistic foibles. This sucks the spirit from each review, making each writer sound the same, the reviewer’s names interchangeble, boxing them into an unimaginitive constraint that fails to permit them space to whip up the reader’s interest in the books reviewed. We are left with a sequence of uniform and unstylish reviews from writers who, having been asked to imitate the sort of review that the magazine has been publishing for years, end up trotting out lazy, cringeworthy sentences and reviewer’s clichés. Random pluckings: 
</MainText>

<MainText>
    <ol sx={{ listStyle: "square" }}>
<li>“It’s a very likeable book, just not a very good one”</li>
<li>“reflects relatable insecurities through relationships and family”</li>
<li>“devastatingly relevant”</li>
<li>“A Marmite author”</li>
<li>“cleanly told tale”</li>
<li>“confusingly unmissable”</li>
<li>“gripping debut novel from a very promising writer”</li>
<li>“eminently readable style”</li>
<li>“characters have the emotional drive to give their actions credibility”</li>
<li>“his master storytelling and enviably effortless yet meticulous prose saves the novel from triteness”</li>
<li>“the weight of her message wins through”</li>
<li>“must read for any fans of the crime-thriller genre, and, perhaps, even more so if you are not”</li>
</ol>
</MainText>

<MainText pt={4} pb={4}>
As to the editorial policy. Books are “pitched” to the mag from publishers (through press releases or publisher PR), and the editor selects from these, and the reviewers choose from the “pitched” titles passed round in list-form. This is a schismic schism. The problem with allowing the staff reviewers freedom to choose their own titles, is the reviewers will not end up selecting the most culturally interesting materials published in one particular week. A cursory scroll through the archived reviews shows a celebrity memoir that has received massive coverage elsewhere, a reviewer slamming a thriller at which a simple peep at the blurb would have told him not to waste his time (and ours), a series of “first novel” toots (i.e. from agented authors being “launched”) and large-press material chosen for reasons we will never be told. 
</MainText>

<MainText>
A wiser editorial policy would involve the editor working from a comprehensive list of publishers, from large to smaller presses in the UK and overseas (i.e. those not merely with distribution in the UK—thanks to Amazon, we can order most titles from overseas with no extra expense, if we are willing to wait a week, a fact that most UK lit mags haven’t noticed) combing their forthcoming and latest releases pages to compile a range of diverse, well-chosen fiction based on their own understanding of literary innovation, originality, and diversity. If the editor is merely responding to the influx of press releases and PR nudges, then the larger presses will have an edge. The bigger presses will have more time to push and persuade the editors into featuring their books. There is also the fact that large press books are beneficial for the magazine’s circulation over the ones that will not be awaiting the reader on Waterstones tables when that reader walks in off the high street. As the larger presses have comfortable relationships with pubs like this, familiarity and complacency arrives, meaning PR people have no blood vessels to burst in ensuring reviews. 
</MainText>

<MainText pt={4} pb={4}>
<i>Note to the reviewers at this publication: plenty of these short reviews are perfectly evocative primers, and plenty of the writers tee up the novels with elegance, however, the sense of these reading like extended PR raves is not far away, and the lack of space and stylistic freedom leaves even the sincere, loving reviews lacking the sort of urgent readerly stranglehold the modern reviewer needs to attract anyone’s attention. I posit that the modern rave review needs to perform a heroic function of somehow convincing the reader that a novel is utterly, indispensibly something that must be read immediately, and not merely something the reviewer thought was amazeballs. This is harder to achieve, since the bulk of new fiction is not really something anyone anywhere really needs to read at all.</i> 
</MainText>

<MainText>
So, <i>The Skinny</i>, please loosen up your tired reviewing format, take a more thorough peep at the sort of howlers you are putting in print, and show more ambition and less complacency in your featured novels, then you might have the making of an interesting books section. 
</MainText>

</Grid>

</Grid>

</BoxMain2>


   </>
  )
}

export default Skinny
