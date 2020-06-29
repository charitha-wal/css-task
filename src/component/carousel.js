import React, { Component } from 'react';
import './carousel.scss';
// import { Slide } from "react-awesome-reveal";
// import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import CarouselCard from './carouselCard';

class Carousel extends Component {
    data = [
        { id: 1, title: "First Slide", label: "First Label", description: " Nice! But now the performance will haunt you.", imageUrl: "https://www.holidify.com/images/bgImages/HYDERABAD.jpg" },
        { id: 2, title: "Second Slide", label: "Second Label", description: " Nice! But now the performance will haunt you.", imageUrl: "https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images-e1581532611580.jpg" },
        { id: 3, title: "Third Slide", label: "Third Label", description: " Nice! But now the performance will haunt you.", imageUrl: "https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Full-HD-Images.jpg" },
        { id: 4, title: "Fourth Slide", label: "Fourth Label", description: " Nice! But now the performance will haunt you.", imageUrl: "https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-hd-wallpapers-3d-download.jpg" },
        { id: 5, title: "Fifth Slide", label: "Fifth  Label", description: " Nice! But now the performance will haunt you.", imageUrl: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Desktop-1080P-3D-Images.jpg" },
    ];

    state = {
        currentSlide: [this.data[0]],
    }


    componentDidMount() {

        this.carouselInterval = this.render_carouselInterval();
    }

    componentWillMount() {
        clearInterval(this.carouselInterval)
    }

    render_carouselInterval = () => {
        return setInterval(() => this.render_slide(1), 5000);
    }

    render_slide = (value) => {
        clearInterval(this.carouselInterval)
        let slideIndex = this.data.findIndex(item => item.id === this.state.currentSlide[0].id)
        if (slideIndex + value === -1) {
            this.setState({
                currentSlide: [this.data[this.data.length - 1]]
            })
        }
        else {
            this.setState({
                currentSlide: [this.data[(slideIndex + value) % this.data.length]]
            })
        }
        this.carouselInterval = this.render_carouselInterval();
    }

    render_card = (id) => {
        clearInterval(this.carouselInterval)
        let index = this.data.findIndex(item => item.id === id);
        this.setState({
            currentSlide: [this.data[index]]
        })
        this.carouselInterval = this.render_carouselInterval();
    }

    render() {

        return (
            <TransitionGroup component={null}>

                {this.state.currentSlide.map(item => (
                    <CSSTransition
                        key={item.id}
                        classNames="item"
                    >

                        <div className="Carousel">
                            <div className="LeftArrow" onClick={() => this.render_slide(-1)}>&lt;</div>
                            <div className="RightArrow" onClick={() => this.render_slide(1)}>&gt;</div>

                            {/* <Slide  reverse duration={3} >
                            <Slider> */}
                            <CarouselCard data={item} />
                            {/* </Slider>
                            </Slide> */}
                            {this.data.length <= 6 ?
                                <div className="NavigationBar">
                                    {this.data.map(item => {
                                        return (
                                            <div
                                                key={item.id}
                                                className={`navElement ${this.state.currentSlide[0].id === item.id ? "active" : null}`}
                                                onClick={() => { this.render_card(item.id) }}>
                                            </div>
                                        )
                                    })}
                                </div>
                                :
                                null}
                        </div>
                    </CSSTransition>
                ))}


            </TransitionGroup>
        )
    }
}

export default Carousel;