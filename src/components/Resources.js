import React from 'react';
import Banner from './Banner';

function Resources(props) {
  return (
    <>
      {props.banner ? (
        <Banner
          background={
            'https://images.unsplash.com/photo-1598618589821-f031d29a366f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
          }
          header={'Resources'}
          overlay={true}
          textColor={'white'}
          // detail={''}
        />
      ) : null}
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ftco-animate">
              <div className="text bg-white p-4 ftco-animate">
                <h1 className="display-4">Readings and Resources Links</h1>
                <h2 className="mb-1">Audible Books</h2>
                <ul>
                  <li>
                    <a href="https://www.audible.com/pd/Surviving-Death-Audiobook/B06WP77G8D?asin=B06WP77G8D&source_code=ASSORAP0511160006">
                      Surviving Death
                    </a>
                  </li>
                  <li>
                    <a href="https://www.audible.com/pd/Yamas-Niyamas-Audiobook/B079K412PS?asin=B079K412PS&source_code=ASSORAP0511160006">
                      Yamas and Niyamas
                    </a>
                  </li>
                  <li>
                    <a href="https://www.audible.com/pd/Night-Bloomers-Audiobook/1624617476?asin=1624617476&source_code=ASSORAP0511160006">
                      Night Bloomers
                    </a>
                  </li>
                  <li>
                    <a href="https://www.audible.com/pd/Learned-Hopefulness-Audiobook/1705297064?asin=1705297064&source_code=ASSORAP0511160006">
                      Learned Hopefulness
                    </a>
                  </li>
                  <li>
                    <a href="https://www.audible.com/pd/Manifest-Your-Destiny-Audiobook/B002UZMSR6?asin=B002UZMSR6&source_code=ASSORAP0511160006">
                      Manifest Your Destiny
                    </a>
                  </li>
                  <li>
                    <a href="https://www.audible.com/pd?asin=B002V1M680&source_code=ASSORAP0511160006">
                      The Bhagavad Gita, translated by Barbara Stoler-Miller
                    </a>
                  </li>
                  <li>
                    <a href="https://www.audible.com/pd?asin=B002V01ATC&source_code=ASSORAP0511160006">
                      The Ultimate Dimension by Thich Nhat Hanh
                    </a>
                  </li>
                  <li>
                    <a href="https://www.audible.com/pd?asin=B004GMOPFO&source_code=ASSORAP0511160006">
                      The Art of Possibility by Rosamund Stone Zander, Benjamin
                      Zander
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resources;
