import { ReactElement } from "react"

interface Props {
    test: boolean
    children: ReactElement[]
}

export const If: React.FC<Props> = (props) => {
    return props.test ? <> {props.children}</> : <></>
}