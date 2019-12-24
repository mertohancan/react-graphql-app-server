module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Kullanıcı adı boş olamaz.';
  }
  if (email.trim() === '') {
    errors.email = 'Mail boş olamaz.';
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = 'Lütfen geçerli bir mail adresi girin.';
    }
  }
  if (password === '') {
    errors.password = 'Şifre koymanız gerek.';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Şifreleriniz eşleşmiyor.';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Kullanıcı adı boş olamaz.';
  }
  if (password.trim() === '') {
    errors.password = 'Sanırım şifreyi girmeyi unuttun.';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};
