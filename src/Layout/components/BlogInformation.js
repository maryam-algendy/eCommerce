import React, { useEffect } from 'react';
import {Image,Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchBlogItems} from '../../action';

const BlogInformation= (props)=>{
    const id =props.id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBlogItems());
    }, [dispatch]);

    const blogs = useSelector(state => state.blogItems)
        return(
            
            <div className="col-lg-9 col-md-8 blog-detail">
                <div className="img-side">
                    <Image src={(blogs[id]||[]).link}/>
                </div>
                <div className="desc">
                    <h4><Link to="/blog">{(blogs[id]||[]).title}</Link></h4>
                    <span>By Admin | 28 Dec, 2018 | Cooking, Food | 8 Comments</span>
                    <p>{(blogs[id]||[]).desc}</p>
                    <p>Aliquam faucibus scelerisque placerat. Vestibulum vel libero eu nulla varius pretium eget eu magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean dictum faucibus felis, ac vestibulum risus mollis in. Phasellus neque dolor, euismod vitae auctor eget, dignissim a felis. Etiam malesuada elit a nibh aliquam, placerat ultricies nibh dictum. Nam ut egestas velit. Pellentesque viverra tincidunt tellus. Etiam cursus, ligula id vehicula cursus, turpis mauris facilisis massa, eget tincidunt est purus et odio. Nam quis luctus libero, non posuere velit. Ut eu varius diam, eu euismod elit. Donec efficitur, neque eu consectetur consectetur, dui sem consectetur felis, vitae rutrum risus urna vel arcu. Aliquam semper ullamcorper laoreet. Sed arcu lectus, fermentum imperdiet purus eu, ornare ornare libero.</p>
                </div>
                <div className="tags">
                    <span>tags</span>
                    <Link to="/blog-details">streetstyle</Link>
                    <Link to="/blog-details">crafts</Link>
                </div>
                <div className="comments">
                    <h4>LEAVE A COMMENT</h4>
                    <span>Your email address will not be published. Required fields are marked *</span>
                <Form>
                    <Form.Control placeholder="Comments..." as="textarea" rows="4"/>
                    <Form.Control  placeholder="Name *"/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email *"/>
                    </Form.Group>
                    <Form.Control placeholder="Website"/>
                    <Button>post comment</Button>
                </Form>
                </div>
            </div>
        )
    
}

export default BlogInformation;