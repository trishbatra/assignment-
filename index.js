const express = require("express")
const _ = require('lodash');
const axios = require("axios")
const app = express()

require('dotenv').config();

async function middleware(req,res,next){
    axios.get(process.env.API_URL, {
        headers: {
            "x-hasura-admin-secret":  process.env.SECRET
        }
    }).then((resss)=>{
        blogs = resss.data
        next()
    }).catch(err=>res.send(err))
}

app.get("/api/blog-stats", middleware ,(req,res)=>{
    try {
        const size  = _.size(blogs.blogs)
        const maxTitleLength = _.maxBy(blogs.blogs, title => title.title.length)
        const privacyVlogs = _.filter(blogs.blogs, blog=> _.includes(blog.title,"Privacy" )).length
        const uniqueBlogTitles = _.uniqBy(blogs.blogs, "title");
        const data = { 
            totalNumberOfVlogs : size || undefined ,
            titleOfLongetsBlog: maxTitleLength.title || undefined ,
            vlogsWithPrivacyInTitle: privacyVlogs || undefined ,
            arrayOfUniqueBlogs : uniqueBlogTitles || undefined  
        }
        res.json(data)
    } catch (error) {
        res.send(error)
    }
})

app.get("/api/blog-search", middleware ,(req,res)=>{
    try {
        if (!req.query.search) {
            return res.send("some error")
        }
        filterResult  = blogs.blogs.filter( blog => blog.title.toLowerCase().includes( req.query.search.toLowerCase()) )
        if (filterResult.length == 0 || filterResult == []) {
            res.send("<h1>dont found anything with the search query you gave 😔</h1>")
        }
        res.json(filterResult)
    } catch (error) {
        res.send(error)
    }
   
})


app.listen(3000)