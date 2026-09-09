document.addEventListener("DOMContentLoaded", () => {

    const botoes = document.querySelectorAll(".action-btn");

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            const menu = botao.parentElement.querySelector(".action-menu");


            // Fecha todos os outros menus
            document.querySelectorAll(".action-menu").forEach(outroMenu => {

                if (outroMenu !== menu) {
                    outroMenu.classList.remove("active");
                }

            });


            // Abre ou fecha o menu clicado
            menu.classList.toggle("active");

        });

    });

});

const menuBtn = document.getElementById("menuBtn");
const menuLateral = document.getElementById("menuLateral");

menuBtn.addEventListener("click", () => {
    menuLateral.classList.toggle("ativo");
});