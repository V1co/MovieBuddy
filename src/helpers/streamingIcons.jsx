import { SiChannel4, SiNow, SiAppletv, SiBbciplayer, SiMubi, SiNetflix, SiPrime } from "react-icons/si";
import { TbBrandDisney } from "react-icons/tb";

const iconStyles = "size-14 border rounded-b-none rounded px-2"
const textStyles = "border rounded px-2 h-14 font-bold block content-center"

const streamingIcons = {
  'all4': <SiChannel4 className={iconStyles} />,
  'apple': <SiAppletv className={iconStyles} />,
  'curiosity': <span className={textStyles}>Curiosity</span>,
  'disney': <TbBrandDisney className={iconStyles} />,
  'hotstar': <span className={textStyles}>Hotstar</span>,
  'iplayer': <SiBbciplayer className={iconStyles} />,
  'mubi': <SiMubi className={iconStyles} />  ,
  'netflix': <SiNetflix className={iconStyles} />,
  'now': <SiNow className={iconStyles} />,
  'paramount': <span className={textStyles}>Paramount+</span>,
  'prime': <SiPrime className={iconStyles} />,
  'zee5': 'zee5'
}

export default streamingIcons;