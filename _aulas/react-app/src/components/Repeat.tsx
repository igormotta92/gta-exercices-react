import { Student } from "../shared/interfaces"

interface Props {
    list: Array<Student>
}

export const Repeat:React.FC<Props> = (props) => {
    const tsxList: any[] = [];
    props.list.forEach(student => {
        tsxList.push(<li key={student.name}> { student.name } - { student.age }</li>)
    });
    return <>
    <ul>
        {tsxList}
    </ul>
    </>
}