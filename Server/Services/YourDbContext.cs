using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;

public class YourDbContext : DbContext
{
    public DbSet<Gebruikers> Gebruikers { get; set; }
    public DbSet<Ervaringsdeskundige> Ervaringsdeskundigen { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // Configure your database connection here
        optionsBuilder.UseSqlServer("YourConnectionString");
    }
    public void addUser(string username, string password, string email, string telefoonnummer)
    {

        Gebruikers newuser = new Gebruikers();
        {
        newuser.Voornaam = username;
        newuser.Password = password;
        newuser.Email = email;
        newuser.Telefoonnummer = telefoonnummer;
        };

        SaveChanges();


    

    }

    public void UpdateProfile(int gebruikerID, string voornaam, string achternaam, string telefoonnummer, UserType type_gebruiker)
    {
        var user = Gebruikers.FirstOrDefault(u => u.GebruikerID == gebruikerID);

        if (user != null)
        {
            user.Voornaam = voornaam;
            user.Achternaam = achternaam;
            user.Telefoonnummer = telefoonnummer;
            user.Type_Gebruiker = type_gebruiker;

            SaveChanges();
        }
        // Hier if nog zetten wat als je niet user kan vinden
    }
}