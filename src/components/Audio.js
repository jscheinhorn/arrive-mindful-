import React from 'react';
import Banner from './Banner';

function Audio() {
  return (
    <>
      <Banner
        background={
          'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
        }
        header={'Audio'}
        detail={'Take a sound bath'}
      />
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <h2 className="mb-1">
              Stay tuned for upcoming audio posts on the following topics:
            </h2>
            <ul>
              <li>Insight: Mindfulness through the lens of blindness</li>
              <li>Guided Meditation</li>
              <li>Healing: Mindfulness in Healthcare</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Audio;
