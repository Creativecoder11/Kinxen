import InteractiveGradient from "@/components/InteractiveGradient/InteractiveGradient";

export default function Home() {
  return (
    <>
      <nav>
        <div className="logo">
          <p>Kinxen</p>
        </div>
        <div className="nav-items">
          <p>We are </p>
        </div>
      </nav>

      <section className="hero">
        <InteractiveGradient />
        {/* you can customize the gradient by passing below props: */}
        {/* <InteractiveGradient
              brushSize={25.0}
              brushStrength={0.5}
              distortionAmount={2.5}
              fluidDecay={0.98}
              trailLength={0.8}
              stopDecay={0.85}
              color1="#b8fff7"
              color2="#6e3466"
              color3="#0133ff"
              color4="#66d1fe"
              colorIntensity={1.0}
              softness={1.0}
            /> */}
        <div className="hero-logo">
          <img src="/logo_01.png" alt="Orbit Studio Logo" />
        </div>
        <div className="hero-footer">
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Tiktok</p>
          <p>Connect US</p>
        </div>
      </section>
    </>
  );
}
