using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Model{
    public class dbLijstgebruikers
    {
      [Key]
        public int Id { get; set; }

        public int OnderzoekID { get; set; }
        // public dbOnderzoek Onderzoek { get; set; }

        public int GebruikerID { get; set; }
        // public dbGebruiker Gebruiker { get; set; }
    }
}