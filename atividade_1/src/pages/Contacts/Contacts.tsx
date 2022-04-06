import { AiOutlineMail, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { ContactCard } from "../../components/ContactCard";

const contacts = [
  {
    Icon: AiOutlineMail,
    text: "teste@teste.com"
  },
  {
    Icon: AiFillFacebook,
    text: "Visite nossa página"
  },
  {
    Icon: AiFillInstagram,
    text: "Nos siga @grupo3"
  },
]

function Contacts() {
  return (
    <div className='contact__container'>
      <h2>Entre em contato!</h2>
      <div className="contact__card--container">
        {contacts.map((item, i) => (
          <ContactCard key={i} Icon={item.Icon} text={item.text} />
        ))}
      </div>
    </div>
  )
}

export default Contacts;
