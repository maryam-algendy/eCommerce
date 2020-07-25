import React from "react";
import {Image,Button} from "react-bootstrap";

const cats=
[
    {
        class:"item-1",
        link:"cat-1.jpg",
        btn:"dresses"
    },
    {
        class:"item-2",
        link:"cat-2.jpg",
        btn:"watches"
    },
    {
        class:"item-3",
        link:"cat-3.jpg",
        btn:"bags"
    },
    {
        class:"item-4",
        link:"cat-4.jpg",
        btn:"sunglasses"
    },
    {
        class:"item-5",
        link:"cat-5.jpg",
        btn:"footwear"
    }
]

class Categories extends React.Component{
    render(){
        return(
        <div className="categories container py-5">
            {
                cats.map((cat,id)=>{
                    return(
                        <div key={id} className={cat.class}>
                    <Image src={cat.link}/>
                    <Button>{cat.btn}</Button>
                </div>
                    )
                })
            }
                <div className="item-6 text-center">
                    <div>
                        <h4>sign up & get 20% off</h4>
                        <p>Be the frist to know about the latest fashion news and get exclu-sive offers</p>
                        <Button>sign up</Button>
                    </div>
                 </div>
        </div>
     )
    }
};

export default Categories;