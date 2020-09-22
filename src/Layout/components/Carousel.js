import React from 'react';
import {Carousel} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCarousel} from '../../redux/action';

class carousel extends React.Component {
    componentDidMount(){
        this.props.fetchCarousel();
    }
    render(){
        return (
            <div className="Carousel">
                <Carousel touch={true} wrap={true}>
                    {
                       this.props.items.map((item, id) => {
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

}
const mapStateToProps=(state)=>{
    return{
        items:state.carousel
    }
}
export default connect(mapStateToProps,{fetchCarousel}) (carousel);
