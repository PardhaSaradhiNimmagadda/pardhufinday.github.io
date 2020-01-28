$(document).ready(function () {
    let questionAnswers = {
        1: {
            answer: "It's worth it! You should receive a very high tax refund",
            color: "#00b2a9"
        },
        2: {
            answer: "It's worth it! You should receive a very high tax refund",
            color: "#a50270"
        },
        3: {
            answer: "You can expect a high tax refund",
            color: "#a50270"
        },
        4: {
            answer: "You are obliged to file your taxes",
            color: "#00b2a9"
        },
        5: {
            answer: "You can expect a high tax refund",
            color: "#a50270"
        },
        6: {
            answer: "You are obliged to file your taxes",
            color: "#00b2a9"
        },
        7: {
            answer: "You can expect a high tax refund",
            color: "#a50270"
        },
        8: {
            answer: "It's worth it! You should receive a very high tax refund",
            color: "#00b2a9"
        }
    }
    $('.item_checkbox').click(function () {
        let answer_length = $('.item_checkbox:checked').length;
        if ($(this).prop('checked')) {
            let value = $(this).val();
            let answer = questionAnswers[value];
            
            $('.refund-footer .check-box-message span').text(answer.answer).css('color', answer.color);
            $('.refund-footer .check-box-message').removeClass('js-hide');
            confetti.start(1500, 200, 500);
        }

        if (answer_length === 0) {
            $('.refund-footer .check-box-message').addClass('js-hide');
        }
    })
});