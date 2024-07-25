import ReactPlayer from "react-player";
import "./hero.css";

export default function Hero() {
  return (
    <div className="heroSection">
      <div className="hero">
        <div className="heroApprev">
          <h2 className="aboutTitle">You health is our Responsibility</h2>
          <p className="aboutBody">
            Our app, MindEase, offers a comprehensive solution for mental health
            support. Designed to provide accessible and affordable therapy,
            MindEase connects users with licensed therapists for virtual
            sessions, ensuring professional help is always within reach. The app
            features cognitive-behavioral therapy (CBT) tools, mindfulness
            exercises, and personalized mental health plans to cater to
            individual needs.
          </p>
          <div className="downloadButtons">
            <img width={190} height={50} src="/appStore.png" alt="appStore" />
            <img width={190} height={50} src="/playStore.png" alt="appStore" />
          </div>
        </div>
        <div className="heroVedio">
          <ReactPlayer
            className="phoneAppVideo"
            url="/MasahatiVedio.mp4"
            playing={true}
            loop={true}
            muted={true}
            // controls={true}
            width="100%"
            height="80vh"
          />
          {/* <video
            className="phoneAppVideo"
            src="/MasahatiVedio.mp4.png"
            alt="phoneapp"
          /> */}
        </div>
      </div>
    </div>
  );
}
