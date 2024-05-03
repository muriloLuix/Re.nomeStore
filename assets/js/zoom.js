document.addEventListener('DOMContentLoaded', function () {
    const zoomableImgs = document.querySelectorAll('.zoomable-img');

    zoomableImgs.forEach(img => {
        let isZoomed = false;

        img.addEventListener('click', function (event) {
            if (isZoomed) {
                img.style.transform = 'none';
                isZoomed = false;
            } else {
                const boundingRect = event.target.getBoundingClientRect();
                const mouseX = event.clientX - boundingRect.left;
                const mouseY = event.clientY - boundingRect.top;
                const imgWidth = event.target.width;
                const imgHeight = event.target.height;

                const zoomFactor = 1.5;

                const offsetX = (mouseX / imgWidth) * 100;
                const offsetY = (mouseY / imgHeight) * 100;

                event.target.style.transformOrigin = `${offsetX}% ${offsetY}%`;
                event.target.style.transform = `scale(${zoomFactor})`;
                isZoomed = true;
            }
        });
    });
});
