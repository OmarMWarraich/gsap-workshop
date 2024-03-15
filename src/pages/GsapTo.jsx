import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  // TODO: Implement the gsap.to() method
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "elastic",
      delay: 2,
      stagger: 0.5,
      opacity: 0.5,
      scale: 0.5,
      transformOrigin: "center center",
      borderRadius: "50%",
      backgroundColor: "red",
      border: "1px solid black",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      onComplete: () => {
        console.log("Animation completed!");
      },
      onStart: () => {
        console.log("Animation started!");
      },
      onUpdate: () => {
        console.log("Animation updated!");
      },
      onReverseComplete: () => {
        console.log("Animation reversed!");
      },
      onRepeat: () => {
        console.log("Animation repeated!");
      },
    })
  }, []);

  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
