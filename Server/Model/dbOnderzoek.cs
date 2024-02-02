using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Model{
    public class dbOnderzoek
    {
        [Key]
        public int OnderzoekID { get; set; }

        [Required]
        public int BedrijfID { get; set; }

        [ForeignKey("BedrijfID")]
        public dbBedrijf Bedrijf { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string Titel { get; set; }

        [Column(TypeName = "TEXT")]
        public string Description { get; set; }

        public DateTime Datum { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string Locatie { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Beloning { get; set; }

        public enum Status_Onderzoek
        {
            Open,
            Closed
        }

        [Column(TypeName = "nvarchar(255)")]
        public string TypeBeperking { get; set; }
    }


}