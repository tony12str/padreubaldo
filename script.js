const music = document.getElementById("music");
const btn = document.getElementById("btn");

/* Volumen inicial */

music.volume = 0.3;

/* Botón elegante */

btn.addEventListener("click", async () => {

  try {

    await music.play();

    /* Fade elegante */

    let volume = 0.3;

    const fade = setInterval(() => {

      if (volume < 1) {

        volume += 0.02;
        music.volume = volume;

      } else {

        clearInterval(fade);

      }

    }, 120);

    btn.innerText = "🙏 Dios le bendiga";

  } catch (error) {

    console.log("Error reproduciendo audio:", error);

  }

});