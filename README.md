# userlist-challenge

## Allgemein

Ich habe bei der Erstellung der App mit dem Backend angefangen. Hintergrund ist der, dass ich so vom Backend aus definierte Funktionen und Endpunkte hatte, an denen ich mich im Frontend orientieren konnte. So konnte ich mich bei der Erstellung des Frontdends an den Endpunkten entlanghangeln.

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
   > Wird genutzt, um alle Nutzer aus der Datenbank zu erhalten.
1. createUser
   > Dient, um einen Nutzer zu erstellen. In der Funktion liegt eine Überprüfung, ob die eingegebene E-Mail bereits existiert. Ist dies der Fall, ist ein Speichern nicht möglich
1. deleteUser
   > Sorgt für die Löschung eines Nutzers
1. updateUser
   > Hiermit kann man die Nutzerdaten verändern.

### .env

In der `.env` liegen wichtige Parameter, die eigentlich nicht auf Github liegen sollten. Aus Gründen der Fehlerprävention habe ich diese aber trotzdem mit gepushed.

## Frontend

Das Frontend unterfliedert sich in zwei Views (oder Pages). "Benutzerliste" und "Benutzer anlegen", die sich mithilfe einer Navbar besichtigen lassen.

### Benutzerliste über ```UserListPage.tsx```

Hier habe ich mich zur Darstellung der Nutzer für eine Tabelle entschieden, da so flexibel Attribute über neue Spalten hinzugefügt werden können.
Meine erste Idee, wie ich die Nutzer bearbeiten könnte war über Spalten in der Tabelle, in denen sich ein Editir- und Löschknopf befinden könnte. Das hätte aber zur Folge gehabt, dass - bei Einfügen weiterer Spalten für neue Attribute - die Tabelle zu unübersichtlich werden würde. Ich entschied mich deshalb für ein Modal, dass sich über Anklicken der Spalten öffnen lässt. Damit deutlich wird, dass die Zeilen klickbar sind, habe ich einen Hover-Effekt eingefügt und den Curser geändert.

### Benutzer anlegen über ```CreateUserPage.tsx```

Mittels eines Formulares, welches über ```UserForm.tsx```in die Seite eingebunden wird, kann ein neuer Nutzer über einen ```POST-Request```angelegt werden. Hier findet eine Validierung statt. Um dies zu gewährleisten wurde der ```userFormik```-Hook aus der ```formik``` Bibliothek verwendet. ```yup```diente dazu, ein Validierungsschema zu erstellen, um zu gewährleisten, dass alle relevanten Bestandteile ins Backend gesendet werden können. Eine Backend seitige Validierung findet bei der Mail-Adresse statt. Diese sich darf nur einmal in der Datenbank befinden. 

### weitere features

- mehrere Benutzer löschen
- weitere Attribute (Telefonnummer)
- Bilder in Tabelle, damit man weiß, mit welchem Benutzer man es zu tun hat.
- Genauere Fehlermeldungen und http codes ins Frontend reichen, damit ein User weiß, dass er beispielsweise den Fehler nicht verursacht hat oder einen falschen Link auf die Seite kommt und er einen 404 code erhält.
