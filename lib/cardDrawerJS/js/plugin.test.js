(function($) {
        // définition du plugin jQuery 
        $.fn.reverseText = function(params) {
                // Fusionner les paramètres par défaut et ceux de l'utilisateur
                params = $.extend( {minlength: 0, maxlength: 99999}, params);
                // Traverser tous les nœuds.
                this.each(function() {
                        // Exprimer un nœud seul en objet jQuery
                        var $t = $(this);
                        // récupérer le texte
                        var origText = $t.text(), newText = '';
                        // Est-ce que la longueur du texte est dans les limites définies ?
                        if (origText.length >= params.minlength &&  origText.length <= params.maxlength) {
                                // Inverser le texte
                                for (var i = origText.length-1; i >= 0; i--) newText += origText.substr(i, 1);
                                        $t.text(newText);
                        }
                });
        // Permettre le chaînage par jQuery
        return this;
        };
})(jQuery);