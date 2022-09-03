import { useState,useEffect } from "react";

const Content = () => {
  const [tic, setTic] = useState("");
  const [vc, setVc] = useState("opa");
  const [tc, setTc] = useState("opa");
  const [qc, setQc] = useState("opa");
  const [vlink, setVlink] = useState("")
  const vClas = `video-container avideo ${vc}`;
  const tiClas = `video-container ${tic}`;
  const tClas = `text video-container ${tc}`;
  const qClas = `question video-container ${qc}`;

  useEffect (() => {
    setTimeout(()=>{
      setVlink("https://www.youtube-nocookie.com/embed/F0rwOsAteXM?autoplay=1&mute=0&start=2")
    }, 1000)
    setTimeout (() => {
      setTic("opa");
      setVc("");
    }, 4000)
    setTimeout (() => {
      setVc("opa");
      setTc("");
    }, 10000)
    setTimeout (() => {
      setTc("opa");
      setQc("");
    }, 16000)
  }, [])

  return (
    <div className="container">
      <h1 className={tiClas}>Mira el vídeo hasta el final.</h1>
      <div className={vClas} >
        <div>
         <iframe width="560" height="315" src={vlink}
         title="YouTube video player"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowfullscreen></iframe>
        </div>
      </div>
      <div className="text-container">
        <div className={tClas}>
        “No voy a llenarte de palabras bonitas. Porque la verdad es que todo lo que siento te lo voy a demostrar. Tampoco quiero hacerte promesas, porque cuando uno siente el amor en el corazón, no necesita de reglas ni contratos”.
        </div>
        <div className={qClas}>
        Quieres comenzar esta historia juntos siendo mi novia?
        </div>
      </div>
    </div>
);
}
export default Content;
