
import React, { Component } from "react";
import articles from "../articles";

import ArticlesListComp from "../Components/ArticlesListComp";

class ArticlesListPage extends Component {

    render() {
        return ( 
            <div >
                <h4 > Articles List: </ h4>  
                <ArticlesListComp articles = { articles }/>
            </ div >
        );

    }
}
export default ArticlesListPage;
