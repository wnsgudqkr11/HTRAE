let isContentVisible = false;
        const contents = document.querySelectorAll('.buttonContent');
        const downArrow = document.querySelector('.underArrow');
        const upArrow = document.querySelector('.upArrow');
        const storyButton = document.querySelector('.allButton');

        function showMoreContents() {
            contents.forEach(buttonContent => {
                buttonContent.classList.add('active');
            });
            downArrow.style.display = 'none';
            upArrow.style.display = 'inline';
        }

        function showPreviousContents() {
            contents.forEach(buttonContent => {
                buttonContent.classList.remove('active');
            });
            upArrow.style.display = 'none';
            downArrow.style.display = 'inline';
        }

        function toggleContents() {
            if (isContentVisible) {
                showPreviousContents();
            } else {
                showMoreContents();
            }
            isContentVisible = !isContentVisible;
        }