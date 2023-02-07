class LocalStorageApi {
  constructor() {
    $('#program').before('<table><tr><th>tel</th><th>nom</th></tr><tr id="data"></tr></table>');
  }
  //
  set() {
    $('#set').on('click', function () {
      let tel = $('input[name=tel]').val();
      let nom = $('input[name=nom]').val();

      if (tel && nom) {
        alert('info bien enregistrée' + 'tel number:' + tel + 'nom:' + nom);
        localStorage.setItem('tel', tel);
        localStorage.setItem('nom', nom);
      } else {
        alert('champs ne peut être vide ');
      }
    });
  }
  //
  get() {
    $('#get').on('click', () => {
      if (localStorage.length == 0) {
        alert('localStorage est vide !');
        return;
      }
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        $('#data').append(`<td>${value}</td><br />`);
      }
    });
  }
  removeAll() {
    $('#removeAll').on('click', () => {
      confirm('supprimiez vous tout les donnes!!!')
        ? localStorage.clear()
        : alert('il y a  ' + localStorage.length + '  element dans localStorage');
    });
  }
}
