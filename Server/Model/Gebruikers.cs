using System;

public class Gebruikers
{
    public int GebruikerID { get; set; }
    public string Voornaam { get; set; }
    public string Achternaam { get; set; }
    
    public string Password{get; set; }
    public string Email { get; set; }
    public string Telefoonnummer { get; set; }
    public UserType Type_Gebruiker { get; set; }
    public DateTime Datum_Registratie { get; set; }

    
     public static void SaveToDatabase(Gebruikers user)
    {
        using (var dbContext = new YourDbContext())
        {
            dbContext.Gebruikers.Add(user);
            dbContext.SaveChanges();
        }
    }
}

public enum UserType
{
    Ervaringsdeskundige,
    Bedrijf,
    Admin
}

