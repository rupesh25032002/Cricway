import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { FaFax } from "react-icons/fa";
import { HiOutlineMail} from "react-icons/hi";
const contactdata = [
  {
    logo:<GoLocation className="contactlogo"/>,
    title:"Location",
    para:"301-2,abcd road,xyz"
  },
  {
    logo:<BiPhoneCall className="contactlogo"/>,
    title:"Phone",
    para:"7620696559"
  },
  {
    logo:<FaFax className="contactlogo"/>,
    title:"TelePhone",
    para:"222-33-22-333"
  },
  {
    logo:<HiOutlineMail className="contactlogo"/>,
    title:"Gmail",
    para:"abcd@gmail.com"
  },
  
]

export default contactdata;
