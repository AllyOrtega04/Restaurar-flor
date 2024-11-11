let arePetalsFalling = false;

function toggleFlowers() {
    const button = document.querySelector('.fall-button');
    const flowers = document.querySelectorAll('.f');
    
    if (!arePetalsFalling) {
        // Hacer caer los pétalos
        flowers.forEach(flower => {
            const leaves = flower.querySelectorAll('.leaf:not(.leaf--1)');
            leaves.forEach((leaf, index) => {
                setTimeout(() => {
                    leaf.classList.remove('restore');
                    leaf.classList.add('falling');
                }, index * 100);
            });
        });
        button.textContent = 'Restaurar flores';
    } else {
        // Restaurar los pétalos
        flowers.forEach(flower => {
            const leaves = flower.querySelectorAll('.leaf:not(.leaf--1)');
            leaves.forEach((leaf, index) => {
                setTimeout(() => {
                    leaf.classList.remove('falling');
                    leaf.classList.add('restore');

                    // Eliminar la clase después de restaurar
                    setTimeout(() => {
                        leaf.classList.remove('restore');
                    }, 500); // Tiempo de transición
                }, index * 100);
            });
        });
        button.textContent = 'Hacer caer pétalos';
    }
    
    arePetalsFalling = !arePetalsFalling;
}
