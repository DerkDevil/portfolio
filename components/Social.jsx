import Link from "next/link"

import { FaGithub, FaLinkedinIn, FaTwitter, FaHackerrank } from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path:"https://github.com/DerkDevil"},
    {icon: <FaLinkedinIn />, path:"https://www.linkedin.com/in/dereck-sebastian-mu%C3%B1oz-castiblanco-3a210215a/"},
    {icon: <FaHackerrank />, path:"https://www.hackerrank.com/profile/munozdereckseba1"}
]

const Social = ({containerStyles, iconStyles    }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles} target="_blank">
                {item.icon}
            </Link>
        })}
    </div>
  )
}

export default Social