import React from 'react';

interface AppProps {
    color?: string;
}

//  EXAMPLE OF FUNCTIONAL COMPONENT WITH TYPESCRIPT
const App = (props: AppProps): JSX.Element => {
    return <div>{props.color}</div>
}


