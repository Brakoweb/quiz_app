$(document).ready(function () {
    // Add a click event listener to each option
    $('.option').on('click', function () {
        // Disable all options
        $('.option').off('click');
        
        // Determine if the answer is correct (modify this logic as needed)
        var selectedOption = $(this);
        var isCorrect = /* Your logic to determine correctness */;

        // Display feedback
        if (isCorrect) {
            selectedOption.addClass('correct');
            $('.feedback').text('Correct!');
        } else {
            selectedOption.addClass('incorrect');
            $('.feedback').text('Incorrect. Try again.');
        }
    });
});
