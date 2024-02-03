using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Model{
    public class dbBedrijf
    {
        [Key]
        public int BedrijfID { get; set; }

        [ForeignKey("GebruikerID")]
        public int GebruikerID { get; set; }
        
        [Column(TypeName = "nvarchar(255)")]
        public string Bedrijfsnaam { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string Locatie { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string WebsiteLink { get; set; }
    }
}