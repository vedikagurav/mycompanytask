document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', function() {
            if (this.classList.contains('expanded')) {
                this.classList.remove('expanded');
            } else {
                boxes.forEach(box => box.classList.remove('expanded'));
                this.classList.add('expanded');
            }
        });
    });
});
