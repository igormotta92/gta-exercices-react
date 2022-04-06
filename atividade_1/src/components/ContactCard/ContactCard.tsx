interface IProps {
  Icon: React.FC;
  text: string;
}

function ContactCard({ Icon, text }: IProps) {
  return (
    <div className='contact__card'>
      <Icon /> 
      <p>{text}</p>
    </div>
  )
}

export default ContactCard;
