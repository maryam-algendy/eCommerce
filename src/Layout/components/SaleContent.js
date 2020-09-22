import React ,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Button,Form,FormControl,InputGroup,Image} from 'react-bootstrap';
import Favourite from './Blocks/Favourite';
import {Typography,Slider} from '@material-ui/core'
import {useSelector, useDispatch} from 'react-redux';
import {fetchProducts,fetchSelectedColor} from '../../action';
import {postCart} from "../../action";
function valuetext(value) {
    return `${value}°C`;
  }

  export default ()=>{

        const dispatch=useDispatch();
        useEffect(() => {
            dispatch(fetchProducts());
        }, [dispatch]);
        useEffect(() => {
            dispatch(fetchSelectedColor());
        }, [dispatch]);
        const items=useSelector(state => state.products)
        const selectedColor=useSelector( state=> state.selectedColor)

        const [color, setColor] = useState('un-checked');

        const onbtnClick =(c,id)=>
        {
        if (c==='un-checked'){
            setColor('checked');
            selectedColor[id].class='checked';
        } 
        else{
            setColor('un-checked')  ;
            selectedColor[id].class='un-checked';
        }
    }

        const [value, setValue] = useState([50, 200]);
        const handleChange = (event, newValue) => {
        setValue(newValue);
        };
        const start=value[0];
        const end=value[1];
        
            return(
                <div className="sale-content container py-5 px-2 px-lg-0">
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
                            {
                                selectedColor.map((selected,id)=>{
                                    return(
                                        <button key={id} style={{backgroundColor:`${selected.style}`}} className={selected.class} onClick={()=>onbtnClick(selected.class,id)}> </button> 
                                    )
                                })
                            }
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
                            <Button className="add-to-cart" onClick={()=>postCart({id: item.id, quantity: 1, link:item.link, name: item.btn, cost:item.cost, total:item.cost},item.id)} >
                                add to cart</Button>
                            <span className={item.class}>{item.span}</span>
                            <Favourite itemName={item.btn}/>
                        </div>
                        <div className="desc">
                            <Link to="/">{item.btn}</Link>
                            <del>{item.del}</del>
                            <span className={item.delClass}>${item.cost}</span>
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
