import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Timeline, Tween } from "react-gsap"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <main className="firs">
      <div className="card_mother_container">
        <div className="card_container">
          <img
            className="card three"
            data-key={0}
            src="https://images.unsplash.com/photo-1639844814983-285c7588a0e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=444&q=80"
            alt="woman"
          />
          <img
            data-key={2}
            className="card two"
            src="https://images.unsplash.com/photo-1554061841-a222f6258874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="woman"
          />
          <Tween
            from={{
              position: "fixed",
              transform: "rotate(0deg)",
              width: "130vw",
              transformOrigin: "50%",
              height: "120vh",
              backgroundRepeat: "no-repeat",
              margin: "0px",
            }}
            duration={0.6}
            ease="back.out(1.2)"
            delay={1.8}
          >
            <img
              data-key={1}
              className="card one"
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
              alt="woman"
            />
          </Tween>
        </div>
      </div>
      {/* <Button primary={true} className="index" /> */}
      <div className="hero_container">
        <Tween
          from={{ y: "5%", opacity: 0 }}
          delay={0.8}
          stagger={0.1}
          duration={1}
        >
          <div className="hero_flex hero_one">
            <h2>
              <span className="first_text">streetwear is the</span>
            </h2>
            {/* <Button primary={false} /> */}
          </div>
          <div className="hero_flex hero_two">
            <div className="over_hidden">
              {/* <p className="hero_text text">
                welcome to the age of streetwear brands, tracksuits and trainers
                are new suits and brogues. we offer you the best of them
              </p> */}
            </div>
            <h2>
              <span className="third">new casual</span>
            </h2>
          </div>
        </Tween>
      </div>
    </main>
  </Layout>
)

export default IndexPage
