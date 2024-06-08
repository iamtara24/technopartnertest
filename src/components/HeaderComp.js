import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import iconNotifCoin from '../assets/img/notifCoin.png';
import iconNotifSick from '../assets/img/notifSick.png';
import iconNotifOver from '../assets/img/notifOver.png';

const HeaderComp = () => {
  return (
    <Container className='py-4'>
        <Row className='justify-content-between align-items-center'>
            <Col>
                <h1 className='fw-bold text-custom-primary fs-custom-logo'>KerjaYuk!</h1>
            </Col>
            <Col className='text-end'>
                <Link to="/notification" className='d-block d-lg-none fs-2 position-relative text-dark'>
                    <i className="far fa-bell"></i>
                    <div className="notification-count"></div>
                </Link>
                <Dropdown className='d-none d-lg-block'>
                    <Dropdown.Toggle variant="transparent" id="notification-dropdown" className='custom-dropdown-toggle fs-2 position-relative border-0'>
                        {/* Ikon lonceng */}
                        <i className="far fa-bell"></i>
                        <div className="notification-count"></div>
                    </Dropdown.Toggle>

                    {/* Daftar notifikasi statis dalam dropdown */}
                    <Dropdown.Menu style={{maxHeight: '450px', overflowY: 'auto'}}>
                        <Dropdown.Header className='text-custom-primary fw-bold fs-5'>Notification</Dropdown.Header>
                        <Dropdown.Item className='d-flex gap-3 bg-notif-read py-2'>
                            <div className="icon">
                                <img src={iconNotifCoin} alt="" height={'24px'} />
                                <div className="mark-notif done-notif">
                                    <i class="fas fa-check"></i>
                                </div>
                            </div>
                            <div className="content-notif">
                                <div className="d-flex justify-content-between">
                                    <p className='fw-bold mb-1'>Reimbursement</p>
                                    <small>Today</small>
                                </div>
                                <p className='text-wrap'>Your submission "Lorem ipsum dolor sit amet..." with the "with a total cost of 50,000 has been <span className='fw-bold'>Paid</span> please check your BRIMO application, Thank you</p>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex gap-3 py-2'>
                            <div className="icon">
                                <img src={iconNotifCoin} alt="" height={'24px'} />
                                <div className="mark-notif danger-notif">
                                    <i class="fas fa-times"></i>
                                </div>
                            </div>
                            <div className="content-notif">
                                <div className="d-flex justify-content-between">
                                    <p className='fw-bold mb-1'>Reimbursement</p>
                                    <small>Yesterday</small>
                                </div>
                                <p className='text-wrap'>Your submission "description" has been <span className='fw-bold'>Rejected</span> please click for details.</p>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex gap-3 py-2 bg-notif-read'>
                            <div className="icon">
                                <img src={iconNotifCoin} alt="" height={'24px'} />
                                <div className="mark-notif proses-notif">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                            <div className="content-notif">
                                <div className="d-flex justify-content-between">
                                    <p className='fw-bold mb-1'>Reimbursement</p>
                                    <small>2023-10-06</small>
                                </div>
                                <p className='text-wrap'>Your submission will be <span className='fw-bold'>Processed</span> according to the Reimbursement schedule. Please wait</p>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex gap-3 py-2 bg-notif-read'>
                            <div className="icon">
                                <img src={iconNotifSick} alt="" height={'24px'} />
                                <div className="mark-notif done-notif">
                                    <i class="fas fa-check"></i>
                                </div>
                            </div>
                            <div className="content-notif">
                                <div className="d-flex justify-content-between">
                                    <p className='fw-bold mb-1'>Sickness</p>
                                    <small>2023-10-06</small>
                                </div>
                                <p className='text-wrap'>Your submission has been <span className='fw-bold'>approved</span> by the Superior</p>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex gap-3 py-2'>
                            <div className="icon">
                                <img src={iconNotifSick} alt="" height={'24px'} />
                                <div className="mark-notif danger-notif">
                                    <i class="fas fa-times"></i>
                                </div>
                            </div>
                            <div className="content-notif">
                                <div className="d-flex justify-content-between">
                                    <p className='fw-bold mb-1'>Sickness</p>
                                    <small>2023-10-05</small>
                                </div>
                                <p className='text-wrap'>Your submission has been <span className='fw-bold'>rejected</span> please comfirm with your Superior</p>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex gap-3 py-2'>
                            <div className="icon">
                                <img src={iconNotifSick} alt="" height={'24px'} />
                                <div className="mark-notif proses-notif">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                            <div className="content-notif">
                                <div className="d-flex justify-content-between">
                                    <p className='fw-bold mb-1'>Sickness</p>
                                    <small>2023-10-05</small>
                                </div>
                                <p className='text-wrap'>Your submission Is being <span className='fw-bold'>reviewed</span> to the Superior for the approval process, please wait</p>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex gap-3 py-2 bg-notif-read'>
                            <div className="icon">
                                <img src={iconNotifOver} alt="" height={'24px'} />
                                <div className="mark-notif done-notif">
                                    <i class="fas fa-check"></i>
                                </div>
                            </div>
                            <div className="content-notif">
                                <div className="d-flex justify-content-between">
                                    <p className='fw-bold mb-1'>Overtime</p>
                                    <small>2023-10-05</small>
                                </div>
                                <p className='text-wrap'>Your submission has been <span className='fw-bold'>approved</span> by the Superior</p>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex gap-3 py-2'>
                            <div className="icon">
                                <img src={iconNotifOver} alt="" height={'24px'} />
                                <div className="mark-notif danger-notif">
                                    <i class="fas fa-times"></i>
                                </div>
                            </div>
                            <div className="content-notif">
                                <div className="d-flex justify-content-between">
                                    <p className='fw-bold mb-1'>Overtime</p>
                                    <small>2023-10-05</small>
                                </div>
                                <p className='text-wrap'>Your submission has been <span className='fw-bold'>rejected</span> please comfirm with your Superior</p>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex gap-3 py-2'>
                            <div className="icon">
                                <img src={iconNotifOver} alt="" height={'24px'} />
                                <div className="mark-notif proses-notif">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                            <div className="content-notif">
                                <div className="d-flex justify-content-between">
                                    <p className='fw-bold mb-1'>Overtime</p>
                                    <small>2023-10-05</small>
                                </div>
                                <p className='text-wrap'>Your submission Is being <span className='fw-bold'>reviewed</span> to the Superior for the approval process, please wait</p>
                            </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>
    </Container>
  )
}

export default HeaderComp