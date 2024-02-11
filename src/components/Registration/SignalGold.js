import React from "react";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion'

const SignalGold = () => {
    const backgroundImageUrl =
    "url(https://i.postimg.cc/wjY7r7PX/background-hero.png)";
  return (
    <div>
      <main>
        <section
          class="inner--hero registration-hero single--life--registration"
          style={{
            backgroundImage: backgroundImageUrl,
          }}
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-12">
                <div class="inner--text">
                  <h4 class="tag-box">
                    Revolutionizing Your Mobile Experience
                  </h4>
                  <h3 class="heading">
                    Join the Future of Connectivity with MYSIGNAL
                  </h3>
                  <p>
                    Seamless Registration for Telco-Infused Insurance and
                    Takaful Plan - Empowering Your Mobile Experience.
                  </p>
                  <div class="go--back">
                    <a href="index.html" class="button">
                      <img src="assets/images/chevron-left.svg" alt="" />
                      <Link to='/'><span>Go back</span></Link>
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="singlelife--registration singlegold--registration">
          <div class="container">
            <div class="section--title">
              <h3>SIGNAL Gold Registration</h3>
              <p>
                SIGNAL Gold is a customised SIGNAL Plan developed exclusively
                for Senior Members of our society, offering Lifestyle, Home &
                Personal Accident Insurance and Outpatient Clinical
                Reimbursement, paired with a SIM card with exceptional telco
                services
              </p>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-11 mt_30">
                <div class="benefit--box">
                  <h3>
                    <img src="https://mysignal.netlify.app/assets/images/gridicons_dropdown.svg" alt="" />
                    Benefits
                  </h3>
                  <form
                    action="#"
                    class="benfit--form needs-validation"
                    novalidate
                  >
                    <div class="benefit--tab--area mt_25">
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              <div class="benefit--accordion--title--wrapper">
                                <div class="insurance--title title--big">
                                  <p>INSURANCE BENEFITS</p>
                                </div>
                                <div class="single--life title--small">
                                  <p>SIGNAL Gold</p>
                                </div>
                                <div class="single--life title--small">
                                  <p>SIGNAL Gold Plus</p>
                                </div>
                              </div>
                              </Accordion.Header>
                              <Accordion.Body>
                              <div class="insurance--features--table table1">
                                <table class="insurance-table table1">
                                  <tbody>
                                    <tr>
                                      <th class="big--heading">
                                        Lifestyle Insurance
                                      </th>
                                      <th class="blank--heading"></th>
                                      <th class="rm--heading">RM</th>
                                      <th class="rm--heading">RM</th>
                                    </tr>
                                    <tr>
                                      <td
                                        data-th="Lifestyle Insurance"
                                        class="feature"
                                      >
                                        Snatch theft or attempted snatch theft
                                      </td>
                                      <td data-th="Upto" class="upto">
                                        Up to
                                      </td>
                                      <td data-th="RM" class="rm">
                                        400.00
                                      </td>
                                      <td data-th="RM" class="rm">
                                        600.00
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        data-th="Lifestyle Insurance"
                                        class="feature"
                                      >
                                        Online purchase protection
                                      </td>
                                      <td data-th="Upto" class="upto">
                                        Up to
                                      </td>
                                      <td data-th="RM" class="rm">
                                        800.00
                                      </td>
                                      <td data-th="RM" class="rm">
                                        1,200.00
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>

                                <table class="insurance-table table2">
                                  <tbody>
                                    <tr>
                                      <th class="big--heading">
                                        Home Care Insurance
                                      </th>
                                      <th class="blank--heading"></th>
                                      <th class="rm--heading">RM</th>
                                      <th class="rm--heading">RM</th>
                                    </tr>
                                    <tr>
                                      <td
                                        data-th="Home Care Insurance"
                                        class="feature"
                                      >
                                        Loss or damage to home contents due to
                                      </td>
                                      <td data-th="Upto" class="upto">
                                        Up to
                                      </td>
                                      <td data-th="RM" class="rm">
                                        2,000.00
                                      </td>
                                      <td data-th="RM" class="rm">
                                        3,000.00
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        data-th="Home Care Insurance"
                                        class="feature"
                                      >
                                        fire and/or burglary (forced entry)
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table class="insurance-table table1">
                                  <tbody>
                                    <tr>
                                      <th class="big--heading">
                                        Personal Accident Insurance
                                      </th>
                                      <th class="blank--heading"></th>
                                      <th class="rm--heading">RM</th>
                                      <th class="rm--heading">RM</th>
                                    </tr>
                                    <tr>
                                      <td
                                        data-th="Personal Accident Insurance"
                                        class="feature"
                                      >
                                        Accidental death or permanent
                                        disablement
                                      </td>
                                      <td data-th="Upto" class="upto">
                                        Up to
                                      </td>
                                      <td data-th="RM" class="rm">
                                        25,000.00
                                      </td>
                                      <td data-th="RM" class="rm">
                                        50,000.00
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        data-th="Personal Accident Insurance"
                                        class="feature"
                                      >
                                        Double indemnity on public occurrence
                                      </td>
                                      <td data-th="Upto" class="upto">
                                        Up to
                                      </td>
                                      <td data-th="RM" class="rm">
                                        50,000.00
                                      </td>
                                      <td data-th="RM" class="rm">
                                        100,000.00
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        data-th="Personal Accident Insurance"
                                        class="feature"
                                      >
                                        Hospital Income
                                      </td>
                                      <td data-th="Upto" class="upto"></td>
                                      <td data-th="RM" class="rm">
                                        50.00/day
                                      </td>
                                      <td data-th="RM" class="rm">
                                        100.00/day
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        data-th="Personal Accident Insurance"
                                        class="feature"
                                      >
                                        Nursing care (up to 7 days)
                                      </td>
                                      <td data-th="Upto" class="upto"></td>
                                      <td data-th="RM" class="rm">
                                        100.00
                                      </td>
                                      <td data-th="RM" class="rm">
                                        200.00
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        data-th="Personal Accident Insurance"
                                        class="feature"
                                      >
                                        Serious Burns
                                      </td>
                                      <td data-th="Upto" class="upto">
                                        Up to
                                      </td>
                                      <td data-th="RM" class="rm">
                                        1000.00
                                      </td>
                                      <td data-th="RM" class="rm">
                                        1000.00
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        data-th="Personal Accident Insurance"
                                        class="feature"
                                      >
                                        Fractures
                                      </td>
                                      <td data-th="Upto" class="upto">
                                        Up to
                                      </td>
                                      <td data-th="RM" class="rm">
                                        1000.00
                                      </td>
                                      <td data-th="RM" class="rm">
                                        1000.00
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        data-th="Personal Accident Insurance"
                                        class="feature"
                                      >
                                        Funeral expenses
                                      </td>
                                      <td data-th="Upto" class="upto"></td>
                                      <td data-th="RM" class="rm">
                                        2,000.00
                                      </td>
                                      <td data-th="RM" class="rm">
                                        3,000.00
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                        <div class="accordion-item telco">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              <div class="benefit--accordion--title--wrapper">
                                <div class="insurance--title title--big">
                                  <p>TELCO BENEFITS</p>
                                </div>
                                <div class="single--life title--small">
                                  <p>SIGNAL Gold & SIGNAL Gold Plus</p>
                                </div>
                              </div>
                              </Accordion.Header>
                              <Accordion.Body>
                              <div class="accordion-body">
                              <table class="insurance-table insurance-tablev2">
                                <tbody>
                                  <tr>
                                    <th class="big--heading"></th>
                                    <th class="rm--heading">DIGI</th>
                                    <th class="rm--heading">U mobile</th>
                                  </tr>
                                  <tr>
                                    <td data-th="Call" class="feature">
                                      Calls
                                    </td>
                                    <td data-th="RM" class="rm">
                                      Unlimited
                                    </td>
                                    <td data-th="RM" class="rm">
                                      Unlimited
                                    </td>
                                  </tr>
                                  <tr>
                                    <td data-th="Data" class="feature">
                                      Data
                                    </td>
                                    <td data-th="RM" class="rm">
                                      20GB
                                    </td>
                                    <td data-th="RM" class="rm">
                                      60GB
                                    </td>
                                  </tr>
                                  <tr>
                                    <td data-th="SMS" class="feature">
                                      SMS
                                    </td>
                                    <td data-th="RM" class="rm">
                                      300
                                    </td>
                                    <td data-th="RM" class="rm">
                                      n/a
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                        <div class="accordion-item item3">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              <div class="benefit--accordion--title--wrapper">
                                <div class="insurance--title title--big">
                                  <p>REIMBURSEMENT BENEFIT</p>
                                </div>
                                <div class="single--life title--small">
                                  <p>SIGNAL Gold</p>
                                </div>
                                <div class="single--life title--small">
                                  <p>SIGNAL Gold Plus</p>
                                </div>
                              </div>
                              </Accordion.Header>
                              <Accordion.Body>
                              <div class="accordion-body">
                              <table class="insurance-table insurance-tablev3">
                                <tbody>
                                  <tr>
                                    <td class="feature">
                                      Outpatient clinical coverage (incl.
                                      pharmaceutical supplies)
                                    </td>
                                    <td class="rm">Based on 4x visit</td>
                                    <td class="rm">Based on 4x visit</td>
                                  </tr>
                                  <tr>
                                    <td class="feature">
                                      50% reimbursement of outpatient clinical &
                                      pharmaceutical charges
                                    </td>
                                    <td class="rm">@ RM60.00 per visit</td>
                                    <td class="rm">@ RM100.00 per visit</td>
                                  </tr>
                                </tbody>
                              </table>
                              <div class="bottom--text">
                                <p class="mt_5 mb_5">
                                  [subject to maximum of 1 visit every 3 months]
                                </p>
                              </div>
                            </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                    </div>
                    <div class="documents--upload--wrapper mt-5">
                      <div class="row">
                        <div class="col-lg-4 col-sm-6 mt_20">
                          <div class="upload--box">
                            <input type="file" id="policy-document" />
                            <label for="policy-document">
                              Policy Document
                              <img src="https://mysignal.netlify.app/assets/images/download.svg" alt="" />
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 mt_20">
                          <div class="upload--box">
                            <input type="file" id="product" />
                            <label for="product">
                              Product Disclosure Sheet (PDS)
                              <img src="https://mysignal.netlify.app/assets/images/download.svg" alt="" />
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 mt_20">
                          <div class="upload--box">
                            <input type="file" id="terms" />
                            <label for="terms">
                              Terms & Conditions
                              <img src="https://mysignal.netlify.app/assets/images/download.svg" alt="" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="eligibility--box--wrapper mt-5">
                      <h3>Eligibility</h3>
                      <div class="eligibility--box radio--box--default card--default row">
                        <div class="adult--select--box col-12 col-sm-12 col-md-12 col-lg-6 mx-auto">
                          <h4>Are you between 60-80 years old currently?</h4>
                          <div class="input--group">
                            <input
                              type="radio"
                              id="adult-yes"
                              name="adult-check-group"
                              value="adult-yes"
                              checked
                            />
                            <label for="adult-yes">Yes</label>
                          </div>
                          <div class="input--group">
                            <input
                              type="radio"
                              id="adult-no"
                              name="adult-check-group"
                              value="adult-no"
                            />
                            <label for="adult-no">No</label>
                          </div>
                          <p class="eligibility--hidden--text">
                            (We are sorry. You need to be between 60-80 years
                            old to register for this plan)
                          </p>
                        </div>
                        <div class="nationality--select--box col-12 col-sm-12 col-md-12 col-lg-6 mx-auto">
                          <h4>Select your nationality status</h4>
                          <div class="input--group">
                            <input
                              type="radio"
                              id="malaysian"
                              name="nationality--group"
                              value="1"
                              checked
                            />
                            <label for="malaysian">Malaysian</label>
                          </div>
                          <div class="input--group">
                            <input
                              type="radio"
                              id="non-malaysian"
                              name="nationality--group"
                              value="2"
                            />
                            <label for="non-malaysian">
                              Non-Malaysian (legally residing, studying or
                              working in Malaysia)
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="eligibility--hidden--items">
                      <div class="plan--box--wrapper radio--box--default mt-5">
                        <h3>Plans</h3>
                        <div class="plan--box card--default">
                          <div class="select--plan">
                            <h4>Select Plan</h4>
                            <div class="plan--option row">
                              <div class="input--group col-12 col-sm-12 col-md-12 col-lg-6 mx-auto">
                                <input
                                  type="radio"
                                  id="single-life"
                                  name="plan--group"
                                  checked
                                />
                                <label for="single-life">
                                  <p>SIGNAL Gold</p>
                                  <span>RM58.00/Month</span>
                                </label>
                              </div>
                              <div class="input--group col-12 col-sm-12 col-md-12 col-lg-6 mx-auto">
                                <input
                                  type="radio"
                                  id="single-life-plus"
                                  name="plan--group"
                                />
                                <label for="single-life-plus">
                                  <p>SIGNAL Gold Plus</p>
                                  <span>RM68.00/Month</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="plan--box telco--service mt-5">
                            <div class="select--plan">
                              <h4>Select Telco Service Provider</h4>
                              <div class="plan--option row">
                                <div class="input--group col-12 col-sm-12 col-md-12 col-lg-6 mx-auto">
                                  <input
                                    type="radio"
                                    id="digi"
                                    name="telco--group"
                                    value="digi"
                                    checked
                                  />
                                  <label for="digi">
                                    <p>DIGI</p>
                                  </label>
                                </div>
                                <div class="input--group col-12 col-sm-12 col-md-12 col-lg-6 mx-auto">
                                  <input
                                    type="radio"
                                    id="u-mobile"
                                    name="telco--group"
                                    value="u-mobile"
                                  />
                                  <label for="u-mobile">
                                    <p>U Mobile</p>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="select--purchase plan--box mt-5">
                            <div class="select--plan">
                              <h4>Select Purchase</h4>
                              <div class="plan--option">
                                <div class="input--group">
                                  <input
                                    type="radio"
                                    id="purchase1"
                                    value="purchase1"
                                    name="purchase--group"
                                  />
                                  <label for="purchase1">
                                    <p>
                                      Register for new Mobile Number and Plan
                                      (with new SIM card)
                                    </p>
                                  </label>
                                </div>
                                <div class="input--group">
                                  <input
                                    type="radio"
                                    id="purchase2"
                                    value="purchase2"
                                    name="purchase--group"
                                    checked
                                  />
                                  <label for="purchase2">
                                    <p>
                                      Maintain and port existing Mobile Number
                                      (from any telco service providers
                                      excluding{" "}
                                      <sapn class="change--telco--text">
                                        DIGI
                                      </sapn>
                                      ) to new Plan
                                    </p>
                                  </label>
                                </div>
                                <div class="input--group">
                                  <input
                                    type="radio"
                                    id="purchase3"
                                    value="purchase3"
                                    name="purchase--group"
                                  />
                                  <label for="purchase3">
                                    <p>
                                      Maintain existing Mobile Number (from any
                                      telco service providers excluding{" "}
                                      <sapn class="change--telco--text">
                                        DIGI
                                      </sapn>
                                      ) and register for new Plan (with existing
                                      SIM card)
                                    </p>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="personal--details--wrapper mt-5">
                        <h3>Personal Details</h3>
                        <div class="personal--details--box card--default">
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="form--malaysian personal--info--box">
                                <h4>Malaysian</h4>
                                <div class="input--group">
                                  <input
                                    class="form-control"
                                    type="text"
                                    name="m-full-name"
                                    id="m-full-name"
                                    placeholder="Fullname as per NRIC"
                                    required
                                  />
                                  <div class="invalid-feedback">
                                    Full Name is required
                                  </div>
                                </div>
                                <div class="input--group">
                                  <input
                                    class="form-control"
                                    type="text"
                                    name="m-nric-number"
                                    id="m-nric-number"
                                    placeholder="NRIC Number"
                                    required
                                  />
                                  <div class="invalid-feedback">
                                    NRIC Number is required
                                  </div>
                                </div>
                                <div class="input--group">
                                  <input
                                    class="form-control"
                                    type="text"
                                    name="m-mobile-number"
                                    id="m-mobile-number"
                                    placeholder="Mobile Number [with prefix +601]"
                                    required
                                  />
                                  <div class="invalid-feedback">
                                    Mobile Number is required
                                  </div>
                                </div>
                                <div class="input--group">
                                  <input
                                    class="form-control"
                                    type="email"
                                    name="m-email"
                                    id="m-email"
                                    placeholder="Email"
                                    required
                                  />
                                  <div class="invalid-feedback">
                                    Email is required
                                  </div>
                                </div>
                                <div class="input--group">
                                  <input
                                    class="form-control"
                                    type="text"
                                    name="m-address"
                                    id="m-address"
                                    placeholder="Correspondence Address"
                                    required
                                  />
                                  <div class="invalid-feedback">
                                    Address is required
                                  </div>
                                </div>
                                <div class="input--group select--box">
                                  <select
                                    class="form-select"
                                    id="state"
                                    name="state"
                                    required
                                  >
                                    <option value="1" selected>
                                      Perlis
                                    </option>
                                    <option value="2">Kedah</option>
                                    <option value="3">Penang</option>
                                    <option value="4">Perak</option>
                                    <option value="5">Selangor</option>
                                    <option value="6">Negeri Sembilan</option>
                                    <option value="7">Malacca</option>
                                    <option value="8">Johor</option>
                                    <option value="9">Pahang</option>
                                    <option value="10">Kelantan</option>
                                    <option value="11">Terengganu</option>
                                    <option value="12">Sabah</option>
                                    <option value="13">Sarawak</option>
                                    <option value="14">Kuala Lumpur</option>
                                    <option value="15">Labuan</option>
                                    <option value="16">Putrajaya</option>
                                  </select>
                                  <div class="invalid-feedback">
                                    Please select a State
                                  </div>
                                </div>
                                <div class="input--group">
                                  <input
                                    class="form-control"
                                    type="text"
                                    name="m-postcode"
                                    id="m-postcode"
                                    placeholder="Postcode"
                                    required
                                  />
                                  <div class="invalid-feedback">
                                    Postcode is required
                                  </div>
                                </div>
                                <div class="input--group user-alt-location">
                                  <input
                                    type="checkbox"
                                    class="mt-0 form-check"
                                    name="m-location"
                                    id="m-locationCheck"
                                  />
                                  <label for="m-locationCheck">
                                    Clock here if your Location of Risk is the
                                    same as correspondence address.
                                  </label>
                                </div>

                                <div class="input--group">
                                  <input
                                    class="form-control"
                                    type="text"
                                    name="m-location-field"
                                    id="m-location-field"
                                    placeholder="Location of Risk (to state accurately for Home Care Insurance claim)"
                                    required
                                  />
                                </div>
                                <div class="input--group nric-upload upload--box mt-5">
                                  <input
                                    class="form-control"
                                    type="file"
                                    name="nric-upload"
                                    id="nric-upload"
                                    required
                                  />
                                  <label for="nric-upload">
                                    <img
                                      src="https://mysignal.netlify.app/assets/images/upload.svg"
                                      alt=""
                                    />
                                    <p>Upload NRIC [front and back]</p>
                                    <span>
                                      Format PDF, JPEG or PNG and file size must
                                      not exceed 500KB
                                    </span>
                                  </label>
                                  <div class="invalid-feedback">
                                    Please choose a file.
                                  </div>
                                </div>
                                <div class="input--group phone-bill-upload upload--box mt-5">
                                  <input
                                    class="form-control"
                                    type="file"
                                    name="phone-bill-upload"
                                    id="phone-bill-upload"
                                    required
                                  />
                                  <label for="phone-bill-upload">
                                    <img
                                      src="https://mysignal.netlify.app/assets/images/upload.svg"
                                      alt=""
                                    />
                                    <p>
                                      Upload latest phone statement (first page
                                      only)
                                    </p>
                                    <span>
                                      Format PDF, JPEG or PNG and file size must
                                      not exceed 500KB
                                    </span>
                                  </label>
                                  <div class="invalid-feedback">
                                    Please choose a file.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="form--non-malaysian personal--info--box">
                                <h4>Non-Malaysian</h4>
                                <div class="input--group">
                                  <input
                                    class="form-control"
                                    type="text"
                                    name="nm-full-name"
                                    id="nm-full-name"
                                    placeholder="Fullname as per Passport"
                                    disabled
                                    required
                                  />
                                  <div class="invalid-feedback">
                                    Full Name is required
                                  </div>
                                </div>
                                <div class="input--group">
                                  <input
                                    class="form-control"
                                    type="text"
                                    name="nm-pass-number"
                                    id="nm-pass-number"
                                    placeholder="Passport Number"
                                    disabled
                                    required
                                  />
                                  <div class="invalid-feedback">
                                    Passport is required
                                  </div>
                                </div>
                                <div class="input--group">
                                  <input
                                    class="form-control"
                                    type="text"
                                    name="nm-mobile-number"
                                    id="nm-mobile-number"
                                    placeholder="Mobile Number [with prefix +601]"
                                    disabled
                                    required
                                  />
                                  <div class="invalid-feedback">
                                    Mobile Number is required
                                  </div>
                                </div>
                                <div class="input--group">
                                  <input
                                    class="form-control"
                                    type="email"
                                    name="nm-email"
                                    id="nm-email"
                                    placeholder="Email"
                                    disabled
                                    required
                                  />
                                  <div class="invalid-feedback">
                                    Email is required
                                  </div>
                                </div>
                                <div class="input--group">
                                  <input
                                    class="form-control"
                                    type="text"
                                    name="nm-address"
                                    id="nm-address"
                                    placeholder="Correspondence Address"
                                    disabled
                                    required
                                  />
                                  <div class="invalid-feedback">
                                    Address is required
                                  </div>
                                </div>
                                <div class="input--group select--box">
                                  <select
                                    class="form-select"
                                    id="state"
                                    name="state"
                                    required
                                    disabled
                                  >
                                    <option value="1" selected>
                                      Perlis
                                    </option>
                                    <option value="2">Kedah</option>
                                    <option value="3">Penang</option>
                                    <option value="4">Perak</option>
                                    <option value="5">Selangor</option>
                                    <option value="6">Negeri Sembilan</option>
                                    <option value="7">Malacca</option>
                                    <option value="8">Johor</option>
                                    <option value="9">Pahang</option>
                                    <option value="10">Kelantan</option>
                                    <option value="11">Terengganu</option>
                                    <option value="12">Sabah</option>
                                    <option value="13">Sarawak</option>
                                    <option value="14">Kuala Lumpur</option>
                                    <option value="15">Labuan</option>
                                    <option value="16">Putrajaya</option>
                                  </select>
                                  <div class="invalid-feedback">
                                    Please select a State
                                  </div>
                                </div>
                                <div class="input--group">
                                  <input
                                    class="form-control"
                                    type="text"
                                    name="nm-postcode"
                                    id="nm-postcode"
                                    placeholder="Postcode"
                                    disabled
                                    required
                                  />
                                  <div class="invalid-feedback">
                                    Postcode is required
                                  </div>
                                </div>
                                <div class="input--group user-alt-location">
                                  <input
                                    type="checkbox"
                                    class="mt-0 form-check"
                                    name="m-location"
                                    id="m-locationCheck"
                                    disabled
                                  />
                                  <label for="m-locationCheck">
                                    Clock here if your Location of Risk is the
                                    same as correspondence address.
                                  </label>
                                </div>

                                <div class="input--group">
                                  <input
                                    class="form-control"
                                    type="text"
                                    name="m-location-field"
                                    id="m-location-field"
                                    placeholder="Location of Risk (to state accurately for Home Care Insurance claim)"
                                    required
                                    disabled
                                  />
                                </div>
                                <div class="input--group nationality select--box mt-5">
                                  <select
                                    class="form-select"
                                    id="nationality"
                                    name="nationality"
                                    required
                                    disabled
                                  >
                                    <option value="" selected>
                                      Nationality
                                    </option>
                                    <option value="1">Afghanistan</option>
                                    <option value="2">Albania</option>
                                    <option value="3">Algeria</option>
                                    <option value="4">Andorra</option>
                                    <option value="5">Angola</option>
                                    <option value="6">Argentina</option>
                                    <option value="7">Armenia</option>
                                    <option value="8">Australia</option>
                                    <option value="9">Austria</option>
                                    <option value="10">Azerbaijan</option>
                                    <option value="11">Bahrain</option>
                                    <option value="12">Bangladesh</option>
                                    <option value="13">Belgium</option>
                                    <option value="14">Benin</option>
                                    <option value="15">Bolivia</option>
                                    <option value="16">Brazil</option>
                                    <option value="17">Bulgaria</option>
                                    <option value="18">Cambodia</option>
                                    <option value="19">Cameroon</option>
                                    <option value="20">Canada</option>
                                    <option value="21">Chile</option>
                                    <option value="22">China</option>
                                    <option value="23">Colombia</option>
                                    <option value="24">Costa Rica</option>
                                    <option value="25">Croatia</option>
                                    <option value="26">Czech Republic</option>
                                    <option value="27">Denmark</option>
                                    <option value="28">
                                      Dominican Republic
                                    </option>
                                    <option value="29">Ecuador</option>
                                    <option value="30">Egypt</option>
                                    <option value="31">Estonia</option>
                                    <option value="32">Finland</option>
                                    <option value="33">France</option>
                                    <option value="34">Georgia</option>
                                    <option value="35">Germany</option>
                                    <option value="36">Greece</option>
                                    <option value="37">Guatemala</option>
                                    <option value="38">Honduras</option>
                                    <option value="39">Hungary</option>
                                    <option value="40">Iceland</option>
                                    <option value="41">India</option>
                                    <option value="42">Indonesia</option>
                                    <option value="43">Iran</option>
                                    <option value="44">Iraq</option>
                                    <option value="45">Ireland</option>
                                    <option value="46">Israel</option>
                                    <option value="47">Italy</option>
                                    <option value="48">Jamaica</option>
                                    <option value="49">Japan</option>
                                    <option value="50">Jordan</option>
                                    <option value="51">Kazakhstan</option>
                                    <option value="52">Kenya</option>
                                    <option value="53">Kuwait</option>
                                    <option value="54">Latvia</option>
                                    <option value="55">Lebanon</option>
                                    <option value="56">Lithuania</option>
                                    <option value="57">Luxembourg</option>
                                    <option value="58">Malaysia</option>
                                    <option value="59">Malta</option>
                                    <option value="60">Mexico</option>
                                    <option value="61">Moldova</option>
                                    <option value="62">Morocco</option>
                                    <option value="63">Netherlands</option>
                                    <option value="64">New Zealand</option>
                                    <option value="65">Nigeria</option>
                                    <option value="66">Norway</option>
                                    <option value="67">Pakistan</option>
                                    <option value="68">Panama</option>
                                    <option value="69">Paraguay</option>
                                    <option value="70">Peru</option>
                                    <option value="71">Philippines</option>
                                    <option value="72">Poland</option>
                                    <option value="73">Portugal</option>
                                    <option value="74">Qatar</option>
                                    <option value="75">Romania</option>
                                    <option value="76">Russia</option>
                                    <option value="77">Saudi Arabia</option>
                                    <option value="78">Serbia</option>
                                    <option value="79">Singapore</option>
                                    <option value="80">Slovakia</option>
                                    <option value="81">Slovenia</option>
                                    <option value="82">South Africa</option>
                                    <option value="83">South Korea</option>
                                    <option value="84">Spain</option>
                                    <option value="85">Sri Lanka</option>
                                    <option value="86">Sweden</option>
                                    <option value="87">Switzerland</option>
                                    <option value="88">Syria</option>
                                    <option value="89">Taiwan</option>
                                    <option value="90">Thailand</option>
                                    <option value="91">
                                      Trinidad and Tobago
                                    </option>
                                    <option value="92">Tunisia</option>
                                    <option value="93">Turkey</option>
                                    <option value="94">Uganda</option>
                                    <option value="95">Ukraine</option>
                                    <option value="96">
                                      United Arab Emirates
                                    </option>
                                    <option value="97">United Kingdom</option>
                                    <option value="98">United States</option>
                                    <option value="99">Uruguay</option>
                                    <option value="100">Venezuela</option>
                                  </select>
                                  <div class="invalid-feedback">
                                    Please select a Nationality
                                  </div>
                                </div>
                                <div class="input--group mt-5">
                                  <input
                                    class="form-control"
                                    type="date"
                                    name="nm-date"
                                    id="nm-date"
                                    placeholder="Date of birth [DD/MM/YYYY]"
                                    disabled
                                    required
                                  />
                                  <div class="invalid-feedback">
                                    Date of birth is required
                                  </div>
                                </div>
                                <div class="input--group gender mt-5">
                                  <h4>Gender</h4>
                                  <div class="gender--option radio--box--default">
                                    <div class="input--group">
                                      <input
                                        type="radio"
                                        id="male"
                                        name="gander--group"
                                        disabled
                                        checked
                                      />
                                      <label for="male">
                                        <p>Male</p>
                                      </label>
                                    </div>
                                    <div class="input--group">
                                      <input
                                        type="radio"
                                        id="female"
                                        name="gander--group"
                                        disabled
                                        checked
                                      />
                                      <label for="female">
                                        <p>Female</p>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div class="input--group phone-bill-upload upload--box mt-5">
                                  <input
                                    type="file"
                                    class="form-control"
                                    name="phone-bill-upload"
                                    id="non-nirc-upload"
                                    required
                                    disabled
                                  />
                                  <label for="non-nirc-upload">
                                    <img
                                      src="assets/images/upload.svg"
                                      alt=""
                                    />
                                    <p>
                                      Upload Passport (page with personal
                                      details and photo){" "}
                                    </p>
                                    <span>
                                      Format PDF, JPEG or PNG and file size must
                                      not exceed 500KB
                                    </span>
                                  </label>
                                  <div class="invalid-feedback">
                                    Please choose a file.
                                  </div>
                                </div>
                                <div class="input--group phone-bill-upload upload--box mt-5">
                                  <input
                                    type="file"
                                    class="form-control"
                                    name="phone-bill-upload"
                                    id="phone-bill-upload-non"
                                    required
                                    disabled
                                  />
                                  <label for="phone-bill-upload-non">
                                    <img
                                      src="assets/images/upload.svg"
                                      alt=""
                                    />
                                    <p>
                                      Upload latest phone statement (first page
                                      only)
                                    </p>
                                    <span>
                                      Format PDF, JPEG or PNG and file size must
                                      not exceed 500KB
                                    </span>
                                  </label>
                                  <div class="invalid-feedback">
                                    Please choose a file.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="aggrement--box card--default mt-5">
                        <div class="input--group">
                          <input
                            type="checkbox"
                            name="marketing--aggrement"
                            id="marketing--aggrement"
                          />
                          <label for="marketing--aggrement">
                            I hereby agree the registration and ownership of my
                            mobile number will be held by MySignal Marketing Sdn
                            Bhd (company registration no.: 201901003462 /
                            1312788-U).
                          </label>
                        </div>
                        <div class="input--group mt-5">
                          <input
                            type="checkbox"
                            name="terms--aggrement"
                            id="terms--aggrement"
                          />
                          <label for="terms--aggrement">
                            I hereby agree and accept the governing Terms and
                            Conditions and to be bound by the terms of the same
                            and such additional terms as may be set out in the
                            Policy and/or the certificate of insurance issued
                            for SIGNAL plan.
                          </label>
                        </div>
                      </div>
                      <div class="benefit--submit--btn mt-5">
                        <button type="submit" class="button">
                          Confirm
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignalGold;
