import React from 'react'
import Banner from './Banner';

function About() {

  return (
    <>
      <Banner
        background={
          'https://images.unsplash.com/photo-1498612753354-772a30629934?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80'
        }
        header={'About Arrive Mindful'}
        detail={'A Yoga and Mindfulness Journey'}
        textColor={'white'}
      />

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex ftco-animate">
              <div className="coach align-items-stretch">
                <div className="text bg-white p-4 ftco-animate">
                  <h3 className="h3">What is Arrive Mindful?</h3>
                  <p>
                    Arrive Mindful started with the intention of empowering the
                    disempowered to manifest a life worth living. Through
                    mindfulness practices like yoga and meditation, we hope to
                    encourage a shedding of old stories to step more fully into
                    a life with purpose. We must first become conscious of
                    patterns that reinforce old wounds before we can hope to
                    shift into a more meaningful and joy-filled existence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex ftco-animate"></div>
            <div className="col-lg-4 d-flex ftco-animate">
              <div className="coach align-items-stretch">
                <div
                  className="img"
                  style={{ backgroundImage: 'url(/images/VStarYoga3.JPG)' }}
                ></div>
                <div className="text bg-white p-4 ftco-animate">
                  <span className="subheading">
                    Yoga Instructor / Mindfulness Coach
                  </span>
                  <h3>
                    <a href="#">Veronica Rose Stocker</a>
                  </h3>
                  <p>
                    Veronica Rose is a certified yoga instructor with training
                    from the Kripalu Institute in Lenox, MA and the Sacred Lasya
                    Vinyasa training held in Kerala, India. She is currently in
                    graduate school at Teachers College, Columbia University
                    studying spiritual psychology and the spirit-mind-body
                    connection. Veronica is visually impaired and has witnessed
                    first-hand how internalizing the stories we are told about
                    ourselves from society, or the stories we tell ourselves
                    from our past traumas can hold us back in profound and
                    crippling ways. Her life’s work has been to empower those
                    who have been disempowered by the life they were born into,
                    the trauma they have experienced, the disadvantage they step
                    into from a position of marginalization, or from ancestral
                    wounds transmitted intergenerationally. She believes in the
                    power of mindfulness to become more conscious of the
                    barriers that prevent us from living the life we want in
                    order to break them down and step into the possibilities
                    that stand on the other side. Veronica has a dream for each
                    of her clients, present and future. The purpose is to Arrive
                    Mindful, showing up fully to each moment of your life. The
                    journey is through yoga, meditation, and developing
                    conscious insight. The manifestation is an existence filled
                    with joy, possibility, and peace.
                  </p>
                  <ul className="ftco-social-media d-flex mt-4">
                    {/* <li className="ftco-animate">
                      <a
                        href="#"
                        className="mr-2 d-flex justify-content-center align-items-center"
                      >
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a
                        href="#"
                        className="mr-2 d-flex justify-content-center align-items-center"
                      >
                        <span className="icon-facebook"></span>
                      </a>
                    </li> */}
                    <li className="ftco-animate">
                      <a
                        target="_blank"
                        href="https://www.instagram.com/veronicaroseonup/"
                        className="mr-2 d-flex justify-content-center align-items-center"
                      >
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex ftco-animate"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About
