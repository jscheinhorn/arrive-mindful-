import React from 'react'
import Banner from './Banner'

function Contact() {
  return (
    <>
      <Banner
        background={
          'https://images.unsplash.com/photo-1528319355578-ebbbc586afac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
        }
        header={'Contact Veronica'}
        detail={<div>Inquiries &#8226; Requests &#8226; Comments </div>}
        textColor={'white'}
      />
      <section class="ftco-section contact-section ftco-no-pt ftco-no-pb">
        <div class="container">
          <div class="row block-9">
            <div class="col-md-4 contact-info ftco-animate p-4 w-100 py-md-5">
              <div class="row">
                <div class="col-md-12 mb-4">
                  <h2>Contact Information</h2>
                </div>
                <div class="col-md-12 mb-3">
                  <p>
                    <span>Address:</span> 198 West 21th Street, Suite 721 New
                    York NY 10016
                  </p>
                </div>
                <div class="col-md-12 mb-3">
                  <p>
                    <span>Phone:</span>{' '}
                    <a href="tel://1234567920">+ 1235 2355 98</a>
                  </p>
                </div>
                <div class="col-md-12 mb-3">
                  <p>
                    <span>Email:</span>{' '}
                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </p>
                </div>
                <div class="col-md-12 mb-3">
                  <p>
                    <span>Website:</span> <a href="#">yoursite.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-1 py-4 py-md-5"></div>
            <div class="col-md-6 ftco-animate py-md-5">
              <form action="#" class="contact-form">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    class="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <div id="map" class="map"></div> */}
    </>
  );
}

export default Contact