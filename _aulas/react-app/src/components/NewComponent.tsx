import { Student } from "../shared/interfaces"

interface Props {
    number: number,
    text: string,
    student: Student
}

export const NewComponent: React.FC<Props> = (props) => {
    return(
    <div className="minhaClass">

    </div>
    )
}