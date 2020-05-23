const express = require('express')

const cors = require('cors')
const app = express();


const PORT = 8080;
const dataStored = {
    item_count : 7,
    items : [
        {
            userId :1,
            title : "Post1",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo a aut eos voluptate, illo excepturi nulla rem iure vel. Et similique consectetur illum, provident minima obcaecati saepe quibusdam eligendi!"

        },
        {
            userId :2,
            title : "Post2",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo a aut eos voluptate, illo excepturi nulla rem iure vel. Et similique consectetur illum, provident minima obcaecati saepe quibusdam eligendi!"

        },
        {
            userId :3,
            title : "Post3",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo a aut eos voluptate, illo excepturi nulla rem iure vel. Et similique consectetur illum, provident minima obcaecati saepe quibusdam eligendi!"

        },
        {
            userId :2,
            title : "Post3",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo a aut eos voluptate, illo excepturi nulla rem iure vel. Et similique consectetur illum, provident minima obcaecati saepe quibusdam eligendi!"

        },
         {
            userId :5,
            title : "Post21",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo a aut eos voluptate, illo excepturi nulla rem iure vel. Et similique consectetur illum, provident minima obcaecati saepe quibusdam eligendi!"

        },
         {
            userId :213,
            title : "Post2",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo a aut eos voluptate, illo excepturi nulla rem iure vel. Et similique consectetur illum, provident minima obcaecati saepe quibusdam eligendi!"

        },
        {
            userId :223,
            title : "Post3",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo a aut eos voluptate, illo excepturi nulla rem iure vel. Et similique consectetur illum, provident minima obcaecati saepe quibusdam eligendi!"

        },
    ]
}

app.use(cors())
app.use('/data',(req,res)=>{
    console.log('asking for data')
    const {query} = req
    let data ={}
    if(query && query.limit) {
        console.log("limiting")
        let {items} = dataStored;
        items = items.slice(0,query.limit);
        data = {item_count : items.length , items}
    }else {
        data = dataStored
    }
    res.status(200).json(data)
})

app.listen(PORT,()=> {
    console.log('listening on port' , PORT)
})

