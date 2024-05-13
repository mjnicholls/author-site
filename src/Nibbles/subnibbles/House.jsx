import React from 'react'
import { MainText, MainHeader, DropCap } from '../Styles'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { BoxMain2 } from '../../globalStyles'

const House = () => {

    const isSmallScreen = useMediaQuery("(max-width:899px)");

  return (
<>

<BoxMain2>

<Box sx={{ display: "flex", justifyContent: "center"}} pb={{ md: 6, sm: 2 }}>
<MainHeader>
⇝ Scottish Interest Books (from <i>The House of Writers</i>)
  </MainHeader>
</Box>

<Box pr={4} pt={4} pb={4} sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center" }}>
<img src='../../../../THOW.jpg' alt="The House of Writers" width="200px" height="300px"></img>
  </Box>

<Grid container pl={0}>

    <Grid item xs={ isSmallScreen ? 0 : 3 } sx={{ display: { md: "flex", xs: "none" }}}>
        <Box>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        <img src='../../../../THOW.jpg' alt="The House of Writers" width="250px" height="350px"></img>
        <hr style={{ width: "100%", border: "1px solid #265479" }} />
        </Box>
</Grid>

<Grid item xs={ isSmallScreen ? 12 : 9 }>

    <MainText pb={4}>
        <DropCap>D</DropCap>isplaced from Second by a temporary ScotCall invasion (they occasionally blitz the House to commandeer offices), I meandered upstairs. Guarding the fire exit on the third floor is a naked man painted as a Pictish warrior. He holds firm a spear and shield, his arty pecs and muscles at full and impressive bulge, and stares into the middle distance like a beefeater with the capacity to disembowel. This is Pelf. A network of tattoos cover his body from dragon heads to sunflowers to lions with curly moustaches. His blue-hued penis is partially obscured by the lion’s beard but still draws the eye, being a penis. He said to me: “Manna hepkins?” Followed by: “Forneil yoman intrimp gulander? Gravure simpo larbis querval? Baaloom? Wanta mugghoom formpals? Pimpla numkaa ladoofalla? Sampo sampa? Sampo sampa simpkin appo? Gushval?” (These are authentic Pictish expressions he has memorised to welcome all contractors to the dept).
    </MainText>

    <MainText pb={4}>
    As you enter the corridor, six fans mounted on the upper walls hit you with chilly winter winds. A watercolour rendering of an extremely steep Scottish incline (nowhere in particular—somewhere nonspecific and hilly in the Highlands) is on the left, and a mural of lines from Robert Burns and Ricky Wilson, the two most celebrated Scottish writers of the last five hundred years, on the right. Robert Burns is famous for his macabre poem ‘Tam O’Shanter’ and his popular ballads and songs, and Ricky Wilson is the author of <i>Wee Billy Hummus Frae Largs</i>, a bestseller in 2013 that sold worldwide and helped usher in a Golden Age of Scottish fiction about superheroes from small towns who speak in dialect and settle down with sexy friends to work in chip shops. Sprinklers secreted in the carpets spray your feet as you “ascend” the hill towards the only room on the floor, a large conference space where external contractors (mainly in suits—consider suiting up if you have a proposal) come to pitch their ideas to CHAD. A no-nonsense man in Gucci leathers and tailored Cforgzia trousers, CHAD lives up to his capitalised name with his plain talking and head for marketing. 
</MainText>

<MainText>
Among the ideas pitched: <i>Sean Connery’s Shortbread: The Original James Bond & His World of Shortbread, Scrumptiously Scottish: A Crumbly History of Celtic Cookies, Brought Shed: A Novel of Shortbread, Shortbread and The Third Reich, Hoots Mon!: A Celebration of Hogmanay Shortbread, Gregor Fisher’s Shortbread: Rab C Nesbitt & His World of Shortbread, The Role of Shortbread in the Aegean Civilization, Like Oor Granny Used Tae Muck It: Forty Classic Shortbread Recipes, Accept Nae Imitations: Scotland’s Triumph in the Shortbread Wars, Wee Tam’s Shortbreid: A Nuvvel ae Shortbreid, Do Salamanders Eat Shortbread?, Simply Shortbread: A Miscellany, Walter Scott’s Shortbread: Scotland’s First Novelist & His World of Shortbread, Reeks, Breeks, and Shortbreid!!!, Did William Wallace Invent Shortbread?, Wee Timorous Beastie Eating Oor Shortbreid: Doughy Verse Tributes to Rabbie Burns, Yeast in the East: Shortbread in the Lothians, Tallbread: The Arch Nemesis, Kirkincrankie: A Village of Shortbread, “Yum, we Polish immigrants love Scots shortbread!”: An Outsider’s Take on Yeasty Goods, Ewan McGregor’s Shortbread: Obi-Wan Kenobi & His World of Shortbread, Rockin’ & Rollin’ in the Dough!: 268 Rock & Roll Classix About Shortbread, How Much Shortbread Can YOU Fit in Your Mouth?: A Book of Challenges!, Can Bonobos Make Shortbread?, Can You Dip Shortbread in Irn-Bru, Highland Crofters Eat Shortbread in Kilts, Hot Grannies & Their Grandkids Eat Shortbread.</i> My pitch was a novel set in the Outer Hebrides, approved by CHAD “as long as you set it in 1920s Hebrides, among crofters and such folk, nothing contemporary. And make shortbread or the making of or the consumption of integral to the plot.” Here’s a sneaky excerpt: 
</MainText>

<MainText pt={4} pb={4}>
<i>Alex stood facing the Hebridean sun. He was standing atop a hill abloom with heather, ablooming with beautiful purple heather, looking across the sea at the steamers coming back with their nets full of cod. Alex turned his glance west across the hills towards the stone-brick cottages of the crofters, spotting Old Jim tilling a field and his wife Old Jane milking the cows in the shed. He walked back to his house to return to work on his new shortbread recipe. He was inspired by the sea and the air and the pleasant country folk, and began experimenting with new yeast-beating techniques, such as stringing and flinging it at the walls of his own cottage, and rolling it with multiple rolling pins on the floor. He asked his dog McClusky to sit on the dough. He cut it up into rectangular shapes and placed it in the oven at gas mark six. He whacked the dough into shape with two rolling pins, sprinkling the dew from a thorny Highland thistle into the mixture, and asked Maybelle, the bonny lass from the cottage next door, to kiss the dough for luck, and rolled the dough flat using the wheels of his granny’s motorised scooter. He cut it up into rectangles and punched holes in the pastry with the end of the rolling pin. Opening the oven, he placed the shortbread into a pre-greased tray (pipetted with Irn-Bru) and let it rise at a special temperature, where it swelled to a beautiful Highland plumpness—a Cairngorm of yeasty biscuit pleasure. — Hebridean Crumbs: A Novel of Shortbread (p178) </i>
</MainText>

<MainText>
If your proposal is selected (can take forty or so tries), you are invited to a formally informal shindig in the same room with two VIPs from the American offices, where four tables are set up with the top four Scots stereotypes—servings of haggis laid out on the first, kilts of various clans on the second, thistles in soil on the third, and shortbread on the fourth. Two Highland pipers in full kilted regalia blast out ‘Flower of Scotland’ and other unfavourites while red-haired serving girls with rustic cheeks busy about offering wine and canapés to the lucky commissioned. The VIPs are simply let’s-get-down-to-businessmen, permitting themselves only several smiles before and after their address to the room. PAUL BUGGLE CEO said: 
</MainText>

<MainText pt={4} pb={4}>
“It’s wonderful to be back in the former Scotland. Thank you for the warm welcome. All my favourite cultural archetypes are here. But we need to be careful not to oversell these commodities. Americans have no idea that Scotland today is owned by the Mudrake Corporation and is funded entirely from the profits of American business. They have no idea that shortbread, haggis, and Irn-Bru are all made in American factories. It’s crucial that the buyers of Scottish products believe these things originate in the Old Country. Remember, Scotland is nothing more than a wing of the American tourist industry and earns its right to retain its history by trading on now mythical cultural stereotypes completely alien to the residents here, who live entirely on American food, television, and products. ScotCall is part of the Mudrake Corporation. It’s all about creating the illusion of some kind of choice, some kind of freedom, some kind of free will, so consumers don’t become stultified by the lack of any. All companies are owned by the Mudrake Corporation. In fact, there’s a joke that Scotland is run out of a tiny office of the NY marketing department! But it’s true. Scotland comprises such a small percentage of the market, its loss would be irrelevant, but its history is still relatively tradable. So it’s imperative that we keep these cultural archetypes going in books and other art forms. After all, we’re not in the business of wiping out a country’s history and culture—not when it is still so profitable. Adaptation is the word. It simply isn’t viable to let a country’s populace cling to its cultural stereotypes. We all know they were absorbed into the culture a long time ago, as the world became more homogenous, universalised, as the Mudrake Corporation created their global hypermarket. Can you imagine a 21st century Scot would ever don a kilt unironically or eat haggis for his tea? These were anachronisms way back in the late 20th century. Really, it’s corporations like ours that do a service to small countries like Scotland. If it wasn’t for us giving them the chance to trade, they would have forgotten their history and culture, and where would we all be then! Anyway, here’s to the success of the latest shortbread range. Thank you.” 
</MainText>

<MainText>
Sleeping arrangements? Nope! Pelf kindly let me bed down in the conference room, borrowing a sleeping bag from the caretaker, and helped me find leftover food from the higher departments. You need to rely on your wits on this floor. I asked Marilyn for extra work promoting The House in the community and she sent me off around the farmhouses in Crarsix to collect donations to help with essential repairs in the building (the lifts were mouldy with moss and fungi and some new form of furry-backed beetle was emerging from the cracks). I ambled along the gravel road past the stock-dump fields. The grass was hissing from molten electrical equipment, and the cries of starved digi-pets could be heard over the whirrs and moans of moribund electric mango skinners, lemon pulpers, banana strippers, orange pulpers, and apple mulchers. I reached the first house: a red-brick throwback erected beside the biggest stock-dump field in Crarsix, and knocked on the door, where and a tall man with ferrety eyebrows opened and said nothing. “I’m looking to—” “Say no more. I’m Sid. Come in!” 
</MainText>

<MainText pt={4} pb={4}>
His front room was busy with all sorts of sharp-toothed animatronic scrapyard inventions. Sid was a prolific scrap farmer who eked out a living turning dumped stock into implausibly useful household friends. He showed me a trifunctional breakfast-cum-entertainment device made from the extrusions of an old toaster, TV remote, and several CD lasers. Four columns of lasers in one slot burned bread into toast on one side, requiring a simple flip to toast the reverse, while in a second slot another four columns of lasers played several songs on a CD at once down various earphone holes. The whole family could listen to different tracks from the same CD while slowly toasting their breakfast. Two TV remotes on the outer shells could flick channels if the breakfaster didn’t want to participate in the listening and toasting process that morning. Sid showed off several other devices including a fan with a sprinkler in the back that dispensed cold water and air to cool sunbathers in the garden and simultaneously water the plants for up to two metres, and a chair with prosthetic hands that massaged the backs of users, tailored to their particular muscular requirements, with added buttons for handshakes, high-fives, scissors-paper-stone, foreplay, and sexual relief. He took me to his barnyard where ten pens of mechanical animals constructed from disembowelled laptops, monitors, CPUs, consoles, and miscellaneous techno-offal stood on standby. A line of cows had been made from various desktop parts: three keyboards-as-legs protruded from a body of monitors, and a shrivelled Apple Mac formed the head, sealed up with a set of sharp teeth and two digi-cam eyes. Old USB cables swished on its rump. These creatures scoured the fields devouring loose wires and pieces, mashing the debris down to produce a mushy oil-like sediment from their udders (eight pipettes sticking out an inverted colander) to be used as lubricant or solvent for his inventions. I watched a dozen or so in the field and spotted a few sheep gambolling through the debris. The sheep were old microwaves with legs, nibbling up things like wires and cables that might come in handy. “The microwave bodies on these sheep are functioning. Sometimes for a laugh I like to heat up haggises in them,” Sid said. He offered me £12 after. 
</MainText>

<MainText>
Some Crarsicans were less charitable. One old crone said to me: “No. Writers are entirely worthless to society. They don’t deserve anything. It would be useless for me to waste my money trying to help them cling to the last remaining delusion they already pretend to have. Son, you’re a young man. You shouldn’t be working for criminals. Let me tell you, the sooner these people are drummed into proper jobs, the better. Art teaches us nothing about the real world. You can’t phone up a book for practical advice, can you? No, ScotCall is better. I have a switchboard set up in my front room and take a few hundred calls every day. Something to do in my retirement. The people you speak to, it’s incredible. Someone phoned earlier asking if the sky was blue, or if it was an optical illusion. I told him that whatever colour we see with our eyes is valid, so the sea is blue too, not clear. A woman phoned up this morning asking what the proper spelling of ‘napkin’ was. I told her, two A’s and two P’s. You’re a young man, so think about it. There’s always room for more helpers at ScotCall. They even hire ex-murderers, you know.” Among other colourful characters in the area, I met a retired web trader whose sanity had been taken in the power outage of ’34, when the electricity cut out for half a second and five trillion internet traders were bankrupted. He was forever besieged by vicious popups and screamed at me to watch out for the army of surveys with Trojan viruses advancing from the cyber-vacuum! Another had the friendly sign ALL WRITER’S WILL BE SHOT ON SITE in his garden. There was a young couple who had two TVs rigged up in every room and had never heard the word ‘book’ before, looking scared as I defined it as words written down on paper to be read slowly for some kind of pleasure, amusement, or intellectual or emotional sustenance. They gave me £2 out of pity. 
</MainText>

<MainText pt={4} pb={4}>
The production of <i>Hebridean Crumbs</i> was halted due to a lack of available paper. I had to present my manuscript to the CEO in extremely rough form (only 10K written in illegible pencil). A scrunch of handwritten paper alongside nineteen manila-foldered sheaves of A4 typed in psychometrically-tested corporate fonts would clearly not suffice. I cowered behind the others and showed my mess to CHAD. “I didn’t quite get around to finishing up,” I told him. The others had no expressions of disapproval on their faces, which helped. They seemed incapable of reacting to anything that didn’t directly concern them. “Oh, that’s fine. One of our editors will add the polish,” CHAD said. “But there’s another 60,000 words left to write.” “No problem, we’ll stitch something together.” My luck was both disappointing and reassuring. Why had I bothered to sit in a plastic chair for six hours a day, scribbling barely legible drivel onto flimsy recycled paper with a ten-inch pencil nub, when an editor in America could simply upload the necessary clichés from his hard drive and substitute all kilt references for shortbread ones? It would have saved me the hand cramp! Once the manuscripts had been cleared, the cheques were handed out in brown envelopes. CHAD made a parting speech: “Thank you everyone for your contributions. Our next meeting will take place in a month’s time in the same room, our sell being Irn-Bru-themed books. You are all welcome to attend and pitch your ideas as usual.” I had made my first money from writing: ten crisp pounds. 

</MainText>
</Grid>

</Grid>

</BoxMain2>


   </>
  )
}

export default House
