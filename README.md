🌀 Galerie 3D Rotative en CSS et JavaScript
Ce projet propose une galerie d’images rotative en 3D, réalisée entièrement avec HTML, CSS et un peu de JavaScript. Les images sont disposées dans un cylindre virtuel, et l'effet de rotation se déclenche dynamiquement au mouvement de la souris.

🎯 Fonctionnalités
Disposition circulaire en 3D de plusieurs images.

Effet de perspective réaliste avec ombre réfléchissante (box-reflect).

Rotation de la galerie via le mouvement de la souris.

Responsive verticalement (adapté à la taille de l’écran).

Animation continue si activée (animation: animate ...), possibilité d'ajout d'une animation CSS.

🛠️ Technologies utilisées
HTML5

CSS3 (transformations 3D, variables personnalisées, box-reflect)

JavaScript natif (interaction avec la souris)

🧭 Comment ça marche
Chaque <span> représente une image positionnée à un angle spécifique sur l’axe Y (--i:1, --i:2, etc.).

Ces angles sont multipliés par 45° pour disposer les images à intervalles réguliers (8 images → cercle complet).

L’effet de profondeur est créé par translateZ(400px).

Le JavaScript intercepte la position de la souris pour ajuster dynamiquement la rotation avec rotateY().

⚙️ Utilisation
Placez vos images dans le dossier images/ et nommez-les image01.jpg, image02.jpg, etc.

Ouvrez index.html dans votre navigateur.

Bougez la souris horizontalement pour faire pivoter la galerie.

