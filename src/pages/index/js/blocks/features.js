export function features() {
    const parents = document.querySelectorAll(".features__box");
    const buttons = document.querySelectorAll(".features__box-title");
    const contents = document.querySelectorAll(".features__box-description");

	buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(e.target && e.target.classList.contains('features__box-title')) {
                const parent = btn.parentNode;
                const content = parent.querySelector(".features__box-description");
                
                hide()
                parent.classList.add("features__box_active");
                btn.classList.add("features__box-title_active");
                content.classList.add("features__box-description_active");
            }
        });
    });

    function hide() {
        parents.forEach(item => {
            item.classList.remove('features__box_active');
        });

        buttons.forEach(item => {
            item.classList.remove('features__box-title_active');
        });
        
        contents.forEach(item => {
            item.classList.remove('features__box-description_active');
        });
	}

}