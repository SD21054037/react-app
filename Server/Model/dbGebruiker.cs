using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Model{
     public class dbGebruiker
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int GebruikerID { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? Voornaam { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? Achternaam { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? Password { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? Email { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? Telefoonnummer { get; set; }

         // Navigation property to represent the many-to-many relationship
         public ICollection<dbLijstgebruikers>? OnderzoekGebruikers { get; set; }


        [Column(TypeName = "nvarchar(10)")]
        public string? Postcode { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string? Type_Beperking { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string? Hulpmiddelen { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string? Aandoening_Ziekte { get; set; }
        public ICollection<dbLijstgebruikers>? lijstgebruikers { get; set; }


        

        public string? Voorkeur_Onderzoek { get; set; }

        public Boolean? Verstandelijkheid { get; set; } // Assuming this is a string, adjust the type as needed

        public Benadering? Voorkeur_Benadering { get; set; }

        [Column(TypeName = "nvarchar(1)")]
        public Boolean? Commerciele_Benadering { get; set; }


        public DateTime Datum_Registratie { get; set; }

        [DataType(DataType.Date)]
        [Display(Name = "Date of Birth")]
        public DateTime? Geboortedatum { get; set; }
        [NotMapped] // This property is not mapped to the database
        public int Leeftijd
        {
             get
    {
        // Calculate age based on the current date and Geboortedatum
        if (Geboortedatum != null)
        {
            DateTime today = DateTime.Today;
            int age = today.Year - Geboortedatum?.Year ?? 0;
            if (Geboortedatum.Value.Date > today.AddYears(-age)) age--;
            return age;
        }
        return 0; // Default value if Geboortedatum is not set
            }
        }
    }
    public enum Benadering{
        Telefonisch,
        Portaal,
        Beide
    }
}