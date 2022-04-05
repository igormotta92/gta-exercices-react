import React from "react";

interface Props {
    text: string
}

export class MyComponent extends React.Component<Props> {
    
    render() {
        return <div> My Component { this.props.text }</div>
    }
}