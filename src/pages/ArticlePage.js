import React, { Component } from "react";
import articles from "../articles";
import Notfound from "./Notfound";
import ArticlesListComp from "../Components/ArticlesListComp";
import 'bootstrap/dist/css/bootstrap.min.css';


class ArticlePage extends Component {


    render() {

        const name=this.props.match.params.id;
       const relatedArticles=articles.filter((art)=> art.name !==name);
        const article=articles.find((art)=>art.name===name);
        console.log(name);
        if(article)
        return (
             <div >
                 <div style={{ padding:'2em', textAlign:'left', height:'15em'}}>
                        <h4  style={{ textAlign:'center'}}>{article.name}</h4> 
                        <h5><em > {article.titre} </em></h5>
                        { article.paragraphe.map((p)=> <p>{p}</p>)}
                    </div>
                    <hr/>
                        <h4>Related Articles</h4>
                        <ArticlesListComp articles={relatedArticles}/>
            </div>
        );
    else return <Notfound/>
    }
}
export default ArticlePage;
