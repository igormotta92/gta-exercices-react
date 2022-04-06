import { IContactCardProps } from "../../common/types";

function ContactCard({ Icon, text }: IContactCardProps) {
  return (
    <li className='contact__card'>
      <Icon /> 
      <p>{text}</p>
    </li>
  )
}

export default ContactCard;
