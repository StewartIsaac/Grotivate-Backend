//Middleware for Handling Error During Registration
const signupValidation = async (req, res, next) => {
  try {
    const { email, name, password } = req.body;

    const errors = {
      email: [],
      name: [],
      password: [],
    };

    if (!email) {
      errors.email.push("Please enter email");
    } else if (!isValidEmail(email)) {
      errors.email.push("Email format not valid");
    }
    if (!name) {
      errors.name.push("Please enter username");
    } else if (name.length < 4) {
      errors.name.push("Username should be atleast four letters");
    }
    if (!password) {
      errors.password.push("Please enter password");
    } else {
      if (password.length < 6) {
        errors.password.push("Password must be atleast six characters");
      }
      if (!/[0-9]/.test(password)) {
        errors.password.push("password must contain a number");
      }
      if (!checkCase(password)) {
        errors.password.push("password should contain atleast an uppercase ");
      }
      if (!isContainsSymbol(password)) {
        errors.password.push(
          "password should contain atleast one special character"
        );
      }
    }
    if (
      errors.email.length > 0 ||
      errors.name.length > 0 ||
      errors.password.length > 0
    ) {
      return res.status(400).json({ errors });
    }
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Middleware for Handling Error During Request Password Reset OTP
const requestPasswordResetOTPValidation = (req, res, next) => {
  try {
    const { email } = req.body;
    let errors = [];

    if (!email) {
      errors.push("Please enter email");
    } else if (!isValidEmail(email)) {
      errors.push("Email format not valid");
    }

    if (errors.length > 0) {
      return res.status(400).json({ message: errors });
    }
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Middleware for Handling Error During Reset Password with OTP
const resetPasswordWithOTPValidation = (req, res, next) => {
  try {
    const { email, otp, newPassword } = req.body;
    let errors = {
      email: [],
      otp: [],
      newPassword: [],
    };

    if (!email) {
      errors.email.push("Please enter email");
    } else if (!isValidEmail(email)) {
      errors.email.push("Email format not valid");
    }

    if (!otp) {
      errors.otp.push("Please enter OTP");
    } else if (otp.length !== 6) {
      errors.otp.push("OTP must be 6 digits");
    }

    if (!newPassword) {
      errors.newPassword.push("Please enter new password");
    } else {
      if (newPassword.length < 6) {
        errors.newPassword.push("Password must be at least six characters");
      }
      if (!/[0-9]/.test(newPassword)) {
        errors.newPassword.push("Password must contain a number");
      }
      if (!checkCase(newPassword)) {
        errors.newPassword.push(
          "Password should contain at least an uppercase letter"
        );
      }
      if (!isContainsSymbol(newPassword)) {
        errors.newPassword.push(
          "Password should contain at least one special character"
        );
      }
    }

    if (
      errors.email.length > 0 ||
      errors.otp.length > 0 ||
      errors.newPassword.length > 0
    ) {
      return res.status(400).json({ errors });
    }
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//More Helper Functions
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim().toLowerCase());
};
const checkCase = (character) => {
  const symbol = /^(?=.*[A-Z]).*$/;
  return symbol.test(character);
};
const isContainsSymbol = (character) => {
  const symbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
  return symbol.test(character);
};

module.exports = {
  signupValidation,
  requestPasswordResetOTPValidation,
  resetPasswordWithOTPValidation,
};
