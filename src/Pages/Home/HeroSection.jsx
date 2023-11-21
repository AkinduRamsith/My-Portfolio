export default function HeroSection() {
  return <section id="heroSection" className="hero--section">
    <div className="hero--section--content--box">
    <div className="hero--section-content">
        <p className="section--title">
            Hey, I'm Akindu
        </p>
        <h1 className="hero--section--title">
            <span className="hero--section-title-color">
                FullStack
            </span>{" "}
            <br />
            Developer
        </h1>
        <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor inventore possimus asperiores. Ut, odit.
            <br />
            Cumque blanditiis praesentium tenetur porro iste.
        </p>
    </div>
    <button className="btn btn-primary">Get In Touch</button>
    </div>
    <div className="hero--section--img">
        <img src="../img/hero.png" className="" alt="Hero Section"/>
    </div>
  </section>;
}
