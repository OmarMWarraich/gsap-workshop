import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  // TODO: Implement the gsap.fromTo() method
  useGSAP(() => {
    gsap.fromTo("#red-box",{
      x: 0,
      rotation: 0,
      borderRadius: "0%",
      backgroundColor: "blue",
      border: "1px solid black",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      opacity: 1,
      scale: 1,
      transformOrigin: "center center",
      duration: 2,
      ease: "elastic",
      delay: 2,
      stagger: 0.5,
      onComplete: () => {
        console.log("Animation completed!");
      },
      onStart: () => {
        console.log("Animation started!");
      },
      onUpdate: () => {
        console.log("Animation updated!");
      }
    }, {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
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
      <h1>GsapFromTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is used to animate elements from a
        new state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is similar to the{" "}
        <code>gsap.from()</code> and <code>gsap.to()</code> methods, but the
        difference is that the <code>gsap.fromTo()</code> method animates
        elements from a new state to a new state, while the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, and the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.fromTo()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFromTo;
