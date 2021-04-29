<!DOCTYPE html>
    <html>
            <head>
                <title>login form</title>
            </head>
            <body>
                <section>
                    Welcome
                        <?php
                            $un = $_GET["reg_un"];
                            $pw = $_GET["reg_pass"];

                            if ($un == "galor" && $pw == "90986")
                                echo "<h2>Good morning " . $un . "</h2>";
                            else
                                echo "<h2>Who are you? you can't login</h2>";
                        ?>
                </section>
            </body>
    </html>
