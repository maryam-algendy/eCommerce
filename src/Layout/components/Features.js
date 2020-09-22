import React, { useEffect } from 'react';
import {Image,Button} from "react-bootstrap";
import AliceCarousel from 'react-alice-carousel';
import {Link} from 'react-router-dom';
import Favourite from './Blocks/Favourite';
import {fetchFeatures} from '../../redux/action';
import {useDispatch ,useSelector} from "react-redux";


export default () => {
    const dispatch = useDispatch();
    const features = useSelector(state => state.features)

    useEffect(() => {
        dispatch(fetchFeatures());
    }, [dispatch])

    const responsive = {
        0: { items: 1 },
        600: { items: 2 },
        867: { items: 3 },
        922: { items: 4 },
    }
    
    return (
        <div className="container features px-5 px-xl-0">
            <h3 className="text-center mb-5">FEATURED PRODUCTS</h3>
            <AliceCarousel
            responsive={responsive}
            autoPlayDirection="ltr"
            autoPlayInterval={5000}
            autoPlay={true}
            mouseTrackingEnabled={true}
            disableAutoPlayOnAction={true}
            >
              {(features || []).map((item, id) => {
                  return (
                    <div key={id} className="feature-item p-3">
                         <div className="img-side mb-1">
                             <Image src={item.link}/>
                             <div className="overlay"> </div>
                             <Button className="add-to-cart">add to cart</Button>
                             <span className={item.class}>{item.span}</span>
                             <Favourite itemName={item.btn}/>
                         </div>
                         <div className="desc">
                             <Link to="/">{item.btn}</Link>
                             <del>{item.del}</del>
                             <span className={item.delClass}>{item.cost}</span>
                         </div>
                    </div>
                  )
              })}
            </AliceCarousel>
        </div>
    )
};
