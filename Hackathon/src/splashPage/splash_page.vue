<template>
	<div>
		<!-- Topbar -->
		<nav class="topbar topbar-inverse topbar-expand-md topbar-sticky">
			<div class="container">

				<div class="topbar-left">
					<button class="topbar-toggler">&#9776;</button>
					<a class="topbar-brand" href="index.html">
						<img class="logo-default" src="./assets/img/FIT-logo-sm.png" alt="logo">
						<img class="logo-inverse" src="./assets/img/FIT-logo-sm.png" alt="logo">
					</a>
				</div>


				<div class="topbar-right">
					<ul class="topbar-nav nav">
						<li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
						<li class="nav-item">
							<a class="nav-link" href="#">Samples <i class="fa fa-caret-down"></i></a>
							<div class="nav-submenu">
								<a class="nav-link" href="demo-app.html">Redefining Fitness</a>
								<a class="nav-link" href="demo-bootstrap.html">Dashboards</a>
								<a class="nav-link" href="demo-slack.html">About</a>
								<a class="nav-link" href="demo-zendesk.html">More</a>
							</div>
						</li>
						<li class="nav-item"><a class="nav-link active" v-b-modal.signUp>Sign Up</a></li>
					</ul>
				</div>

			</div>
		</nav>
		<!-- END Topbar -->

		<!--== Sign Up Modal ==-->

		<b-modal hide-footer hide-header class="text-center" id="signUp">
			<h1>Create An Account</h1>
			<hr />
			<form class="modal_form">
				<input type="name" placeholder="Full Name" v-model="name" />
				<br />
				<input type="email" placeholder="Email" v-model="email" />
				<br />
				<input type="password" placeholder="Password" v-model="password" />
				<br />
				<input type="password" placeholder="Reenter Your Password" v-model="password2" />
				<br />
				<router-link :to="{path: '/dash'}"><button class="btn">Submit</button></router-link>
				<Login></Login>
			</form>
		</b-modal>

		<!--== END Sign Up Modal ==-->

		<!-- Header -->
		<header class="header fadeout header-inverse pb-0 h-fullscreen" style="background-image: linear-gradient(to bottom, #243949 0%, #517fa4 100%);">
			<canvas class="constellation"></canvas>

			<div class="container">
				<div class="row h-full">
					<div class="col-12 text-center align-self-center ">
						<h1 class="title">The FIT Experience</h1>
						<h1 class="fs-50 fw-600 lh-15 hidden-sm-down">Built For <span class="fit" style="color: #42b4dc" data-type="Athletes, Dreamers, College Students, Entrepreneurs, Businesses, Everyone"></span></h1>
						<h1 class="fs-35 fw-600 lh-15 hidden-md-up">Built For <br><span class="fit"  style="color: #42b4dc" data-type="Athletes, Dreamers, College Students, Entrepreneurs, Businesses, Everyone"></span></h1>
						<br>
						<p class="fs-24 hidden-sm-down"> A Fully Integrated Solution to acheive <br /> goals across all of <b>Lifes' Dimensions</b> </p>
						<p class="fs-20 hidden-md-up"> A Fully Integrated Solution to acheive <br /> goals across all of <b>Lifes' Dimensions</b> </p>
					</div>

					<div class="col-12 align-self-end text-center pb-70">
					</div>
				</div>
				<a href="#section-1" class="scroll-down" address="true"></a>
			</div>
		</header>
		<!-- END Header -->




		<!-- Main container -->
		<main class="main-content">

			<!--
			|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
			| Banner Section
			|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
			!-->

			<section class="section section-inverse py-40" style="background-color: #42b4dc" id="section-1" >
				<div class="container">
					<div class="row gap-y align-items-center">
						<div class="col-12">
							<h2 class="fw-300 mb-0 text-right"  data-aos="fade-left">Why are we here?</h2>
						</div>
					</div>
				</div>
			</section>

			<!--
			/‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
			/Misconception of Fitness
			/‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
			!-->

			<section class="section bg-gray fit-why" style="height: 100vh;">
				<div class="container-wide">
					<header class="section-header">
						<h2 data-aos="fade-down">To optomize the human experience through fitness</h2>
					</header>
					<div class="row">
						<div class="offset-1 col-10 col-lg-6 offset-lg-1 text-center text-lg-left">
							<div class="row gap-y">
								<dl class="row fs-20">
									<dt class="col-sm-4 col-md-4 col-lg-4 theme-color-1 text-right" data-aos="fade-right">The average person</dt>
									<dd class="col-sm-8 col-md-8 col-lg-8 theme-color-2" data-aos="fade-left">associates fitness with the Physical Dimension of the individule</dd>
									<dt class="col-sm-4 col-md-4col-lg-4 theme-color-1 text-right" data-aos="fade-right">We believe</dt>
									<dd class="col-sm-8 col-md-8 col-lg-8 theme-color-2" data-aos="fade-left">fitness consists of 4-Dimensions: <br><font class="color-physical">Physical</font> | <font class="color-financial">Financial</font> | <font class="color-emotional"> Emotional</font> | <font class="color-cognitive">Cognitive</font></dd>
									<dt class="col-sm-4 col-md-4 col-lg-4 theme-color-1 text-right" data-aos="fade-right">Our job </dt>
									<dd class="col-sm-8 col-md-8 col-lg-8 theme-color-2" data-aos="fade-left">is to provide a professionally customaizable platform to establish true fitness and balance your life</dd>
								</dl>
							</div>
						</div>

						<div class="col-sm-12 col-sm-12 col-lg-5 text-center" data-aos="fade-left" data-aos-offset="200">
							<iframe  width="560" height="315" src="https://www.youtube.com/embed/fvoQlcLiHJU" frameborder="0" allowfullscreen></iframe>
						</div>
					</div>

				</div>
			</section>

			<!--
			|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
			| Banner Section
			|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
			!-->

			<section class="section section-inverse py-40" style="background-color: #42b4dc">
				<div class="container">
					<div class="row gap-y align-items-center">
						<div class="col-12">
							<h2 class="fw-300 mb-0 text-left" data-aos="fade-right">The 4 Dimensions of life</h2>
						</div>
					</div>
				</div>
			</section>

			<!--
			|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
			| The 4-Dimensions of Fitness Section
			|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
			!-->

			<section class="section overflow-hidden bg-grey1" style="backgroundImage:url('https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg');background-repeat:no-repeat; background-size: cover; height:100vh">
		<!--	<section class="section overflow-hidden bg-grey1"> -->
				<div class="container">
					<h2 data-aos="fade-up">True fitness is mastery of all dimensions</h2>


					<!--

					<div class="row gap-y text-center">
						<b-card class="col-sm-12 col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="0">
							<div img-top style = "backgorung:C26162 height:2vh">
							</div>
							<div class="icon-physical color-physical"></div>
							<p><strong class = "color-physical">Physical Dimension</strong></p>
							<p><a href="demo-bootstrap.html">We are embodied, perceiving the world and everything in it through our physical senses. Our mental and emotional lives are governed by physical pathways, tied directly to the physical condition of our body. Find out how improving your physical health and fitness can completely transform your life.</a></p>
						</b-card>

						<b-card class="col-sm-12 col-md-6 col-lg-6 " data-aos="fade-up" data-aos-delay="0">
							<div img-top style = "backgorung:8AC485 height:2vh">
							</div>
							<div class="icon-financial color-financial"></div>
							<p><strong class = "color-financial">Financial Dimension</strong></p>
							<p><a href="demo-slack.html">The financial dimension is about more than just money. Managing your short-term finances, having a long-term financial plan, and finding job satisfaction impact the FITness of your entire life. Financial health enables you to maximize your FIT or Balance across all key life dimensions.</a></p>
						</b-card>

						<b-card class="col-sm-12 col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="0">
							<div img-top style = "backgorung:D18956 height:2vh">
							</div>
							<div class="icon-cognitive color-cognitive"></div>
							<p><strong  class = "color-cognitive">Cognitive Dimension</strong></p>
							<p><a href="demo-trello.html">The Cognitive dimension impacts your emotions, behaviors, and decisions. The content and quality of your thoughts have led you to your current reality and will propel you to your future state. Learn how your habits of thinking can either assist you in, or thwart, the achievement of your dreams.</a></p>
						</b-card>

						<b-card class="col-sm-12 col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="0">
							<div img-top style = "backgorung:42b4dc height:2vh">
							</div>
							<div class="icon-emotional color-emotional"></div>
							<p><strong class = "color-emotional">Emotional Dimension</strong></p>
							<p><a href="demo-gmail.html">Emotional health is central to a FIT and fulfilled life. Stress resiliency and mindful emotion management are important habits to develop. At FIT, we help you build realistic and positive emotional skills to enrich your life. Incorporating these skills into your mindset will permeate and enhance your other key life dimensions as well.</a></p>
						</b-card>
					</div>

				-->



							<div class="col-sm-6 col-md-4 col-lg-3 card text-white bg-physical">

								<div class="card-body">
									<p><div class="icon-physical color-physical car-image-top"></div></p>
									<h4 class="card-title text-cneter">Physical</h4>
									<div class="card-text" >
										The financial dimension is about more than just money. Managing your short-term finances, having a long-term financial plan, and finding job satisfaction impact the FITness of your entire life. Financial health enables you to maximize your FIT or Balance across all key life dimensions.
									</div>
								</div>

							</div>
							<div class="col-sm-6 col-md-4 col-lg-3 card text-white bg-financial">

								<div class="card-body">
									<p><div class="icon-financial color-financial car-image-top"></div></p>
									<h4 class="card-title text-cneter">Financial</h4>
									<div class="card-text" >
										The financial dimension is about more than just money. Managing your short-term finances, having a long-term financial plan, and finding job satisfaction impact the FITness of your entire life. Financial health enables you to maximize your FIT or Balance across all key life dimensions.
									</div>
								</div>

							</div>
							<div class="col-sm-6 col-md-4 col-lg-3 card text-white bg-emotional">

								<div class="card-body">
									<p><div class="icon-emotional color-emotional card-image-top"></div></p>
									<h4 class="card-title text-cneter">Emotional</h4>
									<div class="card-text" >
										Emotional health is central to a FIT and fulfilled life. Stress resiliency and mindful emotion management are important habits to develop. At FIT, we help you build realistic and positive emotional skills to enrich your life. Incorporating these skills into your mindset will permeate and enhance your other key life dimensions as well.
									</div>
								</div>

							</div>
							<div class="col-sm-6 col-md-4 col-lg-3 card text-white bg-cognitive">

								<div class="card-body">
									<p><div class="icon-cognitive color-cognitive card-image-top"></div></p>
									<h4 class="card-title text-cneter">Cognitive</h4>
									<div class="card-text" >
										The Cognitive dimension impacts your emotions, behaviors, and decisions. The content and quality of your thoughts have led you to your current reality and will propel you to your future state. Learn how your habits of thinking can either assist you in, or thwart, the achievement of your dreams.
									</div>
								</div>

							</div>

							<!--

							<div class="card">
								<p><div class="icon-physical color-physical car-image-top"></div></p>
								<div class="card-block" style="">
									<h4 class="color-physical">Physical</h4>
									<div class="card-text" style="color: #C26162">
										We are embodied, perceiving the world and everything in it through our physical senses. Our mental and emotional lives are governed by physical pathways, tied directly to the physical condition of our body. Find out how improving your physical health and fitness can completely transform your life.
									</div>
								</div>
								<div class="card-footer">
									<span class="float-right">Joined in 2013</span>
									<span><i class=""></i>75 Friends</span>
								</div>
							</div>
						</div>
						<div class="col-sm-6 col-md-4 col-lg-3 mt-4">
							<div class="card">
								<p><div class="icon-financial color-financial car-image-top"></div></p>
								<div class="card-block" style="background-opacity: .5">
									<h4 class="color-financial">Financial</h4>
									<div class="card-text" style="color: #8AC485">
										The financial dimension is about more than just money. Managing your short-term finances, having a long-term financial plan, and finding job satisfaction impact the FITness of your entire life. Financial health enables you to maximize your FIT or Balance across all key life dimensions.
									</div>
								</div>
								<div class="card-footer">
									<span class="float-right">Joined in 2013</span>
									<span><i class=""></i>75 Friends</span>
								</div>
							</div>
						</div><div class="col-sm-6 col-md-4 col-lg-3 mt-4">
							<div class="card">
								<p><div class="icon-emotional color-emotional car-image-top"></div></p>
								<div class="card-block" style="opacity: .5">
									<h4 class="color-emotional">Emotional</h4>
									<div class="card-text" style="color: #42b4dc">
										Emotional health is central to a FIT and fulfilled life. Stress resiliency and mindful emotion management are important habits to develop. At FIT, we help you build realistic and positive emotional skills to enrich your life. Incorporating these skills into your mindset will permeate and enhance your other key life dimensions as well.
									</div>
								</div>
								<div class="card-footer">
									<span class="float-right">Joined in 2013</span>
									<span><i class=""></i>75 Friends</span>
								</div>
							</div>
						</div>
						<div class="col-sm-6 col-md-4 col-lg-3 mt-4">
							<div class="card">
								<p><div class="icon-cognitive color-cognitive car-image-top"></div></p>
								<div class="card-block" style="opacity: .5">
									<h4 class="color-cognitive">Cognitive</h4>
									<div class="card-text" style="color: #ff7f00">
										The Cognitive dimension impacts your emotions, behaviors, and decisions. The content and quality of your thoughts have led you to your current reality and will propel you to your future state. Learn how your habits of thinking can either assist you in, or thwart, the achievement of your dreams.
									</div>
								</div>
								<div class="card-footer">
									<span class="float-right">Joined in 2013</span>
									<span><i class=""></i>75 Friends</span>
								</div>
							</div>
						</div>

					-->

			</div>
		</section>

		<!--
		|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
		| Banner Section
		|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
		!-->

		<section class="section section-inverse py-40" style="background-color: #42b4dc">
			<div class="container">
				<div class="row gap-y align-items-center">
					<div class="col-12">
						<h2 class="fw-300 mb-0 text-right" data-aos="fade-left">How can we help?</h2>
					</div>
				</div>
			</div>
		</section>

		<!--
		|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
		| Assessment Section
		|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
		!-->

		<section class="section bg-grey1 pb-0 overflow-hidden" style="">
			<div class="container ">
				<header class="section-header">
					<h2>Assessment</h2>
				</header>

				<div class="col-sm-12 col-md-12 col-lg-4" align="center">
					<img class="" src="src\splashPage\assets\img\physical_assessment_computer.png" alt="..." data-aos="fade-up"  data-aos-delay="200">
				</div>
				<div class="col-sm-12 col-md-12 col-lg-8">
					<dl class="row fs-20">
						<dt class="col-sm-4 col-md-4 col-lg-4 theme-color-1 text-right" data-aos="fade-right">Take</dt>
						<dd class="col-sm-8 col-md-8 col-lg-8 theme-color-2" data-aos="fade-left">our assessment to help us understand where you are and what you are comfortable with</dd>
						<dt class="col-sm-4 col-md-4 col-lg-4 theme-color-1 text-right" data-aos="fade-right">Recieve</dt>
						<dd class="col-sm-8 col-md-8 col-lg-8 theme-color-2" data-aos="fade-left">a tailored dashboard filled with content that fits your life and your skill level</dd>
						<dt class="col-sm-4 col-md-4 col-lg-4 theme-color-1 text-right" data-aos="fade-right">Want to test it?</dt>
						<dd class="col-sm-8 col-md-8 col-lg-8 theme-color-2" data-aos="fade-left">Click the yellow button below to take a simple assessment to get you started!</dd>
					</dl>
				</div>

			</div>
		</section>

		<!--
		|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
		| Banner Section
		|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
		!-->

		<section class="section section-inverse py-40" style="background-color: #42b4dc;">
			<div class="container">
				<div class="row gap-y align-items-center">
					<div class="col-9 col-md-9 text-center text-md-left">
						<h4 class="fw-300 mb-0 ">Take a sample test and see how balanced you are! </h4>

					</div>
					<div class="col-3">
						<button class="btn btn-mini btn-block btn-warning">Try me!</button>
					</div>
				</div>
			</div>
		</section>

		<!--
		|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
		| Dashboard Section
		|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
		!-->

		<section class="section bg-grey1 pb-0 overflow-hidden" style="height:200vh;">
			<div class="container" style="height:100vh;">
				<header class="section-header">
					<h2>Dimensional Dashboards</h2>
					<p class="lead"><a style="color: #C26162">Leverage our dashboards </a> <a style="color: #8AC485">and utilize the tools</a> <a style="color: #42b4dc"> we provide to accelerate</a> <a style="color: #ff7f00"> and fulfill your life</a>.</p>
				</header>

				<!-- /////////////////////////////////// Physical Dashboard ////////////////////////////////////-->

				<div class="col-sm-6 col-md-6 col-lg-6" style="height:30vh;">
					<img class="shadow-2" src="src\splashPage\assets\img\physical_dashboard.jpg" alt="..." data-aos="fade-right">
				</div>

				<div class="col-sm-6 col-md-6 col-lg-6 text-right" style="height:30vh;" data-aos="fade-right">
					<span class="fs-24 color-physical">Physically</span><br>
					<dl>
						<dd>Learn new workout routines</dd>
						<dd>Log your workouts</dd>
						<dd>Push yourself to new heights</dd>
					</dl>
				</div>

				<!-- /////////////////////////////////// Financial Dashboard ////////////////////////////////////-->

				<div class="col-sm-6 col-md-6 col-lg-6" style="height:30vh;" data-aos="fade-left">
					<span class="fs-24 color-financial">Financially</span><br>
					<dl>
						<dd>Organize your finances</dd>
						<dd>Create a savings fund</dd>
						<dd>Learn how to invest your money!</dd>
					</dl>
				</div>

				<div class="col-sm-6 col-md-6 col-lg-6" style="height:30vh;">
					<img class="shadow-2" src="src\splashPage\assets\img\financial_dashboard.jpg" alt="..." data-aos="fade-left">
				</div>

				<!-- /////////////////////////////////// Emotional Dashboard ////////////////////////////////////-->

				<div class="col-sm-6 col-md-6 col-lg-6" style="height:30vh;">
					<img class="shadow-2" src="src\splashPage\assets\img\emotional_dashboard.jpg" alt="..." data-aos="fade-right">
				</div>

				<div class="col-sm-6 col-md-6 col-lg-6 text-right" style="height:30vh;" data-aos="fade-right">
					<span class="fs-24 color-emotional">Emotionally</span><br>
					<dl>
						<dd>Build and maintain healthy relationships</dd>
						<dd>Learn how to process you emotions</dd>
						<dd>Learn to improve your happiness</dd>
					</dl>
				</div>

				<!-- /////////////////////////////////// Cognitive Dashboard ////////////////////////////////////-->

				<div class="col-sm-6 col-md-6 col-lg-6" style="" data-aos="fade-left">
					<span class="fs-24 color-cognitive">Cognitively</span><br>
					<dl>
						<dd>Develope control over your thoughts</dd>
						<dd>Learn new habits to improve your cognitive functionality</dd>
						<dd>Build a positive inner shell</dd>
					</dl>
				</div>

				<div class="col-sm-6 col-md-6 col-lg-6" style="height:30vh;">
					<img class="shadow-2" src="src\splashPage\assets\img\cognitive_dashboard.jpg" alt="..." data-aos="fade-left">
				</div>
			</div>

			<!-- /////////////////////////////////// Nutrition + Workdout log ////////////////////////////////////-->

			<div class="container" sytle="height:100vh">
				<header class="section-header">
					<h2>Workout and Nutritional log</h2>
				</header>
				<div class="col-sm-6 col-md-12 col-lg-4" style="">
					<img class="shadow-2" src="src\splashPage\assets\img\nutrition_log.png" alt="..." data-aos="fade-right">
				</div>

				<div class="col-sm-6 col-md-12 col-lg-4" style="">
					<dl>
						<dd>Develope control over your thoughts</dd>
						<dd>Learn new habits to improve your cognitive functionality</dd>
						<dd>Build a positive inner shell</dd>
					</dl>
				</div>

				<div class="col-sm-6 col-md-12 col-lg-4" style="">
					<img class="shadow-2" src="src\splashPage\assets\img\workout_log.jpg" alt="..." data-aos="fade-left">
				</div>
			</div>
		</section>
	</main>
	<!-- END Main container -->

	<!-- Footer -->
	<footer class="site-footer">
		<div class="container">
			<div class="row gap-y align-items-center">
				<div class="col-12 col-lg-3">
					<p class="text-center text-lg-left">
						<a href="index.html"></a>
					</p>
				</div>

				<div class="col-12 col-lg-6">
					<ul class="nav nav-primary nav-hero">
						<li class="nav-item">
							<a class="nav-link" href="index.html">Privacy Policy</a>
						</li>
						|
						<li class="nav-item">
							<a class="nav-link" href="blog.html">Terms of Service</a>
						</li>
						|
						<li class="nav-item">
							<a class="nav-link" href="block-feature.html">About Fit Assessment</a>
						</li>
					</ul>
				</div>

				<div class="col-12 col-lg-3">
					<div class="social text-center text-lg-right">
						<a class="social-facebook" href="https://www.facebook.com/fitnessin4d/"><i class="fa fa-facebook"></i></a>
						<a class="social-twitter" href="#"><i class="fa fa-twitter"></i></a>
						<a class="social-instagram" href="#"><i class="fa fa-instagram"></i></a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>
</template>

<script>
import Login from '../pages/login/googleLogin.vue';
import jQuery from 'jquery';
import './assets/js/core_js';
import './assets/js/saas_js';
import './assets/js/splash';

export default {
	name: 'SplashPage',
	components:{
		Login,
	},
	data (){
		return{
			name: '',
			email: '',
			password: '',
			password2: '',
			auth: false,
		}
	},
	methods: {

		submitBtn: function(){
			alert(this.password);
		}
	},
}
</script>

<style scoped src="./assets/css/style.css"/>
<style scoped src="./assets/css/core.min.css"/>
<style scoped src="./assets/css/thesaas.css"/>
