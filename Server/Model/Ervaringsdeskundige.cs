public class Ervaringsdeskundige
{
    public int ErvaringsdeskundigeID { get; set; }
    public int GebruikerID { get; set; }
    public Gebruikers Gebruiker { get; set; } 

    public string Postcode { get; set; }
    public string TypeBeperking { get; set; }
    public string Hulpmiddelen { get; set; }
    public string Aandoening_Ziekte { get; set; }
    public int Leeftijd { get; set; }

    public static void SaveToDatabase(Ervaringsdeskundige user)
    {
        using (var dbContext= new ErvaringsdeskundigeRepository())
        {
            dbContext.Ervaringsdeskundigen.Add(user);
            dbContext.SaveChanges();
        }
    }
}
