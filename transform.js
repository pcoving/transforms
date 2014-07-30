$(function(){
	var a = 1;
	var b = 0;
	var c = 0;
	var d = 1;
	var e = 0;
	var f = 0;

$("#a_slider").slider({
    orientation: "horizontal",
    range: false,
    min: -3,
    max: 3,
    value: 1,
    step: .1,
    animate: true,
    slide: function (event, ui) {
        $("#a").text(ui.value);
	a = ui.value;
	compute();
    }
});
$("#b_slider").slider({
    orientation: "horizontal",
    range: false,
    min: -3,
    max: 3,
    value: 0,
    step: .1,
    animate: true,
    slide: function (event, ui) {
        $("#b").text(ui.value);
	b = ui.value;
	compute();
    }
});
$("#c_slider").slider({
    orientation: "horizontal",
    range: false,
    min: -3,
    max: 3,
    value: 0,
    step: .1,
    animate: true,
    slide: function (event, ui) {
        $("#c").text(ui.value);
	c = ui.value;
	compute();
    }
});
$("#d_slider").slider({
    orientation: "horizontal",
    range: false,
    min: -3,
    max: 3,
    value: 1,
    step: .1,
    animate: true,
    slide: function (event, ui) {
        $("#d").text(ui.value);
	d = ui.value;
	compute();
    }
});
$("#e_slider").slider({
    orientation: "horizontal",
    range: false,
    min: -300,
    max: 300,
    value: 0,
    step: 1,
    animate: true,
    slide: function (event, ui) {
        $("#e").text(ui.value);
	e = ui.value;
	compute();
    }
});
$("#f_slider").slider({
    orientation: "horizontal",
    range: false,
    min: -300,
    max: 300,
    value: 0,
    step: 1,
    animate: true,
    slide: function (event, ui) {
	    $("#f").text(ui.value);
	f = ui.value;
	compute();
    }
});
 
function reset() {
    a = 1;
    b = 0;
    c = 0;
    d = 1;
    e = 0;
    f = 0;
    $("#a_slider").slider("value", 1.0);
    $("#b_slider").slider("value", 0.0);
    $("#c_slider").slider("value", 0.0);
    $("#d_slider").slider("value", 1.0);
    $("#e_slider").slider("value", 0.0);
    $("#f_slider").slider("value", 0.0);
    $("#a").text(a);
    $("#b").text(b);
    $("#c").text(c);
    $("#d").text(d);
    $("#e").text(e);
    $("#f").text(f);
    compute();
    };

function compute() {
    $('#eqn').text('$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ $\\begin{bmatrix} x \\\\ y \\end{bmatrix}$ + $\\begin{bmatrix} e \\\\ f \\end{bmatrix}$ = $\\begin{bmatrix}' + a + '&' + b + '\\\\' + c + '&' + d + '\\end{bmatrix}$ $\\begin{bmatrix} x \\\\ y \\end{bmatrix}$ + $\\begin{bmatrix}' + e + '\\\\' + f + '\\end{bmatrix}$');
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);    
    $('#image').css('transform','matrix('+Math.abs(a)+', '+b+', '+c+', '+d+', '+e+', '+f+')');
    $('#image').css('-ms-transform','matrix('+a+', '+b+', '+c+', '+d+', '+e+', '+f+')');
    $('#image').css('-webkit-transform','matrix('+a+', '+b+', '+c+', '+d+', '+e+', '+f+')');

}

reset();
$("#reset").on("click", reset);
    });