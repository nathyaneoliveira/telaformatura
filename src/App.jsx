import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import confetti from "canvas-confetti"
import { useEffect } from "react"

import "swiper/css"
import "swiper/css/pagination"

const btnStyle = {
  background: "linear-gradient(135deg, #6a11cb, #2575fc)",
  color: "#fff",
  padding: "14px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "16px",
  boxShadow: "0 10px 20px rgba(0,0,0,.3)",
}

export default function App() {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
    })
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        textAlign: "center",
        paddingTop: "40px",
      }}
    >
      <h1>🎓 Nathyane Oliveira</h1>
      <h3>Formatura • Ciência da Computação</h3>
       <h1>―――――――――――――――――――――――――――――――――――――――――――――</h1>
      <p>Este momento marca o encerramento de um ciclo e o início de novas oportunidades.
      Agradeço imensamente a todos que contribuíram para minha formação, direta ou indiretamente.
      Que venham novos desafios, aprendizados e conquistas. 🚀✨</p>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        spaceBetween={20}
        slidesPerView={1}
        style={{ maxWidth: "360px", margin: "40px auto" }}
      >
        <SwiperSlide><img src="/IMG_0001.jpg" style={{ width: "100%" }} /></SwiperSlide>
        <SwiperSlide><img src="/IMG_0031.jpg" style={{ width: "100%" }} /></SwiperSlide>
        <SwiperSlide><img src="/IMG_0051.jpg" style={{ width: "100%" }} /></SwiperSlide>
        <SwiperSlide><img src="/IMG_0082.jpg" style={{ width: "100%" }} /></SwiperSlide>
        <SwiperSlide><img src="/IMG_0169.jpg" style={{ width: "100%" }} /></SwiperSlide>
        <SwiperSlide><img src="/IMG_3073.jpg" style={{ width: "100%" }} /></SwiperSlide>
        <SwiperSlide><img src="/IMG_3340.jpg" style={{ width: "100%" }} /></SwiperSlide>
        <SwiperSlide><img src="/IMG_3346.jpg" style={{ width: "100%" }} /></SwiperSlide>
        <SwiperSlide><img src="/IMG_9651.jpg" style={{ width: "100%" }} /></SwiperSlide>
        <SwiperSlide><img src="/IMG_9675.jpg" style={{ width: "100%" }} /></SwiperSlide>
        <SwiperSlide><img src="/IMG_9713.jpg" style={{ width: "100%" }} /></SwiperSlide>
        <SwiperSlide><img src="/IMG_9817.jpg" style={{ width: "100%" }} /></SwiperSlide>
      </Swiper>

      <div style={{ marginTop: "30px", display: "grid", gap: "12px", padding: "0 20px" }}>
        <a href="https://www.instagram.com/nathyaneoliveira?igsh=OWhvdDhseXo4c3U=" target="_blank" style={btnStyle}>
          📸 Instagram
        </a>
        <a href="https://www.linkedin.com/in/nathyane-oliveira-7564b5233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" style={btnStyle}>
          💼 LinkedIn
        </a>
      </div>
    </div>
  )
}
