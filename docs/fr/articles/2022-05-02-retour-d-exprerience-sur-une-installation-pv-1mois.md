---
isDraft: true
title: "Installation PV - quel retour d'expérience après un mois calendaire complet ?"
description: "Fin mars 2022, nous avons mis en service notre installation photovoltaïque. Regardons les données et les conclusions"
date: 2021-mm-dd
heroImage: "/images/default.jpg"
heroAlt: Image par défaut
meta:
  keywords:
    - Energie
    - Energie solaire
    - Autoconsommation
    - Eau chaude sanitaire
---

## Présentation 

Il y a 7 ans, nous avons acheté notre maison. 
La propriété fait environ 4000 m², en terrasse très rocheuses.

Rien de très accueillant pour planter quelque chose (on a essayé...), mais exploitable pour poser quelques panneaux PV.

Nous chauffons notre eau chaude sanitaire (ECS) en heures creuses et nous avons isolé, avec de la laine de mouton brute, le cumulus de 200 litres le premier hiver, car il se trouve dans le garage et il peut y faire 8°c...

Cela nous avait permis de réduire de 12-13kWh pour chauffer l'ECS à 8-10kWh pour une journée et pour une consommation d'ESC équivalente.

## Pourquoi une installation PV

Je suis assez regardant sur la consommation électrique et je suis d'accord avec ceux qui pronent [la sobriété énergétique](https://negawatt.org/La-sobriete-energetique) pour réduire notre impact sur l'environnement. 

J'ai réalisé une estimation de notre consommation en 2015, en listant chaque élément électrifié au tout début, car, pour moi, connaitre la consommation du foyer et la répartition sur les équipements est le premier pas vers une meilleure efficacité et une sensibilisation à la sobriété énergétique.

*Inclure tableau Google sheets*

Par exemple, j'avais estimé à 30% la part de consommation du cumulus ECS. Ce tableau n'inclut pas le four, le lave-vaisselle et le purificateur d'air ([CTA5 de Murprotec](https://www.murprotec.fr/filtre-cta.php)).

J'ai aussi suivi de près notre consommation, un relevé journalier sur le compteur EDF pendant plusieurs années, puis plus récemment, un relevé hebdommadaire, pour connaitre notre consommation passive (e.g. combien la maison a-t-elle besoin pendant nos absences ?), notre consommation jour et nuit, et pour le cas du chauffe-eau, un comptage spécifique à partir novembre 2019 après acheter un vieux compteur numérique d'EDF.

Voici ce que ça donne depuis 2014 :

*Image du pivot HC, HP et consommation ECS*

Cela a confirmé l'estimation du cumulus.

J'ai aussi réalisé une simulation d'ensoleillement avec [Heliorama](https://www.heliorama.com/) au niveau du toit de la maison (point le plus bas de la propriété) et au niveau de la terrasse la plus haute sur la propriété (pour le plus ensoleillé).

*Mettre graphique comparatif*

Comme vous le voyez, il n'y a pas photo ! 

Si l'on voulait produire de l'électricité avec le soleil, la terrasse est le meilleur site, même si la propriété n'a pas l'ensoleillement le plus idéal du monde vu que nous sommes sur le premier tiers des pentes d'une colline de 300 mètres d'altitude.

## Pourquoi une réalisation qu'en 2022 ?

J'ai beaucoup lu sur le sujet (ex: [forum photovoltaique](https://forum-photovoltaique.fr/)) et j'ai simulé le coût sur les divers sites marchands qui vendent du matériel PV et je ne suis lancé à cause du coût du matériel et du fait que les entreprises ne vendent que du 3kWc pour de la revente avec des tarifs de 7000 à 15000 euros.

Aussi, le fait que l'installation ne pouvait être réalisé sur le toit de la maison me bloquait, car je ne voulais pas donner l'électricité non consommée gratuitement  (injection sur le réseau) à des entreprises (Enedis, Engie, etc) qui nous le revendent un prix de plus en plus élevé.

Fin 2021, je reçois un email sur mon alerte du boncoin intitulé "panneaux photovoltaïques".
Il s'agit d'un artisan qui promouvoit ses services pour utiliser la solution photovoltaïque pour l'ECS à plus ou moins 1000 euros.
Je me dis *C'est dans mon budget !*. En effet, j'avais un budget max de 2000 euros et je ne cherchais pas à revendre mais plutôt autoconsommer au maximum.

## Présentation de l'installation 

Après quelques échanges très intéressants avec l'artisan de SolaireEthic (voir [son site web](https://solairethic.fr/) très intéressant), nous partons pour la solution suivante :

- 1 micro onduleur APSystems 4 MPPT 
- 1 ligne en AC enterrée de 120 m de long de la terrasse cible sur la propriété à la maison (à 50cm du tableau général)
- 8 panneaux de 190Wc recyclés (7-8 ans d'âge)

J'ai géré la partie optimisation de l'autoconsommation en commandant le routeur solaire de [Robin Emley](https://mk2pvrouter.co.uk/), monté par [Le Profes'Solaire](https://sites.google.com/view/le-professolaire/) (malheureusement, il a arrêté son service de montage...).

Voici le plan de l'installation :

*Inclure l'image du plan final*

## Que disent les chiffres après un mois ?

Du 1er avril and 30 avril, nous avons :

| produit (kWh) | autoconsommé (kWh) | injecté sur le réseau (kWh) |
| - | - | - |
| 160,6 | 147,6 | 13 |

Nous avons donc une belle consommation de la production (> 90%).
Il y aurait moins d'injection si j'avais branché la pince ampèremétrique du routeur solaire dans le bon sens, ce que j'ai réalisé le 4 avril.

Si l'on compare les mêmes données de la mise en service le 27 mars au 4 avril, on voit :

| produit (kWh) | autoconsommé (kWh) | injecté sur le réseau (kWh) |
| - | - | - |
| 30.8 | 12,8 | 18 |

soit à peine 40%. C'est dommage vu qu'on ne peut revendre quand les panneaux sont installés au sol...

## Quelles sont mes observations ?

### Routeur solaire 

Il est très efficace.
J'ai observé qu'on injecte environ 100Wh sur le réseau avec le routeur solaire, soit 1kWh tous les 10 jours.
C'est très marginal.

Par contre, les compteurs mécaniques que j'ai mis aux sorties du routeur ne permettent de compter les kWh précisemment si la résistance est le chauffe-eau, car la puissance produite est bien inférieure à la puissance du chauffe-eau. En diminuant la résistance, cela fonctionnerait mieux.
En fonction de la puissance de l'appareil, il y avait moins de comptage à cause l'intermitence du courant envoyé par le routeur.

En effet, avec un déshydrateur de 700W de puissance, le décompte est plus juste.

### Eau chaude sanitaire

On a mis le chauffe-eau sur 4/5 au lieu de 3/5 quand on chauffe sur les heures creuses.
Avec une journée plutôt belle, même si un peu grise, le soleil chauffe largement ce qu'il faut pour la journée, si ce n'est plus.

S'il fait plus mauvais, il y aurait 2 jours d'eau chaude en stock, selon les usages bien sûr.

Je me suis posé la question d'installer un deuxième cumulus de 200 litres pour stocker sous forme d'eau chaude la production solaire.
Toutefois, c'est une investissement de 700 à 800 euros et le besoin n'y est pas vraiment vu qu'on n'a pas d'utilité de 400 litres en réalité et nous accueillons 2 à 3 persones de plus que très rarement dans l'année.

### Problème de gestion entre l'alimentation via le routeur et via le connecteur HC/HP

J'ai mis en parallèle les deux alimentations du chauffe-eau. 
Toutefois, il faudrait que je puisse avoir un interrupteur qui commande la source d'alimentation à côté du routeur plutôt que de le faire manuellement.

Il y a aussi des comportements bizarre sur l'efficacité du contacteur où il ne reçoit pas le signal ou l'absence du signal d'Enedis.

### Consommation journalière avec présence 

*Insérer image d'une semaine*

On voit très clairement le refrigérateur qui se met en route de façon cyclique.

### Consommation journalière en notre absence

En février 2022, nous avons été absent pendant 5 semaines. La consommation journalière moyenne était de 2.5 kWh.

*Insert typical day image from february 2022*

En avril 2022, nous avons été absent pendant quelques jours. La consommation journalière moyenne est descendue à 0.7 kWh, soit -72%. Pas mal !

*Insert typical day on April 22 2022*
