Service de notes à créer.
Il doit pouvoir :
- Retourner les notes d'un étudiant  api/grades/students/id
- Retourner la moyenne d'un étudiant api/grades/students/id/average
- Retourner la moyenne de la classe  api/grades/average

Si on a le temps :
- Ajouter une note
- Modifier une note
- Supprimer une note

Pour ce faire, il faut respecter l'architecture clean, càd :
- une application avec son métier (voir les consignes décrites ci-dessus)
- un core avec ses entités
- une infrastructure avec ses repositories
- et une couche présentation qui sera sous forme d'api, comme pour le service des étudiants


Ensuite, il faudra câbler le nouveau microservice à la partie web.