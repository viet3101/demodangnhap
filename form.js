document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
    // Kiểm tra thông tin đăng nhập
    if (username === 'username' && password === 'password') {
        // Hiển thị thông báo đăng nhập thành công
        document.getElementById('loginErrorMessage').style.display = 'none';
        document.getElementById('loginSuccessMessage').style.display = 'block';
        // Ẩn form đăng nhập và hiển thị form đăng ký
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
    } else {
        // Hiển thị thông báo lỗi
        document.getElementById('loginSuccessMessage').style.display = 'none';
        document.getElementById('loginErrorMessage').style.display = 'block';
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById('registerPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        // Hiển thị thông báo lỗi
        document.getElementById('registerSuccessMessage').style.display = 'none';
        document.getElementById('registerErrorMessage').style.display = 'block';
    } else {
        // Hiển thị thông báo đăng ký thành công
            alert('dang ki thanh cong')
        // document.getElementById('registerErrorMessage').style.display = 'none';
        // document.getElementById('registerSuccessMessage').style.display = 'block';
        // Ẩn form đăng ký và hiển thị form đăng nhập
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    }
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
    // Kiểm tra thông tin đăng nhập
    if (username === 'huynh' && password === '1234') {
        // Hiển thị thông báo đăng nhập thành công
        alert('Đăng nhập thành công');
        window.location.href = 'welcome.html';
        // Ẩn form đăng nhập và hiển thị form đăng ký
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
    } else {
        // Hiển thị thông báo lỗi
        alert('Sai tài khoản hoặc mật khẩu, đăng nhập lại');
    }
});


document.getElementById('showRegisterForm').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('showLoginForm').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});
