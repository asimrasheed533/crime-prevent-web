import React, { useRef } from "react";
import { useIsInViewport } from "../utils/useIsInViewport";
import CountUp from "react-countup";
import { Fade } from "react-reveal";

export function HomeStats() {
  const ref = useRef(null);
  useIsInViewport(ref);
  return (
    <section className="home__stats" ref={ref}>
      <div className="home__stats__content">
        <Fade bottom distance="30%">
          <div className="home__stats__content__entry">
            <div className="home__stats__content__entry__heading">
              <CountUp end={340} redraw={true} duration={2} />+
            </div>
            <div className="home__stats__content__entry__content">
              Users weekly registered
            </div>
          </div>
        </Fade>
        <Fade bottom distance="30%">
          <div className="home__stats__content__entry">
            <div className="home__stats__content__entry__heading">
              <CountUp end={39} redraw={true} duration={1} />+
            </div>
            <div className="home__stats__content__entry__content">
              Reports Solved monthly
            </div>
          </div>
        </Fade>
        <Fade bottom distance="30%">
          <div className="home__stats__content__entry">
            <div className="home__stats__content__entry__heading">
              <CountUp end={24} redraw={true} duration={1} />+
            </div>
            <div className="home__stats__content__entry__content">
              Officers on duty
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
