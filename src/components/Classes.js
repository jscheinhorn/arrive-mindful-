/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import Banner from './Banner';

function Classes() {
  // NOTE: You cannot hover over a hidden element. One solution is to nest the element inside another container:
  const setHover = (event) => {
    let setTarget = event.target.querySelector('h3') || event.target;
    setTarget.style.visibility = 'visible';
  };
  const removeHover = (event) => {
    let removeTarget = event.target.querySelector('h3') || event.target;
    removeTarget.style.visibility = 'hidden';
  };
  const [classList, setClassList] = useState([
    {
      title: 'Introductory Yoga',
      description:
        'Yoga is for everyone. We love to empower people of all abilities to explore the spirit-mind-body connection through practice that makes the most sense for them. Book a beginners class or private session with us to start your journey towards a more mindful and fulfilling life!',
      backgroundImage:
        'https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    },
    {
      title: 'Moderate Yoga',
      description:
        'This class will help those with some yoga experience deepen their practice in a supportive environment. We will guide you to explore new postures, breath techniques, and more prolonged meditation to encourage growth and expansion.',
      backgroundImage:
        'https://images.unsplash.com/photo-1518310952931-b1de897abd40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80',
    },
    {
      title: 'Vigorous Flow',
      description:
        'This class is best for yogis who have been practicing for some time and want to challenge themselves to build strength, power, and endurance. All of our classes emphasize consistent attention to mindfulness, breath awareness, and integration throughout as yoga is the practice of uniting body, breath, mind, and spirit.',
      backgroundImage: 'images/classes-7.jpg',
    },
    {
      title: 'Meditation',
      description:
        'All yoga classes place a strong emphasis on mindfulness with meditations at both the open and close of each class. However, for those who would like to deepen their meditation practice, inquire about our guided meditation sessions. We will meet you wherever you are in your practice. We want to make meditation accessible to all and a joy to explore.',
      backgroundImage:
        'https://images.unsplash.com/photo-1510034141778-a4d065653d92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    },
    {
      title: 'Inclusive Yoga',
      description:
        'This class is designed to accommodate the non-traditional yogi. We offer a rotation of classes aimed to celebrate a variety of different abilities including yoga for blind or low vision individuals, persons in a wheelchair, silent yoga for the deaf and yoga for people of all ages.',
      backgroundImage:
        'https://images.unsplash.com/photo-1534030819-e584013b0531?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80',
    },
  ]);
  return (
    <>
      <Banner
        background={
          'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80'
        }
        header={'Classes'}
        detail={'Remote and In Person • Private and Group Lessons'}
        textColor={'white'}
      />

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            {classList.map((classItem) => (
              <div className="col-md-6" key={classItem.title}>
                <div className="classes w-100 ftco-animate">
                  <a
                    href="/contact"
                    className="img w-100 mb-3"
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${classItem.backgroundImage})`,
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                      onMouseEnter={(e) => setHover(e)}
                      onMouseLeave={(e) => removeHover(e)}
                    >
                      <h3
                        id="hover-item"
                        className="text w-100 text-center"
                        style={{
                          height: '100%',
                          width: '100%',
                          backgroundColor: 'rgba(0, 0, 0, 0.4)',
                          textAlign: 'center',
                          padding: '30%',
                          color: '#ffb5b5',
                          visibility: 'hidden',
                        }}
                      >
                        Schedule a class
                      </h3>
                    </div>
                  </a>
                  <div className="text w-100 text-center">
                    <h3>
                      <a href="/contact">{classItem.title}</a>
                    </h3>
                    <p>{classItem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Classes;
