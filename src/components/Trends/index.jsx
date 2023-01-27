import React from "react";
import '../../styles/Trends.css'

export function Trends() {
  return (
    <>
      <section className="trends-container">
        <h2 className="trends-title">Tendencias</h2>
        <p>Que quieres ver el dia de hoy</p>
        <div className="container-imgs trends-img">
          <img src="https://as01.epimg.net/meristation/imagenes/2021/07/23/header_image/872477421627027580.jpg" alt="" />
        </div>
      </section>
    </>
  );
}
