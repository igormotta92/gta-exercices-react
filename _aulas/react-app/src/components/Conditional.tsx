import { Student } from "../shared/interfaces"

interface Props {
    student: Student
}

export const Conditional: React.FC<Props> = (props) => {
    return props.student.age > 34 ?
        <>{props.student.name}<br />
            {props.student.age}<br /></> :
        <></>
}