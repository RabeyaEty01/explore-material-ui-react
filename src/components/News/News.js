import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Newses from '../Newses/Newses';

const News = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=48b0865aef894262a854db8c7790ba9d')
            .then(res => res.json())
            .then(data => setArticles(data.articles));
    }, [])
    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                   articles.map(article=> <Grid item xs={2} sm={4} md={4}>
                    <Newses article={article}></Newses>
                </Grid>)
                }
            </Grid>
        </div>
    );
};

export default News;