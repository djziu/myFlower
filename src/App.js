import React from "react";
import Router from "./Components/Router";
import GlobalStyles from "./Components/GlobalStyles";


class  App extends React.Component {

    constructor(props) {
        super(props);

    }

    render(){
    
        return (
            <>
             <Router/>
            <GlobalStyles/>
            </>
        );
    }
}

export default App;