$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();
            var mobile = $("input#mobile").val();
            console.log(name, email, subject, message, mobile)

            var $this = $("#sendMessageButton");
            $this.prop("disabled", true);

            var serviceID = 'service_qnkjbcq';
            var templateID = 'template_t2vseam';

            var templateParams = {
                name: name,
                email: email,
                subject: subject,
                message: message,
                mobile: mobile,
            };

            emailjs.send(serviceID, templateID, templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                    $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success').append('</div>');
                    $('#contactForm').trigger("reset");
                }, function (error) {
                    console.log('FAILED...', error);
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
                })
                .finally(function () {
                    setTimeout(function () {
                        $this.prop("disabled", false);
                    }, 1000);
                });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
