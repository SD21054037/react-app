public class Gebruiker{

    public string Voornaam { get; set; }
    public string Achternaam { get; set; }
    public string Postcode { get; set; }
    public string Email { get; set; }
    public int Telefoonnummer { get; set; }
    public List<string> TypeBeperking { get; set; }
    public List<string> Hulpmiddelen { get; set; }
    public string Aandoening { get; set; }
    public List<string> VoorkeurOnderzoek { get; set; }
    public string VoorkeurBenadering { get; set; }
    public bool CommercieleToestemming { get; set; }
    public DateTime Beschikbaarheid { get; set; }

     public bool Login(string gebruikersnaam, string wachtwoord)
    {
        // Implementeer de logica voor inloggen hier
        // Retourneer true als inloggen succesvol is, anders false
        return true; // of false, afhankelijk van de implementatie
    }

    // Methode voor registreren
    public bool Register(Gebruiker nieuwProfiel)
    {
        // Implementeer de logica voor registreren hier
        // Retourneer true als registratie succesvol is, anders false
        return true; // of false, afhankelijk van de implementatie
    }

    // Methode voor profiel bijwerken
    public bool UpdateProfile(Gebruiker nieuwProfiel)
    {
        
        // Implementeer de logica voor profiel bijwerken hier
        // Retourneer true als bijwerken succesvol is, anders false
        return true; // of false, afhankelijk van de implementatie
    }

    // Methode voor bekijken van deelgenomen onderzoeken
    public List<Onderzoek> ViewDeelgenomenOnderzoeken()
    {
        // Implementeer de logica voor het bekijken van deelgenomen onderzoeken hier
        // Retourneer een lijst van onderzoeken waar de ervaringsdeskundige aan heeft deelgenomen
        return new List<Onderzoek>(); // of de daadwerkelijke lijst, afhankelijk van de implementatie
    }
}
