"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Mangas",
      [
        {
          title: "L'Attaque des Titans tome 1",
          image: "https://assets.bubblebd.com/img/tdckqru8wj/jdoy5h3wmk.jpg",
          description: "Dans un monde ravagé par des titans mangeurs d’homme depuis plus d’un siècle, les rares survivants de l’Humanité n’ont d’autre choix pour survivre que de se barricader dans une cité-forteresse. Le jeune Eren, témoin de la mort de sa mère dévorée par un géant, n’a qu'un rêve : entrer dans le corps d’élite chargé de découvrir l’origine des titans, et les annihiler jusqu'au dernier…",
          releaseDate: new Date('2013-06-26'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 2",
          image: "https://assets.bubblebd.com/img/vondlyyeus/a0xmptpql5.jpg",
          description: "La riposte du genre humain est en marche ! Dans un monde ravagé par des titans mangeurs d’homme depuis plus d’un siècle, les rares survivants de l’Humanité n’ont d’autre choix pour survivre que de se barricader dans une cité-forteresse. Le jeune Eren, témoin de la mort de sa mère dévorée par un titan, n’a qu’un rêve : entrer dans le corps d’élite chargé de découvrir l’origine des titans, et les annihiler jusqu’au dernier…",
          releaseDate: new Date('2013-06-26'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 3",
          image: "https://assets.bubblebd.com/img/c2h0tqbslf/v5ahdrqpcj.jpg",
          description: "Les troupes sont sidérées par la découverte du singulier pouvoir d’Eren qui peut se transformer en Titan ! Mais l’heure n’est pas à la stupeur : une brèche est ouverte dans le mur, et les Titans affluent, menaçant de repousser l’humanité… Malgré les craintes, une stratégie de riposte est mise en place, et c’est Eren qui se trouve au centre !",
          releaseDate: new Date('2023-09-04'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 4",
          image: "https://assets.bubblebd.com/img/sbnprtzu0r/56ax9nk7w9.jpg",
          description: "Eren se trouve au cœur d’une opération militaire inédite : métamorphosé en Titan, il est chargé de colmater la brèche ouverte dans le mur Rose à l’aide d’un gigantesque morceau de roche. Alors que la survie de l’Humanité dépend de la réussite de ce plan audacieux, Eren perd pied et devient totalement incontrôlable. Les adjurations d’Armin ne semblent pas le ramener à lui...",
          releaseDate: new Date('2013-02-30'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 5",
          image: "https://assets.bubblebd.com/img/cxizkouuga/dt8ztaci74.jpg",
          description: "La transformation d'Eren en Titan a permis de refouler l'invasion du district de Trost. Mais lorsqu'il reprend ses esprits, c'est pour être interrogé par le major Erwin Smith, du bataillon d'exploration. Bien décidé à aller explorer la maison Jäger, dans le district de Shiganshina, le major va devoir convaincre ses pairs de laisser la vie sauve à Eren...",
          releaseDate: new Date('2014-01-03'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 6",
          image: "https://assets.bubblebd.com/img/cm5ggjer13/dcg26fb1sp.jpg",
          description: "Le bataillon d'exploration a entrepris un exercice à l'extérieur des murs auquel participe bien évidemment Eren, mais aussi Armin et Mikasa. Tout semble bien se passer, jusqu'à ce qu'un Titan femelle fasse irruption et menace de dévaster toute la formation...",
          releaseDate: new Date('2014-03-05'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 7",
          image: "https://assets.bubblebd.com/img/gaxmdj3fkk/kdp38kvh5c.jpg",
          description: "Décidé à inspecter de fond en comble la maison de la famille d'Eren, en quête d'indices permettant d'élucider le mystère des Titans, le bataillon d'exploration entreprend une incursion à l'extérieur du Mur. Les troupes se font alors surprendre par un Titan de type féminin particulièrement dangereux, et manifestement doué d'intelligence. Au prix de lourds sacrifices dans ses rangs, le major Erwin parvient à neutraliser le spécimen. Il ne reste plus qu'à identifier l'individu qui se trouve à l'intérieur.",
          releaseDate: new Date('2014-04-30'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 8",
          image: "https://assets.bubblebd.com/img/6vzbyfivuo/n1uekbi3em.jpg",
          description: "L'opération menée hors des murs s'est soldée par la perte de nombreux soldats. Eren lui-même n'a pu être sauvé in extremis que par l'intervention de Mikasa et de Livaï, et le titan féminin n'a finalement pas pu être capturé. Ce cuisant échec risque d'avoir de fâcheuses conséquences non seulement pour Eren qui doit désormais être remis aux brigades spéciales, mais aussi pour le bataillon d'exploration et ses responsables qui sont, eux aussi, convoqués.",
          releaseDate: new Date('2014-07-02'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 9",
          image: "https://assets.bubblebd.com/img/8sjuplmjp8/3b01hcnrf7.jpg",
          description: "Eren et ses compagnons ont enfin réussi à capturer le Titan féminin, mais ils font, au cours de cette opération, une découverte effarante... Ils sont encore abasourdis lorsque leur parvient l'alerte : le mur Rose a cédé !",
          releaseDate: new Date('2014-08-03'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 10",
          image: "https://assets.bubblebd.com/img/ttwwqa64cz/rnt5j6m23c.jpg",
          description: "Partis inspecter le mur Rose afin de localiser la brèche à l'origine de la nouvelle intrusion, les membres de la 104e Brigade pensent avoir trouvé un abri sûr dans les ruines de la forteresse d'Utgard et s'apprêtent à prendre un peu de repos pour la nuit. Malheureusement, les Titans, pourtant censés être inactifs après le coucher du soleil, n'ont pas l'intention de leur laisser le moindre répit !",
          releaseDate: new Date('2014-10-29'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 11",
          image: "https://assets.bubblebd.com/img/kdjutpcak6/pj46fbif5m.jpgg",
          description: "Une meute de Titans soudainement apparue aux abords du mur Rose fait des ravages. Heureusement, l'intervention d'Ymir et l'arrivée de renforts permettent de la décimer. Les nouvelles recrues issues de la 104e brigade d'entraînement sont de nouveau réunies. L'accalmie est cependant de très courte durée, car c'est maintenant au tour du Titan colossal et du Titan cuirassé de frapper !",
          releaseDate: new Date('2015-01-07'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 12",
          image: "https://assets.bubblebd.com/img/uoi7uwpej5/5rkg7sozvs.jpg",
          description: "Après que leur identité a éclaté au grand jour, le Titan colossal et le Cuirassé enlèvent Eren et Ymir. Tandis que le Bataillon d'exploration se prépare à partir à leur secours, entre les deux captifs, la solidarité se lézarde...",
          releaseDate: new Date('2015-03-04'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 13",
          image: "https://assets.bubblebd.com/img/0fofojztzf/yyrby1oaiv.jpg",
          description: "L'intervention du Bataillon d'exploration a permis d'arracher Eren des griffes de Reiner et Bertolt, mais Ymir, elle, a décidé de changer de camp. Le tribut humain à payer pour cette mission de sauvetage est extrêmement lourd...",
          releaseDate: new Date('2015-05-06'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 14",
          image: "https://assets.bubblebd.com/img/n5g1rvpyu9/zg800bk9kt.jpg",
          description: "Le Roi a donné l'ordre aux Brigades spéciales de capturer Eren et Christa. De son côté, le Bataillon d'exploration prépare une opération d'envergure : renverser le trône !",
          releaseDate: new Date('2015-07-01'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 15",
          image: "https://assets.bubblebd.com/img/m09mo83xuc/ul4h3wiz6s.jpg",
          description: "Désormais certains que la famille Reiss est bien l’authentique lignée royale, les membres du Bataillon d’exploration s’apprêtent à supplanter le Roi, mais une unité spéciale des Brigades centrales déjoue leur projet en ravissant Historia et Eren !",
          releaseDate: new Date('2015-09-09'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 16",
          image: "https://assets.bubblebd.com/img/sirvckhsfu/1cva3schy0.jpg",
          description: "Le Bataillon d'exploration est parvenu à déjouer la machination orchestrée contre lui par les Brigades centrales et à renverser le gouvernement. À présent, il ne reste plus qu'à mettre Historia sur le trône. De son côté l'équipe de Livaï a réussi à localiser Eren et Historia mais les délivrer ne sera sans doute pas une mince affaire...",
          releaseDate: new Date('2015-11-12'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 17",
          image: "https://assets.bubblebd.com/img/ecdk49yphx/acdwslh0ep.jpg",
          description: "Le pouvoir ancestral des Reiss leur permettait de régner sur l'Humanité, jusqu'à ce que Grisha, le père d'Eren, le leur arrache pour le confier à son fils. Fermement décidé à récupérer son bien, Rhodes ordonne à Historia de tuer Eren, mais celle-ci choisit de désobéir, par fidélité envers ses propres convictions. Fou furieux, Rhodes se métamorphose alors en un gigantesque Titan dévastateur !",
          releaseDate: new Date('2016-01-12'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 18",
          image: "https://assets.bubblebd.com/img/ecdk49yphx/acdwslh0ep.jpg",
          description: "Après avoir renversé le régime et fait le ménage dans le gouvernement, le Bataillon d'exploration lance enfin l'opération de reconquête du mur Maria. Fort de la capacité de durcissement d'Eren et d'un minerai luminescent permettant les déplacements de nuit, ses chances de réussite semblent bonnes. Mais Reiner, Bertolt et le Titan bestial sont prêts à les recevoir !",
          releaseDate: new Date('2016-04-06'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 19",
          image: "https://assets.bubblebd.com/img/nvabedxl16/7vx51dascv.jpg",
          description: "Le bataillon d'exploration arrive au mur Maria pour reboucher, grâce à la faculté de durcissement d'Eren, la partie détruite cinq ans plus tôt par les titans. L'opération réussit, mais alors qu'ils s'apprêtent à passer à la phase suivante, l'ennemi surgit et bloque leur seule voie de repli. Une bataille décisive s'engage à présent !",
          releaseDate: new Date('2016-08-24'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 20",
          image: "https://assets.bubblebd.com/img/5w5nvrcmjd/rd6h7yefyz.jpg",
          description: "Bien décidé à découvrir le secret sommeillant dans le sous-sol de la maison Jäger, le Bataillon d'exploration doit avant tout reprendre le mur Maria, et livre pour cela une lutte acharnée contre Reiner, Bertolt et le Titan bestial. Eren et les siens parviendront-ils à vaincre cet infernal trio pour enfin accéder à de nouvelles révélations ?!",
          releaseDate: new Date('2016-10-12'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 21",
          image: "https://assets.bubblebd.com/img/05gi40hkjo/c55myoj2fj.jpg",
          description: "Erwin et Armin se sont sacrifiés pour permettre à leurs camarades de vaincre Reiner, Bertolt et le Titan bestial. À présent, quelle nouvelle découverte attend les survivants ?",
          releaseDate: new Date('2017-04-07'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 22",
          image: "https://assets.bubblebd.com/img/ecdk49yphx/acdwslh0ep.jpg",
          description: "Capturé suite à la dénonciation de son fils, Grisha est torturé puis condamné à la déportation sur l'île du Paradis. Curieuse surprise de découvrir qu'il connaît les officiers qui s'apprêtent à le supplicier...",
          releaseDate: new Date('2017-10-21'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 23",
          image: "https://assets.bubblebd.com/img/nkfpfhkggc/njkbkj4k2x.jpg",
          description: "Alors qu'en traversant la mer Eren pensait être libre il se retrouve face au confit qui oppose les armées de Mahr et d'Eldia. Les Eldiens sont mis à l'épreuve pour hériter des pouvoirs des titans primordiaux.",
          releaseDate: new Date('2017-11-29'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 24",
          image: "https://assets.bubblebd.com/img/zktam6suty/nmvnxsh7vf.jpg",
          description: "Sur le point d'être à nouveau envoyé sur l'île du Paradis, Reiner se remémore les événements survenus des années plus tôt, lors de son premier départ.",
          releaseDate: new Date('2018-04-04'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 25",
          image: "https://assets.bubblebd.com/img/uihfch7m3t/4rl4nsshqm.jpg",
          description: "Tandis que Reiner, à sa grande stupéfaction, retrouve Eren dans un sous-sol, le chef du clan Teyber s'apprête à monter sur scène pour y faire certaines révélations qui laisseront l'assistance médusée.",
          releaseDate: new Date('2018-08-22'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 26",
          image: "https://assets.bubblebd.com/img/bgx9twjbxf/c21p7wbv8b.jpg",
          description: "Les Mahr ont réuni des personnalités du monde entier afin d'affirmer sur la scène internationale la dangerosité de l'île du Paradis. C'est ce moment que choisit Eren pour jaillir et commettre des ravages aussi bien dans la population que dans les rangs de la haute administration militaire. Il engage aussitôt le combat face au Titan marteau d'armes. Rejoint par ses alliés, la mêlée devient générale !",
          releaseDate: new Date('2018-12-12'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 27",
          image: "https://assets.bubblebd.com/img/apfknkgpx1/mulc0welio.jpg",
          description: "Le but d'Eren en infiltrant Revelio était de ramener Sieg, descendant de la lignée royale, sur l'île du Paradis. Les insulaires sont maintenant en mesure de déclencher le Grand Terrassement, mais en contrepartie, ils ont enclenché le compte à rebours vers une guerre totale...",
          releaseDate: new Date('2019-04-03'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 28",
          image: "https://assets.bubblebd.com/img/yi09mmnbes/vrqhc3fsik.jpg",
          description: "Théoriquement, l'arrivée de Sieg dote l'Île du Paradis de la puissance du Grand Terrassement, mais l'armée est méfiante : peut-on vraiment être sûr qu'Eren n'est pas manipulé par son demi-frère ? Pour parer à tout risque, les transfuges mahr sont emprisonnés. Cependant, une partie des troupes et de la population est très insatisfaite de la situation. Alors que la grogne monte, Eren passe à l'action.",
          releaseDate: new Date('2019-09-03'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 29",
          image: "https://assets.bubblebd.com/img/m2gtixjq0s/tn2mdih7l1.jpg",
          description: "Déterminés à déclencher le Grand Terrassement, les pro-Jäger passent à l'action. Après avoir neutralisé l'ensemble de l'État-major, ils partent rejoindre Sieg, dont Livaï s'apprête à découvrir les véritables intentions...",
          releaseDate: new Date('2019-02-13'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 30",
          image: "https://assets.bubblebd.com/img/x3qwnccyse/1jzk91pw3o.jpg",
          description: "Sieg compte sur Eren et le pouvoir du Titan originel  pour mener à bien son projet d'éradication douce du  peuple eldien, mais l'irruption soudaine de l'armée mahr bouleverse la donne. Les deux demi-frères  parviendront-ils à entrer en contact ?!",
          releaseDate: new Date('2020-05-27'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 31",
          image: "https://assets.bubblebd.com/img/yril5sfe92/ri76tomciv.jpg",
          description: "Sieg compte sur Eren pour mener à bien le plan d’éradication douce des Eldiens. Mais après qu’ils sont entrés en contact, Eren lui révèle que sa véritable intention est de déclencher le Grand Terrassement pour dévaster le monde entier. Prenant le dessus, il s’empare du pouvoir d’Ymir, la grande ancêtre, et une armée de Titans colossaux se met en marche...",
          releaseDate: new Date('2020-08-19'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 32",
          image: "https://assets.bubblebd.com/img/qdmc5w1myn/x4z9zdnd75.jpg",
          description: "L'humanité est terrorisée par les titans et s'enferme derrière les murs fortifiés des villes, leur seul espoir de survie. Les garnisons de soldats sur leurs chevaux, de leur équipement de manoeuvre tridimensionnelle et de leurs épées sont peu de chose face aux Titans mais le bataillon d'exploration prend sous son aile Eren, un jeune soldat qui se révèle être un atout pour l'armée mais aussi une menace potentielle. La guerre entre Titans et Humain n'est pas encore finie et depuis qu'Eren est détenteur du pouvoir Originel, les choses se compliquent dans les deux camps sur l'île du Paradis.",
          releaseDate: new Date('2020-03-25'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 33",
          image: "https://assets.bubblebd.com/img/bqan9ts7dh/84xoqo31yj.jpg",
          description: "Mikasa, Armin et leur groupe sont en route pour Odiha où ils espèrent trouver un aéronef pour rattraper Eren par la voie des airs. Mais en contrepartie, ils ne peuvent plus espérer sauver Revelio, où vivent les familles d'Annie, Reiner et les autres....",
          releaseDate: new Date('2021-04-07'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "L'Attaque des Titans tome 34",
          image: "https://assets.bubblebd.com/img/ecdk49yphx/acdwslh0ep.jpg",
          description: "N’épargnant que l’île du Paradis, le Grand Terrassement poursuit son avancée, écrasant impitoyablement toute vie sur son passage, mais Armin, Mikasa et leurs compagnons savent quelle est la cible d’Eren. Ils le rattrapent enfin, et ne reculeront devant aucun sacrifice pour l’arrêter...",
          releaseDate: new Date('2021-05-21'),
          author: "Hajime Isayama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spy x Family tome 1",
          image: "https://assets.bubblebd.com/img/2yydykgigv/4rihgxolas.jpg",
          description: "Twilight, le plus grand espion du monde, doit pour sa nouvelle mission créer une famille de toutes pièces afin de pouvoir s'introduire dans la plus prestigieuse école de l'aristocratie. Totalement dépourvu d'expérience familiale, il va adopter une petite fille en ignorant qu'elle est télépathe, et s'associer à une jeune femme timide, sans se douter qu'elle est une redoutable tueuse à gages. Ce trio atypique va devoir composer pour passer inaperçu, tout en découvrant les vraies valeurs d'une famille unie et aimante.",
          releaseDate: new Date('2020-09-10'),
          author: "Tatsuya Endō",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spy x Family tome 2",
          image: "https://assets.bubblebd.com/img/pjpdkslusz/fvzapnj9r1.jpg",
          description: "L'espion Twilight, accompagné d'Anya et de Yor, tente d'approcher le chef du parti Nation Unifiée. Sa mission consiste à faire admettre Anya à Eden, prestigieuse école qui réunit les enfants de l'élite d'Ostania, puis de la faire figurer parmi les meilleurs élèves.",
          releaseDate: new Date('2020-10-12'),
          author: "Tatsuya Endō",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spy x Family tome 3",
          image: "https://assets.bubblebd.com/img/rp67w9uequ/rl2ag0g4b5.jpg",
          description: "L’intégration d’Anya dans la prestigieuse académie d’Eden poursuit son cours, et avec elle la mission pour la paix de Twilight. Mais un nouveau challenge se dresse sur la route de la jeune famille en la personne de Yur, le frère de Yor qui travaille en secret pour les services de contre-espionnage du pays ! Les faux semblants et les mensonges s’accumulent autour de la famille Folger… Spy X Family est la dernière série à succès qui cartonne au Japon, où on suit le aventures de Twilight, un espion obligé de simuler une parfaite vie de famille avec une femme et une fille de circonstance pour mener à bien sa mission..",
          releaseDate: new Date('2021-02-12'),
          author: "Tatsuya Endō",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spy x Family tome 4",
          image: "https://assets.bubblebd.com/img/ecdk49yphx/acdwslh0ep.jpg",
          description: "Les conspirateurs comptent employer des chiens pour arriver à leurs fins, une curieuse coïncidence alors que la famille Forger souhaite adopter un canidé pour récompenser Anya d'avoir décroché sa première étoile à l'école Eden.",
          releaseDate: new Date('2021-05-12'),
          author: "Tatsuya Endō",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spy x Family tome 5",
          image: "https://assets.bubblebd.com/img/aie6mupddy/gzriap181a.jpg",
          description: "Après avoir déjoué en deux temps trois mouvements un complot terroriste (rien que ça), la (fausse) famille Forger accueille un nouveau membre dont le nom est Bond, le chien Bond. Sous son abondante pilosité canine se cachent un amour infini pour Anya et, plus discret, un don de prescience. Alors que l'opération « Strix » semble enfin sur les rails, les examens qu’Anya doit passer dans le cadre de sa scolarité pourraient à nouveau mettre en péril la délicate mission de Loid Forger, alias Twilight, le meilleur espion du monde…",
          releaseDate: new Date('2021-08-19'),
          author: "Tatsuya Endō",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spy x Family tome 6",
          image: "https://assets.bubblebd.com/img/n4skoplite/d84w6bb384.jpg",
          description: "Tout va se jouer lors d'un tournoi de tennis clandestin, dont l'issue pourrait bien remettre en cause la position de Yor au sein de la famille Forger. En effet, Noctuna s'est juré de prendre la place de fausse épouse de Twilight dans le cadre de l'opération Strix",
          releaseDate: new Date('2021-11-10'),
          author: "Tatsuya Endō",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spy x Family tome 7",
          image: "https://assets.bubblebd.com/img/ioxeyfjbsi/s6alwu9olv.jpg",
          description: "Twilight, vrai espion et faux père de famille, a enfin réussi à entrer en contact avec Donovan Desmond, sa cible sur l'opération « Strix ». Mais l'homme politique demeure insaisissable. Anya demeure peut-être finalement la meilleure carte à jouer pour mener à bien la mission de son « père ».",
          releaseDate: new Date('2022-02-10'),
          author: "Tatsuya Endō",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spy x Family tome 8",
          image: "https://assets.bubblebd.com/img/kfeew81brk/db1ejwq0pg.jpg",
          description: "Sauvez le monde avec l'élite des agents (très) spéciaux : la famille Forger ! Une comédie d'espionnage pétillante ! Gagnants d'une croisière à bord d'un paquebot de luxe, Loid et Anya embarquent sur le Princess Lorelei en même temps que Yor, chargée d'une mission ultra-dangereuse. Sous couvert de son travail à la mairie, la jeune femme doit en effet assurer la protection de l'épouse d'un mafieux assassiné...",
          releaseDate: new Date('2022-06-01'),
          author: "Tatsuya Endō",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spy x Family tome 9",
          image: "https://assets.bubblebd.com/img/2vv344mgqh/64wq52yk3q.jpg",
          description: "En pleine mer, le paquebot Princesse Lorelei est le théâtre d'un affrontement sanglant entre Yor et les tueurs envoyés aux trousses de la femme qu'elle doit protéger. Loin de se la couler douce, Loid et Anya se retrouvent eux aussi pris dans la tourmente.",
          releaseDate: new Date('2022-09-01'),
          author: "Tatsuya Endō",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spy x Family tome 10",
          image: "https://assets.bubblebd.com/img/ecdk49yphx/acdwslh0ep.jpg",
          description: "Loid, Yor et Anya se rapproche de plus en plus, et devient une vraie famille, mais notre espion est encore en mission. Le passé de notre espion va être enfin dévoilé dans ce tome, entre la guerre, et la perte de ses proches, un passé douloureux. Yor va faire aussi une rencontre inattendue.",
          releaseDate: new Date('2022-12-01'),
          author: "Tatsuya Endō",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spy x Family tome 11",
          image: "https://assets.bubblebd.com/img/ecdk49yphx/acdwslh0ep.jpg",
          description: "La rencontre entre Yor et Mélinda Desmond, l'épouse de la cible de Loid/Twilight, semble marquer un tournant dans la mission que l'espion doit accomplir, comme pour la fausse famille Forger. Anya espère en effet devancer Yor à la course à l'invitation chez les Desmond.",
          releaseDate: new Date('2023-10-01'),
          author: "Tatsuya Endō",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "One Piece tome 105",
          image: "https://assets.bubblebd.com/img/bvkidu3kqh/0zlechycxu.jpg",
          description: "Une description pour Spy x Family tome 11.",
          releaseDate: new Date('2022-05-01'),
          author: "Eiichirō Oda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dr. Stone tome 26",
          image: "https://assets.bubblebd.com/img/hstb6n8h40/pxsf4a11o3.jpg",
          description: "Une description pour Spy x Family tome 11.",
          releaseDate: new Date('2022-05-01'),
          author: "Riichirō Inagaki",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Chainsaw Man tome 13",
          image: "https://assets.bubblebd.com/img/ch2ol3pcps/jfcan2nao5.jpg",
          description: "Une description pour Spy x Family tome 11.",
          releaseDate: new Date('2022-05-01'),
          author: "Tatsuki Fujimoto",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Jujutsu Kaisen tome 21",
          image: "https://assets.bubblebd.com/img/0b37cvz8k3/4ks3o99cq7.jpg",
          description: "Une description pour Spy x Family tome 11.",
          releaseDate: new Date('2022-05-01'),
          author: "Gege Akutami",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Oshi No Ko tome 8",
          image: "https://assets.bubblebd.com/img/llpbhr7ppv/bmzeeie9ef.jpg",
          description: "Une description pour Spy x Family tome 11.",
          releaseDate: new Date('2022-05-01'),
          author: "Aka Akasaka",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Mangas", null, {});
  },
};
