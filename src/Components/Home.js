import React from 'react';
import "./Home.css"
const Home = () => {
    return (
      <div>
        <main class="container">
          <section class="card-container">
            <header class="image-header">
              <img
                src="https://raw.githubusercontent.com/Jean-carje/nft-preview-card-component-main/main/images/image-equilibrium.jpg"
                alt="image equilibrium"
                class="image-main"
              />
              <div class="overlay"></div>
              <img
                src="https://raw.githubusercontent.com/Jean-carje/nft-preview-card-component-main/82a22800073516e524360d46b8bf4aafaa8d1283/images/icon-view.svg"
                alt=""
                class="view"
              />
            </header>
            <h1 class="tittle-card">Equilibrium By Sakib #3429</h1>

            <p class="text-card">
              Our Equilibrium collection promotes balance and calm.
            </p>

            <div class="items-card">
              <div class="left">
                <img
                  src="https://raw.githubusercontent.com/Jean-carje/nft-preview-card-component-main/82a22800073516e524360d46b8bf4aafaa8d1283/images/icon-ethereum.svg"
                  alt=""
                  class="img-item"
                />
                <spam class="eth">0.041 ETH</spam>
              </div>
              <div class="right">
                <img
                  src="https://raw.githubusercontent.com/Jean-carje/nft-preview-card-component-main/82a22800073516e524360d46b8bf4aafaa8d1283/images/icon-clock.svg"
                  alt=""
                  class="img-item"
                />
                <spam class="days">3 days left</spam>
              </div>
            </div>

            <footer class="creator-section">
              <img
                src="https://avatars.githubusercontent.com/u/66575135?s=400&u=4e316d2a8fd2ddd46d3cf94cdb25b86b4ebd081c&v=4"
                alt=""
                class="img-creator"
              />
              <p class="text-creator">
                Creation of
                <a href="https://github.com/Jean-carje" class="name-creator">
                  Akram Hossain
                </a>
              </p>
            </footer>
          </section>
        </main>

        <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Akram Sakib</a>.
        </div>
      </div>
    );
};

export default Home;