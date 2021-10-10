import React from 'react'
import Banner from './Banner'

function Blog() {
  return (
    <>
      <Banner
        background={
          'https://images.unsplash.com/photo-1496395650962-374cae58ca8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2852&q=80'
        }
        header={'Blog'}
        detail={'Meditations and Ruminations'}
        textColor={'white'}
      />
      <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ftco-animate">
          	<div className="row">
	          	<div className="col-md-12 d-flex ftco-animate">
		          	<div className="blog-entry blog-entry-2 justify-content-end d-md-flex w-100">
		              <a href="blog/1" className="block-20" style={{backgroundImage: 'url(https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2551&q=80)'}}>
		              </a>
		              <div className="text pl-md-4 ml-md-2 pt-4">
		              	<div className="meta">
		                  <div><a href="#">October 17, 2018</a></div>
		                  <div><a href="#">Veronica Rose</a></div>
		                  {/* <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div> */}
		                </div>
		                <h3 className="heading mt-2"><a href="blog/1">Five ways to bring mindfulness into your day.</a></h3>
		                <p>In recent years there’s been a lot of talk about mindfulness and its multiple health benefits. Studies have shown that practicing mindfulness can decrease stress and improve mood, but what is mindfulness, and how can we attain it? Mindfulness is not complicated or illusive at all. It is an innate ability we all have...</p>
		                <p><a href="blog/1" className="btn btn-outline-primary">Continue reading</a></p>
		              </div>
		            </div>
		          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Blog
