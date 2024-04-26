document.querySelector('.bi-list').addEventListener('click', function () {
    let sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
        document.addEventListener('click', closeSidebarOnClickOutside);
    } else {
        sidebar.style.left = '-250px';
        document.removeEventListener('click', closeSidebarOnClickOutside);
    }
});

function closeSidebarOnClickOutside(event) {
    let sidebar = document.getElementById('sidebar');
    let sidebarToggle = document.querySelector('.bi-list');
    if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
        sidebar.style.left = '-250px';
        document.removeEventListener('click', closeSidebarOnClickOutside);
    }
}
