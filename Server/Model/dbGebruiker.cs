using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Model{
    public enum UserType
    {
       Ervaringsdeskundige,
       bedrijf,
       Admin
    }
    public class dbGebruiker{
    [Key]
    public int GebruikerID { get; set; }

    [Column (TypeName ="nvarchar(100)")]
    public string? Voornaam { get; set; }


    [Column (TypeName ="nvarchar(100)")]
    public string? Achternaam { get; set; }


    [Column (TypeName ="nvarchar(100)")]  
    public string Password{get; set; }


    [Column (TypeName ="nvarchar(100)")]
    public string Email { get; set; }

    [Column (TypeName ="nvarchar(100)")]
    public string? Telefoonnummer { get; set; }
    public UserType? Type_Gebruiker { get; set; }
    
    public DateTime Datum_Registratie { get; set; }
    }

}