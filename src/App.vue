<template>
        <head>

        <meta charset="UTF-8">
        <meta name="description" content="Servicios de rehabilitación integral y terapias de relajación, contáctanos">
        <meta name="robots" content="index,follow">
        <title>@LaFisiotp</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
  
    </head>

    
    <div class="grid-container">
      <header>
      <div class="header-container">
            <nav class="navigation">
                    <figure>  
                        <img src="./components/icons/Imagenes/Logo/Logo LAFISIOTP claro.jpg" alt="Logo" class="logo">
                    </figure>
                    <ul>
                        <li class="nav-item"><a href="#services" class="nav-link">Servicios</a></li>
                        <li class="nav-item"><a href="#dates" class="nav-link">Citas</a></li>
                        <li class="nav-item"><a href="#about" class="nav-link">LaFisiotp</a></li>
                        <li class="nav-item"><a href="#rates" class="nav-link">Tarifas</a></li>
                        <li class="nav-item"><a href="#contact" class="nav-link">Contáctanos</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Iniciar sesión</a></li>
                    </ul>
            </nav>
        </div>
    </header>
    <section class="section-home">
        <div class="main-section">
            <figure>
            <img src="./components/icons/Imagenes/imagen-home.jpg" alt="home" id="home-img" class="home">
          </figure>
          <div class="info">
            <figure>
              <img src="./components/icons/Imagenes/Logo/Logo LAFISIOTP claro.jpg" alt="logo oscuro" class="logo" id="logo-dark">
            </figure> 
            <button class="btn">
                <a href="#services">más información</a>
            </button>
          </div>
        </div>
    </section>
    </div>

    <!-- -----------Servicios---------- -->
    <section id="services">
        <div class="container">
            <h1 class="subtitle">Servicios</h1>
           <div class="services-list">
                <div>
                    <img src="./components/icons/Imagenes/iconos rehabilitacion.jpg" alt="iconos" id="icons">
                    <h1>Rehabilitación Integral</h1>
                    <p>Tu recuperación es nuestro compromiso</p>
                </div>
                <div>
                    <img src="./components/icons/Imagenes/fisioterapia tratamiento.jpeg" alt="fisio" id="fisio">
                    <h1>Terapias de relajación</h1>
                    <p>Disminuye frecuencia cardiaca, presión arterial, mejora la calidad de sueño</p>
                </div>
                <div>
                    <img src="./components/icons/Imagenes/Kinesiotape.jpg" alt="kinesiotape">
                    <h1>Vendaje de Kinesiotape</h1>
                    <p>Las tiras kinesiológicas alivian el dolor de las zonas afectadas por lesiones articulares o musculares, ofrecen mejor movilidad, disminuyen la inflamación y mejoran la circulación</p>
                </div>
                <div>
                    <img src="./components/icons/Imagenes/acupuntura01.png" alt="acupuntura">
                    <h1>Acupuntura</h1>
                    <p> la acupuntura tiene una gran capacidad de elevar la energía vital, fortalecer el sistema inmunológico, favorecer la circulación de la sangre y mejorar en un alto porcentaje el estado de salud en general.</p>
                </div>
                <div>
                    <img src="./components/icons/Imagenes/moxibustion.jfif" alt="moxibustion">
                    <h1>Moxibustión</h1>
                    <p>La moxibustión es un tratamiento terapéutico que proviene de la medicina tradicional China basada en la aplicación de calor en diferentes partes de la anatomía humana como método para estimular diferentes partes del cuerpo con el fin de curar enfermedades o dolencias.</p>
                </div>
                <div>
                    <img src="./components/icons/Imagenes/reflexologia.jpeg" alt="reflexologia">
                    <h1>Reflexología Podal</h1>
                    <p>Promueve la relajación y alivia el estrés. Reduce el dolor en general.</p>
                </div>
                <div>
                    <img src="./components/icons/Imagenes/Auriculoterapia_semillas.jpg" alt="reflexologia auricular">
                    <h1>Reflexología Auricular</h1>
                    <p>La auriculoterapia es una técnica de medicina tradicional china que se deriva de la acupuntura, a través de la cual se estimulan puntos del pabellón externo de la oreja para diagnosticar y poder dar tratamiento a problemas de salud en otras zonas del cuerpo.</p>
                </div>
                <div>
                    <img src="./components/icons/Imagenes/ventosa.jpg" alt="ventosas">
                    <h1>Ventosas</h1>
                    <p>Mejora circulación sanguínea y linfática</p>
                </div>
                <div>
                    <img src="./components/icons/Imagenes/watsu.jfif" alt="watsu">
                    <h1>Watsu</h1>
                    <p>El watsu es una técnica que combina la relajación en el medio acuático con el masaje shiatsu</p>
                </div>
           </div>
            </div>
    </section>


    <!-- -----------Citas---------- -->
    <section class="dates" id="dates">
        <h1 class="subtitle">Agendar citas</h1>
        <div class="booking">
            <form class="content-left">
                    <input type="text" id="name" name="name" class="item" placeholder="Nombre completo"><br>
                    <input type="text" id="cedula" name="cedula" class="item" placeholder="cedula"><br> 
                    <input type="date" id="cita" name="cita" class="item2"><br>
                    
             </form>
             <div class="content-right">
                <div class="btn1">8:00  am</div>
                <div class="btn1">9:00   am</div>
                <div class="btn1">10:00 am</div>
                <div class="btn1">11:00 am</div>
                <div class="btn1">2:00   pm</div>
                <div class="btn1">3:00   pm</div>
                <div class="btn1">4:00   pm</div>
                <div class="btn1">5:00   pm</div>

             </div>
             <input type="submit" value="Seleccionar" class="btn2">   
        </div>  
    </section>
    <!-- -----------LAFISIOTP-------- -->
    <section class="aboutMe" id="about">
        <h1 class="subtitle">About me</h1>
        <div class="about">     
            <figure>
                <img src="./components/icons/Imagenes/la fisio about me.jpg" alt="LaFisio" class="about-img">
            </figure>
            <div class="about-content">
            <h3>IVONNE HERRERA BETANCOURTH</h3>
            <p>Fisioterapeuta</p>
            <p>Universidad Manuela Beltrán</p>
            </div>
        </div>
    </section>
    <!-- -----------Tarifas---------- -->
    <section class="rates" id="rates">
        <h1 class="subtitle">Tarifa</h1>
        <div class="rates-container">
            <h1>Valoración y primera terapia</h1>
            <p>$80.000</p>
            <p>Duración: 1 hora y 20 minutos</p>
            <h1>Terapias de relajación</h1>
            <p>2 horas $120,000 COP</p> 
            <p>1 hora 30 min  $100,000 COP</p>
            <p>1 hora $80,000 COP</p>

        </div>
    </section>

    <!-- -----------IniciarSesion---------- -->
    <section class="session" >
    </section>

    <!-- -----------Contáctanos---------- -->
    <footer>
        <section class="contact" id="contact">
            <div class="contact-content">
                <div class="row">
                    <div class="contact-left">
                        <h1 class="subtitle">Contacto</h1>
                        <p>&#128140; ivonneherrera007@hotmail.com</p>
                        <p> &#128222; Whatsapp 3128685538</p>


                    <div class="contact-right">
                        <form action="mailto:ivonneherrera007@hotmail.com" method="post" enctype="text/plain" name='submit-data'>
                        <input type="text" name="Name" placeholder="Your Name" required>
                        <input type="email" name="Email" placeholder="Your Email" required>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" class="btn2">Enviar</button>
                        <button type="reset" class="btn2">Reset</button>
                        </form>
                        <span id="msg"></span>
                    </div>
                    </div>
                </div>
        </div>
        <div class="copyright">
                    <p> &#127758; Copyright  @LAFISIOTP</p>
         </div>

    </section>
      
    </footer>

</template>



<script  setup></script>   



<style scoped>

</style>
