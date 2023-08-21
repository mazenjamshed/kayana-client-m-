import {Flex,Text } from "@chakra-ui/react";
import { Caladea, Cabin } from "next/font/google";
const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "700"] });

const FooterCards=({title})=>{
return(
<Text width= '296px'
color= 'var(--wireframes-white, #FFF)'
className={cabin?.className}
fontSize= '20px'
fontStyle= 'normal'
fontWeight= '500'
lineHeight= 'normal'
mb={"16px"} >{title}</Text>

);

}
export default FooterCards;