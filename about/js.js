const scrollUpBtn = document.getElementById('scrollUpBtn');

function scrollToTop(){
    window.scrollTo(0, 0);
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    const username = this.username.value;
    const password = this.password.value;

    // Proses login, misalnya panggil API

    // Jika login berhasil
    document.getElementById('message').textContent = 'Login berhasil!';
    
    // Kosongkan input
    this.username.value = '';
    this.password.value = '';
});
