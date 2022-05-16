# Construire une base de données Node.js en utilisant [Prisma](https://www.prisma.io/) et [SQLite](https://www.sqlite.org/index.html)

---

<div style="text-align:center"><img src="./assets/img/17219288.png" /></div>

## Qu'est ce que Prisma ?

Prisma est ce qu'on appelle une [ORM](https://fr.wikipedia.org/wiki/Mapping_objet-relationnel) *Object Relational Mapping*. C'est un ensemble de librairie qui vous permettent d'intéragir de manière plus simple avec vos données en la notion d'objet.

Voici une liste d'ORM :
    - [Mongoose](https://mongoosejs.com/)
    - [SQLite](https://www.sqlite.org/index.html)
    - [RedBean](https://redbeanphp.com/index.php)
    - [Doctrine]()

![Prisma](./assets/img/d7585-10yxhekcxw8ij5k2wft1oow.png)

##### Est-ce que studio 3T est un ORM ?

*Bastien C. ~ Castres*

##### Est-ce que FakerJS est un ORM ?

*Myriem S.  ~ Castres*

Un débat s’installe très souvent entre les développeurs. Les ORM sont venus avec pour vocation : la réduction du code à écrire et à maintenir pour l’informaticien qui manipule la base de données depuis son logiciel. Néanmoins, bien que ces avantages semblent très souvent les plus recherchés par les développeurs, les spécialistes des bases de données leur trouvent beaucoup de défauts.

| Avantage        | Inconvénients   |
| :---------------:| :----------:   |
| Homogénéité  |      Performance          |
| Abstraction du SQL  |   Nouvel outil à apprendre            |
|  Portabilité |   Dépendant de l'outil             |
| Migration facilité |    Configuration complexe            |
|   |    Requête complexe            |

## Construire une base de donnée pour Twitter

Nous allons construire et manipuler une base de données  en Node.js, Prisma et SQLite.

SQLite est un ***moteur de base de données*** autonome. Donc pas besoin de configurer une base de données sur votre ordinateur. Le projet fonctionnera par lui-même si vous suivez les étapes de ce tutoriel.

## Prérequis

- Notions de Javascript et de NodeJS
- Notions de Typescript
- Installation global de ts-node WARNING
- Notions de SQL
  
## Setup

D'abord, créer votre répertoire de travail.

```bash
    mkdir jeremy_de_castres
    cd jeremy_de_castres
```

Ensuite, initialiser votre projet Node.

```bash
    npm init
    npm install prisma typescript ts-node @types/node --save-dev
    npm install @prisma/client
```

Normalement dans votre répertoire vous avez :
    - *node_modules*
    - package.json
    - package-lock.json

Présenter des explications *Explication sur les dépendances*

***Prisma*** est une base de données open-source. Il comprend un ORM JavaScript/TypeScript pour Node.js, des migrations et une interface graphique moderne pour visualiser et modifier les données dans votre base de données. Vous pouvez utiliser Prisma dans de nouveaux projets ou l’ajouter à un projet existant.

***typescript*** est un package pour compiler et exécuter du Typescript (Javascript typé).

***ts-node*** Environnement d’exécution TypeScript et REPL pour node.js, avec support de carte source.

***@types/node*** 

***@prisma/client*** est un ORM JavaScript/TypeScript pour Node.js auto-généré, sécurisé et moderne, adapté à vos données. Prend en charge les bases de données MySQL, PostgreSQL, MariaDB, SQLite.

##### NPX ou NPM ?

Npm est un outil qui utilise pour installer des paquets. Npx est un outil qui utilise pour exécuter des paquets.

*Marie A. ~ Castres*

##### Y sert à quoi le save-dev ?

Ce sont les paquets dont vous avez besoin lors du développement du projet, mais pas lors du déploiement du projet. Ces paquets ne sont pas construits lorsque le projet est déployé. Exemple : Un paquet pour serveur instantané pour le rerendering rapide d’une page Web en cours de développement.

*Bastien C. ~ Castres*

***Avant toute chose***, dès lors que vous travaillez en *Typescript*, vous devez déclarer un fichier *tsconfig.json* à la racine du répertoire.

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}
```

Maintenant que nous avons setup notre projet, il est temps d'utiliser Prisma. La commande ci-dessous va permettre d'afficher le helper de prisma. Vous avez accès à toutes les commandes prisma.

```bash
    npx prisma
```

Maintenant, la dernière étape avant de construire notre application est d’initialiser la configuration de la base de données.

```bash
    npx prisma init --datasource-provider sqlite
```

Lorsque vous exécuter la commande, vous devriez trouver dans votre dépôt un fichier <.env> et un dossier prisma avec un fichier schema.prisma à l’intérieur.

Le fichier schema.prisma contient toutes les instructions pour se connecter à votre base de données. Plus tard, il contiendra également les instructions pour générer vos tables de base de données.

Le fichier . env contient toutes les variables d’environnement dont votre projet a besoin pour fonctionner. Pour Prisma, la seule variable est ***DATABASE_URL.*** Sa valeur est définie sur . /dev.db .

<div style="text-align:center"><img src="./assets/img/Screenshot-2021-08-07-at-23.56.14.png" /></div>

<div style="text-align:center">Arborescence à ce stade du projet 🎉</div>

## Modèle utilisateur et Tweet

Comment vas-ton construire notre premier modèle ?Il faut savoir dans un premier temps quelles sont les entités qui vont constituer notre BDD :
- Utilisateur : Informations sur l'utilisateur de la plateforme (nom, prénom, ...)
- Message/Tweet (Nb de like, url, id, contenu)
  
## Migration de base de donnée

La première chose que l'on doit faire une fois nos modèle créer, c'est de générer notre base de donnée. Nous allons utiliser une nouvelle commande prisma *migrate*

```bash
    npx prisma migrate dev --name bastien_de_castres
```

Si votre migration est correcte ✅ cela veut dire que votre schéma de BDD est bien conçu.

À cette étape, votre arborescence ressemble à cela :

<div style="text-align:center"><img src="./assets/img/Screenshot-2021-08-08-at-00.41.22.png" /></div>

<div style="text-align:center">Youpiiii</div>

Notre base de données est prête, il est temps de commencer à s'amuser avec !

## Test de la BDD avec un projet Node Sqlite

Première étape, créer un fichier index.ts avec la commande suivante :

```bash
    touch index.ts
```

Premièrement, nous devons importer et initialiser la connection à notre BDD.
Pour cela, afin de structurer notre projet, nous allons créer deux répertoire config et Database.

```bash
    mkdir config && cd config && mkdir database && cd database && touch prisma.ts
```

Une fois ceci fait, on va s'atteler à la connection à la base de donnée. Voici un schéma qui explique comment prisma interagi avec la BDD.

<div style="text-align:center"><img src="./assets/img/FensWfo.png" /></div>