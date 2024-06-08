import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import iconNotifCoin from '../assets/img/notifCoin.png';
import iconNotifSick from '../assets/img/notifSick.png';
import iconNotifOver from '../assets/img/notifOver.png';

const NotificationPage = () => {
  return (
    <Container>
        <Row>
            <header className='d-flex gap-3 align-items-center border-bottom shadow-sm z-2 sticky-top bg-light' style={{height: '70px'}}>
                <Link to="/" className='position-relative text-dark'>
                    <i class="fas fa-arrow-left"></i>
                </Link>
                <h5 className='fw-bold mb-0 text-custom-primary'>Notification</h5>
            </header>
            <Col xs={12} className='d-flex gap-3 bg-notif-read py-2 pt-3'>
                <div className="icon">
                    <img src={iconNotifCoin} alt="" height={'24px'} />
                    <div className="mark-notif done-notif">
                        <i class="fas fa-check"></i>
                    </div>
                </div>
                <div className="content-notif">
                    <div className="d-flex justify-content-between">
                        <h5 className='fw-bold mb-1'>Reimbursement</h5>
                        <small>Today</small>
                    </div>
                    <p className='text-wrap'>Your submission "Lorem ipsum dolor sit amet..." with the "with a total cost of 50,000 has been <span className='fw-bold'>Paid</span> please check your BRIMO application, Thank you</p>
                </div>
            </Col>
            <Col xs={12} className='d-flex gap-3 py-2 pt-3'>
                <div className="icon">
                    <img src={iconNotifCoin} alt="" height={'24px'} />
                    <div className="mark-notif danger-notif">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <div className="content-notif">
                    <div className="d-flex justify-content-between">
                        <h5 className='fw-bold mb-1'>Reimbursement</h5>
                        <small>Yesterday</small>
                    </div>
                    <p className='text-wrap'>Your submission "description" has been <span className='fw-bold'>Rejected</span> please click for details.</p>
                </div>
            </Col>
            <Col xs={12} className='d-flex gap-3 bg-notif-read py-2 pt-3'>
                <div className="icon">
                    <img src={iconNotifCoin} alt="" height={'24px'} />
                    <div className="mark-notif proses-notif">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
                <div className="content-notif">
                    <div className="d-flex justify-content-between">
                        <h5 className='fw-bold mb-1'>Reimbursement</h5>
                        <small>2023-10-06</small>
                    </div>
                    <p className='text-wrap'>Your submission will be <span className='fw-bold'>Processed</span> according to the Reimbursement schedule. Please wait</p>
                </div>
            </Col>
            <Col xs={12} className='d-flex gap-3 bg-notif-read py-2 pt-3'>
                <div className="icon">
                    <img src={iconNotifSick} alt="" height={'24px'} />
                    <div className="mark-notif done-notif">
                        <i class="fas fa-check"></i>
                    </div>
                </div>
                <div className="content-notif">
                    <div className="d-flex justify-content-between">
                        <h5 className='fw-bold mb-1'>Sickness</h5>
                        <small>2023-10-06</small>
                    </div>
                    <p className='text-wrap'>Your submission has been <span className='fw-bold'>approved</span> by the Superior</p>
                </div>
            </Col>
            <Col xs={12} className='d-flex gap-3 py-2 pt-3'>
                <div className="icon">
                    <img src={iconNotifSick} alt="" height={'24px'} />
                    <div className="mark-notif danger-notif">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <div className="content-notif">
                    <div className="d-flex justify-content-between">
                        <h5 className='fw-bold mb-1'>Sickness</h5>
                        <small>2023-10-05</small>
                    </div>
                    <p className='text-wrap'>Your submission has been <span className='fw-bold'>rejected</span> please comfirm with your Superior</p>
                </div>
            </Col>
            <Col xs={12} className='d-flex gap-3 py-2 pt-3'>
                <div className="icon">
                    <img src={iconNotifSick} alt="" height={'24px'} />
                    <div className="mark-notif proses-notif">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
                <div className="content-notif">
                    <div className="d-flex justify-content-between">
                        <h5 className='fw-bold mb-1'>Sickness</h5>
                        <small>2023-10-05</small>
                    </div>
                    <p className='text-wrap'>Your submission Is being <span className='fw-bold'>reviewed</span> to the Superior for the approval process, please wait</p>
                </div>
            </Col>
            <Col xs={12} className='d-flex gap-3 bg-notif-read py-2 pt-3'>
                <div className="icon">
                    <img src={iconNotifOver} alt="" height={'24px'} />
                    <div className="mark-notif done-notif">
                        <i class="fas fa-check"></i>
                    </div>
                </div>
                <div className="content-notif">
                    <div className="d-flex justify-content-between">
                        <h5 className='fw-bold mb-1'>Overtime</h5>
                        <small>2023-10-05</small>
                    </div>
                    <p className='text-wrap'>Your submission has been <span className='fw-bold'>approved</span> by the Superior</p>
                </div>
            </Col>
            <Col xs={12} className='d-flex gap-3 py-2 pt-3'>
                <div className="icon">
                    <img src={iconNotifOver} alt="" height={'24px'} />
                    <div className="mark-notif danger-notif">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <div className="content-notif">
                    <div className="d-flex justify-content-between">
                        <h5 className='fw-bold mb-1'>Overtime</h5>
                        <small>2023-10-05</small>
                    </div>
                    <p className='text-wrap'>Your submission has been <span className='fw-bold'>rejected</span> please comfirm with your Superior</p>
                </div>
            </Col>
            <Col xs={12} className='d-flex gap-3 py-2 pt-3'>
                <div className="icon">
                    <img src={iconNotifOver} alt="" height={'24px'} />
                    <div className="mark-notif proses-notif">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
                <div className="content-notif">
                    <div className="d-flex justify-content-between">
                        <h5 className='fw-bold mb-1'>Overtime</h5>
                        <small>2023-10-05</small>
                    </div>
                    <p className='text-wrap'>Your submission Is being <span className='fw-bold'>reviewed</span> to the Superior for the approval process, please wait</p>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default NotificationPage