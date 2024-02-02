using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Model{
      public class dbAdmin
    {
        [Key]
        public int AdminID { get; set; }

        [Required]
        public int GebruikerID { get; set; }

        [ForeignKey("GebruikerID")]
        public dbGebruiker Gebruiker { get; set; }
    }
}