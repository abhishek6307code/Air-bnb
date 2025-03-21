exports.errorPage=((req,res,next)=>{
    // res.sendFile(path.join(rootDir,'views','404.html'))
    res.status(404).render('404',{pageTitle:'Page not found'})
    // res.status(404).send(`<h2>404 Page Not Found"</h2>`);
})