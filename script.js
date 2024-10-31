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
document.getElementById('scroll-experience').addEventListener('click', function () {
    scrollToSection('workexperience');
});

const typingText = document.querySelector(".typing");
let i = 0, data = [], text = "Bianca Beppler Dullius Fullstack developer";

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








// Função para verificar se um elemento está visível na tela
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a classe de animação quando o elemento estiver visível
function addAnimationClass() {
    var elements = document.querySelectorAll('.cards_item');
    elements.forEach(function (el) {
        if (isElementInViewport(el)) {
            el.style.opacity = "1";
            el.classList.add('slideInUp');
        }
    });
}

// Adiciona o evento de rolagem da página para verificar quando os elementos estão visíveis
window.addEventListener('scroll', addAnimationClass);

// Chama a função uma vez ao carregar a página para verificar os elementos iniciais
window.addEventListener('load', addAnimationClass);
