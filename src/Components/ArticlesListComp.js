import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Style/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';


class ArticlesListComp extends Component {
    render() {
        
        const data = this.props.articles;
        console.log(data);
        return (<div>
                    <section >
                    <div class="container">
                        <div class="card-columns">
                        {data.map((article)=>{ return( 
                            <div class="card bg-light">
                                <div class="card-body text-center">
                                    <div class="text-center">
                                        <p class="card-text">{article.name}</p>
                                    </div>
                                    <Link to={`/article/${(article.name)}`}>more infos</Link>
                                </div>
                            </div>
                                    ); 
                                })
                            } 
                        </div>
                    </div>
                    </section> 
                </ div>
        );
    }
}
export default ArticlesListComp;

 
 

