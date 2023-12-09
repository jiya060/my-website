import "./App.css";
import { Heading } from "@chakra-ui/react";
import { Center, ListItem, UnorderedList } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import FlipCard from "./componentss/file";
import { Box } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Stack, StackDivider } from "@chakra-ui/react";
import EmbeddedPDFs from "./componentss/EmbeddedPDFs";

function App() {
  return (
    <>
      <div className="card">
        <div>
          <Heading
            fontFamily={"Poppins"}
            as="h2"
            size="2xl"
            textAlign={"center"}
          >
            Jiya Singhal
          </Heading>
          <Heading
            fontFamily={"Poppins"}
            as="h4"
            size="sm"
            mt="80px"
            textAlign={"center"}
          >
            Some Things About Me and My Interests:
          </Heading>
          <Center>
            <UnorderedList
              textAlign="left"
              fontFamily={"Poppins"}
              spacing={3}
              className="custom-list"
              mt={5}
            >
              <ListItem>
                I am passionate about solving problems and want to have a
                positive impact in the world.
              </ListItem>
              <ListItem>
                Right now, biotechnology is the field that fascinates me the
                most.
              </ListItem>
              <ListItem>
                Currently, I am super interested in learning about cancer,
                immunotherapies and personalised medicine. I have been looking
                more into how nanotechnology and gene editing can be used to
                modulate the gut microbiome to make immunotherapies more
                efficient.
              </ListItem>
              <ListItem>
                I have started learning Arduino and want to explore how I can
                build something with it that can solve a problem.
              </ListItem>
              <ListItem>
                I have also started to practice UI design as it is something I
                like to do and a skill I want to learn.
              </ListItem>
              <ListItem>
                Human Longevity. I find it fascinating to learn about what
                causes us to age and the potential possibilities that can extend
                our lifespans and even reverse aging.
              </ListItem>
              <ListItem>
                Psychology, as I’m curious about what drives different human
                behaviours.
              </ListItem>
            </UnorderedList>
          </Center>
          <Center mt={10}>
          <Box>
            <a
              href="https://www.linkedin.com/in/jiya-singhal-76b74a253/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"  // Replace with the actual path or use an icon library
                alt="LinkedIn"
                style={{ width: "35px", height: "35px", marginRight: "25px" }}
              />
            </a>
          </Box>
          <Box>
            <a
              href="https://medium.com/@jiya060"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.icon-icons.com/icons2/3041/PNG/512/medium_logo_icon_189223.png"  // Replace with the actual path or use an icon library
                alt="Medium"
                style={{ width: "40px", height: "40px", marginRight: "25px" }}
              />
            </a>
          </Box>
          <Box>
            <a
              href="mailto:jiyasinghal06@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281769.png"  // Replace with the actual path or use an icon library
                alt="Gmail"
                style={{ width: "37px", height: "37px" }}
              />
            </a>
          </Box>
        </Center>
        </div>
      </div>
      <Divider mt={20} />
      <div>
   
        <Heading fontFamily={"Poppins"} mt={10} mb={5} id="articles-and-decks">
          Articles and Decks
        </Heading>
        <Card mb={5} id="articles-and-decks">
          <CardBody>
            <Stack
              divider={<StackDivider />}
              spacing="4"
              id="articles-and-decks"
            >
              <Box>
                <Link
                  fontWeight={"bold"}
                  fontFamily={"Poppins"}
                  href="https://medium.com/@jiya060/the-gut-microbiomes-role-in-boosting-cancer-immunotherapies-610e42d6eb50"
                  isExternal
                >
                  The Gut Microbiome’s Role in Boosting Cancer Immunotherapies
                </Link>
                <Text fontFamily={"Poppins"} pt="2" fontSize="sm">
                  This article explores the role that our gut microbiome plays
                  on the efficacy of immunotherapies. It explains in detail what
                  the microbiome is, different types of immunotherapies and
                  their process, the link between the two, and if there is an innovative way
                  to alter and modulate our gut microbiota.
                </Text>
              </Box>
              <Box>
                <Link
                  fontWeight={"bold"}
                  fontFamily={"Poppins"}
                  href="https://medium.com/@jiya060/an-introductory-guide-to-artificial-intelligence-406c0601e1f5"
                  isExternal
                >
                  An Introductory Guide to Artifical Intelligence
                </Link>
                <Text mb={5} fontFamily={"Poppins"} pt="2" fontSize="sm">
                  A basic overview and guide to what artificial intelligence is.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <EmbeddedPDFs></EmbeddedPDFs>
        <Divider mt={10}></Divider>
        <Heading fontFamily={"Poppins"} mt={20} mb={10} id="book-library">
          Books I've Read
        </Heading>
        <SimpleGrid
          className="Books"
          columns={6}
          spacing={1}
          mt={30}
          id="book-library"
        >
          <FlipCard
            title="The Courage to Be Disliked"
            undertitle={"Ichiro Kishimi and Fumitake Koga"}
            imageUrl="https://media.bluestonepim.com/1d982375-6379-47aa-94dd-ca50b2d04f46/eaf764d1-4dc3-48d4-9212-ce4d2a52340f/vHKNk9ZjqVc46dL8JI7PxoamX/qYK8zjTVYT01jFIq9cLSoynUF.jpeg"
            notes="I thought this book was very insightful and made me reflect on how I react and think about my past experiences and how they affect my life in the present moment. Even though I knew that events are mostly how you respond to them rather than the experience itself, this book made me think even more about how we often use trauma as an excuse and to make us feel special. This teleological psychology contradicts Freudian theory, which links past events to your present behaviour. I found that this perspective emphasises personal responsibility, asserting that your past doesn't have to determine your present self. At first, I found 'all problems are interpersonal relationship problems' confusing, but it made more sense as the author gave examples. Personally, I think it applies mostly to problems such as our insecurities, issues with our families, friends and work which often make up a great portion of our problems. The idea that happiness and your self worth comes from a feeling of “contribution to others” made sense to me. However, it also depends on what the individual finds contributive because the author goes on to mention how even being alive can be useful, but not everyone is happy even though they are all alive.
            One of the aspects I found the most interesting was when the author explained the different ways in which inferiority complexes shows up in different people. Insecurity, lack of courage, and bragging about ones achievements were ones that weren’t too surprising, however I found the third one really interesting. ‘Bragging’ about ones own misfortunes in order to feel special. This is actually a superiority complex, but those who constantly brag have a strong feeling of inferiority which is why they are interconnected. "
          />{" "}
          <FlipCard
            title="The Code Breaker"
            imageUrl="https://m.media-amazon.com/images/I/71-ptCTNgvL._AC_UF1000,1000_QL80_.jpg"
            undertitle="Walter Isaacson"
            notes="I enjoyed this book as it was one of the first technical ones I have read. I thought it was interesting how the author explained everything from the beginning of the discovery of our DNA and genes as it lay a base for the following chapters. It also went to show how many people contributed to the discovery of CRISPR and that it wasn't only the effort of a single person. 
            The story told on how Jennifer Doudna and Emmanuelle Charpentier actually discovered CRISPR was really enjoyable. I liked that there was a heavy emphasis on the science and the other chapters that dealt with biohackers and rivalries were also super interesting. I also took away the various important ethical questions and considerations regarding gene editing."
          />
          <FlipCard
            title="Sapiens"
            undertitle={"Yuval Noah Harari"}
            imageUrl="https://cdn.kobo.com/book-images/21a94eb9-86fe-460c-88d4-55a13872e5e0/1200/1200/False/sapiens-3.jpg"
            notes="I found this book really fun and engaging and it was an easy read about the history and evolution of humankind. I thought the information was presented in a very objective way and when there were conflicting theories, the author mentioned the main ones.
            A fact I found really interesting is that gossiping and our ability to make up stories about things are what sets us apart from animals. We make stories about things we can only find in our imaginations, and then treat them as though they are real and because of this they are. This was also linked to the fact that the collective myths and stories were what was the driving force behind our domination of the planet. An example of this is our collective belief in the value of money. If you look at it closely, it doesn't actually have any value, but we believe it does because of stories we have made up. As for the gossiping, it has been important right from the start since humans were in hunting groups and people needed to know who they could trust."
          />
          <FlipCard
            title="Lifespan"
            undertitle={"David A. Sinclair"}
            imageUrl="https://nmnhealth.no/wp-content/uploads/2020/08/lifespan-why-we-age-and-why-we-don-t-have-to.jpg"
            notes="The main point I took away from this book was that aging itself is a disease. This is not conventionally claimed and it is not an actual cause of death that is noted down at the time of death. Even though our lifespans have increased over the years, our healthspan hasn't kept up the same pace. Even though our genes lay the foundation, it's our lifestyles that really shape things. It was interesting that the book actually mentioned different steps and supplements (NAD, Metformin, and Rapamycin) one could take to activate our longevity genes. There were several points that the reader could implement into their own lives which I found beneficial as there wasn't only theory, but actual steps a person could take after reading. "
          />{" "}
          <FlipCard
            title="Can't Hurt Me"
            undertitle={"David Goggins"}
            imageUrl="https://m.media-amazon.com/images/I/61pDNU9qEGL._AC_UF1000,1000_QL80_.jpg"
            notes=" I thought this was such an inspiring story where we really get to see Goggins overcome a lifetime of struggle and prove that you can do anything if you're willing to push yourself. My main lesson from this book is that if you really put your mind to a task you can achieve the most impossible things. It also showed that you really need to push past discomforts, have great self-discipline and focus in order to achieve your goals. "
          />{" "}
          <FlipCard
            title="Breaking the Habit of Being Yourself"
            undertitle={"Dr. Joe Dispenza"}
            imageUrl="https://m.media-amazon.com/images/I/61-WnQOUhYL._AC_UF1000,1000_QL80_.jpg"
            notes="At the time that I read this book, I found it very inspiring and it made me realise how much our thoughts and emotions can affect our reality. I took awat that our thoughts, emotions, and beliefs can influence our physical health and well-being as our thoughts create pictures that release chemicals in our brain and body. Reading this was very fascinating as it suggests that there is a mind-body connection. The placebo effect of taking a pill that does't actually do something, but you are believed to think it does, explains this very well. You create thoughts that you will heal because of the pill and actually start healing because you clearly believe that is what will happen. Another thing I took away was how victimization and blame are two tricks that our brain uses to keep us running on auto-emotions and that is why we stay stuck with our current behaviour. Emotional states such as anger and irritation are memorised by our body and mind so we keep running on them automatically and even begin to crave them. Our body and mind both have to work together to let go of these states. Meditation practices can be useful for this as they can help one become aware of ones thoughts and emotions and be used as a tool for self-transformation."
          />{" "}
          <FlipCard
            title="Thinking, Fast and Slow"
            undertitle={"Daniel Kahneman"}
            imageUrl="https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg"
            notes=" From this book, I took away that we have two systems that drive the way we think. System 1 is fast, intuitive, and emotional while system 2 is slower, more deliberative, and more logical. System 1 is prone to biases, but I found it interesting that its also where our morality comes from and without it, we wouldn't act human. Our brains tend to be lazy, so system 2 doesn't rush to help, as its quicker to make decisions with system 1. Even though I have heard about it several times now, this book was what first exposed me to the psychological concept that we tend to be more loss averse, meaning we are more risk prone when we have something to lose than when we have something to lose. So, we are more likely to abandon a huge gain if there is some probability of an equally huge loss. We still want to have more, but not at the cost of losing what we already own. Another thing I found interesting is that our mind can easily fall into cognitive traps. So we can change our answers or decisions if the question or offer we are being asked is simply just reworded. Priming is another way our mind is tricked and can easily be influenced. So if we are for example shown pictures of food, our mind would be more likely to associate S_UP with SOUP rather than SOAP."
          />{" "}
          <FlipCard
            title="How to Win Friends and Influence People"
            undertitle={"Dale Carneige"}
            imageUrl="https://m.media-amazon.com/images/I/71vK0WVQ4rL._AC_UF1000,1000_QL80_.jpg"
            notes="I found this book gave advice you can apply to be a likeable and genuine person. I related these tips to the fact that people like it when you are intersted in them and love talking about themselves, so you can make a ton of friends by being interested in the other person. Even though I think there was good advice such as actually being curious and interested about the other person, some of the advice might not be great for developing deep relationships. An example is that the author mentions how you should be agreeable to the other person. Personally, I think in a friendship you should be able to disagree and discuss different points. You can learn a lot when other people have different perspectives and views, so by just being agreeable you would miss out on that. I feel like these tips would be more beneficial to influence people after you have made them like you rather than deep, meaningful relationships. The quote that stood out to me most was “You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you.”
            "
          />{" "}
          <FlipCard
            title="Influence"
            undertitle={"Robert B. Cialdini"}
            imageUrl="https://cdn.kobo.com/book-images/5967c02f-cc3f-4dbc-a3d9-076e217dedea/353/569/90/False/influence-new-and-expanded.jpg"
            notes=" I really enjoyed reading this book as it was quite eye-opening to see the psychology behind how we say 'yes' to things. The author explains the 7 levers of influence and my favourite parts were the several studies and supporting evidence for each of the levers. You really got to see the how the levers work in action because the research was explained really well. The key factors that influence our decisions: Reciprocation, Commitment and Consistency, Social Proof, Liking, Authority, Scarcity. One of the studies that stood out to me most was on the power of authority. It showcased how far people were willing to go just because an authorative figure told them to do something. The thing that was surprising was that they were willing to bend their morals and expose others to pain just because they were told to do so by someone with higher power."
          />{" "}
          <FlipCard
            title="The Simple Path to Wealth"
            undertitle={"JL Colins"}
            imageUrl="https://i0.wp.com/www.theretirementmanifesto.com/wp-content/uploads/2016/06/image.jpeg?ssl=1"
            notes="I found that this book gave behavioural and technical advice for investing. The main points for the behavioural: Avoid debt and fiscally irresponsible people at all costs, save & invest 50% of your income, don't think you can time the market and pick individual stocks. The main technical ones: Invest in VTSAX if you can, embrace indexing, avoid multiple stock investment, and don't withdraw more than 4% of your investments. I thought the book was a good start as it was one of my first books on finance, but it was quite US based. It still got me interested in learning more about investing so I thought it was a good read."
          />{" "}
          <FlipCard
            title="Rich Dad, Poor Dad"
            undertitle={"Robert T. Kiyosaki"}
            imageUrl="https://cdn.kobo.com/book-images/c81ea4de-cfb7-415d-8634-314aad041fdb/1200/1200/False/rich-dad-poor-dad-9.jpg"
            notes=" The main thing I took away from this book was that owning things either put money in your pocket, or take it away. So one should try to own things that put money into the pocket. So, owning a business or earning royalties creates income while owning a house or a car incurs expenses. Relying on your salary will put you in the cycle of needing, earning and spending money so you need to have sources that will bring in money even when you aren't working. Another main point I took away was to switch your thoughts from “I can’t afford it” and replace them with “How can I afford it?”. This is an actionable thought and will force your brain to come up with a solution. One of the advices to 'always pay yourself first' in the terms of investing made sense in theory as it could create income for your bills later. However, I thought that would mostly work for people that already have a steady income as several people actually need to pay their bills on time and only have the money for that. I still liked how we got to see the two fathers thinking about money differently as we got to see the difference in mindsets of the rich and poor. It was also enjoyable to read about the advice through the boy's conversations with both of the father figures."
          />{" "}
          <FlipCard
            title="The 7 Habits of Highly Effective People"
            undertitle={"Steven R. Covey"}
            imageUrl="https://m.media-amazon.com/images/I/71rmHeQeuRL._AC_UF1000,1000_QL80_.jpg"
            notes=" I'll explain what I took away from each habit explained. So to start with the first one, be proactive. You are the one that chooses how to respond to experiences in your life, so you should take responsibility for your actions as they are the ones you can control. You also need to take the initative and responsibility to make things happen in your life.
            The second was to begin with the end in mind. Here I took away that you need to have a clear understanding of where you are at now, and decide your deepest values to determine where you want to go forward. The third one was to put first things first. You should spend time on things that align with your values and priorities. Additionally, think of tasks in terms of importance and urgency and do the important ones even if they don't seem urgent. The fourth one was to think win/win. I took away that you should look at success as cooperative and not competitive. You should work with others for mutual benefit and if you can't make a deal where both parties feel like its a win/win, don't make the deal at all. The fifth one was to first seek to understand, then to be understood. You should listen and have conversations with others with the intention to understand their point and view. Listening with empathy can lead to that understanding. Synergize was the sixth one which mentions how you should value differences in relationships. Sharpen the saw was the last habit which emphasised that you should spend at least an hour physical and mental health as well as your spirituality."
          />{" "}
          <FlipCard
            title="The Psychology of Money"
            undertitle={"Morgan Housel"}
            imageUrl="https://cdn.kobo.com/book-images/8f63d95a-ccc5-4c57-83dd-2aa567e02c15/1200/1200/False/the-psychology-of-money-3.jpg"
            notes="My main takeaway was that investing a lot is is important when you are younger because of compounding. This book also mentions how you shouldn't try to time the market and pick individual stocks as the odd are likely not in your favor. You should stick with low cost index funds. The points I found the most interesting: Wealth ends up being more about how much you save rather than how much you earn from your job or investments. Financial success is not like hard science, its more about how you behave and is driven by emotions and the psychology of people. Another point was that money's greatest intrinsic value is its ability to get you control over your time and that having it saved gives you flexibilty in many areas of life."
          />{" "}
          <FlipCard
            title="The Power of Now"
            undertitle={"Eckhart Tolle"}
            imageUrl="https://cdn.kobo.com/book-images/59e80730-aaad-4b30-ac1d-fd5952880c01/1200/1200/False/the-power-of-now-1.jpg"
            notes="Not done reading, but my takeaways so far: Discusses the importance of being in the present moment. There is no reality but the present moment, everything else is either a memory about the past or a fantasy about the future."
          />{" "}
          <FlipCard
            title="Never Split the Difference"
            undertitle={"Chris Voss"}
            imageUrl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOdi2PoYfDciMmMW3sjOzMbYaF__xYOSBViz_Pp-LPfLyZCHJc"
            notes=" The main point I took away was that getting your counterpart to say 'no' is a much more effective approach than them saying 'yes' which the person might say just to get rid of you. You should try to ask questions to get to the root cause behind their 'no' as often it can mean 'wait', that they're not comfortable or just have a lack of understanding. I enjoyed how the author provided various different hostage stories where we were able to see how he handled negotiations. This was effective as we were able to see how he applied the advice in action and how we could do it in our own lives, but at the same time hostage situations are quite different than everyday ones. I still think the hostage stories were quite beneficial to learn from because they go on to show that if its possible to negotiate with people in such siutations, you can definitely do so in everday ones."
          />{" "}
          <FlipCard
            title="Outlive"
            undertitle={"Peter Attia"}
            imageUrl="https://cdn.kobo.com/book-images/a31a2608-a431-4478-8e5d-7a657bc63c24/353/569/90/False/outlive-7.jpg"
            notes=" I liked how the different factors that can affect longevity were discussed in detail, including diet, exercise, sleep, stress management, and social relationships. The author also mentioned the 4 'Horsemen' for aging: cardiovascular disease, cancer, type 2 diabetes, and dementia. These are the most important to avoid as they rapidly increase your healthspan age. Another common, but important point explained was to avoid excessive fructose consumption and limit your calories. Exercising is the most potent 'pro-longevity' drug. The author also talked about how sleep might be even more critical than exercise for overall well-being."
          />

        </SimpleGrid>
        <Divider mt={10}></Divider>
      </div>
    </>
  );
}
export default App;
