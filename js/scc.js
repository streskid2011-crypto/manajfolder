const hamBtn = document.getElementById('hamBtn');
const sidebarMenu = document.getElementById('sidebarMenu');

hamBtn.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!sidebarMenu.contains(e.target) && !hamBtn.contains(e.target)) {
        sidebarMenu.classList.remove('active');
    }
});
