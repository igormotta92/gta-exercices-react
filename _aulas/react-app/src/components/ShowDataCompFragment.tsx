import { Student } from "../shared/interfaces";

interface Props {
    text: string,
    numericValue?: number
    student: Student
}

const yearOfBirth = (student: Student):number => {
    const year = new Date().getFullYear();
    student = {name: "Pedro", age: 12} as Student;
    return year - student.age;
};

export const ShowDataCompFragment: React.FC<Props> = (props) => {
    //props tem propriedades read-only
    return (
        <>
            { props.text }<br/>
            { props.numericValue }<br/>
            { props.student.name }<br/>
            { yearOfBirth(props.student) }<br/>
        </>
    );
};