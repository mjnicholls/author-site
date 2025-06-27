import React from 'react'
import { MainText, MainHeader } from '../Styles'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { BoxMain2 } from '../../globalStyles'

const Grantham = () => {

    const isSmallScreen = useMediaQuery("(max-width:899px)");

    return (
        <>

            <BoxMain2>

                <Box sx={{ display: "flex", justifyContent: "center" }} pb={{ md: 6, sm: 2 }}>
                    <MainHeader>
                        ⇝ The Grantham Travelodge Blues
                    </MainHeader>
                </Box>

                <Box pr={4} pt={4} pb={4} sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center" }}>
                    <img src='../../../../travelodge.png' alt="Travelodge" width="215px" height="310px"></img>
                </Box>

                <Grid container pl={0}>

                    <Grid item xs={isSmallScreen ? 0 : 3} sx={{ display: { md: "flex", xs: "none" } }}>
                        <Box>
                            <hr style={{ width: "100%", border: "1px solid #265479" }} />
                            <img src='../../../../travelodge.png' alt="Travelodge" width="215px" height="200px"></img>
                            <hr style={{ width: "100%", border: "1px solid #265479" }} />
                        </Box>


                    </Grid>

                    <Grid item xs={isSmallScreen ? 12 : 9}>

                        <MainText pb={2}>
                            <b>1</b>
                        </MainText>

                        <MainText pb={4}>
                            A cucumber sandwich remained on the serving platter that killed Marianne’s father. He had been learning the watusi that week, one of his periodic attempts at contrived spontaneity that irked his unamused and amusical wife Georgie. Snatching Marianne’s hand when her back was turned in the kitchen doorway triggered the violent pushback reflex she had used against her previous boyfriend, the loathsome former cage fighter Tom “The Bonesetter” Matthews. Her father was thrust backward with a violent whoosh, upsetting his legs mid-twist, sending him in a spin to the floor where the edge of the faux-marble serving platter collided with his left temple, killing him instantly on impact.
                        </MainText>

                        <MainText pb={2}>
                            The first error I observed was the response.
                        </MainText>
                        <MainText pb={2}>
                            Having expected various ear-shredding howls of horror at the accident, Marianne and Georgie looked on in silence and, after a breathless pause, proceeded with eerie calm to the sofa and sat at the foot of the dead man. “An incident has taken place,” Georgie said. Marianne’s warm expression turned to an affectless iciness. “Gregor,” she said, “could you please check the pulse?” I placed a half-eaten ham-and-mushroom vol-au-vent back on the platter and leaned down to impress an index and middle finger on his neck. Having never taken a pulse prior, I poked about the windpipe, the arteries, the clavicles, performing a thorough sweep of all cervical areas where the timeous throb of life might appear, and concluded that the man was the inverse of here.
                        </MainText>

                        <MainText pb={2}>
                            “Marianne, it appears you’ve accidentally killed your father,” Georgie said. The weight of the statement had no time to settle as Georgie took control. “Now, from the off, I want no apologies or tears. This was a mistake that stemmed from his own careless frolic, his own failure to realise that it is unwise to prance around a poky living room of some 10x10 metres like a court jester. We will need to dispose of the body as a matter of priority.”
                        </MainText>
                        <MainText pb={2}>
                            The transformation was astonishing. Having first perceived the mother as a soft-spoken customer service advisor of no distinction, she assumed her former skin as a shop steward known for feats of fleet crisis management. She had once averted a scandal in her warehouse when a box of uncut heroin appeared in what were labelled as Graham’s Cream Crackers. She removed the heroin to a safehouse in Gretna Green and calmly allowed the Furioso drug cartel to inspect every single box in the warehouse before concluding the product was lost. The heroin itself was emptied methodically by Georgie over a series of weeks into gratings and drains the length and breadth of Gretna with a steely efficiency.
                        </MainText>


                        <MainText pb={2}>
                            I found myself relieved by the placid practicality she and Marianne displayed in the immediate—an emotional drawbridge raised against the unspeakable—having expected an intolerable tumult of histrionics to flare up the minute the father’s temple was snagged. I had, after all, been seeing Marianne for only seven weeks, and had been introduced to her parents in the sixth week, so having to marshall her through a self-induced bereavement so soon in the romance was not a prospect I craved.
                        </MainText>
                        <MainText pb={2}>
                            “The best thing we can do is to wrap him in a bin liner, carry him up to the bath, and dismember his body. It will be easier to dispose of him if we drain the blood then burn each limb separately rather than the corpse as a whole,” Georgie said.
                        </MainText>

                        <MainText pb={2}>
                            “I agree,” Marianne said with a telling squeak. “Daddy has some tools in his shed we can use.”
                        </MainText>
                        <MainText pb={2}>
                            “Time is of the essence. Gregor, could you take the head, and I’ll take the feet. Marianne, fetch the tools.”
                        </MainText>

                        <MainText pb={2}>
                            “Excuse me,” I interrupted. “If we use a buzzsaw, the commotion will alert the neighbours. I’d recommend performing this somewhere more secluded. A forest in the middle of the night is the most common trope,” I said.
                        </MainText>
                        <MainText pb={2}>
                            “I don’t want to hang around,” Georgie said, “the car is parked along the street, we’ll have to prop him up and drag him along. If anyone asks, we’ll pretend he’s pissed.”
                        </MainText>

                        <MainText pb={2}>
                            “And we’re taking him where?” Marianne asked.
                        </MainText>
                        <MainText pb={4}>
                            “To a hotel. I’ll pretend I’ve had enough of his drinking.”
                        </MainText>

                        <MainText pb={2}>
                            <b>2</b>
                        </MainText>
                        <MainText pb={2}>
                            Marianne ran to the Renault and opened the back door. Georgie and I heaved the dead man to his feet, plopping a hat on his head to conceal the bleeding scalp and propping a limp arm each on our shoulders. We pulled him along the street, where a neighbour two houses down caught sight of us. Georgie hammed: “I’m sick of this old sot’s antics. Let’s get him in that bloody car!”
                        </MainText>

                        <MainText pb={2}>
                            Once manoeuvred into the backseat, Georgie asked me to sit with him and hold his head upright to prevent drivers observing a lifeless flop when passing. The wound started to ooze with more insistence when I palmed his bruised occiput, the blood trickling between my fingers, making his head a slippier prospect to keep in a static position for the trip’s duration. “You’re doing well, sweetie,” Marianne said, patting my knee from the passenger seat. She had never called me “sweetie” before, “the squirter” was her usual banterous sobriquet for me, a reference to the rheum, phlegm, and mucus production of my autumnal allergies. As “the squirter” might have been construed as a crude sexual reference, “sweetie” made more sense in the presence of her mother.
                        </MainText>
                        <MainText pb={2}>
                            The nearest forest was attached to a national park with an historical house and museum, a place thronging with visitors all week, so we concluded a longer pilgrimage was required. On the motorway heading north, Georgia had a change of mind.
                        </MainText>

                        <MainText pb={2}>
                            “I’ve been thinking. We’ve been seen wheeling a drunk husband into a car. It would make more sense to place him in a hotel so our story remains consistent.”
                        </MainText>
                        <MainText pb={2}>
                            “I agree. If we are asked to explain where he went missing en route to the hotel, we’ll have no response. Let me check Google for the nearest place,” Marianne said.
                        </MainText>

                        <MainText pb={4}>
                            The nearest hotel was a Travelodge outside Grantham, which had the advantage of being unmanned. We decided to roll back into town, park in a quiet street, lie the dead man flat on the backseat, and cover him with two of our coats, while we tottered into the town to kill time until the evening.
                        </MainText>

                        <MainText pb={2}>
                            <b>3</b>
                        </MainText>

                        <MainText pb={2}>
                            In a chain pub we lapsed into a conversational clot. The steel had started to melt on Marianne, her left hand shaking as she consumed her third Diet Pepsi. I sat in the booth beside her, resting my hand on her knee, staring at the flock wallpaper and the framed picture of a raccoon on a plinth.
                        </MainText>

                        <MainText pb={2}>
                            “Margaret Thatcher was born here,” I said, heaping an extra dollop of rue on the silent scene. No response.
                        </MainText>

                        <MainText pb={2}>
                            To end the silence, I suggested that we maintain a semblance of the usual. Sitting for hours on end consuming the unlimited refills of Diet Pepsi without eating (our stomachs were bloated with dread) was not the behaviour of unsuspicious people.
                        </MainText>

                        <MainText pb={2}>
                            “I’m not suggesting we have a conversation about the man in our car,” I said.
                        </MainText>

                        <MainText pb={2}>
                            “His name was <i>Terrence</i>,” Georgie snapped, which was news to me. I had heard him referred to as “daddy” or “lumpy”.
                        </MainText>

                        <MainText pb={2}>
                            “Keep your cool, Mum,” Marianne said.
                        </MainText>

                        <MainText pb={2}>
                            I sensed these two women were at the upper limits of their stoicism and that the torrent of emotions were soon to burst free like an unwanted dam in the face.
                        </MainText>

                        <MainText pb={2}>
                            “There’s a man at my work who eats eggs raw, shell and all,” I said. “He makes his first bite at the top, then either sips at the egg within through a straw, or swallows them whole like a cheap eggy oyster.”
                        </MainText>

                        <MainText pb={2}>
                            “You don’t half haver a lot of bilge,” Georgia said, her hazel eyes narrowing.
                        </MainText>

                        <MainText pb={2}>
                            “Be polite, Mum.”
                        </MainText>

                        <MainText pb={2}>
                            “I asked him whether he’d ever consider poaching or scrambling his eggs, and he simply fixed me with the face of someone nestling a horde of lemons.”
                        </MainText>

                        <MainText pb={4}>
                            The more I fought to babble to kill the time, the more ire I drew from Georgie. The tactic was to distract the two women from their impending meltdowns until we reached the hotel room and in that objective, from the eggshell story, to one on the recent reduction in pingback on rulers following a spate of accidental school blindings, I was successful.
                        </MainText>

                        <MainText pb={2}>
                            <b>4</b>
                        </MainText>

                        <MainText pb={2}>
                            The bar closed at midnight. We drove back to the Travelodge at the motorway services and repeated the performance from earlier, carting the drunken man into the hotel and up to the room, unseen by anyone except the CCTV. Our plan had a glaring flaw in that the dead man would not be seen with us leaving the bar, however, we could chalk this up to exasperation with his antics, leaving him in the backseat to sleep off his sottishness.
                        </MainText>

                        <MainText pb={2}>
                            We propped the dead man on the chair in the corner of the room where his head lolled forward in the manner of dead men unable to sit upright on chairs. It was at this point where Marianne and her mother’s faces curdled into expressions of horror, their phizogs turning full horrorclown in real time as oncoming emotional Vesuvius prepared to erupt.
                        </MainText>

                        <MainText pb={2}>
                            “Please put a muzzle on these outbursts, we need to avert suspicion in the other rooms,” I said.
                        </MainText>

                        <MainText pb={2}>
                            The women looked at me with piteous expressions, tears pouring from their squinting eyes, and sank to the floor, clasping each other awkwardly, rocking on their knees as the surreal noises emerged. From Marianne, a mewling sound somewhere between the wail of a poltergeist and the lonely creak of a door in a Brittania hotel not renovated since 1959. From Georgie, intermittent little heep-heeps and mew-mews came from her rattling frame, muted staccato hiccups of unimaginable pain. The urge to burst into howls and wails was impressively resisted.
                        </MainText>

                        <MainText pb={2}>
                            The women then pulled the dead father and husband from the chair and flung themselves upon his corpse. Georgie rubbed her hands over his dead face, kissing his forehead, staring with agonising pity at the lack of life inside, while Marianne flung her entire body over his carcass, squeezing the lack of life inside him and muttering “daddy” over and over in a way that made him deeply embarrassed. This went on until five o’clock in the morning. I stood behind Marianne rubbing her back, but after the first hour, I realised my presence was meaningless, so I shut myself in the bathroom and scrolled through Facebook on my phone.
                        </MainText>

                        <MainText pb={4}>
                            The man who ate eggs raw had posted about losing his basketball in a quagmire.
                        </MainText>

                        <MainText pb={2}>
                            <b>5</b>
                        </MainText>

                        <MainText pb={2}>
                            Sleep claimed us after. I slept on the double bed while the women coiled themselves around the dead man, their six legs intertwined. I woke with an incredible hunger, the last I had eaten the aborted vol-au-vent from the murder platter. I tiptoed out the room to fetch breakfast from a vending machine selling pot porridge and paninis with wafer-thin strips of processed ham and cheese. I vended several of these and three coffees and placed them on the wee table above the flop of bodies below the table. It had turned nine o’clock and the women were still asleep. My thoughts turned to the consequences of a corpse – the self-soiling and rigor that was supposed to have occurred. I clocked no notable odours.
                        </MainText>

                        <MainText pb={2}>
                            I shook Marianne, fearing the response when the morning reset of the corpse-awareness took hold. She looked at the dead man without expression and rose in a blear to her feet, slurping the coffee and nibbling on the panini. Her fuzzed-up black mane and face warped with the woof of an evening’s raw, inappropriate grief turned to me for physical counsel.
                        </MainText>

                        <MainText pb={2}>
                            “How are you feeling?”
                        </MainText>

                        <MainText pb={2}>
                            “I’m tired,” she said, shaking her mother awake with her avocado socks. “Mum, time to wake up.”
                        </MainText>

                        <MainText pb={2}>
                            Georgie staggered to her feet and went to the bathroom where the sound of fluids being expressed from the wrong end were heard.
                        </MainText>

                        <MainText pb={2}>
                            She returned. The emissions went unremarked.
                        </MainText>

                        <MainText pb={2}>
                            “I’ve booked the hotel for two months, Mum,” Marianne said. “We can spend more time with daddy.”
                        </MainText>

                        <MainText pb={2}>
                            “That’s a wonderful idea, honey.”
                        </MainText>

                        <MainText pb={2}>
                            “Hang on,” I said, “should we not leave him here to make it look like an accident? We could say he was blind drunk and banged his head on the edge of the table.”
                        </MainText>

                        <MainText pb={2}>
                            “I want to spend time with my daddy,” Marianne said.
                        </MainText>

                        <MainText pb={2}>
                            “And I would like to spend time with my husband, thank you very much,” Georgie said.
                        </MainText>

                        <MainText pb={2}>
                            “You have to bear in mind what happens to a dead body,” I said.
                        </MainText>

                        <MainText pb={2}>
                            “We’re not idiots, Gregor,” Marianne said. “I happen to want to speak to my deceased father for a little longer before we make any decisions. I have a lot to say to him.”
                        </MainText>

                        <MainText pb={2}>
                            “But . . .”
                        </MainText>

                        <MainText pb={2}>
                            “Yes?”
                        </MainText>

                        <MainText pb={2}>
                            Reminding her that the dead aren’t receptive to posthumous tributes was not likely to be met with anything except slaps, kicks, or howls, so the sentence remained incomplete.
                        </MainText>

                        <MainText pb={2}>
                            She sat at his feet, massaging his former toes, and talked to him about the new Datsun’s performance on the motorway, how she believed her tendency to sniff without qualm was holding her back at work, and her plan to make note of how often she sniffed per day and to see if she could reduce her sniffing quota by 30%, and how ‘Like a Rhinestone Cowboy’ was stuck in her head and she couldn’t even dislodge it by singing ‘Louie Louie’ all afternoon, and how she always thought that a Yardie was a slang for a dock worker, not a reference to a Jamaican ex-pat, and suchlike inane mutterings.
                        </MainText>

                        <MainText pb={2}>
                            “Is there anything you’d like to say to daddy?” Marianne asked, her skin an icy gloss of weep.
                        </MainText>

                        <MainText pb={2}>
                            “I’d like to say thank you for your delicious vol-au-vents,” I said.
                        </MainText>

                        <MainText pb={2}>
                            “I made those,” Georgie said.
                        </MainText>

                        <MainText pb={2}>
                            “I’d like to say thank you for bringing me the cup of tea, and for that funny dance you did right before . . . for the very funny dance you did,” I added.
                        </MainText>

                        <MainText pb={2}>
                            “He was a very funny man. Keep going, please,” Georgie said.
                        </MainText>

                        <MainText pb={2}>
                            “I didn’t really know him. We only met three weeks ago.”
                        </MainText>

                        <MainText pb={2}>
                            “You can still have the decency to muster up some words of tribute to a dead man,” Georgie insisted.
                            It was at this point I made a drastic decision. I reached for the situational kerosene, and set the valve of irritation to hard release.
                        </MainText>

                        <MainText pb={2}>
                            “Fine. He was a sublime cocksman and fucked like a banshee,” I said.
                        </MainText>

                        <MainText pb={2}>
                            “What?”
                        </MainText>

                        <MainText pb={2}>
                            “His cock was thick and meaty, like a beef olive basted in goose fat.”
                        </MainText>

                        <MainText pb={2}>
                            “Get out,” Marianne said.
                        </MainText>

                        <MainText pb={2}>
                            I arose.
                        </MainText>

                        <MainText pb={2}>
                            “Never call me again. If you try to, I’ll call the police,” she added.
                        </MainText>

                        <MainText pb={2}>
                            “Let the poor man alone, will you? Give him some dignity in death. Honestly, this corpse doesn’t want to hear about your sniffing quota or your Yardie misunderstandings.”
                        </MainText>

                        <MainText pb={2}>
                            “GET OUT!” Georgie screamed.
                        </MainText>

                        <MainText pb={2}>
                            I ran away.
                        </MainText>

                        <MainText pb={2}>
                            Two months later, I read in the paper how two women were arrested for keeping a decaying corpse in a hotel. The stink hadn’t upset residents for the first month, being no different from the usual honk in a Travelodge room, but in the second week, this honk surpassed the usual. When the police entered the room, the women were found trying to patch up the rotting flesh on the man’s face with sellotape, and had to be dragged from the corpse with extreme force by four officers. After reading the article, I deleted Meredith’s number.
                        </MainText>
                    </Grid>

                </Grid>

            </BoxMain2>


        </>
    )
}

export default Grantham
