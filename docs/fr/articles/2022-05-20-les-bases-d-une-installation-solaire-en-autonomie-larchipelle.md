---
isDraft: true
title: "Les bases d'une installation solaire en autonomie, par L'Archipelle"
description: "Mes notes du Vlog réalisé par L'Archipelle"
date: 2021-mm-dd
heroImage: '/images/default.jpg'
heroAlt: Image par défaut
meta:
  keywords:
    - Energie
    - Energie solaire
    - Autoconsommation
    - Résilience
---

## Pourquoi une installation solaire en autonomie

Il faut se poser la question "Pourquoi". Il y a 2 choix :

- pour un site isolé
- pour un site hybride, e.g. toujours connecté au réseau, mais pouvant passer en autonomie temporairement.

En particulier, les micro coupures sont gérables en système hybride si l'on souhaite rester connecté au réseau.

Le cas du raccordement pour vendre la production PV est hors sujet.

## Connaitre sa consommation

Concrètement, il faut :

- lister les éléments qui consomment de l'électricité dans le logement (kWh)
- déterminer leur puissance individuelle

Il faut savoir que pour une grosse disqueuse ou un poste à souder peut rendre compliquer le dimensionnement de l'onduleur qui devra délivrer au moins la puissance de l'élément le plus puissant dans le logement (on ne parle même pas de l'usage simultané de plusieurs appareils...)

Il faut alors trouver une autre solution pour alimenter les gros appareils, comme par exemple :

- se brancher chez un voison : en utilisant [un wattmètre](https://www.google.com/search?q=wattmetre), on peut s'arranger avec le voison pour lui payer ce qu'on utilise
- louer un groupe électrogène à la bonne puissance : cela nous rend dépendant de l'essence mais si le groupe est partagé

### Comment mesurer la consommation d'un appareil

Il faut [un wattmètre](https://www.google.com/search?q=wattmetre).
Cela donne plusieurs métriques : Wh, VA et la tension.

Par exemple, pour griller 10 tranches de pain, il faut 128 Wh sur quelques minutes.

Voir mon tableau sur le sujet [dans Google Sheet](https://docs.google.com/spreadsheets/d/1-1A2I04MqVy3-zxMwQJ7Zy83OP200ruxGRUNXsHlNbQ/edit?usp=sharing) listant les appareils les plus utilisés chez moi.

## Calculer la consommation en mode dégradé

Une fois qu'on connait sa consommation globale, il faut déterminer ce qu'on peut consommer quand la production solaire est moyenne ou mauvaise.
Autrement dit, il faut se poser les questions suivantes :

- Que s'autorisons-nous d'utiliser ?
- Devons-nous faire des concessions sur certains usages ?
- Comment pouvons-vous remplacer un usage électrique en hiver ?
- Comment pouvons-nous optimiser notre usage de la production PV en été ?

Ainsi, avoir des appareils électriques peut-être instéressant, selon la période de l'année.
Par exemple,

- Utiliser un plaque électrique l'été à la place d'un cuisinière à bois est plus logique, car on ne veut pas chauffer la maison en été ! Et la plaque de cuisson électrique peut être programmé. C'est la cuisine d'été.
- Pour faire griller le pain, si on est résilient, on utilisera le grille-pain l'été et la cuisinière à bois l'hiver.
- Pour le four, le poêle de masse l'hiver vs le four solaire l'été.
- Pour sécher les légumes, herbes et fruits, on utilisera le déhydrateur en été.
- Pour couper le bois, on utilisera une tronçoneuse électrique pour couper le bois l'été.
- Pour broyer les végétaux, pour tondre l'herbe avec des appareils électriques.

En mode résilience, on doit multiplier le matériel.
Le stockage va plus loin que l'usage de batteries.

## Dimensionner les batteries

On prend notre consommation en mode dégradé et on détermine le nombre de jours d'autonomie souhaités.

```maths
[consommation en mode dégradé (kWh)] x [nombre de jours] = [Puissance totale des batteries]
```

A suivre sur une prochaine vidéo de l'Archipel ou [tester le simulation de Wattuneed](https://www.wattuneed.com/fr/content/56-dimensionner-votre-kit-solaire-autonomes-autoconsommation).

## Choisir sa technologie de batterie

On a :

| Technologie | Avantanges                                                                                                                                                                  | Inconvénients                                                                                                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OPZS        |                                                                                                                                                                             |                                                                                                                                                                                   |
| Li-Ni-Fe    | Meilleure durée de vie et coût sur le long terme                                                                                                                            | Entretien obligatoire                                                                                                                                                             |
| Li-ion      | Il faut penser au recyclage des batteries de PC et cie, où si une cellule est HS, l'ensemble de la batterie est HS. En réalité, sur 6 cellules, une seule est peut-être KO. | C'est toutefois long et fastidieux à démonter et tester. Il faut aussi faire attention aux cours-circuits, car les batteries sont toxiques si elles s'enflamment ou surchauffent. |
| Gel         | Facilité d'usage et le zéro entretien                                                                                                                                       | Durée de vie et réutilisation impossible                                                                                                                                          |

On doit penser aussi :

- A la place qu'on a pour stocker les batteries
- De la volonté de faire de l'entretien ou pas

### Batteries Nickel-Fer vs Lithium vs Gel
