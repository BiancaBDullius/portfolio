function scrollToSection(sectionId) {
    // Obter a posição da seção de destino
    const targetSection = document.getElementById(sectionId);
    const targetPosition = targetSection.offsetTop;

    // Rolagem suave para a posição da seção de destino
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

document.getElementById('scroll-about').addEventListener('click', function () {
    scrollToSection('about');
});
document.getElementById('scroll-projects').addEventListener('click', function () {
    scrollToSection('projects');
});

const typingText = document.querySelector(".typing");
let i = 0, data = [], text = "Bianca Beppler Dullius Backend developer";

let typing = setInterval(() => {
    if (i == text.length) {
        clearInterval(typing);
    } else {
        if (i === 22) {
            data.push("<br>"); // Adiciona uma quebra de linha
        }
        data.push(text[i]);
        document.querySelector(".typing").innerHTML = data.join("");
        i++;
    }
}, 100);
