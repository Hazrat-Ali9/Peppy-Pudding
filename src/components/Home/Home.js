import React, { useEffect, useState } from "react";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion'
import { Link } from "react-router-dom";
const Home = () => {
  const backgroundImageUrl =
    "url(https://i.postimg.cc/g2TJZR7p/background-hero.png)";
  const backgroundImageUrl2 =
    "url(https://i.postimg.cc/43xSrH4Y/soldify-bg.png)";
  const backgroundImageUrl3 = "url(https://i.postimg.cc/tRkVg19q/testi-bg.png)";

  const [key, setKey] = useState('general');
  return (
    <div>
      <main>
        
        <section
          class="hero--area d-flex align-items-center"
          style={{
            backgroundImage: backgroundImageUrl,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          
          <div class="container">
         
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="hero--content">
                  <h4 class="tag-box">Introducing Unprecedented Fusion</h4>
                  <h2>
                    Pioneering Telco-Infused Insurance & Takaful Protection for
                    Comprehensive Coverage
                  </h2>
                  <p>
                    Our Innovative Fusion of Telco Services and Comprehensive
                    Insurance & Takaful Protection Ensures Superior Coverage
                    Across Lifestyle, Medical, Personal Accident, Life, Home,
                    and More.
                  </p>

                  <a href="#" class="hero--btn button">
                    Subscribe now!
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="hero-images">
                  <img
                    class="w-100"
                    src="https://mysignal.netlify.app/assets/images/hero.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="protection--area">
          <div class="container">
            <div class="row align-items-end">
              <div class="col-md-7 mt_20">
                <div class="protection--text">
                  <h4 class="tag-box">Explore Our Protection Plans</h4>
                  <h3 class="sub--heading">
                    Explore MYSIGNAL’s Insurance & Takaful Plans paired with a
                    SIM Card for Your Secure Future
                  </h3>
                  <p>
                    At MYSIGNAL, we believe in safeguarding your future with
                    comprehensive protection plans tailored to your needs.
                    Choose between our two distinct yet equally reliable plan
                    options: Insurance Plans and Takaful Plans, both with
                    exceptional Telco Services. Each offers unique benefits and
                    features, ensuring your peace of mind in different ways.
                  </p>
                </div>
              </div>
              <div class="col-md-5 mt_20">
                <div class="protection--img">
                  <img
                    class="w-100"
                    src="https://mysignal.netlify.app/assets/images/protection.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mt_20">
              <div class="protection--card cards">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src="https://mysignal.netlify.app/assets/images/pc1.png" alt="" class="img-fluid"/>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <div class="text">
                <h3>INSURANCE PLANS + TELCO SERVICES</h3>
                <p>
                    Discover the reliability of our Conventional Plans tailored to meet diverse insurance needs. Our Insurance Plans are crafted based on time-tested principles, offering a wide array of benefits designed to secure your lifestyle, health and valuable assets.
                </p>
            </div>
        </div>
    </div>
</div>

              </div>
              <div class="col-md-6 mt_20">
              <div class="protection--card cards">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src="https://mysignal.netlify.app/assets/images/pc2.png" alt="" class="img-fluid"/>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
        <div class="text">
                    <h3>TAKAFUL PLANS + TELCO SERVICES</h3>
                    <p>
                      Embrace the strength of our Takaful Plans, rooted in
                      solidarity and guided by Islamic principles. These plans
                      stand as a testament to shared responsibility, providing
                      inclusive coverage aligned with Sharia guidelines.
                    </p>
                  </div>
        </div>
    </div>
</div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="soldify--area"
          id="plans"
          style={{
            backgroundImage: backgroundImageUrl2,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          <div class="container">
            <div class="section--title">
              <h4 class="tag-box">Insurance + Telco Plans</h4>
              <h3>Solidify Your Future with Insurance & Telco Coverage</h3>
              <p>
                Explore MYSIGNAL’s Insurance & Telco Plans for Comprehensive
                Coverage and Trusted Security
              </p>
            </div>
            <div class="row">
              <div class="col-md-6 mt_30">
                <div class="soldify--card card--default">
                  <h3 class="small--heading">SIGNAL Gold</h3>
                  <img
                    class="w-100"
                    src="https://mysignal.netlify.app/assets/images/sgold.png"
                    alt=""
                  />
                  <p>
                    <strong>SIGNAL Gold</strong> is a customised SIGNAL Plan
                    developed exclusively for Senior Members of our society
                    (aged 60 years and above).{" "}
                  </p>
                  <Link to='gold'><a
                    href="registration_signalgold.html"
                    class="button btn--soldify"
                  >
                    Choose This Plan
                  </a></Link>
                </div>
              </div>
              <div class="col-md-6 mt_30">
                <div class="soldify--card card--default">
                  <h3 class="small--heading">SIGNAL Life</h3>
                  <img
                    class="w-100"
                    src="https://mysignal.netlify.app/assets/images/slife.png"
                    alt=""
                  />
                  <p>
                    <strong>SIGNAL Life</strong> SIGNAL Life is a customised and
                    affordable SIGNAL Plan, providing valuable Personal
                    Accident, Home & Lifestyle Insurance
                  </p>
                  <Link to='life'><a
                    href="registration_signalgold.html"
                    class="button btn--soldify"
                  >
                    Choose This Plan
                  </a></Link>
                </div>
              </div>
              <div class="col-md-6 mt_30">
                <div class="soldify--card card--default">
                  <h3 class="small--heading">SIGNAL Premier</h3>
                  <img
                    class="w-100"
                    src="https://mysignal.netlify.app/assets/images/SIGNAL-Premier.png"
                    alt=""
                  />
                  <p>
                    <strong>SIGNAL Premier</strong> is an exclusive SIGNAL Plan
                    offering valuable Medical (Hospitalisation & Surgical),
                    Personal Accident, Lifestyle and Home Care Insurance.
                  </p>
                  <Link to='premier'><a
                    href="registration_signalgold.html"
                    class="button btn--soldify"
                  >
                    Choose This Plan
                  </a></Link>
                </div>
              </div>
              <div class="col-md-6 mt_30">
                <div class="soldify--card card--default">
                  <h3 class="small--heading">SIGNAL Family</h3>
                  <img
                    class="w-100"
                    src="https://mysignal.netlify.app/assets/images/sfamily.png"
                    alt=""
                  />
                  <p>
                    <strong>SIGNAL Family</strong> is a customised SIGNAL Plan
                    specially designed for families (up to 4 members in a
                    family), providing valuable Home, Lifestyle and Personal
                    Accident protection.
                  </p>
                  <Link to='family'><a
                    href="registration_signalgold.html"
                    class="button btn--soldify"
                  >
                    Choose This Plan
                  </a></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="solidarity--area">
          <div class="container">
            <div class="section--title">
              <h4 class="tag-box">Takaful + Telco Plans</h4>
              <h3>Solidarity in Safeguarding Your Tomorrow</h3>
              <p>
                Embrace MYSIGNAL’s Takaful and Telco Plans Comprehensive
                Coverage Reflecting Islamic Values for Collective Well-being and
                Security
              </p>
            </div>
            <div class="row">
              <div class="col-md-6 mt_30">
                <div class="soldify--card card--default">
                  <h3 class="small--heading">SIGNAL i-Family</h3>
                  <img
                    class="w-100"
                    src="https://mysignal.netlify.app/assets/images/ifamily.png"
                    alt=""
                  />
                  <p>
                    <strong>SIGNAL i-Family</strong> is a customised Takaful
                    SIGNAL Plan specially designed for families (up to 4 members
                    in a family), providing valuable Home, Lifestyle and
                    Personal Accident protection
                  </p>
                  <Link to='ifamily'><a
                    href="registration_signalgold.html"
                    class="button btn--soldify"
                  >
                    Choose This Plan
                  </a></Link>
                </div>
              </div>
              <div class="col-md-6 mt_30">
                <div class="soldify--card card--default">
                  <h3 class="small--heading">SIGNAL i-Life</h3>
                  <img
                    class="w-100"
                    src="https://mysignal.netlify.app/assets/images/ilife.png"
                    alt=""
                  />
                  <p>
                    <strong>SIGNAL i-Life</strong> is a customised and
                    affordable Takaful SIGNAL Plan, providing valuable Personal
                    Accident benefits and Outpatient Clinical Reimbursement
                  </p>

                  <Link to='ilife'><a
                    href="registration_signalgold.html"
                    class="button btn--soldify"
                  >
                    Choose This Plan
                  </a></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <section class="faq--area">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mt_30 order--md-2">
                <div class="faq--tab">
                  <div class="faq--nav--wrapper">
                    <div class="faq--nav">
                    <Tabs id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="nav nav-pills mb-3">
                      <Tab eventKey="general" title="GENERAL">
                      <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              What is SIGNAL?
                              </Accordion.Header>
                              <Accordion.Body>
                              SIGNAL is a first of its kind telco-based insurance and
															takaful plan, providing valuable protection benefits
															encompassing Lifestyle, Medical, Personal Accident, Life,
															Home etc, paired with a SIM card with exceptional telco
															services.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              What is unique about SIGNAL?
                              </Accordion.Header>
                              <Accordion.Body>
                              SIGNAL offers crucial insurance and takaful benefits, paired
															with a SIM card and offered at the cost of a standard telco
															subscription fee i.e. at no additional cost.
															services.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion >
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              Do customers have to pay extra for the insurance and takaful
															benefits offered by SIGNAL?
                              </Accordion.Header>
                              <Accordion.Body>
                              No, all SIGNAL plans come with both telco services and
															insurance/takaful benefits. Customers will just have to pay
															the monthly subscription for the SIGNAL plan subscribed, to
															access the telco services and benefit from the insurance and
															takaful protection.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              Who is the Telecommunications Provider providing the telco
															services for SIGNAL?
                              </Accordion.Header>
                              <Accordion.Body>
                              The telco services are provided by Celcomdigi Bhd and U
															Mobile Sdn. Bhd. (hereinafter referred to “Partner”).
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              Who is the provider of insurance protection under SIGNAL?
                              </Accordion.Header>
                              <Accordion.Body>
                              The insurance protection is underwritten by several leading
															insurance providers and takaful operators in Malaysia and
															all are approved by BNM. You may refer to the respective
															SIGNAL plans for more information.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              How do I subscribe to SIGNAL?
                              </Accordion.Header>
                              <Accordion.Body>
                              <p>Just follow these steps:
														<ul class="mt_10">
															<li class="mt_5">1. Select plan</li>
															<li class="mt_5">2. Select telco service provider </li>
															<li class="mt_5">3. Select mobile line category (new line,
																porting or switch plan)</li>
															<li class="mt_5">4. Register by keying in your personal
																details</li>
															<li class="mt_5">5. Make payment</li>
														</ul>
														</p>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              Who is eligible to subscribe SIGNAL? 
                              </Accordion.Header>
                              <Accordion.Body>
                              <p>The following criteria must be met to subscribe SIGNAL:
														<ul class="mt_10">
															<li class="mt_5">• You must be a Malaysian or non-Malaysian
																legally residing in Malaysia with Permanent Residence,
																Work Permit, Student Permit or MM2H status.</li>
															<li class="mt_5">
																• You must fulfil the age criteria spelt out in the
																insurance/takaful policy of the plan you selected.
															</li>
															<li class="mt_5">You are not eligible to subscribe to SIGNAL
																if you do not meet any of the criteria mentioned above.
															</li>
														</ul>
														</p>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                      </Tab>
                      <Tab eventKey="telco" title="TELCO SERVICES">
                      <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              Can I maintain my existing mobile number?
                              </Accordion.Header>
                              <Accordion.Body>
                              Yes, you can maintain your existing mobile number irrespective of your existing telco provider.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              What if I am on a contract with my existing telco provider?
                              </Accordion.Header>
                              <Accordion.Body>
                              You will need to terminate your existing contract and settle all outstanding amounts before subscribing to SIGNAL and retaining your existing number.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion >
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              How else can I subscribe if I don’t wish to cancel my existing contract?
                              </Accordion.Header>
                              <Accordion.Body>
                              You can subscribe for SIGNAL and obtain a new mobile number and SIM card.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              What if I am blacklisted?
                              </Accordion.Header>
                              <Accordion.Body>
                              You will not be able to subscribe to SIGNAL if you are blacklisted.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              Is the line transferrable? 
                              </Accordion.Header>
                              <Accordion.Body>
                              No, the line is not transferrable.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              Can I have a supplementary line for my family members? 
                              </Accordion.Header>
                              <Accordion.Body>
                              No, we do not have the option for supplementary lines.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              Can I subscribe for additional internet data (and other such services)?
                              </Accordion.Header>
                              <Accordion.Body>
                              Yes, you can but subject to additional cost and T&C apply. Kindly contact our Customer Service for more information.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              What happens if my line is activated by a third party? 
                              </Accordion.Header>
                              <Accordion.Body>
                              MySignal Marketing Sdn Bhd shall not be responsible in the event the Customer’s subscription was activated by a third party without his/her consent. MySignal Marketing Sdn Bhd shall not refund nor compensate the Customer in any manner whatsoever in such situations.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              How and where do I pay my monthly charges?
                              </Accordion.Header>
                              <Accordion.Body>
                              Via online banking.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              Can I subscribe for SIGNAL at celcomdigi and U Mobile outlet and likewise pay my bills etc at celcomdigi and U Mobile outlets? 
                              </Accordion.Header>
                              <Accordion.Body>
                              No, you can only subscribe for SIGNAL online at www.mysignal.com.my and likewise pay your bills via online banking.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              What if I don’t pay my monthly invoice on time?
                              </Accordion.Header>
                              <Accordion.Body>
                              All invoices must be paid on the due dates, with reminders being sent before the due date. Non-settlement of invoices will result in the phone line and insurance benefits being suspended.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              What are the unlimited calls allocated within SIGNAL?
                              </Accordion.Header>
                              <Accordion.Body>
                              <p>
													<ul>
														<li>• Applies to domestic mobile/fixed on-net and off-net usages (excluding video calls, calls to special numbers, calls to toll-free 1-300/1-800 numbers, and calls to 121 numbers).</li>
														<li>• Strictly for standard person-to-person calls; and not meant for any commercial/non-personal usages. For any excessive usage, or on suspicion of fraud, any illegal practice or unusual activity in respect of the Customer’s Account with MySignal Marketing Sdn Bhd, MySignal Marketing Sdn Bhd at its sole and absolute discretion reserves the right at any time without being liable to the Customer or any third party to discontinue, disconnect, interrupt, bar or suspend the service for such period of time as MySignal Marketing Sdn Bhd shall deem fit.</li>
														<li>• Non-transferrable, whether by operation of law or otherwise, either to any other person, entity, or any other Postpaid Account. </li>
														<li>• Can only be utilised domestically i.e. within Malaysian networks only. Calls made when overseas are not allowed. </li>
													</ul>
													</p>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              Who is the owner of the mobile number?
                              </Accordion.Header>
                              <Accordion.Body>
                              Ownership of the mobile number will be with MySignal Marketing Sdn Bhd
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              If I were to retain my existing mobile number and subscribe to SIGNAL, would I continue to be the owner of the mobile number?
                              </Accordion.Header>
                              <Accordion.Body>
                              No, you will continue to use the same mobile number but ownership will be with MySignal Marketing Sdn Bhd.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              What if I were to terminate my SIGNAL subscription and/or don’t wish to continue with the SIGNAL subscription after the initial 12-month contract, can I retain my mobile number?
                              </Accordion.Header>
                              <Accordion.Body>
                              Yes, ownership of the mobile number will be transferred back to the user, once all outstanding (if any) has been settled.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>   
                      </Tab>
                      <Tab eventKey="insurance" title="INSURANCE PROTECTION">
                      <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              What type of benefits and insurance protections are provided under SIGNAL?
                              </Accordion.Header>
                              <Accordion.Body>
                              Our various plans cater to different segments of the society and each plan has its own unique proposition. You may refer to the respective plans or PDS and policy wordings for more information.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              Can I cancel my insurance cover and get a refund of my contribution?
                              </Accordion.Header>
                              <Accordion.Body>
                              You may cancel your subscription for SIGNAL by providing MySignal Marketing Sdn Bhd with a written notice of the intended cancellation. The cancellation will take effect for the entire SIGNAL subscription including the telco plan, insurance protections, and other benefits. There shall be no refund of subscriptions including contribution for the insurance/takaful protection, by the insurance provider/takaful operator or MySignal Marketing Sdn Bhd.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion >
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              What is the period of insurance coverage?
                              </Accordion.Header>
                              <Accordion.Body>
                              The period of coverage for the insurance/takaful protection is twelve (12) months and the certificate will be renewed on a yearly basis upon renewal of SIGNAL subscription.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              When is the effective date of the insurance coverage, assuming I successfully subscribe to SIGNAL today?
                              </Accordion.Header>
                              <Accordion.Body>
                              The period of coverage for insurance/takaful protection shall take effect seven (7) days from successful subscription to SIGNAL. You will receive a confirmation via email within four (4) working days of registration if your subscription is successful or otherwise. However, please take note that the coverage is subject to a waiting period as outlined in the policy wording.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              After I participated and made contributions, how would I know that I have been covered by this insurance?
                              </Accordion.Header>
                              <Accordion.Body>
                              Once you have successfully registered for SIGNAL, you will receive an email notification within four (4) working days with your certificate number, the effective and expiry date of the certificate, and other relevant information.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              Is the coverage automatically extended every month and what happens at the end of the 12-month contract period?
                              </Accordion.Header>
                              <Accordion.Body>
                              The certificate will be automatically extended every month subject to the timely receipt of the monthly subscription fee. You will receive a notification via email informing you of the expiry of the initial twelve-month (12-month) contract, two months before the expiry date, and requesting if you wish to continue for a further period of twelve (12) months. There will not be any waiting period for insurance/takaful protection upon renewal.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                      </Tab>
                      <Tab eventKey="claims" title="CLAIMS">
                      <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              What is the procedure for a claim?
                              </Accordion.Header>
                              <Accordion.Body>
                              <p>
															Fill in the claim form and submit the completed form together with supporting documents to <a href="mailto:enquiry@mysignal.com.my">enquiry@mysignal.com.my</a>. We will then forward this information to the respective insurance provider/takaful operator. 
															<br/>
															The claim form and list of supporting documents vary for each SIGNAL plan as these requirements are determined by the respective insurance provider/takaful operators.  
														</p>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              How long will it take for my claim to be processed? 
                              </Accordion.Header>
                              <Accordion.Body>
                              Approximately fourteen (14) working days from the date of claims submission. However, the turnaround time may vary subject to the insurance provider/takaful operator's assessment of the claims. In the event of insufficient/incomplete information, the claims processing will take a longer time to be completed.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion >
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              What are the contact details for inquiries etc relating to claims?
                              </Accordion.Header>
                              <Accordion.Body>
                              You may contact our Customer Service at +603 2779 2419 or <a href="mailto:enquiry@mysignal.com.my">enquiry@mysignal.com.my</a> (Monday to Friday, 9 am to 6 pm).
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                      </Tab>
                    </Tabs>
                    </div>
                  </div>
                 
                </div>
              </div>
              <div class="col-lg-6 mt_30 order--md-1">
                <div class="faq--text--box">
                  <h4 class="tag-box">FAQ</h4>
                  <h3 class="sub--heading">Your Queries Answered</h3>
                  <p>
                    Find Clarifications on MYSIGNAL’s Insurance and Takaful
                    Plans, Addressing Common Questions
                  </p>
                  <div class="img--area">
                    <img
                      class="w-100"
                      src="https://mysignal.netlify.app/assets/images/faq.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="testimonial--area"
          style={{
            backgroundImage: backgroundImageUrl3,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-4 mt_25">
                <div class="testi--text--box">
                  <h4 class="tag-box">Testimonials</h4>
                  <h3 class="sub--heading">Client Experiences, Our Pride</h3>
                  <p>
                    Discover How MYSIGNAL Plans Have Secured Lives: Testimonials
                    Reflecting Trust and Satisfaction
                  </p>
                  <div class="img--area">
                    <img
                      class="w-100"
                      src="https://mysignal.netlify.app/assets/images/testi.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-8 pl_50">
                <div class="row">
                  <div class="col-md-6 mt_25">
                    <div class="card--default testi--card">
                      <p>
                        I never thought insurance could be this comprehensive!
                        MySignal's Conventional Plans provided tailored coverage
                        for my home, health, and more. I feel secure knowing my
                        family's future is in safe hands.
                      </p>
                      <div class="client--area">
                        <img
                          src="https://mysignal.netlify.app/assets/images/client1.png"
                          alt=""
                        />
                        <h4>Maren Botoshs</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mt_25">
                    <div class="card--default testi--card">
                      <p>
                        I never thought insurance could be this comprehensive!
                        MySignal's Conventional Plans provided tailored coverage
                        for my home, health, and more. I feel secure knowing my
                        family's future is in safe hands.
                      </p>
                      <div class="client--area">
                        <img
                          src="https://mysignal.netlify.app/assets/images/client2.png"
                          alt=""
                        />
                        <h4>Jaxson Philips</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mt_25">
                    <div class="card--default testi--card">
                      <p>
                        I never thought insurance could be this comprehensive!
                        MySignal's Conventional Plans provided tailored coverage
                        for my home, health, and more. I feel secure knowing my
                        family's future is in safe hands.
                      </p>
                      <div class="client--area">
                        <img
                          src="https://mysignal.netlify.app/assets/images/client3.png"
                          alt=""
                        />
                        <h4>Gretchen Botosh</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mt_25">
                    <div class="card--default testi--card">
                      <p>
                        I never thought insurance could be this comprehensive!
                        MySignal's Conventional Plans provided tailored coverage
                        for my home, health, and more. I feel secure knowing my
                        family's future is in safe hands.
                      </p>
                      <div class="client--area">
                        <img
                          src="https://mysignal.netlify.app/assets/images/client4.png"
                          alt=""
                        />
                        <h4>Ryan Franci</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="connect--area"
          style={{
            backgroundImage: backgroundImageUrl3,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-9 col-md-11">
                <div class="row justify-content-center">
                <div class="col-lg-5 mt_30">
                  <h4 class="tag-box">Your Queries Addressed</h4>
                    <h3 class="sub--heading">Have a Question?</h3>
                    <p>Learn More About MYSIGNAL Insurance and Takaful Solutions"</p>
                    <div class="">
                        <img class="w-100" src="https://mysignal.netlify.app/assets/images/contact.png" alt="" />
                    </div>
                  </div>
                  <div class="col-lg-7 mt_30">
                  <div class="contact--form--box card--default text-center">
                    <h3>Have a Question?</h3>
                    <form action="#" class="needs-validation mt-5" novalidate>
                        <div class="input--group mt-4">
                            <input class="form-control" type="text" name="fname" id="fname" placeholder="Full Name" required />
                            <div class="invalid-feedback">Full name is required</div>
                        </div>
                        <div class="input--group mt-4">
                            <input class="form-control" type="email" name="email" id="email" placeholder="Email Address" required />
                            <div class="invalid-feedback">Email is required</div>
                        </div>
                        <div class="input--group mt-4">
                            <input class="form-control" type="text" name="number" id="number" placeholder="Mobile Number" required />
                            <div class="invalid-feedback">Email is required</div>
                        </div>
                        <div class="input--group mt-3">
                            <label for="plan">Please select your preferred SIGNAL Plans</label>
                            <select class="form-select mt-3" name="plan" id="plan" required>
                                <option value="" selected>SIGNAL Gold</option>
                                <option value="2">SIGNAL Life</option>
                                <option value="3">SIGNAL Premier</option>
                                <option value="4">SIGNAL Family</option>
                                <option value="5">SIGNAL i-Family</option>
                                <option value="6">SIGNAL i-Life</option>
                            </select>
                            <div class="invalid-feedback">Please Choose a plan</div>
                        </div>
                        <div class="input--group mt-3">
                            <textarea class="form-control" name="message" id="message" placeholder="Your Message" required></textarea>
                            <div class="invalid-feedback">Message is required</div>
                        </div>
                        <div class="input--group btn--wrapper mt-5">
                            <button type="submit" class="button btn-contact">Send Message</button>
                        </div>
                    </form>
                </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="Partnership--area">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="row">
                  <div class="col-lg-6 mt_30">
                    <div class="partnership--text">
                      <h4 class="tag-box">Collaborative Safeguarding</h4>
                      <h3 class="sub--heading">
                        Empowering Partnerships with Telco, Insurance and
                        Takaful Providers
                      </h3>
                      <p>
                        Pioneering Telco-Infused Insurance & Takaful Solutions
                        for Comprehensive Coverage
                      </p>
                      <div class="img--area text-center">
                        <img
                          class="w-100"
                          src="https://mysignal.netlify.app/assets/images/partnership.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="partner--logo">
                      <div class="row">
                        <div class="col-sm-6 mt_30">
                          <div class="partner--box card--default">
                            <img
                              class="w-100"
                              src="https://mysignal.netlify.app/assets/images/partner1.png"
                              alt="allianz"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 mt_30">
                          <div class="partner--box card--default">
                            <img
                              class="w-100"
                              src="https://mysignal.netlify.app/assets/images/partner5.png"
                              alt="Berjaya sompo insurance"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 mt_30">
                          <div class="partner--box card--default">
                            <img
                              class="w-100"
                              src="https://mysignal.netlify.app/assets/images/partner2.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 mt_30 partner--blank"></div>
                        <div class="col-sm-6 mt_30">
                          <div class="partner--box card--default">
                            <img
                              class="w-100"
                              src="https://mysignal.netlify.app/assets/images/partner3.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 mt_30">
                          <div class="partner--box card--default">
                            <img
                              class="w-100"
                              src="https://mysignal.netlify.app/assets/images/partner4.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="connect--area"
          style={{
            backgroundImage: backgroundImageUrl3,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-9 col-md-11">
                <div class="row justify-content-center">
                  <div class="col-lg-5 mt_30 order-sm-2">
                    <div class="img--area">
                      <img
                        src="https://mysignal.netlify.app/assets/images/connect.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-7 mt_30 order-sm-1">
                    <div class="connect--text">
                      <h4 class="tag-box">Get in Touch</h4>
                      <h3 class="sub--heading">
                        Connect with Our Dedicated Team
                      </h3>
                      <p>
                        Reach Out for Support, Inquiries, Collaborations, or to
                        Explore Tailored Solutions for Your Insurance and
                        Takaful Needs. Our Experts Await to Assist You in
                        Securing Comprehensive Protection.
                      </p>
                      <div class="connect--box card--default">
                        <p>
                          <img
                            src="https://mysignal.netlify.app/assets/images/signal.svg"
                            alt=""
                          />
                          MySignal Marketing Sdn Bhd [201901003462 / 1312788 –
                          U]
                        </p>
                        <p class="mt_15">
                          <img
                            src="https://mysignal.netlify.app/assets/images/location.svg"
                            alt=""
                          />
                          A-15-1, Block A, JayaONE 72A Jalan Prof. Diraja Ungku
                          Aziz 46200 Petaling Jaya, Selangor Darul Ehsan,
                          Malaysia
                        </p>
                        <a
                          class="mt_15 d-inline-block"
                          href="mailto:enquiry@mysignal.com.my"
                        >
                          <img
                            src="https://mysignal.netlify.app/assets/images/email.svg"
                            alt=""
                          />
                          enquiry@mysignal.com.my
                        </a>
                        <p class="mt_15">
                          <img
                            src="https://mysignal.netlify.app/assets/images/phone.svg"
                            alt=""
                          />
                          +603 2779 2419
                        </p>
                      </div>
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

export default Home;
