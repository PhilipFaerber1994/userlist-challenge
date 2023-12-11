# userlist-challenge

## Allgemein

Ich habe bei der Erstellung der App mit dem Backend angefangen. Hintergrund ist der, dass ich so vom Backend aus definierte Funktionen und Endpunkte hatte, an denen ich mich im Frontend orientieren konnte. So konnte ich mich bei der Erstellung des Frontends an den Endpunkten entlanghangeln.

## Backend

Im Backend befindet sich im server-Ordner die app.tsc-Datei, in der der Zugriff auf die mongoDB Datenbank erfolgt und die Server gestartet wird.
Hier wird außerdem die `v1UserRoute` aus der userRoute.tsx importiert.

### `userRouter.tsx`

In der `userRouter.tsx` sind die Endpunkte hinterlegt und es werden die controller Funktionen ausgeführt.
Folgende Endpunkte verwende ich in der App:

```
GET  /
POST  /
DELETE  /:userId
PUT   /:userId
```

### `userController.tsx`

In der `userController.tsx` sind die Funktionen hinterlegt, die über die Endpunkte aufgerufen werden.
Folgende Funktionen habe ich verwendet:

1. getAllUser
   - Wird genutzt, um alle Nutzer aus der Datenbank zu erhalten.
1. createUser
   - Dient, um einen Nutzer zu erstellen. In der Funktion liegt eine Überprüfung, ob die eingegebene E-Mail bereits existiert. Ist dies der Fall, ist ein Speichern nicht möglich
1. deleteUser
   - Sorgt für die Löschung eines Nutzers
1. updateUser
   - Hiermit kann man die Nutzerdaten verändern.

### .env

In der `.env` liegen wichtige Parameter, die eigentlich nicht auf Github liegen sollten. Aus Gründen der Fehlerprävention habe ich diese aber trotzdem mit gepushed.

## Frontend

Das Frontend untergliedert sich in zwei Views (oder Pages). "Benutzerliste" und "Benutzer anlegen", die sich mithilfe einer Navbar besichtigen lassen. Die jeweiligen Components habe ich in zwei Kategorien unterteil, die sich in den Ordnern ```/pages``` und ```/components``` untergliedern. In ```/pages``` befinden die zwei Seiten (Views), in ```/components``` liegen die anderen Components.

### Benutzerliste über ```UserListPage.tsx```

Hier habe ich mich zur Darstellung der Nutzer für eine Tabelle entschieden, da so flexibel Attribute über neue Spalten hinzugefügt werden können.
Meine erste Idee, wie ich die Nutzer bearbeiten könnte war über Spalten in der Tabelle, in denen sich ein Bearbeitungs- und Löschknopf befinden könnte. Das hätte aber zur Folge gehabt, dass - bei Einfügen weiterer Spalten für neue Attribute - die Tabelle unübersichtlich werden würde. Ich entschied mich deshalb für ein Modal, dass sich über Anklicken der Spalten öffnen lässt. Damit deutlich wird, dass die Zeilen klickbar sind, habe ich einen Hover-Effekt eingefügt und den Cursor geändert.

### Benutzer anlegen über ```CreateUserPage.tsx```

Mittels eines Formulares, welches über ```UserForm.tsx```in die Seite eingebunden wird, kann ein neuer Nutzer über einen ```POST-Request```angelegt werden. Hier findet eine Validierung statt. Um dies zu gewährleisten wurde der ```userFormik```-Hook aus der ```formik``` Bibliothek verwendet. ```yup```diente dazu, ein Validierungsschema zu erstellen, um zu gewährleisten, dass alle relevanten Attribute ins Backend gesendet werden können. Eine Backend seitige Validierung findet bei der Mail-Adresse statt. Diese sich darf nur einmal in der Datenbank befinden. Hintergrund ist der, dass bei den Attributen "Vorname", "Nachname" und "Alter" es durchaus denkbar ist, dass diese mehrfach vorkommen. Eine E-Mail sollte einzigartig sein. 

### weitere Features

Hier möchte ich ein paar Features auflisten, die bei einer weiteren Entwicklung eventuell Sinn ergeben würden, ich aus zeitlichen Gründen allerdings nicht mehr geschafft habe zu implementieren. 

- mehrere Benutzer löschen
  - Denkbar wäre eine Option, die es möglich macht, mehrere Benutzer zu löschen. Das könnte über eine zusätzliche Spalte in der Tabelle, in der sich Checkboxes befinden erfolgen. Hier könnten einzelne Nutzer oder über eine Checkbox im Tableheader alle Benutzer ausgewählt und gelöscht werden. Ein entsprechender Endpunkt mit der dazugehörigen Funktion müsste im Backend ergänz werden. 
- weitere Attribute 
  - Außerdem könnte man weitere nützliche Attribute wie Telefonnummer, Bilder, Adresse, usw. der Tabelle als Spalte und im Backend als Attribute hinzufügen. Dies ist natürlich abhängig von der Anwendung und welche Daten notwendig sind. 
- Geburtstag und Rechner
   - Eine praktische Herangehensweise, um das Alter des Benutezrs zu bestimmen wäre das Angeben des Geburtsdatums, sobald ein Nutzer angelegt wird. Hier hätte man das genaue Datum des Geburtstags (Bietet sich an, wenn man Kunden oder Benutzer an deren Geburtstag ein Geschenk oder Rabatte machen möchte). Das Alter könnte man mittels des Geburtsdatum ebenfalls ausrechen. 
- Genauere Fehlermeldungen und http codes
  - Falls der User einer falschen URL auf die Seite folgt und diese Seite nicht existiert könnte der ```http-Code``` 404 nach vorne gesendet werden und eine zusätzliche Seite unter ```/pages``` angelegt werden, die bei einer Seite gerendert wird, die nicht existiert. Auf dieser zusätzlichen View befinden sich die Fehlerinformationen in Textform, dass der Nutzer der App weiß, wo der Fehler liegt.
- ```UserForm``` auch im Modal
  - Die ```UserForm```-Component könnte man auch im Modal zum bearbeiten oder löschen der Nutzer anwenden, da diese Component so erstellt werden sollte, dass sie flexibel anwendbar ist.
- Extra Components für die Icons
  - Um den Code in den Formularen übersichtlicher zu gestalten hätten auch eigene Icon Components erstellt und in die ```Button```-Components eingefügt werden können.
- Sortierfunktion
  - Denkbar wäre auch eine Sortierfunktion in der Tabelle, bei der man anhand verschiedener Kriterien die Tabelle sortieren oder filtern kann.
- Responsive Layout
  - Ein mobile Version wäre zudem denkbar. Aus Gründen der Übersichtlichkeit hätte hierfür vermutlich eine andere Lösung als die Tabelle zur Darstellung der Nutzer genutzt werden müssen. 

