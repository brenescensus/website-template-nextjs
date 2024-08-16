import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
export  const ContactData=[
    {
        id:1,
        title:"Email Us",
        icon:<FaEnvelope/>,
        description:"info@example.com",
        link:"mailto:info@example.com"
    },
    {
        id:2,
        title:"Call Us",
        icon:<FaPhone/>,
        description:"+1 5589 55488 55",
        link:"tel:+1 5589 55488 55"
    },
    {
        id:3,
        title:"Location",
        icon:<FaLocationPin/>,
        description:"A108 Adam Street, New York, NY 535022",
        link:"https://www.google.com/maps/place/A10",
    },
]