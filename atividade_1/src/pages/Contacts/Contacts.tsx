import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { AiOutlineMail } from "react-icons/ai";


function Contacts() {
  return (
    <div>
      <h1>Contacts</h1>
      <h2>Entre em contato!</h2>
      <h3> Nos mande uma mensagem <AiOutlineMail /> teste@teste.com </h3>
      <h3> Visite nossa página <BsFacebook /> Grupo 3 </h3>
      <h3> Nos siga <BsInstagram />@grupo3 </h3>
    </div>
  )
}

export default Contacts;
