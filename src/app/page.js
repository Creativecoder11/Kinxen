import InteractiveGradient from "@/components/InteractiveGradient/InteractiveGradient";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav>
        <div className="">
          <Image
            src="/kinxenwhitelogo.svg"
            alt="Kinxen Logo"
            width={220}
            height={40}
            className="main-logo"
          />
        </div>
      </nav>

      <section className="hero">
        <InteractiveGradient />

        {/* you can customize the gradient by passing below props: we can handle this  */}
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
          {/* <img src="/logo_01.png" alt="Orbit Studio Logo" /> */}
          <p className="header-line">We’re Building Something New</p>
        </div>
        <div className="hero-footer">
          <p className="footer-link">
            <Link
              href="mailto:kinxen.official@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect US
            </Link>
          </p>

          <p className="footer-link">
            <Link
              href="https://www.facebook.com/people/Kinxen/61586421020099/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Link>
          </p>

          <p className="footer-link">
            <Link
              href="https://www.instagram.com/kinxenbd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </p>

          <p className="footer-link">
            <Link
              href="https://www.tiktok.com/@kinxenbd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tiktok
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
