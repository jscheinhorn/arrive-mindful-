import React from 'react';
import Banner from './Banner';

function Video(props) {
  return (
    <>
      {props.banner ? (
        <Banner
          background={
            'https://images.unsplash.com/photo-1602404454048-b0243398564e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2514&q=80'
          }
          header={'Videos'}
          detail={'The Reel Deal'}
        />
      ) : null}
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <h2 className="mb-1">Stay tuned for upcoming video posts...</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Video;
