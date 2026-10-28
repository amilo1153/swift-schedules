(() => {
  const STORAGE_KEY = "vagtplan-generator-v1";
  const currentYear = new Date().getFullYear();
  const defaultEmployees = ["Medarbejder 1"];
  const defaultDays = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];
  const LANGUAGES = [
    ["da", "Dansk"], ["en", "English"], ["de", "Deutsch"], ["es", "Español"], ["fr", "Français"],
    ["it", "Italiano"], ["pt", "Português"], ["nl", "Nederlands"], ["sv", "Svenska"], ["no", "Norsk"],
    ["fi", "Suomi"], ["pl", "Polski"], ["cs", "Čeština"], ["sk", "Slovenčina"], ["ro", "Română"],
    ["hu", "Magyar"], ["el", "Ελληνικά"], ["tr", "Türkçe"], ["uk", "Українська"], ["zh", "中文"]
  ];
  const I18N = {
    da: { planning:"PLANLÆGNING", title:"Vagtplan", subtitle:"Lav, ret og gem et overskueligt skema på få minutter.", language:"Sprog", setup:"1. Opsætning", basic:"Oplysninger", saved:"Gemt automatisk", titleLabel:"Navn på skema", weeks:"Ugenumre", weeksHint:"Skriv fx 42, 43, 44", employees:"Medarbejdere", employeesHint:"Navnene bliver kolonner i skemaet.", addEmployee:"Tilføj medarbejder", tip:"Klik i et vagtfelt og vælg en mulighed. Brug", other:"Andet…", tipTail:"til en særlig note.", sample:"Indsæt eksempeldata", clear:"Ryd skemaet", schedule:"2. Skema", editTable:"Redigér direkte i tabellen", clickCell:"Klik på et felt for at redigere", filled:"felt udfyldt", footer:"Skemaet gemmes automatisk i denne browser. Excel-filen indeholder én fane pr. uge.", edit:"Rediger felt", choose:"Vælg en mulighed", custom:"Eget tal eller note", customPlaceholder:"Skriv fx 09, 12 eller en note", save:"Gem", close:"Luk redigering", blank:"Tomt", day:"Ugedag", employee:"Medarbejder", remove:"Fjern", install:"Installer app", print:"Print", excel:"Hent Excel", week:"Uge", current:"Nuværende valg", empty:"Tomt felt", clearConfirm:"Vil du rydde alle felter i skemaet? Opsætningen bevares.", clearToast:"Alle vagtfelter er ryddet.", sampleConfirm:"Indsæt eksempeldata fra fotoets opsætning? Eksisterende vagtfelter overskrives.", sampleToast:"Eksempeldata er indsat.", excelToast:"Excel-filen er hentet.", installHelp:"Vælg 'Føj til hjemmeskærm' i browserens menu.", days:["Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag","Søndag"], fri:"Fri", ferie:"Ferie", skole:"Skole", otherValue:"Andet" },
    en: { planning:"PLANNING", title:"Shift schedule", subtitle:"Create, edit and save a clear schedule in minutes.", language:"Language", setup:"1. Setup", basic:"Basic details", saved:"Saved automatically", titleLabel:"Schedule name", weeks:"Week numbers", weeksHint:"Write e.g. 42, 43, 44", employees:"Employees", employeesHint:"Names become columns in the schedule.", addEmployee:"Add employee", tip:"Click a shift field and choose an option. Use", other:"Other…", tipTail:"for a special note.", sample:"Insert sample data", clear:"Clear schedule", schedule:"2. Schedule", editTable:"Edit directly in the table", clickCell:"Click a field to edit", filled:"fields filled", footer:"The schedule is saved automatically in this browser. The Excel file has one sheet per week.", edit:"Edit field", choose:"Choose an option", custom:"Custom note", customPlaceholder:"Write e.g. course or swap", save:"Save", close:"Close editor", blank:"Empty", day:"Day", employee:"Employee", remove:"Remove", install:"Install app", print:"Print / PDF", excel:"Download Excel", week:"Week", current:"Current choice", empty:"Empty field", clearConfirm:"Clear all schedule fields? The setup will be kept.", clearToast:"All shift fields were cleared.", sampleConfirm:"Insert sample data from the photo setup? Existing shift fields will be overwritten.", sampleToast:"Sample data inserted.", excelToast:"Excel file downloaded.", installHelp:"Choose 'Add to Home Screen' in your browser menu.", days:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], fri:"Off", ferie:"Holiday", skole:"School", otherValue:"Other" },
    de: { planning:"PLANUNG", title:"Schichtplan", subtitle:"Erstelle, bearbeite und speichere einen übersichtlichen Plan in wenigen Minuten.", language:"Sprache", setup:"1. Einrichtung", basic:"Grunddaten", saved:"Automatisch gespeichert", titleLabel:"Name des Plans", weeks:"Kalenderwochen", weeksHint:"Z. B. 42, 43, 44", employees:"Mitarbeiter", employeesHint:"Die Namen werden zu Spalten im Plan.", addEmployee:"Mitarbeiter hinzufügen", tip:"Klicke auf ein Feld und wähle eine Option. Nutze", other:"Andere…", tipTail:"für eine besondere Notiz.", sample:"Beispieldaten einfügen", clear:"Plan leeren", schedule:"2. Plan", editTable:"Direkt in der Tabelle bearbeiten", clickCell:"Zum Bearbeiten klicken", filled:"Felder ausgefüllt", footer:"Der Plan wird automatisch in diesem Browser gespeichert. Die Excel-Datei enthält ein Blatt pro Woche.", edit:"Feld bearbeiten", choose:"Option auswählen", custom:"Eigene Notiz", customPlaceholder:"Z. B. Kurs oder Tausch", save:"Speichern", close:"Bearbeitung schließen", blank:"Leer", day:"Wochentag", employee:"Mitarbeiter", remove:"Entfernen", install:"App installieren", print:"Drucken / PDF", excel:"Excel herunterladen", week:"Woche", current:"Aktuelle Auswahl", empty:"Leeres Feld", clearConfirm:"Alle Felder leeren? Die Einrichtung bleibt erhalten.", clearToast:"Alle Schichtfelder wurden geleert.", sampleConfirm:"Beispieldaten einfügen? Bestehende Felder werden überschrieben.", sampleToast:"Beispieldaten eingefügt.", excelToast:"Excel-Datei heruntergeladen.", installHelp:"Wähle im Browsermenü 'Zum Startbildschirm hinzufügen'.", days:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"], fri:"Frei", ferie:"Urlaub", skole:"Schule", otherValue:"Andere" },
    es: { planning:"PLANIFICACIÓN", title:"Horario de turnos", subtitle:"Crea, edita y guarda un horario claro en pocos minutos.", language:"Idioma", setup:"1. Configuración", basic:"Datos básicos", saved:"Guardado automáticamente", titleLabel:"Nombre del horario", weeks:"Números de semana", weeksHint:"Escribe, por ejemplo, 42, 43, 44", employees:"Empleados", employeesHint:"Los nombres serán columnas del horario.", addEmployee:"Añadir empleado", tip:"Pulsa un campo y elige una opción. Usa", other:"Otro…", tipTail:"para una nota especial.", sample:"Insertar datos de ejemplo", clear:"Borrar horario", schedule:"2. Horario", editTable:"Editar directamente en la tabla", clickCell:"Pulsa un campo para editar", filled:"campos completos", footer:"El horario se guarda automáticamente en este navegador. El Excel tiene una hoja por semana.", edit:"Editar campo", choose:"Elige una opción", custom:"Nota propia", customPlaceholder:"Escribe, por ejemplo, curso o cambio", save:"Guardar", close:"Cerrar edición", blank:"Vacío", day:"Día", employee:"Empleado", remove:"Quitar", install:"Instalar app", print:"Imprimir / PDF", excel:"Descargar Excel", week:"Semana", current:"Selección actual", empty:"Campo vacío", clearConfirm:"¿Borrar todos los campos? La configuración se conservará.", clearToast:"Se han borrado todos los campos.", sampleConfirm:"¿Insertar datos de ejemplo? Se sobrescribirán los campos existentes.", sampleToast:"Datos de ejemplo insertados.", excelToast:"Archivo Excel descargado.", installHelp:"Elige 'Añadir a pantalla de inicio' en el menú del navegador.", days:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"], fri:"Libre", ferie:"Vacaciones", skole:"Escuela", otherValue:"Otro" },
    fr: { planning:"PLANIFICATION", title:"Planning des équipes", subtitle:"Créez, modifiez et enregistrez un planning clair en quelques minutes.", language:"Langue", setup:"1. Configuration", basic:"Informations générales", saved:"Enregistré automatiquement", titleLabel:"Nom du planning", weeks:"Numéros de semaine", weeksHint:"Écrivez par ex. 42, 43, 44", employees:"Employés", employeesHint:"Les noms deviennent les colonnes du planning.", addEmployee:"Ajouter un employé", tip:"Cliquez sur une case et choisissez une option. Utilisez", other:"Autre…", tipTail:"pour une note spéciale.", sample:"Insérer des exemples", clear:"Effacer le planning", schedule:"2. Planning", editTable:"Modifier directement dans le tableau", clickCell:"Cliquez pour modifier", filled:"cases remplies", footer:"Le planning est enregistré automatiquement dans ce navigateur. Le fichier Excel contient une feuille par semaine.", edit:"Modifier la case", choose:"Choisissez une option", custom:"Note personnalisée", customPlaceholder:"Écrivez par ex. formation ou échange", save:"Enregistrer", close:"Fermer", blank:"Vide", day:"Jour", employee:"Employé", remove:"Supprimer", install:"Installer l’app", print:"Imprimer / PDF", excel:"Télécharger Excel", week:"Semaine", current:"Choix actuel", empty:"Case vide", clearConfirm:"Effacer toutes les cases ? La configuration est conservée.", clearToast:"Toutes les cases ont été effacées.", sampleConfirm:"Insérer les exemples ? Les cases actuelles seront remplacées.", sampleToast:"Exemples insérés.", excelToast:"Fichier Excel téléchargé.", installHelp:"Choisissez 'Ajouter à l’écran d’accueil' dans le menu du navigateur.", days:["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"], fri:"Repos", ferie:"Congé", skole:"École", otherValue:"Autre" },
    it: { planning:"PIANIFICAZIONE", title:"Turni di lavoro", subtitle:"Crea, modifica e salva un piano chiaro in pochi minuti.", language:"Lingua", setup:"1. Impostazione", basic:"Informazioni di base", saved:"Salvato automaticamente", titleLabel:"Nome del piano", weeks:"Numeri delle settimane", weeksHint:"Scrivi ad es. 42, 43, 44", employees:"Dipendenti", employeesHint:"I nomi diventano colonne del piano.", addEmployee:"Aggiungi dipendente", tip:"Tocca un campo e scegli un’opzione. Usa", other:"Altro…", tipTail:"per una nota speciale.", sample:"Inserisci dati di esempio", clear:"Cancella piano", schedule:"2. Piano", editTable:"Modifica direttamente nella tabella", clickCell:"Tocca per modificare", filled:"campi compilati", footer:"Il piano viene salvato automaticamente in questo browser. Excel contiene un foglio per settimana.", edit:"Modifica campo", choose:"Scegli un’opzione", custom:"Nota personalizzata", customPlaceholder:"Scrivi ad es. corso o cambio", save:"Salva", close:"Chiudi", blank:"Vuoto", day:"Giorno", employee:"Dipendente", remove:"Rimuovi", install:"Installa app", print:"Stampa / PDF", excel:"Scarica Excel", week:"Settimana", current:"Scelta attuale", empty:"Campo vuoto", clearConfirm:"Cancellare tutti i campi? L’impostazione verrà mantenuta.", clearToast:"Tutti i campi sono stati cancellati.", sampleConfirm:"Inserire dati di esempio? I campi esistenti verranno sovrascritti.", sampleToast:"Dati di esempio inseriti.", excelToast:"File Excel scaricato.", installHelp:"Scegli 'Aggiungi alla schermata Home' nel menu del browser.", days:["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Domenica"], fri:"Riposo", ferie:"Ferie", skole:"Scuola", otherValue:"Altro" },
    pt: { planning:"PLANEAMENTO", title:"Escala de turnos", subtitle:"Crie, edite e guarde uma escala clara em poucos minutos.", language:"Idioma", setup:"1. Configuração", basic:"Informações básicas", saved:"Guardado automaticamente", titleLabel:"Nome da escala", weeks:"Números das semanas", weeksHint:"Escreva, por exemplo, 42, 43, 44", employees:"Funcionários", employeesHint:"Os nomes tornam-se colunas da escala.", addEmployee:"Adicionar funcionário", tip:"Toque num campo e escolha uma opção. Use", other:"Outro…", tipTail:"para uma nota especial.", sample:"Inserir dados de exemplo", clear:"Limpar escala", schedule:"2. Escala", editTable:"Editar diretamente na tabela", clickCell:"Toque para editar", filled:"campos preenchidos", footer:"A escala é guardada automaticamente neste navegador. O Excel tem uma folha por semana.", edit:"Editar campo", choose:"Escolha uma opção", custom:"Nota personalizada", customPlaceholder:"Escreva, por exemplo, curso ou troca", save:"Guardar", close:"Fechar", blank:"Vazio", day:"Dia", employee:"Funcionário", remove:"Remover", install:"Instalar app", print:"Imprimir / PDF", excel:"Descarregar Excel", week:"Semana", current:"Escolha atual", empty:"Campo vazio", clearConfirm:"Limpar todos os campos? A configuração será mantida.", clearToast:"Todos os campos foram limpos.", sampleConfirm:"Inserir dados de exemplo? Os campos atuais serão substituídos.", sampleToast:"Dados de exemplo inseridos.", excelToast:"Ficheiro Excel descarregado.", installHelp:"Escolha 'Adicionar ao ecrã principal' no menu do navegador.", days:["Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado","Domingo"], fri:"Folga", ferie:"Férias", skole:"Escola", otherValue:"Outro" },
    nl: { planning:"PLANNING", title:"Rooster", subtitle:"Maak, bewerk en bewaar een overzichtelijk rooster in enkele minuten.", language:"Taal", setup:"1. Instellen", basic:"Basisgegevens", saved:"Automatisch opgeslagen", titleLabel:"Naam van rooster", weeks:"Weeknummers", weeksHint:"Vul bijv. 42, 43, 44 in", employees:"Medewerkers", employeesHint:"Namen worden kolommen in het rooster.", addEmployee:"Medewerker toevoegen", tip:"Klik op een veld en kies een optie. Gebruik", other:"Anders…", tipTail:"voor een speciale notitie.", sample:"Voorbeeldgegevens invoegen", clear:"Rooster wissen", schedule:"2. Rooster", editTable:"Direct in de tabel bewerken", clickCell:"Klik om te bewerken", filled:"velden ingevuld", footer:"Het rooster wordt automatisch in deze browser opgeslagen. Excel bevat één tabblad per week.", edit:"Veld bewerken", choose:"Kies een optie", custom:"Eigen notitie", customPlaceholder:"Vul bijv. cursus of ruil in", save:"Opslaan", close:"Sluiten", blank:"Leeg", day:"Dag", employee:"Medewerker", remove:"Verwijderen", install:"App installeren", print:"Afdrukken / PDF", excel:"Excel downloaden", week:"Week", current:"Huidige keuze", empty:"Leeg veld", clearConfirm:"Alle velden wissen? De instellingen blijven behouden.", clearToast:"Alle velden zijn gewist.", sampleConfirm:"Voorbeeldgegevens invoegen? Bestaande velden worden overschreven.", sampleToast:"Voorbeeldgegevens ingevoegd.", excelToast:"Excel-bestand gedownload.", installHelp:"Kies 'Toevoegen aan startscherm' in het browsermenu.", days:["Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag","Zondag"], fri:"Vrij", ferie:"Vakantie", skole:"School", otherValue:"Anders" },
    sv: { planning:"PLANERING", title:"Arbetsschema", subtitle:"Skapa, redigera och spara ett tydligt schema på några minuter.", language:"Språk", setup:"1. Inställningar", basic:"Grunduppgifter", saved:"Sparat automatiskt", titleLabel:"Schemanamn", weeks:"Veckonummer", weeksHint:"Skriv t.ex. 42, 43, 44", employees:"Medarbetare", employeesHint:"Namnen blir kolumner i schemat.", addEmployee:"Lägg till medarbetare", tip:"Klicka på ett fält och välj ett alternativ. Använd", other:"Annat…", tipTail:"för en särskild anteckning.", sample:"Infoga exempeldata", clear:"Rensa schema", schedule:"2. Schema", editTable:"Redigera direkt i tabellen", clickCell:"Klicka för att redigera", filled:"fält ifyllda", footer:"Schemat sparas automatiskt i den här webbläsaren. Excel-filen har ett blad per vecka.", edit:"Redigera fält", choose:"Välj ett alternativ", custom:"Egen anteckning", customPlaceholder:"Skriv t.ex. kurs eller byte", save:"Spara", close:"Stäng", blank:"Tomt", day:"Dag", employee:"Medarbetare", remove:"Ta bort", install:"Installera app", print:"Skriv ut / PDF", excel:"Hämta Excel", week:"Vecka", current:"Aktuellt val", empty:"Tomt fält", clearConfirm:"Rensa alla fält? Inställningarna sparas.", clearToast:"Alla fält har rensats.", sampleConfirm:"Infoga exempeldata? Befintliga fält skrivs över.", sampleToast:"Exempeldata infogad.", excelToast:"Excel-filen har hämtats.", installHelp:"Välj 'Lägg till på hemskärmen' i webbläsarens meny.", days:["Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag"], fri:"Ledig", ferie:"Semester", skole:"Skola", otherValue:"Annat" },
    no: { planning:"PLANLEGGING", title:"Vaktplan", subtitle:"Lag, rediger og lagre en oversiktlig plan på få minutter.", language:"Språk", setup:"1. Oppsett", basic:"Grunnopplysninger", saved:"Lagret automatisk", titleLabel:"Navn på plan", weeks:"Ukenumre", weeksHint:"Skriv f.eks. 42, 43, 44", employees:"Ansatte", employeesHint:"Navnene blir kolonner i planen.", addEmployee:"Legg til ansatt", tip:"Klikk på et felt og velg et alternativ. Bruk", other:"Annet…", tipTail:"for en egen merknad.", sample:"Sett inn eksempeldata", clear:"Tøm plan", schedule:"2. Plan", editTable:"Rediger direkte i tabellen", clickCell:"Klikk for å redigere", filled:"felt utfylt", footer:"Planen lagres automatisk i denne nettleseren. Excel-filen har ett ark per uke.", edit:"Rediger felt", choose:"Velg et alternativ", custom:"Egen merknad", customPlaceholder:"Skriv f.eks. kurs eller bytte", save:"Lagre", close:"Lukk", blank:"Tomt", day:"Dag", employee:"Ansatt", remove:"Fjern", install:"Installer app", print:"Skriv ut / PDF", excel:"Last ned Excel", week:"Uke", current:"Nåværende valg", empty:"Tomt felt", clearConfirm:"Tømme alle felt? Oppsettet beholdes.", clearToast:"Alle vaktfelt er tømt.", sampleConfirm:"Sette inn eksempeldata? Eksisterende felt overskrives.", sampleToast:"Eksempeldata satt inn.", excelToast:"Excel-filen er lastet ned.", installHelp:"Velg 'Legg til på startskjerm' i nettlesermenyen.", days:["Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag","Søndag"], fri:"Fri", ferie:"Ferie", skole:"Skole", otherValue:"Annet" },
    fi: { planning:"SUUNNITTELU", title:"Työvuorolista", subtitle:"Luo, muokkaa ja tallenna selkeä lista muutamassa minuutissa.", language:"Kieli", setup:"1. Asetukset", basic:"Perustiedot", saved:"Tallennettu automaattisesti", titleLabel:"Listan nimi", weeks:"Viikkonumerot", weeksHint:"Kirjoita esim. 42, 43, 44", employees:"Työntekijät", employeesHint:"Nimistä tulee työvuorolistan sarakkeet.", addEmployee:"Lisää työntekijä", tip:"Napsauta kenttää ja valitse vaihtoehto. Käytä", other:"Muu…", tipTail:"erityistä merkintää varten.", sample:"Lisää esimerkkitiedot", clear:"Tyhjennä lista", schedule:"2. Lista", editTable:"Muokkaa suoraan taulukossa", clickCell:"Muokkaa napsauttamalla", filled:"kenttää täytetty", footer:"Lista tallennetaan automaattisesti tähän selaimeen. Excel-tiedostossa on yksi välilehti viikkoa kohti.", edit:"Muokkaa kenttää", choose:"Valitse vaihtoehto", custom:"Oma merkintä", customPlaceholder:"Kirjoita esim. kurssi tai vaihto", save:"Tallenna", close:"Sulje", blank:"Tyhjä", day:"Päivä", employee:"Työntekijä", remove:"Poista", install:"Asenna sovellus", print:"Tulosta / PDF", excel:"Lataa Excel", week:"Viikko", current:"Nykyinen valinta", empty:"Tyhjä kenttä", clearConfirm:"Tyhjennetäänkö kaikki kentät? Asetukset säilyvät.", clearToast:"Kaikki kentät tyhjennettiin.", sampleConfirm:"Lisätäänkö esimerkkitiedot? Nykyiset tiedot korvataan.", sampleToast:"Esimerkkitiedot lisättiin.", excelToast:"Excel-tiedosto ladattu.", installHelp:"Valitse selaimen valikosta 'Lisää aloitusnäyttöön'.", days:["Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai","Sunnuntai"], fri:"Vapaa", ferie:"Loma", skole:"Koulu", otherValue:"Muu" },
    pl: { planning:"PLANOWANIE", title:"Grafik zmian", subtitle:"Twórz, edytuj i zapisuj czytelny grafik w kilka minut.", language:"Język", setup:"1. Ustawienia", basic:"Podstawowe informacje", saved:"Zapisano automatycznie", titleLabel:"Nazwa grafiku", weeks:"Numery tygodni", weeksHint:"Wpisz np. 42, 43, 44", employees:"Pracownicy", employeesHint:"Nazwy będą kolumnami grafiku.", addEmployee:"Dodaj pracownika", tip:"Kliknij pole i wybierz opcję. Użyj", other:"Inne…", tipTail:"dla specjalnej notatki.", sample:"Wstaw dane przykładowe", clear:"Wyczyść grafik", schedule:"2. Grafik", editTable:"Edytuj bezpośrednio w tabeli", clickCell:"Kliknij, aby edytować", filled:"wypełnionych pól", footer:"Grafik jest zapisywany automatycznie w tej przeglądarce. Excel zawiera jeden arkusz na tydzień.", edit:"Edytuj pole", choose:"Wybierz opcję", custom:"Własna notatka", customPlaceholder:"Wpisz np. szkolenie lub zamianę", save:"Zapisz", close:"Zamknij", blank:"Puste", day:"Dzień", employee:"Pracownik", remove:"Usuń", install:"Zainstaluj aplikację", print:"Drukuj / PDF", excel:"Pobierz Excel", week:"Tydzień", current:"Bieżący wybór", empty:"Puste pole", clearConfirm:"Wyczyścić wszystkie pola? Ustawienia zostaną zachowane.", clearToast:"Wszystkie pola zostały wyczyszczone.", sampleConfirm:"Wstawić dane przykładowe? Istniejące pola zostaną nadpisane.", sampleToast:"Wstawiono dane przykładowe.", excelToast:"Pobrano plik Excel.", installHelp:"Wybierz 'Dodaj do ekranu głównego' w menu przeglądarki.", days:["Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota","Niedziela"], fri:"Wolne", ferie:"Urlop", skole:"Szkoła", otherValue:"Inne" },
    cs: { planning:"PLÁNOVÁNÍ", title:"Směnový plán", subtitle:"Vytvořte, upravte a uložte přehledný plán během několika minut.", language:"Jazyk", setup:"1. Nastavení", basic:"Základní údaje", saved:"Automaticky uloženo", titleLabel:"Název plánu", weeks:"Čísla týdnů", weeksHint:"Napište např. 42, 43, 44", employees:"Zaměstnanci", employeesHint:"Jména budou sloupci plánu.", addEmployee:"Přidat zaměstnance", tip:"Klikněte na pole a vyberte možnost. Použijte", other:"Jiné…", tipTail:"pro vlastní poznámku.", sample:"Vložit ukázková data", clear:"Vymazat plán", schedule:"2. Plán", editTable:"Upravit přímo v tabulce", clickCell:"Kliknutím upravíte", filled:"vyplněných polí", footer:"Plán se automaticky ukládá v tomto prohlížeči. Excel obsahuje jeden list pro každý týden.", edit:"Upravit pole", choose:"Vyberte možnost", custom:"Vlastní poznámka", customPlaceholder:"Napište např. kurz nebo výměnu", save:"Uložit", close:"Zavřít", blank:"Prázdné", day:"Den", employee:"Zaměstnanec", remove:"Odebrat", install:"Nainstalovat aplikaci", print:"Tisk / PDF", excel:"Stáhnout Excel", week:"Týden", current:"Aktuální volba", empty:"Prázdné pole", clearConfirm:"Vymazat všechna pole? Nastavení zůstane zachováno.", clearToast:"Všechna pole byla vymazána.", sampleConfirm:"Vložit ukázková data? Stávající pole budou přepsána.", sampleToast:"Ukázková data vložena.", excelToast:"Soubor Excel stažen.", installHelp:"V nabídce prohlížeče zvolte 'Přidat na plochu'.", days:["Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota","Neděle"], fri:"Volno", ferie:"Dovolená", skole:"Škola", otherValue:"Jiné" },
    sk: { planning:"PLÁNOVANIE", title:"Rozpis zmien", subtitle:"Vytvorte, upravte a uložte prehľadný rozpis za pár minút.", language:"Jazyk", setup:"1. Nastavenie", basic:"Základné údaje", saved:"Uložené automaticky", titleLabel:"Názov rozpisu", weeks:"Čísla týždňov", weeksHint:"Napíšte napr. 42, 43, 44", employees:"Zamestnanci", employeesHint:"Mená budú stĺpcami rozpisu.", addEmployee:"Pridať zamestnanca", tip:"Kliknite na pole a vyberte možnosť. Použite", other:"Iné…", tipTail:"pre vlastnú poznámku.", sample:"Vložiť vzorové údaje", clear:"Vymazať rozpis", schedule:"2. Rozpis", editTable:"Upraviť priamo v tabuľke", clickCell:"Kliknutím upravíte", filled:"vyplnených polí", footer:"Rozpis sa automaticky ukladá v tomto prehliadači. Excel obsahuje jeden hárok na týždeň.", edit:"Upraviť pole", choose:"Vyberte možnosť", custom:"Vlastná poznámka", customPlaceholder:"Napíšte napr. kurz alebo výmenu", save:"Uložiť", close:"Zavrieť", blank:"Prázdne", day:"Deň", employee:"Zamestnanec", remove:"Odstrániť", install:"Nainštalovať aplikáciu", print:"Tlač / PDF", excel:"Stiahnuť Excel", week:"Týždeň", current:"Aktuálna voľba", empty:"Prázdne pole", clearConfirm:"Vymazať všetky polia? Nastavenia zostanú.", clearToast:"Všetky polia boli vymazané.", sampleConfirm:"Vložiť vzorové údaje? Existujúce polia sa prepíšu.", sampleToast:"Vzorové údaje vložené.", excelToast:"Súbor Excel stiahnutý.", installHelp:"V menu prehliadača vyberte 'Pridať na plochu'.", days:["Pondelok","Utorok","Streda","Štvrtok","Piatok","Sobota","Nedeľa"], fri:"Voľno", ferie:"Dovolenka", skole:"Škola", otherValue:"Iné" },
    ro: { planning:"PLANIFICARE", title:"Program de ture", subtitle:"Creează, editează și salvează un program clar în câteva minute.", language:"Limbă", setup:"1. Configurare", basic:"Informații de bază", saved:"Salvat automat", titleLabel:"Numele programului", weeks:"Numerele săptămânilor", weeksHint:"Scrie, de exemplu, 42, 43, 44", employees:"Angajați", employeesHint:"Numele devin coloane în program.", addEmployee:"Adaugă angajat", tip:"Apasă pe un câmp și alege o opțiune. Folosește", other:"Altele…", tipTail:"pentru o notă specială.", sample:"Inserează date de exemplu", clear:"Șterge programul", schedule:"2. Program", editTable:"Editează direct în tabel", clickCell:"Apasă pentru editare", filled:"câmpuri completate", footer:"Programul este salvat automat în acest browser. Fișierul Excel are câte o foaie pentru fiecare săptămână.", edit:"Editează câmpul", choose:"Alege o opțiune", custom:"Notă personalizată", customPlaceholder:"Scrie, de exemplu, curs sau schimb", save:"Salvează", close:"Închide", blank:"Gol", day:"Zi", employee:"Angajat", remove:"Elimină", install:"Instalează aplicația", print:"Tipărește / PDF", excel:"Descarcă Excel", week:"Săptămâna", current:"Alegerea curentă", empty:"Câmp gol", clearConfirm:"Ștergi toate câmpurile? Configurarea se păstrează.", clearToast:"Toate câmpurile au fost șterse.", sampleConfirm:"Inserezi date de exemplu? Câmpurile existente vor fi înlocuite.", sampleToast:"Datele de exemplu au fost inserate.", excelToast:"Fișierul Excel a fost descărcat.", installHelp:"Alege 'Adaugă pe ecranul principal' din meniul browserului.", days:["Luni","Marți","Miercuri","Joi","Vineri","Sâmbătă","Duminică"], fri:"Liber", ferie:"Concediu", skole:"Școală", otherValue:"Altele" },
    hu: { planning:"TERVEZÉS", title:"Műszakbeosztás", subtitle:"Készítsen, szerkesszen és mentsen áttekinthető beosztást percek alatt.", language:"Nyelv", setup:"1. Beállítás", basic:"Alapadatok", saved:"Automatikusan mentve", titleLabel:"Beosztás neve", weeks:"Hetek száma", weeksHint:"Írja be például: 42, 43, 44", employees:"Munkatársak", employeesHint:"A nevek a beosztás oszlopai lesznek.", addEmployee:"Munkatárs hozzáadása", tip:"Kattintson egy mezőre, majd válasszon. Használja az", other:"Egyéb…", tipTail:"lehetőséget külön megjegyzéshez.", sample:"Mintaadatok beszúrása", clear:"Beosztás törlése", schedule:"2. Beosztás", editTable:"Szerkesztés közvetlenül a táblázatban", clickCell:"Kattintson a szerkesztéshez", filled:"kitöltött mező", footer:"A beosztás automatikusan mentődik ebben a böngészőben. Az Excel munkalaponként egy hetet tartalmaz.", edit:"Mező szerkesztése", choose:"Válasszon lehetőséget", custom:"Saját megjegyzés", customPlaceholder:"Írjon például tanfolyamot vagy cserét", save:"Mentés", close:"Bezárás", blank:"Üres", day:"Nap", employee:"Munkatárs", remove:"Eltávolítás", install:"Alkalmazás telepítése", print:"Nyomtatás / PDF", excel:"Excel letöltése", week:"Hét", current:"Jelenlegi választás", empty:"Üres mező", clearConfirm:"Törli az összes mezőt? A beállítások megmaradnak.", clearToast:"Minden mező törölve.", sampleConfirm:"Beszúrja a mintaadatokat? A meglévő mezők felülíródnak.", sampleToast:"Mintaadatok beszúrva.", excelToast:"Az Excel-fájl letöltve.", installHelp:"A böngésző menüjében válassza a 'Hozzáadás a kezdőképernyőhöz' lehetőséget.", days:["Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat","Vasárnap"], fri:"Szabad", ferie:"Szabadság", skole:"Iskola", otherValue:"Egyéb" },
    el: { planning:"ΠΡΟΓΡΑΜΜΑΤΙΣΜΟΣ", title:"Πρόγραμμα βαρδιών", subtitle:"Δημιουργήστε και αποθηκεύστε ένα καθαρό πρόγραμμα σε λίγα λεπτά.", language:"Γλώσσα", setup:"1. Ρυθμίσεις", basic:"Βασικά στοιχεία", saved:"Αποθηκεύτηκε αυτόματα", titleLabel:"Όνομα προγράμματος", weeks:"Αριθμοί εβδομάδων", weeksHint:"Γράψτε π.χ. 42, 43, 44", employees:"Εργαζόμενοι", employeesHint:"Τα ονόματα γίνονται στήλες στο πρόγραμμα.", addEmployee:"Προσθήκη εργαζομένου", tip:"Πατήστε ένα πεδίο και επιλέξτε. Χρησιμοποιήστε", other:"Άλλο…", tipTail:"για ειδική σημείωση.", sample:"Εισαγωγή παραδειγμάτων", clear:"Εκκαθάριση προγράμματος", schedule:"2. Πρόγραμμα", editTable:"Επεξεργασία στον πίνακα", clickCell:"Πατήστε για επεξεργασία", filled:"συμπληρωμένα πεδία", footer:"Το πρόγραμμα αποθηκεύεται αυτόματα σε αυτό το πρόγραμμα περιήγησης. Το Excel έχει ένα φύλλο ανά εβδομάδα.", edit:"Επεξεργασία πεδίου", choose:"Επιλέξτε", custom:"Προσαρμοσμένη σημείωση", customPlaceholder:"Γράψτε π.χ. μάθημα ή αλλαγή", save:"Αποθήκευση", close:"Κλείσιμο", blank:"Κενό", day:"Ημέρα", employee:"Εργαζόμενος", remove:"Αφαίρεση", install:"Εγκατάσταση εφαρμογής", print:"Εκτύπωση / PDF", excel:"Λήψη Excel", week:"Εβδομάδα", current:"Τρέχουσα επιλογή", empty:"Κενό πεδίο", clearConfirm:"Εκκαθάριση όλων των πεδίων; Οι ρυθμίσεις θα διατηρηθούν.", clearToast:"Όλα τα πεδία εκκαθαρίστηκαν.", sampleConfirm:"Εισαγωγή παραδειγμάτων; Τα υπάρχοντα πεδία θα αντικατασταθούν.", sampleToast:"Τα παραδείγματα εισήχθησαν.", excelToast:"Το αρχείο Excel λήφθηκε.", installHelp:"Επιλέξτε 'Προσθήκη στην αρχική οθόνη' από το μενού.", days:["Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο","Κυριακή"], fri:"Ρεπό", ferie:"Άδεια", skole:"Σχολείο", otherValue:"Άλλο" },
    tr: { planning:"PLANLAMA", title:"Vardiya planı", subtitle:"Birkaç dakika içinde anlaşılır bir plan oluşturun, düzenleyin ve kaydedin.", language:"Dil", setup:"1. Kurulum", basic:"Temel bilgiler", saved:"Otomatik kaydedildi", titleLabel:"Plan adı", weeks:"Hafta numaraları", weeksHint:"Örn. 42, 43, 44 yazın", employees:"Çalışanlar", employeesHint:"İsimler planda sütun olur.", addEmployee:"Çalışan ekle", tip:"Bir alana tıklayın ve seçenek seçin. Özel not için", other:"Diğer…", tipTail:"kullanın.", sample:"Örnek verileri ekle", clear:"Planı temizle", schedule:"2. Plan", editTable:"Tabloda doğrudan düzenle", clickCell:"Düzenlemek için tıklayın", filled:"alan dolduruldu", footer:"Plan bu tarayıcıya otomatik kaydedilir. Excel dosyasında her hafta için bir sayfa vardır.", edit:"Alanı düzenle", choose:"Seçenek belirleyin", custom:"Özel not", customPlaceholder:"Örn. kurs veya değişim yazın", save:"Kaydet", close:"Kapat", blank:"Boş", day:"Gün", employee:"Çalışan", remove:"Kaldır", install:"Uygulamayı yükle", print:"Yazdır / PDF", excel:"Excel indir", week:"Hafta", current:"Geçerli seçim", empty:"Boş alan", clearConfirm:"Tüm alanlar temizlensin mi? Ayarlar korunacak.", clearToast:"Tüm alanlar temizlendi.", sampleConfirm:"Örnek veriler eklensin mi? Mevcut alanların üzerine yazılır.", sampleToast:"Örnek veriler eklendi.", excelToast:"Excel dosyası indirildi.", installHelp:"Tarayıcı menüsünden 'Ana ekrana ekle' seçeneğini seçin.", days:["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"], fri:"İzinli", ferie:"Tatil", skole:"Okul", otherValue:"Diğer" },
    uk: { planning:"ПЛАНУВАННЯ", title:"Графік змін", subtitle:"Створюйте, редагуйте та зберігайте зрозумілий графік за кілька хвилин.", language:"Мова", setup:"1. Налаштування", basic:"Основні дані", saved:"Збережено автоматично", titleLabel:"Назва графіка", weeks:"Номери тижнів", weeksHint:"Напишіть, наприклад: 42, 43, 44", employees:"Працівники", employeesHint:"Імена стануть стовпцями графіка.", addEmployee:"Додати працівника", tip:"Натисніть поле та виберіть варіант. Для особливої нотатки використайте", other:"Інше…", tipTail:".", sample:"Вставити приклад даних", clear:"Очистити графік", schedule:"2. Графік", editTable:"Редагувати безпосередньо в таблиці", clickCell:"Натисніть для редагування", filled:"заповнених полів", footer:"Графік автоматично зберігається в цьому браузері. В Excel буде окремий аркуш для кожного тижня.", edit:"Редагувати поле", choose:"Виберіть варіант", custom:"Власна нотатка", customPlaceholder:"Напишіть, наприклад, курс або заміну", save:"Зберегти", close:"Закрити", blank:"Порожньо", day:"День", employee:"Працівник", remove:"Видалити", install:"Встановити застосунок", print:"Друк / PDF", excel:"Завантажити Excel", week:"Тиждень", current:"Поточний вибір", empty:"Порожнє поле", clearConfirm:"Очистити всі поля? Налаштування буде збережено.", clearToast:"Усі поля очищено.", sampleConfirm:"Вставити приклад даних? Наявні поля буде перезаписано.", sampleToast:"Приклад даних вставлено.", excelToast:"Файл Excel завантажено.", installHelp:"У меню браузера виберіть 'Додати на головний екран'.", days:["Понеділок","Вівторок","Середа","Четвер","П’ятниця","Субота","Неділя"], fri:"Вихідний", ferie:"Відпустка", skole:"Школа", otherValue:"Інше" },
    zh: { planning:"排班", title:"排班表", subtitle:"几分钟内创建、编辑并保存清晰的排班表。", language:"语言", setup:"1. 设置", basic:"基本信息", saved:"已自动保存", titleLabel:"排班表名称", weeks:"周数", weeksHint:"例如输入 42、43、44", employees:"员工", employeesHint:"姓名会成为排班表的列。", addEmployee:"添加员工", tip:"点击班次字段并选择选项。特殊备注可使用", other:"其他…", tipTail:"。", sample:"插入示例数据", clear:"清空排班表", schedule:"2. 排班表", editTable:"直接在表格中编辑", clickCell:"点击字段进行编辑", filled:"个字段已填写", footer:"排班表会自动保存在此浏览器中。Excel 文件每周一个工作表。", edit:"编辑字段", choose:"请选择", custom:"自定义备注", customPlaceholder:"例如输入培训或调班", save:"保存", close:"关闭", blank:"空白", day:"日期", employee:"员工", remove:"删除", install:"安装应用", print:"打印 / PDF", excel:"下载 Excel", week:"周", current:"当前选择", empty:"空字段", clearConfirm:"清空所有字段？设置会保留。", clearToast:"所有班次字段已清空。", sampleConfirm:"插入示例数据？现有字段将被覆盖。", sampleToast:"示例数据已插入。", excelToast:"Excel 文件已下载。", installHelp:"在浏览器菜单中选择“添加到主屏幕”。", days:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"], fri:"休息", ferie:"休假", skole:"学校", otherValue:"其他" }
  };

  const makeId = (prefix) => `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
  const makePeople = (names, prefix) => names.map((name) => ({ id: makeId(prefix), name }));

  const createDefaultState = () => {
    const employees = makePeople(defaultEmployees, "emp");
    const days = makePeople(defaultDays, "day");
    return {
      title: "Vagtplan",
      weeks: ["42", "43", "44"],
      year: currentYear,
      locale: "da",
      languageInitialized: true,
      employees,
      days,
      entries: {},
      shiftOptions: ["", "1", "2", "3", "4", "5", "6", "7", "8", "Fri", "Ferie", "Skole"],
      setupNotes: "",
      weekNotes: {},
      dayNotes: {},
    };
  };


  function buildSampleEntries(employees = makePeople(defaultEmployees, "emp"), days = makePeople(defaultDays, "day")) {
    const entries = {};
    const put = (week, day, values) => values.forEach((value, index) => {
      const dayRecord = days.find((item) => item.name === day);
      const employee = employees[index];
      if (value && dayRecord && employee) entries[`${week}|${dayRecord.id}|${employee.id}`] = value;
    });
    put("42", "Mandag", ["Fri", "Ferie", "Ferie", "02", "4", "6", "6"]);
    put("42", "Tirsdag", ["2", "Ferie", "Ferie", "Ferie", "6", "Fri", "6"]);
    put("42", "Onsdag", ["2", "05", "Fri", "4", "6", "6", "6"]);
    put("42", "Torsdag", ["2", "05", "Ferie", "4", "Fri", "6", "6"]);
    put("42", "Fredag", ["1", "", "Ferie", "Fri", "6", "5", "4"]);
    put("42", "Lørdag", ["Fri", "", "Ferie", "Fri", "Fri", "01", "03"]);
    put("42", "Søndag", ["Fri", "", "Ferie", "Fri", "Fri", "01", "03"]);

    put("43", "Mandag", ["Fri", "5", "6", "2", "Skole", "6", "Fri"]);
    put("43", "Tirsdag", ["2", "5", "6", "4", "Skole", "Fri", "6"]);
    put("43", "Onsdag", ["2", "5", "FRI / 6", "4", "Skole", "6", "6"]);
    put("43", "Torsdag", ["2", "5", "6", "4", "Fri", "6", "6"]);
    put("43", "Fredag", ["1", "5", "6", "Fri", "Skole", "4", "6"]);
    put("43", "Lørdag", ["1", "Fri", "Fri", "4", "Skole", "FRI", "FRI"]);
    put("43", "Søndag", ["1", "Fri", "Fri", "4", "Skole", "FRI", "FRI"]);

    put("44", "Mandag", ["Fri", "", "", "", "", "", ""]);
    put("44", "Tirsdag", ["", "", "", "", "", "Fri", ""]);
    put("44", "Onsdag", ["", "", "Fri", "", "", "", ""]);
    put("44", "Torsdag", ["", "", "", "", "Fri", "", ""]);
    put("44", "Fredag", ["", "", "", "Fri", "", "", ""]);
    return entries;
  }

  const loadState = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!saved || !Array.isArray(saved.employees) || !Array.isArray(saved.days)) return createDefaultState();
      saved.entries = Object.fromEntries(Object.entries(saved.entries || {}).map(([key, value]) => [key, normalizeEntryValue(value)]));
      saved.locale = LANGUAGES.some(([code]) => code === saved.locale) ? saved.locale : "da";
      if (!saved.languageInitialized) {
        saved.locale = "da";
        saved.languageInitialized = true;
      }
      saved.year = currentYear;
      if (saved.employees.length > 1 && saved.employees.every((employee) => /^Medarbejder\s+\d+$/i.test(String(employee.name || "")))) {
        saved.employees = [{ ...saved.employees[0], name: "Medarbejder 1" }];
      }
      return saved;
    } catch {
      return createDefaultState();
    }
  };

  let state = loadState();
  let toastTimer;
  let activeEditKey = null;
  let calendarCursor = new Date(currentYear, new Date().getMonth(), 1);

  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  const entryKey = (week, dayId, employeeId) => `${week}|${dayId}|${employeeId}`;
  const standardShiftOptions = ["", "1", "2", "3", "4", "5", "6", "7", "8", "Fri", "Ferie", "Skole"];
  const fallbackText = {
    da: { tipLabel: "Tip", year: "År", yearHint: "Datoer beregnes fra ISO-ugen", pdf: "Download", printOnly: "Print", weekCalendar: "Ugekalender", weekPickerHint: "Klik på en eller flere uger for at vise dem", calendar: "Kalender", fullWeek: "Fuld uge", partialWeek: "Delvist udfyldt", emptyWeek: "Tom uge", previousMonth: "Forrige måned", nextMonth: "Næste måned", sampleHelp: "Indsætter eksempeldata i kalenderen. Eksisterende vagter kan blive overskrevet.", today: "I dag", copiedWeek: "Forrige uges plan er kopieret", clearSelectedConfirm: "Vil du rydde de åbne uger? Andre uger bevares.", clearSelectedToast: "De åbne uger er ryddet.", clearEntry: "Fjern tid", clearAllData: "Slet alle data permanent" },
    en: { tipLabel: "Tip", year: "Year", yearHint: "Dates use ISO weeks", pdf: "Download", printOnly: "Print", weekCalendar: "Calendar", weekPickerHint: "Click a date or week number", calendar: "Calendar", fullWeek: "Full week", partialWeek: "Partially filled", emptyWeek: "Empty week", previousMonth: "Previous month", nextMonth: "Next month", sampleHelp: "Inserts example data into the calendar. Existing shifts may be overwritten.", today: "Today", copiedWeek: "The previous week's plan was copied", clearSelectedConfirm: "Clear the open weeks? Other weeks will be kept.", clearSelectedToast: "The open weeks were cleared.", clearEntry: "Remove shift", clearAllData: "Delete all data permanently" }
  };
  const t = (key) => (I18N[state?.locale] || I18N.da)[key] ?? I18N.da[key] ?? (fallbackText[state?.locale] || fallbackText.da)[key] ?? key;
  const localeText = () => I18N[state?.locale] || I18N.da;
  const printHint = () => state?.locale === "da" ? "iPhone: Tryk Print / PDF og vælg derefter din AirPrint-printer." : "On iPhone, tap Print / PDF and then choose your AirPrint printer.";
  const isoWeekDate = (year, week, dayIndex) => {
    const numericWeek = Number(week);
    if (!Number.isInteger(numericWeek) || numericWeek < 1 || numericWeek > 53) return null;
    const jan4 = new Date(Date.UTC(Number(year), 0, 4));
    const mondayOffset = (jan4.getUTCDay() + 6) % 7;
    const date = new Date(jan4);
    date.setUTCDate(jan4.getUTCDate() - mondayOffset + (numericWeek - 1) * 7 + dayIndex);
    return date;
  };
  const dayName = (day, index) => localeText().days[index] || day.name || t("day");
  const dayDate = (week, index) => {
    const date = week ? isoWeekDate(state?.year || currentYear, week, index) : null;
    return date ? `${String(date.getUTCDate()).padStart(2, "0")}/${String(date.getUTCMonth() + 1).padStart(2, "0")}` : "";
  };
  const dayLabel = (day, index, week) => {
    const label = dayName(day, index);
    const date = dayDate(week, index);
    return date ? `${label} · ${date}` : label;
  };
  const isoWeekInfo = (date) => {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const day = (utcDate.getUTCDay() + 6) % 7;
    utcDate.setUTCDate(utcDate.getUTCDate() + 3 - day);
    const isoYear = utcDate.getUTCFullYear();
    const firstThursday = new Date(Date.UTC(isoYear, 0, 4));
    const week = 1 + Math.round((utcDate - firstThursday) / 604800000);
    return { year: isoYear, week };
  };
  const optionLabel = (option) => ({ "": "-", Fri: t("fri"), Ferie: t("ferie"), Skole: t("skole") }[option] ?? option);
  const languageLabel = (code) => LANGUAGES.find(([key]) => key === code)?.[1] || code;

  function canonicalEntry(value) {
    const raw = String(value ?? "").trim();
    if (!raw) return "";
    if (["FRI", "FRI /", "FRI/"].includes(raw.toUpperCase())) return "Fri";
    if (raw.toUpperCase() === "SKOLE") return "Skole";
    for (const dictionary of Object.values(I18N)) {
      if (raw.toLocaleLowerCase() === String(dictionary.fri).toLocaleLowerCase()) return "Fri";
      if (raw.toLocaleLowerCase() === String(dictionary.ferie).toLocaleLowerCase()) return "Ferie";
      if (raw.toLocaleLowerCase() === String(dictionary.skole).toLocaleLowerCase()) return "Skole";
    }
    return value ?? "";
  }

  function normalizeEntryValue(value) {
    return canonicalEntry(value);
  }

  function buildEditOptions(currentValue) {
    const normalizedValue = normalizeEntryValue(currentValue);
    let options = [...(state.shiftOptions || standardShiftOptions)];

    if (normalizedValue && !options.includes(normalizedValue)) {
      options.push(normalizedValue);
    }

    // Sort ALL options (including newly added ones) numerically then alphabetically
    options.sort((a, b) => {
      const isANum = a !== "" && !isNaN(a);
      const isBNum = b !== "" && !isNaN(b);

      if (isANum && isBNum) return Number(a) - Number(b);
      if (isANum) return -1;
      if (isBNum) return 1;
      return String(a).localeCompare(String(b));
    });

    const choices = options.map((option) => {
      const label = option === "" ? "-" : (optionLabel(option));

      // Do not allow removal of core categories: Fri, Ferie, Skole
      const isProtected = ["Fri", "Ferie", "Skole"].includes(option);
      const choiceRemove = (option && !isProtected) ? `<span class="choice-remove" data-clear-entry="true" role="button" tabindex="0" aria-label="${escapeHtml(state?.locale === "da" ? "Fjern valgmulighed" : "Remove option")}" title="${escapeHtml(state?.locale === "da" ? "Fjern valgmulighed" : "Remove option")}">×</span>` : "";

      return `<div class="edit-choice-wrap"><button type="button" class="edit-choice${option === normalizedValue ? " active" : ""}" data-edit-value="${escapeHtml(option)}" title="${escapeHtml(label)}"><span class="choice-label">${escapeHtml(label)}</span>${choiceRemove}</button></div>`;
    }).join("");
    return choices;
  }

  function renderEntryButton(key, week, dayName, employeeName, currentValue) {
    const label = currentValue ? optionLabel(currentValue) : "";
    const titleLabel = currentValue ? label : "-";
    const context = `${t("week")} ${week}, ${dayName}, ${employeeName}`;
    const valueClass = currentValue === "Fri" ? "shift-off" : currentValue === "Ferie" ? "shift-leave" : currentValue === "Skole" ? "shift-school" : currentValue ? "shift-number" : "shift-empty";
    return `<button type="button" class="shift-cell-button ${valueClass}" data-entry="${escapeHtml(key)}" data-entry-value="${escapeHtml(currentValue)}" data-week="${escapeHtml(week)}" data-day-name="${escapeHtml(dayName)}" data-employee-name="${escapeHtml(employeeName)}" aria-label="${escapeHtml(t("edit"))} ${escapeHtml(context)}" title="${escapeHtml(context)}: ${escapeHtml(titleLabel)}">${escapeHtml(label)}</button>`;
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    const time = new Intl.DateTimeFormat("da-DK", { hour: "2-digit", minute: "2-digit" }).format(new Date());
    $("#saveStatus").textContent = `${t("saved")} · ${time}`;
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
  }


  function renderSetup() {
    renderCalendar();
    $("#employeesList").innerHTML = state.employees.map((employee, index) => `
      <div class="editable-row">
        <input type="text" value="${escapeHtml(employee.name)}" data-employee-id="${employee.id}" aria-label="${escapeHtml(t("employee"))} ${index + 1}" />
        <button type="button" data-remove-employee="${employee.id}" aria-label="${escapeHtml(t("remove"))} ${escapeHtml(employee.name)}">×</button>
      </div>
    `).join("");

    // Render setup notes
    const notesInput = $("#setupNotesInput");
    if (notesInput) {
      notesInput.value = state.setupNotes || "";
    }
  }

  function weekFillStatus(week) {
    const total = state.days.length * state.employees.length;
    const filled = state.days.reduce((count, day) => count + state.employees.filter((employee) => String(state.entries[entryKey(week, day.id, employee.id)] || "").trim()).length, 0);
    return { filled, total, status: filled === 0 ? "empty" : filled === total ? "complete" : "partial" };
  }

  function copyPreviousWeekIfEmpty(week) {
    const targetStatus = weekFillStatus(week);
    const previousWeek = String(Number(week) - 1);
    const previousStatus = weekFillStatus(previousWeek);
    if (targetStatus.filled > 0 || previousStatus.filled === 0) return false;

    state.days.forEach((day) => state.employees.forEach((employee) => {
      const sourceKey = entryKey(previousWeek, day.id, employee.id);
      const targetKey = entryKey(week, day.id, employee.id);
      state.entries[targetKey] = state.entries[sourceKey] || "";
    }));
    return true;
  }

  function renderCalendar() {
    const year = calendarCursor.getFullYear();
    const month = calendarCursor.getMonth();
    const firstDay = new Date(year, month, 1);
    const start = new Date(firstDay);
    start.setDate(firstDay.getDate() - ((firstDay.getDay() + 6) % 7));
    const monthLabel = new Intl.DateTimeFormat(state.locale || "da-DK", { month: "long", year: "numeric" }).format(firstDay);
    $("#calendarLabel").textContent = t("calendar");
    $("#calendarHelp").innerHTML = `${escapeHtml(t("weekPickerHint"))} · <span class="calendar-help-mark complete">✓</span> ${escapeHtml(t("fullWeek"))} <span class="calendar-help-mark partial">◐</span> ${escapeHtml(t("partialWeek"))} <span class="calendar-help-empty">·</span> ${escapeHtml(t("emptyWeek"))}`;
    $("#calendarPrev").setAttribute("aria-label", t("previousMonth"));
    $("#calendarNext").setAttribute("aria-label", t("nextMonth"));
    $("#calendarMonthLabel").textContent = monthLabel.charAt(0).toUpperCase() + monthLabel.slice(1);
    const weekdayHeaders = localeText().days.map((day) => `<div class="calendar-grid-cell calendar-grid-header" role="columnheader">${escapeHtml(day.slice(0, 3))}</div>`).join("");
    const rows = Array.from({ length: 6 }, (_, rowIndex) => {
      const monday = new Date(start);
      monday.setDate(start.getDate() + rowIndex * 7);
      const weekInfo = isoWeekInfo(monday);
      const selectedWeek = state.year === weekInfo.year && state.weeks.includes(String(weekInfo.week));
      const fillStatus = weekFillStatus(String(weekInfo.week));
      const statusLabel = fillStatus.status === "complete" ? ` · ${t("fullWeek")}` : fillStatus.status === "partial" ? ` · ${t("partialWeek")}` : "";
      const statusMark = fillStatus.status === "complete" ? "✓" : fillStatus.status === "partial" ? "◐" : "";

      // Add a title attribute to the week button for quick notes access
      const weekNote = state.weekNotes ? (state.weekNotes[weekInfo.week] || "") : "";
      const weekButton = `<button type="button" class="calendar-grid-cell calendar-week-number ${fillStatus.status}${selectedWeek ? " active" : ""}" data-calendar-week="${weekInfo.week}" data-calendar-year="${weekInfo.year}" title="${escapeHtml(weekNote)}" aria-label="${escapeHtml(t("week"))} ${weekInfo.week}${escapeHtml(statusLabel)}"><span>${escapeHtml(t("week"))} ${weekInfo.week}</span>${statusMark ? `<span class="calendar-plan-mark" aria-hidden="true">${statusMark}</span>` : ""}</button>`;

      const days = Array.from({ length: 7 }, (_, dayIndex) => {
        const date = new Date(monday);
        date.setDate(monday.getDate() + dayIndex);
        const dateInfo = isoWeekInfo(date);
        const inMonth = date.getMonth() === month;
        const selected = state.year === dateInfo.year && state.weeks.includes(String(dateInfo.week));
        const dateKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
        const now = new Date();
        const isToday = date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth() && date.getDate() === now.getDate();
        return `<button type="button" class="calendar-grid-cell calendar-date${inMonth ? "" : " outside-month"}${selected ? " selected-week" : ""}${fillStatus.status !== "empty" ? ` ${fillStatus.status}-week` : ""}${isToday ? " today" : ""}" data-calendar-week="${dateInfo.week}" data-calendar-year="${dateInfo.year}" data-calendar-date="${dateKey}" aria-label="${escapeHtml(dayName(state.days[dayIndex] || { name: "" }, dayIndex))} ${date.getDate()}${isToday ? ` · ${t("today")}` : ""}"><span>${date.getDate()}</span>${isToday ? '<span class="today-dot" aria-hidden="true"></span>' : ""}</button>`;
      }).join("");
      return `${weekButton}${days}`;
    }).join("");
    $("#monthCalendar").innerHTML = `<div class="calendar-grid calendar-grid-head" role="row"><div class="calendar-grid-cell calendar-grid-header calendar-week-header" role="columnheader">${escapeHtml(t("week"))}</div>${weekdayHeaders}</div><div class="calendar-grid calendar-grid-body">${rows}</div>`;
  }

  function renderSchedule() {
    const container = $("#scheduleContainer");
    if (!state.weeks.length || !state.employees.length || !state.days.length) {
      container.innerHTML = `<div class="empty-state">${escapeHtml(t("empty"))}</div>`;
      updateSummary();
      return;
    }
    container.innerHTML = state.weeks.map((week) => {
      const status = weekFillStatus(week);
      const completeClass = status.status === "complete" ? " complete" : "";
      return `
        <section class="week-sheet${completeClass}" data-week-sheet="${escapeHtml(week)}">
          <div class="week-label"><h3>${escapeHtml(t("week"))} ${escapeHtml(week)} · ${escapeHtml(state.year)}</h3><span>${escapeHtml(t("clickCell"))} ${status.status === "complete" ? "✓" : ""}</span></div>
          <div class="table-scroll">
            <table class="desktop-table calendar-table">
              <thead><tr><th aria-label="${escapeHtml(t("day"))}"></th>${state.employees.map((employee) => `<th>${escapeHtml(employee.name || t("employee"))}</th>`).join("")}</tr></thead>
              <tbody>
                ${state.days.map((day, dayIndex) => `
                  <tr>
                    <th scope="row" class="day-name"><span class="calendar-day-name">${escapeHtml(dayName(day, dayIndex))}</span><small class="calendar-day-date">${escapeHtml(dayDate(week, dayIndex))}</small></th>
                    ${state.employees.map((employee) => {
                      const key = entryKey(week, day.id, employee.id);
                      const currentValue = normalizeEntryValue(state.entries[key] || "");
                      return `<td class="cell">${renderEntryButton(key, week, dayLabel(day, dayIndex, week), employee.name, currentValue)}</td>`;
                    }).join("")}
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </section>`;
    }).join("");
    updateSummary();
  }

  function updateSummary() {
    const count = Object.values(state.entries).filter((value) => String(value).trim()).length;
    $("#scheduleSummary").textContent = `${count} ${t("filled")}`;
  }

  function parseWeeks(value) {
    return [...new Set(String(value).split(/[\s,;]+/).map((week) => week.trim()).filter(Boolean))];
  }

  function addEmployee() {
    state.employees.push({ id: makeId("emp"), name: `${t("employee")} ${state.employees.length + 1}` });
    renderSetup();
    renderSchedule();
    saveState();
    document.querySelector("[data-employee-id]:last-of-type")?.focus();
  }

  function clearSchedule() {
    const openWeeks = new Set(state.weeks);
    if (!openWeeks.size || !window.confirm(t("clearSelectedConfirm"))) return;
    Object.keys(state.entries).forEach((key) => {
      if (openWeeks.has(key.split("|", 1)[0])) delete state.entries[key];
    });
    renderSetup();
    renderSchedule();
    saveState();
    showToast(t("clearSelectedToast"));
  }

  function clearAllData() {
    if (!window.confirm(t("clearAllData"))) return;
    localStorage.removeItem(STORAGE_KEY);
    state = createDefaultState();
    renderSetup();
    renderSchedule();
    saveState();
    showToast("Alle data er slettet permanent.");
  }


  function loadSample() {
    if (!window.confirm(t("sampleConfirm"))) return;
    state.entries = buildSampleEntries(state.employees, state.days);
    renderSchedule();
    saveState();
    showToast(t("sampleToast"));
  }

  function utf8Bytes(value) {
    return new TextEncoder().encode(value);
  }

  function concatBytes(...arrays) {
    const length = arrays.reduce((total, array) => total + array.length, 0);
    const result = new Uint8Array(length);
    let offset = 0;
    arrays.forEach((array) => { result.set(array, offset); offset += array.length; });
    return result;
  }

  function uint16(value) { return new Uint8Array([value & 255, (value >>> 8) & 255]); }
  function uint32(value) { return new Uint8Array([value & 255, (value >>> 8) & 255, (value >>> 16) & 255, (value >>> 24) & 255]); }

  function crc32(bytes) {
    let crc = 0xffffffff;
    for (const byte of bytes) {
      crc ^= byte;
      for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function zipStore(files) {
    const localParts = [];
    const centralParts = [];
    let offset = 0;
    files.forEach(({ name, text }) => {
      const nameBytes = utf8Bytes(name);
      const data = utf8Bytes(text);
      const checksum = crc32(data);
      const local = concatBytes(uint32(0x04034b50), uint16(20), uint16(0), uint16(0), uint16(0), uint16(0), uint32(checksum), uint32(data.length), uint32(data.length), uint16(nameBytes.length), uint16(0), nameBytes, data);
      const central = concatBytes(uint32(0x02014b50), uint16(20), uint16(20), uint16(0), uint16(0), uint16(0), uint16(0), uint32(checksum), uint32(data.length), uint32(data.length), uint16(nameBytes.length), uint16(0), uint16(0), uint16(0), uint16(0), uint32(0), uint32(offset), nameBytes);
      localParts.push(local);
      centralParts.push(central);
      offset += local.length;
    });
    const central = concatBytes(...centralParts);
    const locals = concatBytes(...localParts);
    const end = concatBytes(uint32(0x06054b50), uint16(0), uint16(0), uint16(files.length), uint16(files.length), uint32(central.length), uint32(locals.length), uint16(0));
    return concatBytes(locals, central, end);
  }

  function xml(value) { return escapeHtml(value ?? ""); }
  function columnName(index) {
    let result = "";
    let value = index + 1;
    while (value > 0) { const remainder = (value - 1) % 26; result = String.fromCharCode(65 + remainder) + result; value = Math.floor((value - 1) / 26); }
    return result;
  }

  function cellXml(row, column, value) {
    return `<c r="${columnName(column)}${row}" t="inlineStr"><is><t xml:space="preserve">${xml(value)}</t></is></c>`;
  }

  function sheetXml(rows) {
    const rowsXml = rows.map((row, rowIndex) => `<row r="${rowIndex + 1}">${row.map((value, columnIndex) => cellXml(rowIndex + 1, columnIndex, value)).join("")}</row>`).join("");
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>${rowsXml}</sheetData></worksheet>`;
  }

  function safeSheetName(name, index) {
    const cleaned = String(name || `Uge ${index}`).replace(/[\\/*[\]:?]/g, "_").slice(0, 31);
    return cleaned || `Uge ${index}`;
  }

  function buildXlsxBlob() {
    const files = [];
    const overview = [[state.title], [t("weeks"), state.weeks.join(", ")], [t("year"), state.year], [], [t("employees"), ...state.employees.map((employee) => employee.name)], [t("day"), ...state.days.map((day, index) => dayLabel(day, index, state.weeks[0]))]];
    const weekRows = state.weeks.map((week) => {
      const rows = [[state.title, `${t("week")} ${week}`], [], [t("day"), ...state.employees.map((employee) => employee.name)]];
      state.days.forEach((day, dayIndex) => rows.push([dayLabel(day, dayIndex, week), ...state.employees.map((employee) => optionLabel(normalizeEntryValue(state.entries[entryKey(week, day.id, employee.id)] || "")))]));
      return rows;
    });
    files.push({ name: "[Content_Types].xml", text: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>${["xl/worksheets/sheet1.xml", ...state.weeks.map((_, index) => `xl/worksheets/sheet${index + 2}.xml`)].map((part) => `<Override PartName="/${part}" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join("")}</Types>` });
    files.push({ name: "_rels/.rels", text: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>` });
    files.push({ name: "xl/workbook.xml", text: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="${xml(t("title"))}" sheetId="1" r:id="rId1"/>${state.weeks.map((week, index) => `<sheet name="${xml(safeSheetName(`${t("week")} ${week}`, index + 2))}" sheetId="${index + 2}" r:id="rId${index + 2}"/>`).join("")}</sheets></workbook>` });
    files.push({ name: "xl/_rels/workbook.xml.rels", text: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${["xl/worksheets/sheet1.xml", ...state.weeks.map((_, index) => `xl/worksheets/sheet${index + 2}.xml`)].map((part, index) => `<Relationship Id="rId${index + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/${part.split("/").pop()}"/>`).join("")}</Relationships>` });
    files.push({ name: "xl/worksheets/sheet1.xml", text: sheetXml(overview) });
    weekRows.forEach((rows, index) => files.push({ name: `xl/worksheets/sheet${index + 2}.xml`, text: sheetXml(rows) }));
    return new Blob([zipStore(files)], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  }

  function exportExcel() {
    const safeName = (state.title || "vagtplan").trim().replace(/[^a-z0-9æøåü -]/gi, "").replace(/\s+/g, "-").toLowerCase() || "vagtplan";
    const url = URL.createObjectURL(buildXlsxBlob());
    const link = document.createElement("a");
    link.href = url;
    link.download = `${safeName}-${state.weeks.join("-")}.xlsx`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast(t("excelToast"));
  }

  function applyTranslations() {
    const text = {
      appEyebrow: "planning", appTitle: "title", appSubtitle: "subtitle", languageLabel: "language", setupKicker: "setup",
      setupHeading: "basic", saveStatus: "saved", titleLabel: "titleLabel", weeksLabel: "weekCalendar", weeksHint: "weekPickerHint", yearLabel: "year", yearHint: "yearHint",
      employeesHeading: "employees", employeesHint: "employeesHint", tipLabel: "tipLabel", tipText: "tip", otherLabel: "other",
      tipTail: "tipTail", sampleButton: "sample", clearButton: "clear", scheduleKicker: "schedule", scheduleHeading: "editTable",
      editKicker: "edit", customLabel: "custom", saveCustomButton: "save", printButton: "printOnly", pdfButton: "pdf", exportButton: "excel", installButton: "install",
      footerText: "footer", printHint: "printHint", customValueInput: "customPlaceholder"
    };
    Object.entries(text).forEach(([id, key]) => {
      const element = $(`#${id}`);
      if (!element) return;
      if (id === "customValueInput") element.placeholder = t(key);
      else if (id === "printHint") element.textContent = printHint();
      else element.textContent = t(key);
    });
    $("#addEmployeeButton").setAttribute("aria-label", t("addEmployee"));
    $("#closeEditButton").setAttribute("aria-label", t("close"));
    $("#languageSelect").innerHTML = LANGUAGES.map(([code, name]) => `<option value="${code}">${escapeHtml(name)}</option>`).join("");
    $("#languageSelect").value = state.locale;
    $("#sampleButton").title = t("sampleHelp");
    document.documentElement.lang = state.locale;
    document.title = `Swift Schedules`;
  }

  function setupAboutDialog() {
    const aboutBtn = document.createElement("button");
    aboutBtn.className = "button button-quiet";
    aboutBtn.textContent = "Om appen";
    aboutBtn.style.fontSize = "0.7rem";
    aboutBtn.style.padding = "4px 8px";
    aboutBtn.addEventListener("click", () => { $("#aboutDialog").hidden = false; });

    // Place it in the footer for professional look
    const footer = $(".app-footer");
    if (footer) {
      const linkDiv = document.createElement("div");
      linkDiv.style.marginTop = "10px";
      linkDiv.appendChild(aboutBtn);
      footer.appendChild(linkDiv);
    }

    $("#closeAboutButton").addEventListener("click", () => { $("#aboutDialog").hidden = true; });
    $("#aboutDialog").addEventListener("click", (event) => {
      if (event.target.dataset.closeAbout) $("#aboutDialog").hidden = true;
    });
  }


  function setupInstallPrompt() {
    let deferredPrompt = null;
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredPrompt = event;
      $("#installButton").hidden = false;
    });
    $("#installButton").addEventListener("click", async () => {
      if (!deferredPrompt) {
        showToast(t("installHelp"));
        return;
      }
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      $("#installButton").hidden = true;
    });
    if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    }
  }

  $("#languageSelect").addEventListener("change", (event) => {
    state.locale = LANGUAGES.some(([code]) => code === event.target.value) ? event.target.value : "da";
    applyTranslations();
    renderSetup();
    renderSchedule();
    saveState();
  });

  $("#calendarPrev").addEventListener("click", () => { calendarCursor.setMonth(calendarCursor.getMonth() - 1); renderCalendar(); });
  $("#calendarNext").addEventListener("click", () => { calendarCursor.setMonth(calendarCursor.getMonth() + 1); renderCalendar(); });
  $("#monthCalendar").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-calendar-week]");
    if (!button) return;
    const week = button.dataset.calendarWeek;
    const year = Number(button.dataset.calendarYear);
    if (state.year !== year) state.weeks = [];
    state.year = year;
    const alreadySelected = state.weeks.includes(week);
    if (alreadySelected && state.weeks.length > 1) {
      state.weeks = state.weeks.filter((selectedWeek) => selectedWeek !== week);
      renderSetup();
      renderSchedule();
      saveState();
      return;
    }
    if (!alreadySelected) state.weeks.push(week);
    state.weeks = [...new Set(state.weeks)].sort((left, right) => Number(left) - Number(right));
    const copied = copyPreviousWeekIfEmpty(week);
    renderSetup();
    renderSchedule();
    saveState();
    if (copied) showToast(t("copiedWeek"));
  });

  // Allow adding notes to a week by right-clicking on the week number in the calendar
  $("#monthCalendar").addEventListener("contextmenu", (event) => {
    event.preventDefault();
    const button = event.target.closest("button[data-calendar-week]");
    if (!button) return;
    const week = button.dataset.calendarWeek;
    const currentNote = (state.weekNotes || {})[week] || "";
    const newNote = window.prompt(`${t("week")} ${week} - Noter:`, currentNote);
    if (newNote !== null) {
      state.weekNotes = state.weekNotes || {};
      state.weekNotes[week] = newNote;
      saveState();
      renderCalendar();
    }
  });

  $("#addEmployeeButton").addEventListener("click", addEmployee);
  $("#clearButton").addEventListener("click", () => {
    if (window.confirm(state.locale === "da" ? "Vil du rydde det nuværende skema? (Sletter kun vagter i åbne uger)" : "Clear current schedule? (Only clears shifts in open weeks)")) {
      clearSchedule();
    }
  });
  $("#sampleButton").addEventListener("click", loadSample);
  $("#printButton").addEventListener("click", () => {
    showToast(state.locale === "da" ? "Forbereder print/PDF... Vælg 'Gem som PDF' i menuen for at gemme filen." : "Preparing print/PDF... Select 'Save as PDF' in the menu to save the file.");
    setTimeout(() => window.print(), 100);
  });

  // New button for clearing all data (GDPR compliance)
  const clearAllBtn = document.createElement("button");
  clearAllBtn.className = "button button-quiet danger";
  clearAllBtn.textContent = t("clearAllData");
  clearAllBtn.style.marginLeft = "10px";
  clearAllBtn.addEventListener("click", clearAllData);
  $("#clearButton").after(clearAllBtn);


  $("#employeesList").addEventListener("input", (event) => {
    const id = event.target.dataset.employeeId;
    const employee = state.employees.find((item) => item.id === id);
    if (employee) { employee.name = event.target.value; renderSchedule(); saveState(); }
  });
  $("#employeesList").addEventListener("click", (event) => {
    const id = event.target.dataset.removeEmployee;
    if (!id) return;
    state.employees = state.employees.filter((employee) => employee.id !== id);
    renderSetup(); renderSchedule(); saveState();
  });

  $("#setupNotesInput")?.addEventListener("input", (event) => {
    state.setupNotes = event.target.value;
    saveState();
  });

  function openEditor(button) {
    activeEditKey = button.dataset.entry;
    const currentValue = normalizeEntryValue(state.entries[activeEditKey] || "");
    $("#editDialogTitle").textContent = `${button.dataset.employeeName} · ${button.dataset.dayName}`;
    $("#editDialogCurrent").textContent = `${t("week")} ${button.dataset.week} · ${t("current")}: ${optionLabel(currentValue || "")}`;
    $("#editOptions").innerHTML = buildEditOptions(currentValue);
    $("#customValueInput").value = currentValue && !standardShiftOptions.includes(currentValue) ? currentValue : "";
    $("#editDialog").hidden = false;
    $("#editOptions .edit-choice")?.focus();
  }

  function closeEditor() {
    activeEditKey = null;
    $("#editDialog").hidden = true;
  }

  function saveEditedValue(value) {
    if (activeEditKey === null) return;

    // If this is a new value that isn't in the options list yet, add it to the global options
    const normalizedValue = normalizeEntryValue(value);
    if (normalizedValue && !(state.shiftOptions || standardShiftOptions).includes(normalizedValue)) {
      state.shiftOptions = state.shiftOptions || [...standardShiftOptions];
      state.shiftOptions.push(normalizedValue);
      saveState();
    }

    state.entries[activeEditKey] = normalizedValue;
    closeEditor();
    renderSchedule();
    saveState();
  }

  $("#scheduleContainer").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-entry]");
    if (button) openEditor(button);
  });
  $("#editOptions").addEventListener("click", (event) => {
    const clearButton = event.target.closest(".choice-remove[data-clear-entry]");
    if (clearButton) {
      event.preventDefault();
      event.stopPropagation();

      const button = clearButton.closest("button[data-edit-value]");
      const valueToRemove = button?.dataset.editValue;

      if (valueToRemove) {
        if (window.confirm(state.locale === "da" ? `Vil du fjerne "${valueToRemove}" fra alle valgmuligheder?` : `Do you want to remove "${valueToRemove}" from all options?`)) {
          state.shiftOptions = (state.shiftOptions || standardShiftOptions).filter(opt => opt !== valueToRemove);

          // Also clear this value from any entries that were using it
          Object.keys(state.entries).forEach(key => {
            if (state.entries[key] === valueToRemove) state.entries[key] = "";
          });

          saveState();
          renderSchedule();
          if (activeEditKey) {
            openEditor({
              dataset: {
                entry: activeEditKey,
                employeeName: "...", // This is a bit hacky, better to re-trigger openEditor properly
                dayName: "...",
                week: "...",
              }
            });
          }
          // For now, just close and refresh
          closeEditor();
          renderSchedule();
          return;
        }
      }
      return;
    }
    const button = event.target.closest("button[data-edit-value]");
    if (button) saveEditedValue(button.dataset.editValue || "");
  });
  $("#editOptions").addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && event.target.closest("[data-clear-entry]")) {
      event.preventDefault();
      saveEditedValue("");
    }
  });
  $("#saveCustomButton").addEventListener("click", () => saveEditedValue($("#customValueInput").value.trim()));
  $("#customValueInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") saveEditedValue(event.target.value.trim());
  });
  $("#closeEditButton").addEventListener("click", closeEditor);
  $("#editDialog").addEventListener("click", (event) => {
    if (event.target.dataset.closeEdit) closeEditor();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !$("#editDialog").hidden) closeEditor();
  });

  applyTranslations();
  renderSetup();
  renderSchedule();
  setupInstallPrompt();
  setupAboutDialog();
})();
