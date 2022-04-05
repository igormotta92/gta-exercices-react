import { useParams } from 'react-router-dom';

export const ComponentWithParam: React.FC<{}> = (props) => {
    const params = useParams();
    return <>{ params.id }</>
}