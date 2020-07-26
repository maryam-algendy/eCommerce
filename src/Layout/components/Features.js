import React from 'react';
import {Image,Button} from "react-bootstrap";
import AliceCarousel from 'react-alice-carousel';

const items=[
    {
        link:"features-1.jpg",
        span:"new",
        btn:"Hershel supply co 251",
        cost:"$75.00"
    },
    {
        link:"features-2.jpg",
        class:"none",
        btn:"Denim jacket blue",
        cost:"$92.50"
    },
    {
        link:"features-3.jpg",
        class:"none",
        btn:"Coach slim eastone black",
        cost:"$165.90"
    },
    {
        link:"features-4.jpg",
        span:"sale",
        class:"sale",
        btn:"Frayed denim shorts",
        cost:"$15.90",
        del:" $29.5 ",
        delClass:"delClass"
    },
    {
        link:"features-1.jpg",
        span:"sale",
        btn:"Hershel supply co 251",
        cost:"$75.00"
    },
    {
        link:"features-2.jpg",
        class:"none",
        btn:"Denim jacket blue",
        cost:"$92.50"
    },
    {
        link:"features-3.jpg",
        class:"none",
        btn:"Coach slim eastone black",
        cost:"$165.90"
    },
    {
        link:"features-4.jpg",
        span:"sale",
        class:"sale",
        btn:"Frayed denim shorts",
        cost:"$15.90",
        del:" $29.5 ",
        delClass:"delClass"
    }
]

class Features extends React.Component {

    state = {
        galleryItems: items.map((item,id) =>{
            return(
                <div key={id} className="feature-item p-3">
                    <div className="img-side mb-1">
                        <Image src={item.link}/>
                        <div className="overlay"></div>
                        <Button>add to cart</Button>
                        <span className={item.class}>{item.span}</span>
                        <i class="far fa-heart"></i>
                    </div>
                    <div className="desc">
                        <Button>{item.btn}</Button>
                        <del>{item.del}</del>
                        <span className={item.delClass}>{item.cost}</span>
                    </div>
                </div>
            )
        }),
      }
    
      responsive = {
        0: { items: 1 },
        600: { items: 2 },
        867: { items: 3 },
        922: { items: 4 },
      }
    
      render() {
        return (
            <div className="p-5">
          <AliceCarousel
            items={this.state.galleryItems}
            responsive={this.responsive}
            autoPlayDirection="ltr"
            autoPlayInterval={5000}
            autoPlay={true}
            mouseTrackingEnabled={true}
            disableAutoPlayOnAction={true}
          />
            </div>
        )
      }
};

export default Features;