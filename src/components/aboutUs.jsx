import "./aboutUs.css";
export default function AboutUs() {
  return (
    <div className="aboutUsSection">
      <div className="aboutUsDetails">
        <img
          className="aboutUsDetailsPic"
          width={1000}
          src="/aboutUs.png"
          alt="about"
        />
        <div className="aboutUsBlog">
          <h1 className="aboutUsTitle">About Masahati App</h1>
          <p>
            Masahati is a user-friendly app designed to streamline the process
            of booking appointments with psychologists. With Masahati, users can
            easily browse through a list of licensed psychologists, read
            detailed profiles, and select the best fit for their needs. The app
            offers a convenient scheduling feature that allows users to book
            appointments at times that work best for them. Additionally,
            Masahati provides secure communication channels, ensuring that all
            interactions between users and psychologists remain confidential.
            Whether you&apos;re seeking therapy for mental health issues, personal
            development, or simply need someone to talk to, Masahati makes
            accessing professional psychological support simple and efficient.
          </p>
        </div>
      </div>
    </div>
  );
}
