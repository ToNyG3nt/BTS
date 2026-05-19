# PROMPT À COLLER DANS CLAUDE (navigateur) — Quiz BTS SIO

---

Copie tout le texte ci-dessous et colle-le dans Claude sur le navigateur.

---

```
Tu es mon coach de révision pour le BTS SIO. Voici tout mon cours condensé.
Fais-moi un quiz interactif : pose une question à la fois, attends ma réponse,
donne-moi la correction avec l'explication, puis passe à la suivante.
Varie les types de questions (QCM, question ouverte, compléter une commande,
vrai/faux, donner un exemple). Couvre tous les thèmes ci-dessous de façon équilibrée.

---
## RÉSEAUX & ROUTAGE

### Modèle OSI (7 couches)
| N° | Couche | Rôle | PDU |
|----|--------|------|-----|
| 7 | Application | Interface utilisateur (HTTP, FTP, DNS) | Message |
| 6 | Présentation | Format, chiffrement (TLS) | Message |
| 5 | Session | Gestion sessions (NetBIOS) | Message |
| 4 | Transport | Fiabilité TCP/UDP | Segment |
| 3 | Réseau | Adressage IP, routage | Paquet |
| 2 | Liaison | Trames, adresses MAC, switch | Trame |
| 1 | Physique | Signaux électriques/optiques | Bits |

Mnémotechnique FR : « Ah Petit Salaud Tu Rends La Peine ! »
Encapsulation : chaque couche ajoute son en-tête en émission.

### TCP vs UDP
| | TCP | UDP |
|---|---|---|
| Connexion | Oui (3-way handshake) | Non |
| Fiabilité | Garantie (ACK) | Aucune |
| Vitesse | Plus lent | Rapide |
| Usage | HTTP, FTP, SSH | DNS, VoIP, streaming |

3-Way Handshake : SYN → SYN-ACK → ACK

### Modèle TCP/IP (4 couches)
Application (OSI 5-6-7) / Transport (OSI 4) / Internet (OSI 3) / Accès réseau (OSI 1-2)
OSI = modèle théorique ; TCP/IP = modèle pratique utilisé sur Internet

### Adressage IPv4
- Format : 4 octets 32 bits ex: 192.168.1.100/24
- Plages privées : 10.0.0.0/8 | 172.16.0.0/12 | 192.168.0.0/16
- Loopback : 127.0.0.1
- Calcul hôtes : 2^(32-préfixe) - 2 (réseau + broadcast)
- /24 = 254 hôtes | /25 = 126 | /16 = 65 534 | /8 = ~16M

### IPv6
- 128 bits, 8 groupes hex, ex: 2001:0db8::8a2e:0370:7334
- Types : Unicast / Multicast / Anycast / Lien-local (fe80::/10)
- Avantages : pas de NAT, IPsec intégré, espace immense

### Équipements réseau
- Hub (L1) : diffuse tout (obsolète)
- Switch (L2) : commute par MAC, table ARP
- Routeur (L3) : route par IP
- Firewall (L3-7) : filtre le trafic
- Table MAC : switch mémorise MAC ↔ port
- ARP : résolution IP ↔ MAC ; commande : arp -a

### Ports importants
HTTP=80 | HTTPS=443 | FTP=21 | SSH=22 | SMTP=25 | DNS=53 | DHCP=67/68 | RDP=3389 | SNMP=161

### VLAN
- Segmentation logique d'un réseau physique
- Avantages : isolation trafic, réduction broadcast, flexibilité
- Port accès : 1 VLAN | Lien trunk (802.1Q) : plusieurs VLAN
- Config Cisco : vlan 10 / name IT / switchport mode access / switchport access vlan 10

### STP (Spanning Tree Protocol)
- Évite les boucles de commutation
- Élection Root Bridge (plus faible Bridge ID)
- Ports : Forwarding ou Blocking
- RSTP (802.1w) = version rapide | PVST+ = 1 instance par VLAN (Cisco)

### Routage
- Statique : routes manuelles (petits réseaux)
- Dynamique : protocoles — RIP (max 15 sauts), OSPF (coût/bande passante, rapide), BGP (Internet/AS)
- Commande : ip route 192.168.2.0 255.255.255.0 10.0.0.1 | show ip route

### Commandes diagnostic
ping → ICMP | traceroute/tracert | ipconfig/ip addr | netstat -an | nslookup

---
## CYBERSÉCURITÉ

### Triade CIA
- Confidentialité : accès réservé aux personnes autorisées
- Intégrité : données non altérées
- Disponibilité : service accessible quand on en a besoin

### Menaces principales
- Phishing : usurpation d'identité par email
- Ransomware : chiffrement des données + rançon
- XSS : injection de JavaScript dans une page web
- SQLi : injection SQL pour accéder à la BDD
- MitM : interception des communications

### RGPD (2018)
- Consentement explicite obligatoire
- Droits : accès, rectification, effacement, portabilité, oubli
- Notification de violation : 72h max à la CNIL
- Amende max : 4% du CA mondial ou 20M€
- DPO : Délégué à la Protection des Données

### PCA / PRA
- PCA (Plan de Continuité d'Activité) : maintenir l'activité pendant le sinistre
- PRA (Plan de Reprise d'Activité) : reprendre après sinistre
- RTO : temps max de reprise (Recovery Time Objective)
- RPO : perte de données max acceptable (Recovery Point Objective)

### Bonnes pratiques
- RBAC : droits par rôle (Role-Based Access Control)
- MFA : authentification multi-facteur
- Chiffrement : symétrique (AES) vs asymétrique (RSA)
- HTTPS partout (certificat TLS)
- Hasher les mots de passe : password_hash() / password_verify()

---
## PROGRAMMATION

### Algorithmique
Structure : ALGORITHME / Variables / DEBUT / FIN
Types : Numérique, Chaîne, Booléen
Structures : Si/SinonSi/Sinon/FinSi | TantQue/FinTantQue | Pour...jusqu'à/FinPour
Algorigramme : Ovale=Début/Fin | Rectangle=Action | Losange=Condition (2 branches OUI/NON) | Parallélogramme=Entrée/Sortie
TantQue : vérifie AVANT | Répéter...Jusqu'à : vérifie APRÈS

### C# — Bases
```csharp
int age = 20; string nom = "Mael"; bool ok = age >= 18;
Console.WriteLine($"Bonjour {nom}");
if (ok) { ... } else { ... }
for (int i = 0; i < 5; i++) { ... }
```
- Tableaux : int[] notes = {12, 15, 18}; notes[0]; foreach(int n in notes)
- Liste : List<string> noms = new List<string>(); noms.Add("x"); noms.Count
- Dico : Dictionary<string, int> ages = new(); ages["Mael"] = 20;

### C# — POO
- Classe = modèle/plan | Objet = instance | Attribut = variable | Méthode = fonction
- Constructeur : méthode d'initialisation (new NomClasse())
- Héritage : class Etudiant : Personne
- Encapsulation : private / public / protected
- Polymorphisme : override dans classe fille
- Interface : contrat de méthodes (pas d'implémentation)

### Python — Bases
```python
age = 20; nom = "Mael"  # typage dynamique
print(f"Bonjour {nom}")
if age >= 18: print("Majeur")
for i in range(5): print(i)  # range(0,10) = 0 à 9 inclus
def aire(l, h): return l * h
```
- Liste : notes = [12,15]; notes.append(14); len(notes); notes.sort()
- Dico : p = {"nom": "Mael", "age": 20}; p["nom"]
- Compréhension : carres = [x**2 for x in range(10)]

### Comparaison C# / Python
| Concept | C# | Python |
|---|---|---|
| Afficher | Console.WriteLine | print() |
| Lire | Console.ReadLine() | input() |
| Si/Sinon | if/else {} | if/else: |
| Boucle for | for(int i=0;..) | for i in range: |
| Fonction | public int Fn() | def fn(): |
| Commentaire | // texte | # texte |

---
## CRÉATION WEB

### HTML
- Structure : DOCTYPE → html → head/body
- Balises sémantiques : header, nav, main, section, article, footer
- Essentiels : h1-h6, p, a href, img src alt, ul/ol/li, div, span, form, input, button, table
- DOCTYPE html : déclaration obligatoire HTML5

### CSS
- Sélecteurs : balise | .classe | #id | nav > a | div:hover
- Box model : margin → border → padding → content
- Flexbox (1D) : display:flex | justify-content | align-items | flex-wrap
- Grid (2D) : display:grid | grid-template-columns: repeat(3, 1fr)
- Responsive : @media (max-width: 768px) { ... }

### JavaScript
- Sélectionner : getElementById("id") | querySelectorAll(".class")
- Modifier : textContent | innerHTML | classList.add/remove | style.color
- Événements : addEventListener("click", function() { ... })
- Fetch (AJAX) : fetch(url).then(r => r.json()).then(data => ...)
- async/await : const data = await fetch(url).then(r => r.json())

### PHP
- Variables : $nom = "Mael"; $age = 20;
- Formulaires : $_POST["champ"] (POST) | $_GET["param"] (URL)
- Anti-XSS : htmlspecialchars($input)
- Anti-SQLi : PDO + prepare() + execute([]) — TOUJOURS des requêtes préparées
- Sessions : session_start(); $_SESSION["user"] = $nom;
- Cookies : setcookie("token", "val", time()+3600);
- BDD PDO : new PDO("mysql:host=localhost;dbname=mabase", "user", "pass")

### Sécurité Web
- XSS → htmlspecialchars()
- SQLi → requêtes préparées PDO
- CSRF → tokens de formulaire
- Uploads → valider type MIME
- Mots de passe → password_hash() / password_verify()

---
## LINUX & ADMIN SYSTÈME

### Commandes essentielles
ls -lah | chmod 755 | chown user:group | sudo/su | useradd | ps/top | grep | find | scp | ssh | apt install

### Permissions Linux
Format : -rwxrwxrwx (user|group|others)
r=4 (lecture) | w=2 (écriture) | x=1 (exécution)
chmod 755 = rwxr-xr-x | chmod 644 = rw-r--r--
Jamais 777 (danger sécurité)

### Git
git init | git add . | git commit -m "msg" | git push | git pull | git branch | git checkout | git merge | git status | git log
GitLab : DevOps, CI/CD, gestion issues

---
## MATHS INFORMATIQUE

### Bases de numération
Binaire (base 2) | Octal (base 8) | Décimal (base 10) | Hexadécimal (base 16 : 0-9, A-F)
Décimal→Binaire : divisions successives par 2
Binaire→Hex : groupes de 4 bits
42(déc) = 101010(bin) = 2A(hex)

### Algèbre Booléenne
ET : A·B = 1 si A=1 ET B=1
OU : A+B = 1 si A=1 OU B=1
NON : Ā = inverse
XOR : A⊕B = 1 si différents
Identités : A·0=0 | A+1=1 | Ā̄=A
De Morgan : Ā·B̄ = Ā+B̄

---
## CEJM

### Économie
- Agents : Ménages (consommation), Entreprises (production), État (non marchand), Banques (financement), Reste du monde
- Loi O&D : Offre>Demande → Prix baisse | Demande>Offre → Prix monte
- Marchés : CPP (concurrence pure et parfaite) | Monopole (1 vendeur) | Oligopole (peu) | Duopole (2)
- PIB : richesse créée par un pays | Inflation : hausse générale et durable des prix
- Mondialisation : libre-échange, DIT, balance commerciale (exports - imports)
- Économie numérique : GAFAM, plateformes (effet de réseau), Big Data, IA, ubérisation

### Droit
Pyramide de Kelsen : Constitution > Traités > Lois > Décrets > Arrêtés
Droit public (État/citoyens) | Droit privé (civil, commercial, travail) | Droit pénal
Contrat valide (art. 1128 CC) : consentement + capacité + objet licite + cause licite
Vices du consentement : Erreur | Dol (tromperie) | Violence → nullité relative
Contrats travail : CDI (droit commun) | CDD (cas limitatifs) | Stage | Intérim
Rupture : Démission (salarié) | Licenciement perso/éco (employeur) | Rupture conventionnelle (commun accord)

### Management
Formes juridiques : EI (resp. illimitée) | EURL/SARL (1€, limitée) | SA (37 000€) | SAS (1€)
Styles Likert : Directif | Persuasif | Participatif | Délégatif
Efficacité = atteindre l'objectif | Efficience = atteindre avec le minimum de ressources
RSE (triple bottom line) : économique + social + environnemental
SWOT : Forces, Faiblesses, Opportunités, Menaces
Parties prenantes : internes (salariés, dirigeants) | externes (clients, fournisseurs, État)

---
## GESTION IT (ITIL / GLPI)
- Incident : interruption non planifiée d'un service
- Problème : cause inconnue d'incidents récurrents
- Demande de service : requête standard
- Changement : modification planifiée
- SLA : accord de niveau de service
- GLPI : outil open-source ticketing + inventaire
- CMDB : base de données de configuration
- Niveaux support : N1 (helpdesk) | N2 (technicien) | N3 (expert/éditeur)
- ITIL : référentiel de bonnes pratiques IT

---

Lance le quiz maintenant ! Commence par une question au hasard parmi tous ces thèmes.
```
