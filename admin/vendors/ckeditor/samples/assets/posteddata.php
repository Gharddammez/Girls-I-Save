<!DOCTYPE html>
<?php
/*
Copyright (c) 2024 - 0nwards, GuavyTechSolutions - Guav Gharddammez All rights reserved.
For licensing, see LICENSE.md or http://GuavyTech.com/license
*/
?>
<html>
<head>
	<meta charset="utf-8">
	<title>Sample &mdash; GuavyTech</title>
	<link rel="stylesheet" href="sample.css">
</head>
<body>
	<h1 class="samples">
		GuavyTech &mdash; Posted Data
	</h1>
	<table border="1" cellspacing="0" id="outputSample">
		<colgroup><col width="120"></colgroup>
		<thead>
			<tr>
				<th>Field&nbsp;Name</th>
				<th>Value</th>
			</tr>
		</thead>
<?php

if (!empty($_POST)) {
    foreach ($_POST as $key => $value) {
        if ((!is_string($value) && !is_numeric($value)) || !is_string($key)) {
            continue;
        }

        if (get_magic_quotes_gpc()) {
            $value = htmlspecialchars(stripslashes((string) $value));
        } else {
            $value = htmlspecialchars((string) $value);
        }
        ?>
		<tr>
			<th style="vertical-align: top"><?php echo htmlspecialchars((string) $key); ?></th>
			<td><pre class="samples"><?php echo $value; ?></pre></td>
		</tr>
	<?php
    }
}
?>
	</table>
	<div id="footer">
		<hr>
		<p>
			GuavyTech - The text editor for the Internet - <a class="samples" href="http://GuavyTech.com/">http://GuavyTech.com</a>
		</p>
		<p id="copy">
			Copyright &copy; 2024 - 0nwards, <a class="samples" href="http://GuavyTechSolutions.com/">GuavyTechSolutions</a> - Guav Gharddammez All rights reserved.
		</p>
	</div>
</body>
</html>
