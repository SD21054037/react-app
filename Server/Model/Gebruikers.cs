using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


public class Gebruikers
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]   
    public int GebruikerID { get; set; }
    public string Voornaam { get; set; }
    public string Achternaam { get; set; }
    
    public string Password{get; set; }
    public string Email { get; set; }
    public string Telefoonnummer { get; set; }
    public UserType Type_Gebruiker { get; set; }
    
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime Datum_Registratie { get; set; }
        public Admin Admin { get; set; }


    
 
}

public enum UserType
{
    Ervaringsdeskundige,
    Bedrijf,
    Admin
}

