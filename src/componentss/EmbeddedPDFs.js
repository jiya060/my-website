import React from "react";
import { Box, AspectRatio, Text, Heading } from "@chakra-ui/react";

const EmbeddedPDFs = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      {/* PDF 1 */}
      <Box width="33%">
        <Heading mt={10} size="md" fontFamily={"Poppins"} >Walmart Challenge</Heading>
      <Text fontFamily={"Poppins"} textAlign="center" mt={5} mb={5}>
        Through TKS I got the opportunity to work alongside Walmart. The aim was to enhance customer experience through digital touchpoints, so me and my team proposed a digital queue management system as a simple and scalable solution. 
        </Text>
        <AspectRatio ratio={4 / 3}>
          <iframe
            title="PDF 1"
            src="https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2FJp6o14m61EaGQr5ALcXt3qAfdl93%2FImproving%20Customer%20Experience%20through%20a%20Digital%20Queue%20Management%20System.pdf?alt=media&token=706f6624-b2c3-403b-8e30-bc0b7fa35c2f"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </AspectRatio>
      </Box>

      {/* PDF 2 */}
      <Box width="33%">
      <Heading mt={10} size="md" fontFamily={"Poppins"} >Alexa Challenge</Heading>
      <Text fontFamily={"Poppins"} textAlign="center" mt={5} mb={5}>
        For the Alexa challenge our goal was to create a product Gen Z would interact with daily. My team and I came up with Contexa, a virtual assistant, aimed to increase engagement, interactivity, and personalisation for content like books, music and podcasts.
        </Text>
        <AspectRatio ratio={4 / 3}>
          <iframe
            title="PDF 2"
            src="https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2FJp6o14m61EaGQr5ALcXt3qAfdl93%2FTeam%20Contexa_%20Global%20Challenge%20TKS%20-%20Alexa%20.pptx.pdf?alt=media&token=307b79ad-dcc5-4931-9d92-2f8dffb3aa77"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </AspectRatio>
      </Box>

      {/* PDF 3 */}
      <Box width="33%">
      <Heading mt={10} size="md" fontFamily={"Poppins"} >Moonshot Challenge</Heading>
      <Text fontFamily={"Poppins"} textAlign="center" mt={5} mb={5}>
        For the Moonshot challenge we had to solve a problem by thinking 10X. Our idea was to use quantum batteries for energy storage and in EVs as they can charge them in 3 minutes as opposed to the 90 minutes it currently takes for the average lithium battery.
        </Text>
        <AspectRatio ratio={4 / 3}>
          <iframe
            title="PDF 3"
            src="https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2FJp6o14m61EaGQr5ALcXt3qAfdl93%2FQuantum%20batteries%20-%20deck.pdf?alt=media&token=cf652e96-9761-4b08-bec5-1b8383733338"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </AspectRatio>

      </Box>
    </Box>
  );
};

export default EmbeddedPDFs;
