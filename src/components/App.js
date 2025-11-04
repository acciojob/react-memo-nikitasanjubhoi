import React from 'react';
import ReactMemo from './ReactMemo';
import UseMemo from './UseMemo';

const App = () => {

    return(
        <div id="main">
            <h2>React.useMemo</h2>
            <UseMemo />
            <hr />
            <hr />
            <h2>React.memo</h2>
            <ReactMemo />
        </div>
    )

}

export default App;
