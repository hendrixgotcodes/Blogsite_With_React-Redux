import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {actions, selectSearchInput} from '../features/userSlice';
import "../styling/blogs.css"

function Blogs() {

    const searchInput = useSelector(selectSearchInput);
    const blogUrl =  `https://gnews.io/api/v4/search?q=${searchInput}le&token=d44fd9533cfb60f5b7541c182a2c38fb`;
    const dispatch = useDispatch();

    const [blogs, setBlogs] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        axios
        .get(blogUrl)
        .then((response)=>{

            console.log(response);

            dispatch(
                actions.setBlogData(response.data)
            )

            setBlogs(response.data)
            setLoading(false)

        })
        .catch((error)=>{

            console.log(error);

        })

    }, [searchInput])


    return (
        <div className="blog__page">

            <h1 className="blog__page__header">Blogs</h1>
            {loading && (<h1 className="loading">Loading...</h1>)}
            <div className="blogs">
                {blogs?.articles?.map(article=>(

                    <a href={article.url} target="_blank" className="blog">
                        <img src={article.image} alt=""/>
                        <div>
                            <h3 className="sourceName">
                                <span>{article.source.name}</span>
                                <p>{article.publishedAt}</p>
                            </h3>
                            <h1>{article.title}</h1>
                            <p>{article.description}</p>
                        </div>
                    </a>

                )
                )}

                {blogs?.totalArticles == 0 &&(
                    <h1 className="no__blogs">
                        No articles available😥. Please search something else
                    </h1>
                )}
            </div>
            
        </div>
    )
}

export default Blogs
