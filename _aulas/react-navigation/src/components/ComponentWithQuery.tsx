import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const ComponentWithQuery: React.FC<{}> = (props) => {
    const { search } = useLocation();
    const query = useMemo(() => new URLSearchParams(search), [search]);
    return <>{query.get("name")}</>
}