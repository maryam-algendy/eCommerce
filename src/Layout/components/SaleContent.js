import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Button,Form,FormControl,InputGroup,Image} from 'react-bootstrap';
import Favourite from './Blocks/Favourite';
import {Typography,Slider} from '@material-ui/core'

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
        link:"features-5.jpg",
        span:"new",
        btn:"Hershel supply co 251",
        cost:"$75.00"
    },
    {
        link:"features-6.jpg",
        class:"none",
        btn:"Herschel supply co 25l",
        cost:"$75.00"
    },
    {
        link:"features-7.jpg",
        span:"new",
        btn:"Denim jacket blue",
        cost:"$92.50"
    },
    {
        link:"features-8.jpg",
        class:"none",
        btn:"Denim jacket blue",
        cost:"$92.50"
    },
    {
        link:"features-9.jpg",
        class:"none",
        btn:"Coach slim eastone black",
        cost:"$165.90"
    },
    {
        link:"features-10.jpg",
        span:"sale",
        class:"sale",
        btn:"Frayed denim shorts",
        cost:"$15.90",
        del:" $29.50 ",
        delClass:"delClass"    
    },
    {
        link:"features-11.jpg",
        span:"new",
        btn:"Herschel supply co 25l",
        cost:"$75.00"
    },
    {
        link:"features-12.jpg",
        class:"none",
        btn:"Denim jacket blue",
        cost:"$92.50"
    }
]

  function valuetext(value) {
    return `${value}°C`;
  }

const SaleContent =()=>{
    const [color, setColor] = useState("un-checked ");

    const onbtnClick =()=>
    {
      if (color==="un-checked "){
        setColor("checked")
      } 
      else{
        setColor("un-checked ")  
      }
  }

    const [value, setValue] = useState([50, 200]);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const start=value[0];
    const end=value[1];
    
        return(
            <div className="sale-content py-5 px-2 px-lg-5">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3 pr-5">
                        <h4>Categories</h4>
                        <ul className="list-unstyled">
                            <li><Link to="/">all</Link></li>
                            <li><Link to="/">women</Link></li>
                            <li><Link to="/">men</Link></li>
                            <li><Link to="/">kids</Link></li>
                            <li><Link to="/">accesories</Link></li>
                        </ul>
                        <h4>Filters</h4>
                        <div className="filters">
                            <h5>price</h5>
                            {/* range */}
                            <Typography id="range-slider" gutterBottom>
                                Temperature range
                                </Typography>
                                <Slider
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={valuetext}
                                max={200}
                                min={50}
                                />
                            <Button>filter</Button>
                            <p>Range: <span className="start">${start}</span> - <span className="end">${end}</span></p>
                        </div>
                        <h4>color</h4>
                        <button style={{backgroundColor:'#00bbec'}} className={color} onClick={onbtnClick}> </button>
                        <button style={{backgroundColor:'#2c6ed5'}} className={color} onClick={onbtnClick}> </button>
                        <button style={{backgroundColor:'#ffa037'}} className={color} onClick={onbtnClick}> </button>
                        <button style={{backgroundColor:'#ff5337'}} className={color} onClick={onbtnClick}> </button>
                        <button style={{backgroundColor:'#a88c77'}} className={color} onClick={onbtnClick}> </button>
                        <button style={{backgroundColor:'#393939'}} className={color} onClick={onbtnClick}> </button>
                        <button style={{backgroundColor:'#cccccc'}} className={color} onClick={onbtnClick}> </button>
                        <InputGroup className="mt-5">
                            <FormControl placeholder="Search Products..." aria-describedby="basic-addon1" />
                            <Button><i className="fas fa-search"></i></Button>
                        </InputGroup>                     
                        </div>
                    <div className="col-sm-6 col-md-8 col-lg-9">
                        <div className="show-result">
                        <Form.Control as="select" custom>
                            <option>default sorting</option>
                            <option>popularity</option>
                            <option>price:low to high</option>
                            <option>price:high to low</option>
                        </Form.Control>
                        <Form.Control as="select" custom>
                            <option>price</option>
                            <option>$0.00 : $50:00</option>
                            <option>$5.00 : $100:00</option>
                            <option>$100.00 : $150:00</option>
                            <option>$150.00 : $200:00</option>
                            <option>$200:00+</option>
                        </Form.Control>
                        <span>Showing 1–12 of 16 results</span>
                        </div>
                        <div className="row">

                        {
        items.map((item,id) =>{
            return(
                <div key={id} className="feature-item p-3 col-md-6 col-lg-4">
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
        })
      }   
                              </div>
                              <div className="nav-pro">
                                <Link to="/">1</Link>
                                <Link to="/">2</Link>
                              </div>


                 </div>
                </div>
            </div>
        )
    
}
export default SaleContent;