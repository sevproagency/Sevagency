
document.querySelectorAll('.see-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const target = document.getElementById(targetId);
        if (target.style.display === 'block') {
            target.style.display = 'none';
        } else {
            target.style.display = 'block';
        }
    });
});

function submitOrderForm(serviceName) {
    alert("Commande pour le service : " + serviceName + " reçue !");
    return false; // empêcher la soumission réelle du formulaire pour la démo
}
