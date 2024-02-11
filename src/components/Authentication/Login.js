import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
          <section class="inner--hero confirmation--hero">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-md-12">
						<div class="inner--text">
							<h3 class="heading">Login to your Account</h3>
							<p>Please enter your ID and password to access your account. There you can see active
								packages and edit the details of your personal account</p>
							<div class="go--back">
                                <Link to='/'><a class="button">
									<img src="https://mysignal.netlify.app/assets/images/chevron-left.svg" alt=""/>
									<span>Go back</span>
								</a></Link>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        <section class="Login--area">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-5 col-lg-8 col-md-8">
						<div class="login--form card--default">
							<form action="#" class="needs-validation" novalidate>
								<div class="input--group">
									<label for="login-id">ID</label>
									<input type="text" class="form-control" id="login-id" name="login-id"
										placeholder="Burhan Yudha" required/>
									<div class="invalid-feedback">
										ID is required
									</div>
								</div>
								<div class="input--group">
									<label for="login--password">Password</label>
									<input type="password" class="form-control" id="login--password"
										name="login--password" placeholder="Burhan Yudha" required/>
									<div class="invalid-feedback">
										Password is required
									</div>
								</div>
								<div class="forget--area input--group">
									<div class="check--box">
										<input type="checkbox" name="remember--me" id="remember--me"/>
										<label for="remember--me">Remember me</label>
									</div>
									<a href="forget-password.html">Forgot password?</a>
								</div>
								<div class="btn--area mt_5">
									<button type="submit" class="button w-100">Login</button>
								</div>
								<p class="register--btn">Don’t have an account? <a href="signup.html">Register</a></p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>  
        </div>
    );
};

export default Login;