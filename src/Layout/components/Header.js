import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div style={{background: `url(${this.props.img}) center` , backgroundSize:"cover"}} className="text-center header">
                <div className="overlay">
                <h2>{this.props.name}</h2>
                <p>{this.props.desc}</p>
                </div>
            </div>
        )
    }
}
export default Header;