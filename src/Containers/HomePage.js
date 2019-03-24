import React from "react";
import '../css/HomePage.css'
import img2 from '../resources/3.jpg'
import img1 from '../resources/5.jpeg'
import img3 from '../resources/2.jpg'
import {
    Carousel, CarouselItem,
    CarouselCaption, CarouselIndicators,
    CarouselControl,
    Card, CardBody
} from 'reactstrap'

const items = [
    {
        src: img1,
    },
    {
        src: img2,
    },
    {
        src: img3,
    }
];


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: localStorage.getItem('token') ? true : false,
            username: '',
            activeIndex: 0
        }

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    componentDidMount() {
        if (this.state.logged_in) {
            this.setState({username: localStorage.getItem('token')})
        }
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex: nextIndex});
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex: nextIndex});
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({activeIndex: newIndex});
    }


    render() {

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} height="600px" width="2000px"/>
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
                </CarouselItem>
            );
        });

        return (
            <div>
                <Carousel
                    activeIndex={this.state.activeIndex}
                    next={this.next}
                    previous={this.previous}>
                    <CarouselIndicators items={items} activeIndex={this.state.activeIndex}
                                        onClickHandler={this.goToIndex}/>
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
                </Carousel>
                <br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3"></div>
                        <div className="col-sm-12 col-md-2 col-lg-2">
                            <Card>
                                <CardBody className="time-series-card">
                                    <div className="text-secondary"
                                         style={{fontSize: "22px", fontFamily: 'Roboto Slab'}}><strong>Step 1 </strong>
                                        <br/>
                                        <p style={{paddingTop: "10px", fontSize: "20px"}}>Sign up with simple steps</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-2 col-lg-2">
                            <Card>
                                <CardBody className="time-series-card">
                                    <div className="text-secondary"
                                         style={{fontSize: "22px", fontFamily: 'Roboto Slab'}}><strong>Step 2 </strong>
                                        <br/>
                                        <p style={{paddingTop: "10px", fontSize: "20px"}}>Give us some information</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-2 col-lg-2">
                            <Card>
                                <CardBody className="time-series-card">
                                    <div className="text-secondary"
                                         style={{fontSize: "22px", fontFamily: 'Roboto Slab'}}><strong>Step 3 </strong>
                                        <br/>
                                        <p style={{paddingTop: "10px", fontSize: "20px"}}>Find your Family members</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3"></div>
                    </div>
                </div>
                <br/>
                <div className="container" style={{backgroundColor: "ghostwhite", padding: "10px"}}>
                    <div style={{padding: "20px"}}>
                    <span className="text-dark">
                        <span style={{fontSize: "30px", fontFamily: 'Roboto Slab'}}>
                            Motivation
                        </span>
                        <p className="text-secondary" style={{fontSize: "18px"}}>
                            {"In 2018, the US lost track of 1500 migrant children that crossed the\n" +
                            "border between the US and Mexico. This admission came after the\n" +
                            "government admitted that it lost track of 1475 children last year.\n" +
                            "Since October 2014, the Department of Health and Human Services has\n" +
                            "placed more than 135,000 unaccompanied immigrant children with adult\n" +
                            "sponsors in the United States as they waited for their cases to be\n" +
                            "heard by an immigration judge.\n" +
                            "\n" +
                            "In a report two years ago, the Senate subcommittee detailed how\n" +
                            "department officials mistakenly placed eight children with human\n" +
                            "traffickers who forced them to work on an egg farm in Marion, Ohio.\n" +
                            "\n" +
                            "The report found that department officials had failed to establish\n" +
                            "procedures — including sufficient background checks and following up\n" +
                            "with sponsors — to protect the children who were traveling alone. As a\n" +
                            "result, the children were turned over to the traffickers who\n" +
                            "contracted them out to the egg farm.\n" +
                            "\n" +
                            "After hearing these staggering statistics our first thought was “How\n" +
                            "is this possible, and where are these children?” We couldn’t help but\n" +
                            "wonder if these lost children were currently out there, searching for\n" +
                            "their parents."}
                        </p>
                    </span>
                    </div>
                </div>
                <br/>
                <div className="container" style={{backgroundColor: "ghostwhite", padding: "10px"}}>
                    <div style={{padding: "20px"}}>
                    <span className="text-dark">
                        <span style={{fontSize: "30px", fontFamily: 'Roboto Slab'}}>
                            What we do?
                        </span>
                        <p className="text-secondary" style={{fontSize: "18px"}}>
                            {"Although missing persons websites exist, their data parameters are\n" +
                            "very generic. With our simple to use unique formula, we are able to\n" +
                            "better match missing children and the adults who are looking for them\n" +
                            "like no other database currently can."}
                        </p>
                    </span>
                    </div>
                </div>
            </div>

        )
    }
}