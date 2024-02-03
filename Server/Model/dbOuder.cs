using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Model
{
    public class dbOuder
    {
        [Key]
        public int OuderID { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Voornaam { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Achternaam { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Telefoonnummer { get; set; }

      [ForeignKey("GebruikerID")]
        public int GebruikerID { get; set; }

        // Navigation property
        public dbGebruiker? Gebruiker { get; set; }
    }
}
