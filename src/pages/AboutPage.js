import React, { Component } from "react";
import articles from '../Photos/articles.png'; 

class AboutPage extends Component {

    render() {
        return ( < div className = "container" >
            < h4 >about the arcticles</ h4>
            <p>
                in this blog we will present to you some common articles, that you might need to know about.
            </p>
            <img src={articles} style={{height:"600px", width:"50%"}}></img>
            </ div >
        );
    }
}
export default AboutPage;