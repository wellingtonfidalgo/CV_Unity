function mudarAba(idAba){
    const contents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-btn');

    contents.forEach(content => content.classList.remove('active'));
    tabButtons.forEach(button => button.classList.remove("active"));

    contents[idAba].classList.add('active');
    tabButtons[idAba].classList.add('active');
}