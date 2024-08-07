//Middleware for Handling Error During Registration
const signupValidation = async (req, res, next) => {
  try {
    const { email, name, password } = req.body;

    let error = [];

    if (!email) {
      error.push("Please enter email");
    } else if (!isValidEmail(email)) {
      error.push("Email format not valid");
    }
    if (!name) {
      error.push("Please enter username");
    } else if (name.length < 4) {
      error.push("Username should be atleast four letters");
    }
    if (!password) {
      error.push("Please enter password");
    } else {
      if (password.length < 6) {
        error.push("Password must be atleast six characters");
      }
      if (!/[0-9]/.test(password)) {
        error.push("password must contain a number");
      }
      if (!checkCase(password)) {
        error.push("password should contain atleast an uppercase ");
      }
      if (!isContainsSymbol(password)) {
        error.push("password should contain atleast one special character");
      }
    }
    if (error.length > 0) {
      return res.status(400).json({ message: error });
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
    let error = [];

    if (!email) {
      error.push("Please enter email");
    } else if (isValidEmail(email)) {
      error.push("Email format not valid");
    }

    if (error.length > 0) {
      return res.status(400).json({ message: error });
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
    let error = [];

    if (!email) {
      error.push("Please enter email");
    } else if (!isValidEmail(email)) {
      error.push(" format not valid");
    }

    if (!otp) {
      error.push("Please enter OTP");
    } else if (otp.length !== 6) {
      error.push("OTP must be 6 digits");
    }

    if (!newPassword) {
      error.push("Please enter new password");
    } else {
      if (newPassword.length < 6) {
        error.push("Password must be at least six characters");
      }
      if (!/[0-9]/.test(newPassword)) {
        error.push("Password must contain a number");
      }
      if (!checkCase(newPassword)) {
        error.push("Password should contain at least an uppercase letter");
      }
      if (!isContainsSymbol(newPassword)) {
        error.push("Password should contain at least one special character");
      }
    }

    if (error.length > 0) {
      return res.status(400).json({ message: error });
    }
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//More Helper Functions
const isValidEmail = (email) => {
  return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
    email
  );
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
