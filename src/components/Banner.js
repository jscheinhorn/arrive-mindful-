import React from 'react'

function Banner(props) {
  let bannerContent = (
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
        <div className="col-md-9 ftco-animate text-center">
          <h1 className="mb-3 bread" style={{ color: props.textColor }}>
            {props.header}
          </h1>
          <p className="breadcrumbs">
            <span style={{ color: props.textColor }}>{props.detail}</span>
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: `url(${props.background})`,
          backgroundPosition: 'center',
        }}
        data-stellar-background-ratio="0.5"
      >
        {props.overlay ? (
          <div
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            {bannerContent}
          </div>
        ) : (
          bannerContent
        )}
      </section>
    </>
  );
}

export default Banner
