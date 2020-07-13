<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel React App</title>

        <!-- Bootstrap -->
        <link rel="stylesheet" href="<?= asset('vendors/bootstrap/dist/css/bootstrap.min.css'); ?>" />

        <!-- Font Awesome -->
        <link rel="stylesheet" href="<?= asset('vendors/font-awesome/css/font-awesome.min.css'); ?>" />
        <!-- NProgress -->  
        <link rel="stylesheet" href="<?= asset('vendors/nprogress/nprogress.css'); ?>" />

        <!-- Custom Theme Style -->
        <link rel="stylesheet" href="<?= asset('build/css/custom.min.css'); ?>" />
         <!-- Custom Theme Style -->

        <link rel="stylesheet" href="<?= asset('build/css/custom.css'); ?>" />


    </head>
    <body class="nav-md">
           

            <div id="root">
                
            </div>

            <script type="text/javascript" src="<?= asset('js/app.js'); ?>" ></script>

              <!-- jQuery -->
            <script src="<?= asset('vendors/jquery/dist/jquery.min.js'); ?>"></script>
            <!-- Bootstrap -->
            <script src="<?= asset('vendors/bootstrap/dist/js/bootstrap.min.js'); ?>"></script>

           
            <!-- FastClick -->
            <script src="<?= asset('vendors/fastclick/lib/fastclick.js'); ?>"></script>

            <!-- NProgress -->
            <script src="<?= asset('vendors/nprogress/nprogress.js'); ?>"></script>
            <!-- Custom Theme Scripts -->
            <script src="<?= asset('build/js/custom.min.js'); ?> "></script>

    </body>
</html>
