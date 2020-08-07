import React from 'react';
import {Carousel} from "react-bootstrap";
import {Link} from 'react-router-dom';

export default  (props) =>{
    const items =
    [
        {
            paragraph: "paragraph1",
            header: "header1",
            btn: "btn1",
            link: "carousel-1.jpg"
        },
        {
            paragraph: "paragraph2",
            header: "header2",
            btn: "btn3",
            link: "carousel-2.jpg"
        },
        {
            paragraph: "paragraph3",
            header: "header3",
            btn: "btn3",
            link: "carousel-3.jpg"
        }


    ]
    return (
        <div className="Carousel">
            <Carousel touch={true} wrap={true}>
                {
                    items.map((item, id) => {
                        return (
                            <Carousel.Item key={id} style={{ background: `url(${item.link}) center`, backgroundSize: "cover", height: "570px" }}>
                                <Carousel.Caption>
                                    <p style={{ animation: `${item.paragraph} 2s forwards` }}>women collection 2018</p>
                                    <h2 style={{ animation: `${item.header} 2s forwards`, animationDelay: "2s" }}>new arrivals</h2>
                                    <Link to="/" style={{ animation: `${item.btn} forwards 2s`, animationDelay: "3s" }}>shop now</Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )

                    })
                }
            </Carousel>
        </div>

    )
}