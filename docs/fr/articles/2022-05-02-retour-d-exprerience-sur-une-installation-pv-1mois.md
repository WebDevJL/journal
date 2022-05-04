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

Nous chauffons notre ECS (eau chaude sanitaire) en heures creuses et nous avons isolé, avec de la laine de mouton brute, le cumulus le premier hiver, car il se trouve dans le garage et il peut y faire 8°c...

Cela nous avait permis de réduire de 12kWh pour chauffer l'ECS à 8kWh pour une journée et consommation d'ESC équivalente.

## Pourquoi une installation PV

Je suis assez regardant sur la consommation électrique. 
J'ai réalisé une estimation de notre consommation, par élément électrifié au tout début, car, pour moi, connaitre la consommation du foyer et la répartition sur les équipements est le premier pas vers une meilleure efficacité et une sensibilisation à la sobriété énergétique.

*Inclure tableau Google sheets*

J'avais estimé à 30% la part de consommation du cumulus ECS.

J'ai aussi suivi de près notre consommation, un relevé journalier sur le compteur EDF pendant plusieurs années, puis plus récemment, un relevé hebdommadaire, pour connaitre notre consommation passive (e.g. combien la maison a-t-elle besoin pendant nos absences ?), notre consommation jour et nuit, et pour le cas du chauffe-eau, un comptage spécifique à partir novembre 2019.

Voici ce que ça donne depuis 2014 :

*Image du pivot HC, HP et consommation ECS*

Cela a confirmé l'estimation du cumulus.

J'ai aussi réalisé une simulation d'ensoleillement avec [Heliorama](https://www.heliorama.com/) au niveau du toit de la maison (point le plus bas de la propriété) et au niveau de la terrasse la plus haute sur la propriété (pour le plus ensoleillé).

*Mettre graphique comparatif*

Comme vous le voyez, il n'y a pas photo ! 

Si l'on voulait produit de l'électricité avec le soleil, la terrasse est le meilleur site, même si la propriété n'a pas l'ensoleillement le plus idéal du monde.

## Pourquoi une réalisation qu'en 2022 ?

J'ai beaucoup lu sur le sujet (ex: [forum photovoltaique](https://forum-photovoltaique.fr/)) et j'ai simulé le coût sur les divers sites marchands qui vendent du matériel PV et je n'ai jamais démarré à cause du coût du matériel et du fait que les entreprises ne vendent que du 3kWc pour de la revente.

Aussi, le fait que l'installation ne pouvait être réalisé sur le toit de la maison me bloquait, car je ne voulais pas donner l'électricité non consommée (injection sur le réseau) à des entreprises qui me le revendent un prix de plus en plus élevé.

Fin 2021, je reçois un email sur mon alerte du boncoin intitulé "panneaux photovoltaïques".
Il s'agit d'un artisan qui promouvoir ses services pour utiliser la solution photovoltaïque pour chauffer l'eau sanitaire pour environ 1000 euros.
Je me dis *C'est dans mon budget !*. En effet, j'avais un budget max de 2000 euros et je ne cherchais pas à revendre mais plutôt autoconsommer au maximum.

## Présentation de l'installation 

Après quelques échanges très intéressants avec l'artisan de SolaireEthic (voir [son site web](https://solairethic.fr/) très intéressant), nous partons pour la solution suivante :

- 1 micro onduleur 4 MPPT 
- 1 ligne en AC enterrée de 120 m de long de la terrasse à la maison (à 50cm du tableau général)
- 8 panneaux de 190Wc recyclés (7-8 ans d'âge)

J'ai géré la partie optimisation de l'autoconsommation en commandant le routeur solaire de [Robin Emley](https://mk2pvrouter.co.uk/).

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

### Eau chaude sanitaire

On a mis le chauffe-eau sur 4/5 au lieu de 3/5 quand on chauffe sur les heures creuses.


Ce que j'ai observé est qu'on injecte environ 100Wh sur le réseau avec le routeur solaire, soit 1kWh tous les 10 jours.

### Consommation journalière avec présence 

### Consommation journalière en notre absence

En février 2022, nous avons été absent pendant 5 semaines. La consommation journalière moyenne était de 2.5 kWh.

*Insert typical day image*

En avril 2022, nous avons été absent pendant quelques jours. La consommation journalière moyenne est descendue à 0.7 kWh, soit -72%. Pas mal !
