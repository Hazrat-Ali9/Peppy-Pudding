import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Dashboard = () => {
  const backgroundImageUrl =
    "url(https://i.postimg.cc/g2TJZR7p/background-hero.png)";
  const [key, setKey] = useState("personal");
  return (
    <div>
      <main>
        <section
          class="inner--hero dashboard--hero"
          style={{
            backgroundImage: backgroundImageUrl,
          }}
        >
          <div class="container mt-20">
            <div class="row align-items-center">
              <div class="col-md-12">
                <div class="inner--text">
                  <h4 class="tag-box">Dashboard</h4>
                  <h3 class="heading">Your Personal Dashboard</h3>
                  <p>
                    Effortlessly Organize, Monitor, and Optimize Your Personal
                    Information in Real Time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="dashboard--tab--area">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-10 col-md-12">
                <div class="dashboard--tab">
                  <div class="dashboard--navs--wrap">
                    <div class="dashboard--navs">
                      <ul
                        class="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <Tabs
                          id="controlled-tab-example"
                          activeKey={key}
                          onSelect={(k) => setKey(k)}
                          className="nav nav-pills mb-3"
                        >
                            <Tab eventKey="personal" title="Personal Details">
                            <div class="dashboard--info--box personal--details card--default">
                        <div class="title">
                          <h3>Personal Details</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div class="profilepic--area">
                          <div class="profile">
                            <div class="profile--img">
                              <img src="assets/images/gallery.svg" alt="" />
                            </div>
                            <div class="profile--username">
                              <h4>Burhan Yudha</h4>
                              <p>burhanyudha@gmail.com</p>
                            </div>
                          </div>
                          <div class="btn">
                            <a href="#" class="button">
                              Change Profile Picture
                            </a>
                          </div>
                        </div>
                        <form action="#">
                          <div class="row">
                            <div class="col-md-6 mt_20">
                              <div class="input--group">
                                <label for="dfname">First Name</label>
                                <input
                                  type="text"
                                  name="dfname"
                                  id="dfname"
                                  value="Burhan Yudha"
                                />
                              </div>
                              <div class="input--group">
                                <label for="ddate">Date of Birth</label>
                                <input
                                  type="text"
                                  name="ddate"
                                  id="ddate"
                                  placeholder="mm/dd/yyyy"
                                />
                              </div>
                              <div class="input--group">
                                <label for="dphone">Mobile Phone</label>
                                <input
                                  type="text"
                                  name="dphone"
                                  id="dphone"
                                  value="+6012 333 4444"
                                />
                              </div>
                              <div class="input--group">
                                <label for="daddress">
                                  Correspondence Address [incl. State &
                                  Postcode]
                                </label>
                                <textarea
                                  name="daddress"
                                  id="daddress"
                                  placeholder="No.62 Road 84, Petaling Jaya, Selangor"
                                ></textarea>
                              </div>
                            </div>
                            <div class="col-md-6 mt_20">
                              <div class="input--group">
                                <label for="dnirc-number">
                                  NIRC/Passport Number
                                </label>
                                <input
                                  type="text"
                                  name="dnirc-number"
                                  id="dnirc-number"
                                  value="Uye"
                                />
                              </div>
                              <div class="input--group">
                                <label for="dgender">Gender</label>
                                <select name="dgender" id="dgender">
                                  <option selected>Select</option>
                                  <option value="1">Male</option>
                                  <option value="2">Female</option>
                                  <option value="3">Others</option>
                                </select>
                              </div>
                              <div class="input--group">
                                <label for="demail">Email</label>
                                <input
                                  type="text"
                                  name="demail"
                                  id="demail"
                                  value="roland.martin@gmail.com"
                                />
                              </div>
                              <div class="input--group">
                                <label for="dpostcode">Post code</label>
                                <input
                                  type="text"
                                  name="dpostcode"
                                  id="dpostcode"
                                  value="46000s"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                            </Tab>
                            <Tab eventKey="single" title="Single Plane Details">
                            <div class="dashboard--info--box singal--plan--details card--default">
                        <div class="title">
                          <h3>Signal Plans Details</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div class="plan--details--box">
                          <div class="plan">
                            <p>Monthly Subscription</p>
                            <p>RM53.00</p>
                          </div>
                          <div class="plan">
                            <p>Deposit</p>
                            <p>RM53.00</p>
                          </div>
                          <div class="plan">
                            <p>Subscription Period</p>
                            <p>1st Dec 2023 to 30th Nov 2024</p>
                          </div>
                          <div class="plan">
                            <p>Telco Provider</p>
                            <p>celcomdigi</p>
                          </div>
                          <div class="plan">
                            <p>Policy Document</p>
                            <ul>
                              <li>
                                <a href="#">Download Here</a>
                              </li>
                            </ul>
                          </div>
                          <div class="plan">
                            <p>Product Disclosure Sheet</p>
                            <ul>
                              <li>
                                <a href="#">Download Here</a>
                              </li>
                            </ul>
                          </div>
                          <div class="plan">
                            <p>Terms & Conditions</p>
                            <ul>
                              <li>
                                <a href="#">Download Here</a>
                              </li>
                            </ul>
                          </div>
                          <div class="plan">
                            <p>Claim Forms</p>
                            <ul>
                              <li>
                                <a href="#">Download Here</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                            </Tab>
                            <Tab eventKey="payment" title="Billing & Payment">
                            <div class="dashboard--info--box billing--details card--default">
                        <div class="title">
                          <h3>Billing & Payment Details</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div class="plan--details--box">
                          <div class="plan">
                            <p>Total Outstanding</p>
                            <p>RM53.00</p>
                          </div>
                          <div class="plan">
                            <p>Due Date</p>
                            <p>31st Dec 2023</p>
                          </div>
                          <div class="plan">
                            <p>Current Invoice</p>
                            <a href="#">Download Here</a>
                          </div>
                          <div class="plan">
                            <p>Previous Invoice(s)</p>
                            <ul>
                              <li>
                                <a href="#">Download Here (23/10/2023)</a>
                              </li>
                              <li>
                                <a href="#">Download Here (23/10/2023)</a>
                              </li>
                              <li>
                                <a href="#">Download Here (23/10/2023)</a>
                              </li>
                              <li>
                                <a href="#">Download Here (23/10/2023)</a>
                              </li>
                              <li>
                                <a href="#">Download Here (23/10/2023)</a>
                              </li>
                            </ul>
                          </div>
                          <div class="plan">
                            <p>Payment</p>
                            <a href="#">Go to payment</a>
                          </div>
                          <div class="plan">
                            <p>Payment History</p>
                            <ul>
                              <li>
                                <a href="#">Download Here (23/10/2023)</a>
                              </li>
                              <li>
                                <a href="#">Download Here (23/10/2023)</a>
                              </li>
                              <li>
                                <a href="#">Download Here (23/10/2023)</a>
                              </li>
                              <li>
                                <a href="#">Download Here (23/10/2023)</a>
                              </li>
                              <li>
                                <a href="#">Download Here (23/10/2023)</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                            </Tab>
                            <Tab eventKey="contract" title="Contract Details">
                            <div class="dashboard--info--box contact--details card--default">
                        <div class="title">
                          <h3>Contact Details</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div class="contact--details--box">
                          <div class="contact--box">
                            <p>SIGNAL Customer Service</p>
                            <h4>Monday to Friday 9am to 6pm</h4>
                            <ul>
                              <li>
                                <a href="tel:6034446666">Telp. +603 444 6666</a>
                              </li>
                              <li>
                                <a href="mailto:enquiry@mysignal.com.my">
                                  Email
                                  <span>enquiry@mysignal.com.my</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="contact--box">
                            <p>UMobile Customer Service</p>
                            <h4>24 hours Hotline</h4>
                            <ul>
                              <li>
                                <a href="tel:6032223333">Telp. +603 222 3333</a>
                              </li>
                              <li>
                                <a href="mailto:xxxxx@u.com.my">
                                  Email <span>xxxxx@u.com.my</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="contact--box">
                            <p>Berjaya Sompo Customer Service</p>
                            <h4>24 hours Hotline</h4>
                            <ul>
                              <li>
                                <a href="tel:6032223333">Telp. +603 222 3333</a>
                              </li>
                              <li>
                                <a href="mailto:xxxxx@u.com.my">
                                  Email
                                  <span>xxxxx@u.com.my</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="download--app--area text-center mt-5">
                        <h3>Download the App</h3>
                        <div class="row justify-content-center">
                          <div class="col-md-6 mt-5">
                            <div class="app--download--box card--default">
                              <img src="https://i.postimg.cc/xdjJsrRD/celco.png" alt="" />
                              <div class="store--area">
                                <a href="#">
                                  <img
                                    src="https://i.postimg.cc/Bvw6MjbH/google-play.png"
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    src="https://i.postimg.cc/vHdmqFYq/app-store.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 mt-5">
                            <div class="app--download--box card--default">
                              <img src="https://i.postimg.cc/15x8kVHK/umobile.png" alt="" />
                              <div class="store--area">
                                <a href="#">
                                  <img
                                    src="https://i.postimg.cc/Bvw6MjbH/google-play.png"
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    src="https://i.postimg.cc/vHdmqFYq/app-store.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                            </Tab>
                        </Tabs>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
