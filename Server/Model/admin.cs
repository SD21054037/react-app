using System.Dynamic;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
public class Admin{
   [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int AdminID { get; set; }

    // Foreign key property
    public int GebruikerID { get; set; }

    // Navigation property back to Gebruikers
    [ForeignKey("GebruikerID")]
    public Gebruikers Gebruikers { get; set; }
}