   public class Onderzoek {
     public string Titel { get; set; }
    public string Beschrijving { get; set; }
    public string Uitvoerder { get; set; }
    public DateTime Datum { get; set; }
    public string Locatie { get; set; }
    public int Beloning { get; set; }
    public string Soort { get; set; }
    public string Status { get; set; }
    public List<Gebruiker> Deelnemers { get; set; }

    public void OpenOnderzoekDetails()
    {
        // Implementeer de logica voor het openen van onderzoeksdetails
    }
   }