
(function ($) {
    "use strict";


    /*==================================================================
   [ Focus input ]*/
    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');
    var form = $('.login100-form');
    var formName = form.attr('name');
    var formAction = form.attr('action');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        if (check === true) {
            var formData = getFormData(input);
            jQuery.post(formAction, formData, function(apiResponse) {
                if (apiResponse['Success'] === true) {
                    window.location.href = `/?succ=${formName}`;
                } else {
                    var errorMsg = apiResponse['error'] ? apiResponse['error'] : "Ошибка";
                    alert(errorMsg);
                }
            });
        }

        return false;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).val().trim() == '') {
            return false;
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    function getFormData(inputs) {
        var indexed_array = {};
        $.map(inputs, function (n, i) {
            indexed_array[n['name']] = n['value'];
        });
        return indexed_array;
    }

})(jQuery);