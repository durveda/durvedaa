// mobile-length
$(document).on('keyup', '.mobile-length', function () {
    mobile = parseInt($(this).val());
    if (true == Number.isInteger(mobile)) {
        mobile = String(mobile);
        mobile = mobile.substr(0, 10);
        $(this).val(mobile);
    } else {
        $(this).val('');
    }
})
// //mobile-length

// pin-length
$(document).on('keyup', '.pin-length', function () {
    pin = parseInt($(this).val());
    if (true == Number.isInteger(pin)) {
        pin = String(pin);
        pin = pin.substr(0, 6);
        $(this).val(pin);
    } else {
        $(this).val('');
    }
})
// //pin-length

// name-validate
$(document).on('keyup', '.name-validate', function () {
    name = $(this).val();
    if (name == '') {
        $(this).val('');
    } else {
        name = name.match(/[a-zA-z .]/g);
        name = name.toString();
        if (name == 'null') {
            $(this).val('');
        } else {
            name = name.replace(new RegExp(',', 'g'), '');
            name = name.match(/[^_^`\[\]]/g);
            name = name.toString();
            name = name.replace(new RegExp(',', 'g'), '');
            name = name.replace(new RegExp('  ', 'g'), ' ');
            name = name.toLowerCase();
            $(this).val(name);
            $(this).css('textTransform', 'capitalize');
        }
    }
})

// //name-validate
function ajax_start() {
    $('#page-loader').css('display', 'block');
}

function ajax_end() {
    $('#page-loader').css('display', 'none');
}

// All Form Submit
// $(document).on('submit', "form", function (e) {
//     ajax_start();
//     e.preventDefault();
//     console.log(this);
//     var form = $(this);
//     var Form_Data = new FormData(form[0]);
//     $.ajax({
//         url: 'action.php',
//         cache: false,
//         type: 'post',
//         contentType: false,
//         processData: false,
//         dataType: 'json',
//         data: Form_Data,
//         success: function (data) {
// //            console.log(data);
//             if (data['type'] === 'success') {
//                 $('input[type=text],input[type=number],textarea').val('');
//             }
//             Swal.fire(
//                 data.notification,
//                 data.msg,
//                 data.type
//             );
//             ajax_end();
//         },
//         error: function (data2) {
//             console.log('Default Error');
//         }
//     });
// });
// //All Form Submit
$(document).on('click', "[href='#form']", function () {
    $('form').addClass('focus');
    setTimeout(function () {
        $('.focus').removeClass('focus');
        $('.first-field').focus();
    }, 1500);
})

$(document).ready(function () {
    $.ajax({
        url: 'panel/mobile.txt',
        type: 'get',
        cache: false,
        success: function (result) {
            if (result != '') {
                $('.phone-number-state').attr('href', 'tel:' + result);
                $('.phone-number-state span').html('Call Now - ' + result);
            } else {
                $('.phone-number-state').hide();
            }
        }
    });
});

$(document).ready(function () {
    $.ajax({
        url: 'panel/course_1.txt',
        type: 'get',
        cache: false,
        success: function (result) {
            $('.small-pack-sale-price').html(result + '/-');
        }
    });
});


$(document).ready(function () {
    $.ajax({
        url: 'panel/course_2.txt',
        type: 'get',
        cache: false,
        success: function (result) {
            $('.big-pack-sale-price').html(result + '/-');
        }
    });
});

$(document).on('click', '.popup-close-btn', function () {
    $('.popup-form').hide();
});

$(document).on('click', '#order-placed', function () {
    $('.popup-form').show();
});

const names = [
    {city: 'Jaipur', state: 'Rajasthan', name: 'Amit'},
    {city: 'Palwal', state: 'Haryana', name: 'Vimal Sharma'},
    {city: 'Ameerpeth', state: 'Heidrabaad', name: 'Raju Gupta'},
    {city: 'Firozabad', state: 'Uttar Pradesh', name: 'Kamal Singh'},
    {city: 'Mathura', state: 'Utter Pradesh', name: 'Rajul'},
    {city: 'Gandhinagar', state: 'Gujarat', name: 'Amitabh'},
    {city: 'Chandigarh ', state: 'Haryana', name: 'Vinod Kohli'},
    {city: 'Shimla', state: 'Himachal Pradesh', name: 'Arpit Bindra'},
    {city: 'Ranchi', state: 'Jharkhand', name: 'Sakti'},
    {city: 'Bengaluru', state: 'Karnataka', name: 'Sunil Khanna'},
    {city: 'Firozabad', state: 'Uttar Pradesh', name: 'Kamal Singh'},
    {city: 'Laknow', state: 'Utter Pradesh', name: 'Rihaan'},
    {city: 'Surat', state: 'Gujarat', name: 'Pawan'},
    {city: 'Ballbhgarh', state: 'Haryana', name: 'Neeraj'},
    {city: 'Kullu', state: 'Himachal Pradesh', name: 'Amar'},
    {city: 'Ranchi', state: 'Jharkhand', name: 'Mo. Hussain'},
    {city: 'Bengaluru', state: 'Karnataka', name: 'Richard'},
    {city: 'Bhopal', state: 'Madhya Pradesh', name: 'Vikram Singh'},
    {city: 'Mumbai', state: 'Maharashtra', name: 'Rohan'},
    {city: 'Aizawl', state: 'Mizoram', name: 'Sharad Kumar'},
    {city: 'Bhubaneswar', state: 'Odisha', name: 'Gopal Chaturvedi'},
    {city: 'Amaravati', state: 'Andhra Pradesh', name: 'Abhishek'},
    {city: 'Patna', state: 'Bihar', name: 'Puneet'},
    {city: 'Raipur', state: 'Chhattisgarh', name: 'Vijay'},
    {city: 'Panaji', state: 'Goa', name: 'Sankar'},
    {city: 'Gandhinagar', state: 'Gujarat', name: 'Ravi kant'},
    {city: 'Chandigarh', state: 'Haryana', name: 'sweeti daksh'},
    {city: 'Shimla', state: 'Himachal Pradesh', name: 'Payal sharma'},
    {city: 'Ranchi', state: 'Jharkhand', name: 'Jagdeesh'},
    {city: 'Bengaluru', state: 'Karnataka', name: 'Reena kumari'},
    {city: 'Thiruvananthapuram', state: 'Kerala', name: 'Amar'},
    {city: 'Bhopal', state: 'Madhya Pradesh', name: 'Rakesh mani'},
    {city: 'Mumbai', state: 'Maharashtra', name: 'Dabbu singh'},
    {city: 'Imphal', state: 'Manipur', name: 'Deepam soni'},
    {city: 'Shillong', state: 'Meghalaya', name: 'Jyoti singh'},
    {city: 'Aizawl', state: 'Mizoram', name: 'Pushpendra baghel'},
    {city: 'Kohima', state: 'Nagaland', name: 'Akash'},
    {city: 'Bhubaneswar', state: 'Odisha', name: 'Vivek'},
    {city: 'Chandigarh', state: 'Punjab', name: 'Lokesh'},
    {city: 'Gangtok', state: 'Sikkim', name: 'Mohit verma'},
    {city: 'Chennai', state: 'Tamil Nadu', name: 'Nikhil Verma'},
    {city: 'Hyderabad', state: 'Telangana', name: 'Sonal '},
    {city: 'Agartala', state: 'Tripura', name: 'Priya'},
    {city: 'Lucknow', state: 'uttar pradesh', name: 'Sonu'},
    {city: 'Dehradun ', state: 'Uttarakhand', name: 'Gopal'},
    {city: 'Kolkata', state: 'West Bengal', name: 'Rahul Yadav'}
];
let orderindex = 0;
let lastOrder = names.length;

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(names);

function showOrderPopup() {
    let index = orderindex++;
    let name = names[index].name;
    let city = names[index].city;
    let state = names[index].state;
    $('#order-placed .name').html(name);
    $('#order-placed .city').html(city);
    $('#order-placed .state').html(state);
    $('#order-placed').addClass('show');
    setTimeout(function () {
        $('#order-placed').removeClass('show');
    }, 4000);
    if (orderindex == lastOrder) {
        // clearInterval(intarval);
        orderindex = 0;
    }
}

const interval = setInterval(function () {
    showOrderPopup();
}, 7000);

setTimeout(function () {
    showOrderPopup();
}, 1000);

$(document).on('click', '#order-placed button', function () {
    $('#order-placed').removeClass('show');
    clearInterval(interval);
});

$(document).ready(function () {
    setTimeout(function () {
        $('.popup-form').show();
        setTimeout(function () {
            $('.popup-form').show();
        }, 20000);
    }, 10000);
});
