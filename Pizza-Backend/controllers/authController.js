import pkg from 'bcryptjs';
const { hash, compare } = pkg;
import pkg1 from 'jsonwebtoken';
const { sign } = pkg1;
import User from '../models/User.js';

// Register function
export async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: 'Email already in use' });
    }
     
    const hashedPassword = await hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).send({ 
      success:true,
      message: 'User created successfully' });
  } catch (error) {
    console.error("Error creating user:", error); // Log detailed error to console
    res.status(400).send({ message: 'Error creating user', error: error.message }); // Send error message back to client
  }
}

// Login function
export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }
    const isValid = await compare(password, user.password);
    if (!isValid) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }
    const token = sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });
    res.send({ token, userId: user._id });
  } catch (error) {
    res.status(400).send({ message: 'Error logging in' });
  }
}

// Verify Email function
export async function verifyEmail(req, res) {
  try {
    const token = req.params.token;
    const user = await User.findOne({ emailVerificationToken: token });
    if (!user) {
      return res.status(404).send({ message: 'Invalid token' });
    }
    user.emailVerified = true;
    await user.save();
    res.send({ message: 'Email verified successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error verifying email' });
  }
}

// Forgot Password function
export async function forgotPassword(req, res) {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    const token = sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });
    user.passwordResetToken = token;
    await user.save();
    // Send the token to the user's email address
    res.send({ message: 'Password reset token sent to your email' });
  } catch (error) {
    res.status(400).send({ message: 'Error sending password reset token' });
  }
}

// Reset Password function
export async function resetPassword(req, res) {
  try {
    const token = req.params.token;
    const { password } = req.body;
    const user = await User.findOne({ passwordResetToken: token });
    if (!user) {
      return res.status(404).send({ message: 'Invalid token' });
    }
    const hashedPassword = await hash(password, 10);
    user.password = hashedPassword;
    user.passwordResetToken = null;
    await user.save();
    res.send({ message: 'Password reset successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error resetting password' });
  }
}