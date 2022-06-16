<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="Utils.CSRFUltils" %>
<%
    // generate a random CSRF token
    String csrfToken = CSRFUltils.getToken();
// place the CSRF token in a cookie
    javax.servlet.http.Cookie cookie = new javax.servlet.http.Cookie("csrfTokenMioca", csrfToken);
    cookie.setHttpOnly(true);
    response.addCookie(cookie);
%>
<!DOCTYPE html>
<html lang="zxx">

<head>
    <%--    Them the meta de dam bao CSP--%>
    <meta content="text/html; charset=UTF-8; X-Content-Type-Options=nosniff" http-equiv="Content-Type" />
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="robots" content="index, follow" />
    <title>Mioca - Handmade Goods eCommerce HTML Template</title>
    <meta name="description" content="Mioca - Handmade Goods eCommerce HTML Template" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Add site Favicon -->
    <link rel="shortcut icon" href="assets/images/favicon/favicon.ico" type="image/png">


    <!-- vendor css (Icon Font) -->
    <link rel="stylesheet" href="assets/css/vendor/bootstrap.bundle.min.css" />
    <link rel="stylesheet" href="assets/css/vendor/pe-icon-7-stroke.css" />
    <link rel="stylesheet" href="assets/css/vendor/font.awesome.css" />

    <!-- plugins css (All Plugins Files) -->
    <link rel="stylesheet" href="assets/css/plugins/animate.css" />
    <link rel="stylesheet" href="assets/css/plugins/swiper-bundle.min.css" />
    <link rel="stylesheet" href="assets/css/plugins/jquery-ui.min.css" />
    <link rel="stylesheet" href="assets/css/plugins/nice-select.css" />
    <link rel="stylesheet" href="assets/css/plugins/venobox.css" />

    <!-- Use the minified version files listed below for better performance and remove the files listed above -->
    <!-- <link rel="stylesheet" href="assets/css/vendor/vendor.min.css" />
    <link rel="stylesheet" href="assets/css/plugins/plugins.min.css" />
    <link rel="stylesheet" href="assets/css/style.min.css"> -->

    <!-- Main Style -->
    <link rel="stylesheet" href="assets/css/style.css" />

</head>

<body>

<!-- Header Area Start -->
<jsp:include page="header.jsp" />
<!-- Header Area End -->

<!-- breadcrumb-area start -->
<div class="breadcrumb-area">
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-12 text-center">
                <h2 class="breadcrumb-title">Faq</h2>
                <!-- breadcrumb-list start -->
                <ul class="breadcrumb-list">
                    <li class="breadcrumb-item"><a href="/home">Home</a></li>
                    <li class="breadcrumb-item active">Faq</li>
                </ul>
                <!-- breadcrumb-list end -->
            </div>
        </div>
    </div>
</div>
<!-- breadcrumb-area end -->



<!--Faq Policy area start-->
<div class="login-register-area pb-100px pt-100px faq-area">
    <div class="container">
        <div class="row">
            <div class="ml-auto mr-auto col-lg-9">
                <div class="checkout-wrapper">
                    <div class="inner-descripe" data-aos="fade-up" data-aos-delay="200">
                        <h4 class="title">Below are frequently asked questions, you may find the answer for yourself
                        </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus
                            metus malesuada, eleifend turpis. Mauris semper augue id nisl aliquet, a porta lectus
                            mattis. Nulla at tortor augue. In eget enim diam.
                            Donec gravida tortor sem, ac fermentum nibh rutrum sit amet. Nulla convallis mauris
                            vitae congue consequat. Donec interdum nunc purus, vitae vulputate arcu fringilla quis.
                            Vivamus iaculis euismod dui.</p>
                    </div>
                    <div id="faq" class="panel-group">
                        <div class="panel panel-default single-my-account" data-aos="fade-up" data-aos-delay="200">
                            <div class="panel-heading my-account-title">
                                <h3 class="panel-title"><span>1 .</span> <a data-bs-toggle="collapse"
                                                                            href="#my-account-1" class="collapsed" aria-expanded="true">Mauris congue
                                    euismod purus at semper?</a></h3>
                            </div>
                            <div id="my-account-1" class="panel-collapse collapse show" data-bs-parent="#faq">
                                <div class="panel-body">
                                    Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate,
                                    eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu
                                    viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem
                                    eleifend lorem
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default single-my-account" data-aos="fade-up" data-aos-delay="200">
                            <div class="panel-heading my-account-title">
                                <h3 class="panel-title"><span>2 .</span> <a data-bs-toggle="collapse"
                                                                            href="#my-account-2" aria-expanded="false" class="collapsed">Donec mattis
                                    finibus elit ut tristique?</a></h3>
                            </div>
                            <div id="my-account-2" class="panel-collapse collapse" data-bs-parent="#faq">
                                <div class="panel-body">Donec mattis finibus elit ut tristique. Nullam tempus nunc
                                    eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
                                    consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla
                                    ultricies,
                                    elit lorem eleifend lorem
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default single-my-account" data-aos="fade-up" data-aos-delay="200">
                            <div class="panel-heading my-account-title">
                                <h3 class="panel-title"><span>3 .</span> <a data-bs-toggle="collapse"
                                                                            href="#my-account-3">Aenean elit orci, efficitur quis
                                    nisl?</a></h3>
                            </div>
                            <div id="my-account-3" class="panel-collapse collapse" data-bs-parent="#faq">
                                <div class="panel-body">Donec mattis finibus elit ut tristique. Nullam tempus nunc
                                    eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
                                    consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla
                                    ultricies,
                                    elit lorem eleifend lorem
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default single-my-account" data-aos="fade-up" data-aos-delay="200">
                            <div class="panel-heading my-account-title">
                                <h3 class="panel-title"><span>4 .</span> <a data-bs-toggle="collapse"
                                                                            href="#my-account-4">Pellentesque habitant morbi
                                    tristique?</a></h3>
                            </div>
                            <div id="my-account-4" class="panel-collapse collapse" data-bs-parent="#faq">
                                <div class="panel-body">Donec mattis finibus elit ut tristique. Nullam tempus nunc
                                    eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
                                    consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla
                                    ultricies,
                                    elit lorem eleifend lorem
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default single-my-account m-0" data-aos="fade-up"
                             data-aos-delay="200">
                            <div class="panel-heading my-account-title">
                                <h3 class="panel-title"><span>5 .</span> <a data-bs-toggle="collapse"
                                                                            href="#my-account-5">Nam pellentesque aliquam metus?</a>
                                </h3>
                            </div>
                            <div id="my-account-5" class="panel-collapse collapse" data-bs-parent="#faq">
                                <div class="panel-body">Donec mattis finibus elit ut tristique. Nullam tempus nunc
                                    eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
                                    consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla
                                    ultricies,
                                    elit lorem eleifend lorem
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--Faq Policy area end-->

<!-- Footer Area Start -->
<jsp:include page="footer.jsp" />
<!-- Footer Area End -->

<!-- Search Modal Start -->
<div class="modal popup-search-style" id="searchActive">
    <button type="button" class="close-btn" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
    <div class="modal-overlay">
        <div class="modal-dialog p-0" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <h2>Search Your Product</h2>
                    <form class="navbar-form position-relative" role="search">
                        <input type="hidden" name="csrfTokenMioca" value="<%= csrfToken %>"/>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search here...">
                        </div>
                        <button type="submit" class="submit-btn"><i class="pe-7s-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Search Modal End -->

<!-- Global Vendor, plugins JS -->

<!-- Vendor JS -->
<script src="assets/js/vendor/jquery-3.5.1.min.js"></script>

<script src="assets/js/vendor/bootstrap.bundle.min.js"></script>
<script src="assets/js/vendor/jquery-migrate-3.3.0.min.js"></script>
<script src="assets/js/vendor/modernizr-3.11.2.min.js"></script>

<!--Plugins JS-->
<script src="assets/js/plugins/swiper-bundle.min.js"></script>
<script src="assets/js/plugins/jquery-ui.min.js"></script>
<script src="assets/js/plugins/jquery.nice-select.min.js"></script>
<script src="assets/js/plugins/countdown.js"></script>
<script src="assets/js/plugins/scrollup.js"></script>
<script src="assets/js/plugins/jquery.zoom.min.js"></script>
<script src="assets/js/plugins/venobox.min.js"></script>


<!-- Use the minified version files listed below for better performance and remove the files listed above -->
<!-- <script src="assets/js/vendor/vendor.min.js"></script>
<script src="assets/js/plugins/plugins.min.js"></script> -->

<!-- Main Js -->
<script src="assets/js/main.js"></script>
</body>

</html>