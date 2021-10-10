import React from 'react';
import Banner from './Banner';
import YogaBenefits from './YogaBenefits';

function YogaPhilosophy() {
  return (
    <>
      <Banner
        background={
          'https://images.unsplash.com/photo-1620662831351-9f68f76d0b9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
        header={'Yoga Philosophy'}
        // detail={'Meditations and Ruminations'}
        textColor={'white'}
      />

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ftco-animate">
              <div className="text bg-white p-4 ftco-animate">
                <h1 className="display-4">Yoga Philosophy Overview</h1>
                <p>
                  Yoga is more than a practice of body postures, stretching, and
                  relaxation techniques. While the practice can be a wonderful
                  way to enhance one’s physical well-being, yoga encompasses far
                  more. There are eight limbs of yoga in it’s origin, of which
                  asana is the third element of practice. Yoga, in Sanskrit,
                  means “yoke” or “union,” referring to the integration or
                  alignment of all aspects of being. These aspects are also
                  known as sheaths or koshas in Sanskrit. These constitute the
                  body, breath, mind, consciousness and witness consciousness or
                  pure observer. We will go into these in greater detail later,
                  yet it is worth noting that each limb of yoga is intended to
                  be practiced in consort with the seven others with the aim of
                  uniting these layers of being to achieve moksha or
                  enlightenment.
                </p>
                <YogaBenefits />
                <h2 className="display-5">More on Yama and Niyama</h2>
                <h2 className="mb-3 mt-5">Yama</h2>
                <p>
                  <ul>
                    <li>Ahimsa – non-violence</li>
                    <li>
                      Satya – truthfulness
                      <ul>
                        Four gates to right speech:
                        <li>Is it true?</li>
                        <li>Is it useful?</li>
                        <li>Is it kind?</li>
                        <li>Is it necessary?</li>
                      </ul>
                    </li>
                    <li>Asteya – non-stealing</li>
                    <li>
                      Brahmacharya – walking with God, riding in the divine
                      chariot, non-excess, simple living
                    </li>
                    <li>
                      Aparigraha – non-attachment, non-clinging, non-grasping
                    </li>
                  </ul>
                </p>
                <h2 className="mb-3 mt-5">Niyama</h2>
                <p>
                  <ul>
                    <li>Saucha – purity, cleanliness</li>
                    <li>
                      Santosha – practicing contentment, recognizing what is
                      already present, gratitude
                    </li>
                    <li>Tapas – self-discipline</li>
                    <li>Svadhyaya – self-study</li>
                    <li>Ishvara pranidhana – graceful surrender</li>
                  </ul>
                </p>
              </div>
            </div>
            {/* <div className="col-lg-4 sidebar ftco-animate">
            <div className="sidebar-box ftco-animate">
              <h3 className="heading-2"><a href="/blog">Recent Blog Posts</a></h3>
              <div className="block-21 mb-4 d-flex">
                <a className="blog-img mr-4" style={{backgroundImage: "url(https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2551&q=80"}} href="//blog/1"></a>
                <div className="text">
                  <h3 className="heading"><a href="/blog/1">Five ways to bring mindfulness into your day.</a></h3>
                  <div className="meta">
                    <div><span className="icon-calendar"></span> October 17, 2018</div>
                    <div><a href="/about"><span className="icon-person"></span> Veronica Rose</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default YogaPhilosophy;
