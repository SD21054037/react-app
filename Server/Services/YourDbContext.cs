using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;

public class YourDbContext : DbContext
{
    public DbSet<Gebruikers> Gebruikers { get; set; }
    public DbSet<Ervaringsdeskundige> Ervaringsdeskundigen { get; set; }
    // public YourDbContext(DbContextOptions<YourDbContext> options)
    //         : base(options)
    //     {
    //     }

    public YourDbContext(DbContextOptions<YourDbContext> options)
        : base(options)
    {
    }
     protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            
        }
   public void RegisterUser(Gebruikers user)
    {
        // Perform any necessary validation before saving to the database
        Gebruikers.Add(user);
        SaveChanges();
    }
    //    public  void SaveToDatabase(Gebruikers user)
    // {
    //     using (var dbContext = new YourDbContext())
    //     {
    //         dbContext.Gebruikers.Add(user);
    //         dbContext.SaveChanges();
    //     }
    // }
    // 1 van deze 2 methodes hierboven maar gebruiken dit nog later zien

     public void UpdateUser(Gebruikers user)
    {
        // Perform any necessary validation before updating the database
        Entry(user).State = EntityState.Modified;
        SaveChanges();
    }
    // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    // {
    //     // Configure your database connection here
    //     optionsBuilder.UseSqlServer("YourConnectionString");
    // }

    // public void addUser(string username, string password, string email, string telefoonnummer)
    // {

    //     Gebruikers newuser = new Gebruikers();
    //     {
    //     newuser.Voornaam = username;
    //     newuser.Password = password;
    //     newuser.Email = email;
    //     newuser.Telefoonnummer = telefoonnummer;
    //     };

    //     SaveChanges();


    

    // }
    
    public Gebruikers AuthenticateUser(string email, string password)
    {
        return Gebruikers.FirstOrDefault(u => u.Email == email && u.Password == password);
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