function toggleDropup() {
    var dropdownContent = document.querySelector('.dropup-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('click', function(event) {
    var dropdownContent = document.querySelector('.dropup-content');
    if (!event.target.matches('.dropbtn') && dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    }
});