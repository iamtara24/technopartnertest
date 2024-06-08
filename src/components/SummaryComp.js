import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from "react-slick";
import profilePic from '../assets/img/user.png';
import checkoutIcon from'../assets/img/checkout.png';
import checkinIcon from'../assets/img/checkin.png';
import durasiIcon from'../assets/img/durasi.png';

const SummaryComp = () => {
    var settings = {
        arrows: false,
        dots: true,
        customPaging: i => (
            <div className='if-active'
            style={{
                position: "relative",
                display: "inline-block",
                width: "15px",
                height: "15px",
                margin: "0 5px",
                padding: "0",
                borderRadius: "50%",
                backgroundColor: "#D9D9D9"
            }}
            >
            </div>
        ),
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };

    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const getCurrentTime = () => {
        const currentHour = new Date().getHours();

        if (currentHour >= 8 && currentHour <= 11) {
            setGreeting('Good Morning!');
        } else if (currentHour >= 11 && currentHour <= 17) {
            setGreeting('Good Afternoon!');
        } else if (currentHour >= 18 && currentHour <= 20) {
            setGreeting("You're Overworking!");
        } else if ((currentHour >= 21 && currentHour <= 24) || (currentHour >= 0 && currentHour <= 5)) {
            setGreeting('Please, Go Home!');
        } else if (currentHour >= 5 && currentHour <= 7) {
            setGreeting("You're too early!");
        } else {
            setGreeting('Good Evening!');
        }
        };

        getCurrentTime(); // Panggil fungsi saat komponen di-mount

        // Update pesan sambutan setiap 1 menit (jika diinginkan)
        const intervalId = setInterval(getCurrentTime, 60000);

        // Bersihkan interval saat komponen di-unmount
        return () => clearInterval(intervalId);
    }, []);
  return (
    <Container className='pb-4'>
        <Row>
            <h5 className='fw-medium ms-1'>Hi, {greeting}</h5>
            <Col lg={5}>
                <div className="bg-custom-gradient p-3 p-lg-4" style={{borderRadius: '25px'}}>
                    <Row>
                        <Col>
                            <div className="d-flex gap-2 gap-lg-3 align-items-center justify-content-between">
                                <div className="pp">
                                    <img src={profilePic} alt="" height={60} width={60} className='rounded-circle pp-mobile'/>
                                </div>
                                <div className="user-detail">
                                    <p className='mb-0 fw-bold fs-6'>Anggin</p>
                                    <p className='mb-0'>Frontend Developer</p>
                                </div>
                                <div className="ms-auto user-detail text-end">
                                    <p className='mb-0'>Member Since</p>
                                    <p className='mb-0 fw-bold fs-6'>12 Februari 2024</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} className='mt-3 mt-lg-5'>
                            <div className="d-flex gap-3 align-items-end justify-content-between">
                                <div className="user-loc">
                                    <p className='mb-0'>Location</p>
                                    <p className='mb-0 fw-bold'>Kantor Sahid</p>
                                </div>
                                <div className="ms-auto">
                                    <p className='mb-0 fst-italic'>ICO</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4}>
                <h5 className='fw-bold mb-4 mt-4 mt-lg-0'>Today's Activity</h5>
                <Row>
                    <Col className='text-center'>
                        <img src={checkinIcon} alt="" height={50} />
                        <h4 className='mb-0 mt-3 fw-bold'>07:07</h4>
                        <small>Check in</small>
                    </Col>
                    <Col className='text-center'>
                        <img src={durasiIcon} alt="" height={50} />
                        <h4 className='mb-0 mt-3 fw-bold'>07:07:00</h4>
                        <small>Working Hour</small>
                    </Col>
                    <Col className='text-center'>
                        <img src={checkoutIcon} alt="" height={50} />
                        <h4 className='mb-0 mt-3 fw-bold'>--:--</h4>
                        <small>Check Out</small>
                    </Col>
                </Row>
            </Col>
            <Col lg={3} className='order-last order-lg-3'>
                <h5 className='fw-bold mb-3 mt-4 mt-lg-0'>Online</h5>
                <Card body>
                    <Row>
                        <Col className='online-layout'>
                            <div className="pp text-center" style={{lineHeight: '1'}}>
                                <img src={profilePic} alt="" height={50} width={50} className='rounded-circle pp-mobile'/>
                                <p className='mb-0 fw-bold mt-2' style={{fontSize: '12px'}}>Jefri</p>
                                <small style={{fontSize: "9px"}}>Sahid</small>
                            </div>
                        </Col>
                        <Col className='online-layout'>
                            <div className="pp text-center" style={{lineHeight: '1'}}>
                                <img src={profilePic} alt="" height={50} width={50} className='rounded-circle pp-mobile'/>
                                <p className='mb-0 fw-bold mt-2' style={{fontSize: '12px'}}>Zasami</p>
                                <small style={{fontSize: "9px"}}>BSD</small>
                            </div>
                        </Col>
                        <Col className='online-layout'>
                            <div className="pp text-center" style={{lineHeight: '1'}}>
                                <img src={profilePic} alt="" height={50} width={50} className='rounded-circle pp-mobile'/>
                                <p className='mb-0 fw-bold mt-2' style={{fontSize: '12px'}}>Sam</p>
                                <small style={{fontSize: "9px"}}>Sahid</small>
                            </div>
                        </Col>
                        <Col className='online-layout'>
                            <div className="pp text-center" style={{lineHeight: '1'}}>
                                <img src={profilePic} alt="" height={50} width={50} className='rounded-circle pp-mobile'/>
                                <p className='mb-0 fw-bold mt-2' style={{fontSize: '12px'}}>Aldo</p>
                                <small style={{fontSize: "9px"}}>Sahid</small>
                            </div>
                        </Col>
                        <Col className='online-layout'>
                            <div className="pp text-center" style={{lineHeight: '1'}}>
                                <img src={profilePic} alt="" height={50} width={50} className='rounded-circle pp-mobile'/>
                                <p className='mb-0 fw-bold mt-2' style={{fontSize: '12px'}}>Erwin</p>
                                <small style={{fontSize: "9px"}}>Sahid</small>
                            </div>
                        </Col>
                        <Col className='online-layout d-lg-none'>
                            <div className="pp text-center" style={{lineHeight: '1'}}>
                                <img src={profilePic} alt="" height={50} width={50} className='rounded-circle pp-mobile'/>
                                <p className='mb-0 fw-bold mt-2' style={{fontSize: '12px'}}>Arya</p>
                                <small style={{fontSize: "9px"}}>BSD</small>
                            </div>
                        </Col>
                        <Col className='online-layout d-lg-none'>
                            <div className="pp text-center" style={{lineHeight: '1'}}>
                                <img src={profilePic} alt="" height={50} width={50} className='rounded-circle pp-mobile'/>
                                <p className='mb-0 fw-bold mt-2' style={{fontSize: '12px'}}>Risya</p>
                                <small style={{fontSize: "9px"}}>BSD</small>
                            </div>
                        </Col>
                        <Col className='online-layout d-lg-none'>
                            <div className="pp text-center" style={{lineHeight: '1'}}>
                                <img src={profilePic} alt="" height={50} width={50} className='rounded-circle pp-mobile'/>
                                <p className='mb-0 fw-bold mt-2' style={{fontSize: '12px'}}>Nesha</p>
                                <small style={{fontSize: "9px"}}>WFH</small>
                            </div>
                        </Col>
                        <Col className='online-layout'>
                            <div className="more-online text-center gap-2">
                                <small className='mb-0'>10</small>
                                <small>more</small>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col xs={12} className='order-3 order-lg-last py-5'>
                <h5 className='fw-bold mb-3 mt-4 mt-lg-0'>PCS News</h5>
                <Slider {...settings}>
                    <div className='news-slider'>
                        <Card body className='m-lg-2 m-2'>
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <div className="user-news">
                                    <img src={profilePic} alt="" height={40} width={40} className='rounded-circle'/>
                                </div>
                                <h5 className='text-custom-primary mb-0 fw-bold'>Ana Riswati</h5>
                                <div className="date-news ms-auto text-end">
                                    <p className='mb-0'>Senin</p>
                                    <p className='mb-0'>30 Mei 2023</p>
                                </div>
                            </div>
                            <p className='text-truncate mb-0'>Kalimat 1 - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <p className='text-truncate mb-0'>Kalimat 2 - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <p className='text-truncate mb-0'>Kalimat 3 - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <p className='text-truncate mb-0'>Kalimat 4 - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </Card>
                    </div>
                    <div className='news-slider'>
                        <Card body className='m-lg-2 m-2'>
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <div className="user-news">
                                    <img src={profilePic} alt="" height={40} width={40} className='rounded-circle'/>
                                </div>
                                <h5 className='text-custom-primary mb-0 fw-bold'>Ana Riswati</h5>
                                <div className="date-news ms-auto text-end">
                                    <p className='mb-0'>Senin</p>
                                    <p className='mb-0'>30 Mei 2023</p>
                                </div>
                            </div>
                            <p className='text-truncate mb-0'>Kalimat 1 - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <p className='text-truncate mb-0'>Kalimat 2 - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <p className='text-truncate mb-0'>Kalimat 3 - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <p className='text-truncate mb-0'>Kalimat 4 - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </Card>
                    </div>
                    <div className='news-slider'>
                        <Card body className='m-lg-2 m-2'>
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <div className="user-news">
                                    <img src={profilePic} alt="" height={40} width={40} className='rounded-circle'/>
                                </div>
                                <h5 className='text-custom-primary mb-0 fw-bold'>Ana Riswati</h5>
                                <div className="date-news ms-auto text-end">
                                    <p className='mb-0'>Senin</p>
                                    <p className='mb-0'>30 Mei 2023</p>
                                </div>
                            </div>
                            <p className='text-truncate mb-0'>Kalimat 1 - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <p className='text-truncate mb-0'>Kalimat 2 - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <p className='text-truncate mb-0'>Kalimat 3 - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <p className='text-truncate mb-0'>Kalimat 4 - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </Card>
                    </div>
                    <div className='news-slider'>
                        <Card body className='m-lg-2 m-2'>
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <div className="user-news">
                                    <img src={profilePic} alt="" height={40} width={40} className='rounded-circle'/>
                                </div>
                                <h5 className='text-custom-primary mb-0 fw-bold'>Ana Riswati</h5>
                                <div className="date-news ms-auto text-end">
                                    <p className='mb-0'>Senin</p>
                                    <p className='mb-0'>30 Mei 2023</p>
                                </div>
                            </div>
                            <p className='text-truncate mb-0'>Kalimat 1 - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <p className='text-truncate mb-0'>Kalimat 2 - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <p className='text-truncate mb-0'>Kalimat 3 - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <p className='text-truncate mb-0'>Kalimat 4 - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </Card>
                    </div>
                </Slider>
            </Col>
        </Row>
    </Container>
  )
}

export default SummaryComp