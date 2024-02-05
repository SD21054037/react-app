using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.Identity.Client;
namespace Model{
    public class dbOnderzoek
    {
        [Key]
        public int OnderzoekID { get; set; }

        public int? BedrijfID { get; set; }

        [ForeignKey("BedrijfID")]
        public dbBedrijf? Bedrijf { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string Titel { get; set; }

        [Column(TypeName = "TEXT")]
        public string Description { get; set; }

        public DateTime Datum { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string Locatie { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Beloning { get; set; }
        public ICollection<dbLijstgebruikers>? OnderzoekGebruikers { get; set; }


        public TypeOnderzoek TypeOnderzoek {get;set;}

        public Boolean EngelsTaligOnderzoek{get;set;}
        public enum Status_Onderzoek
        {
            Open,
            Closed
        }

        [Column(TypeName = "nvarchar(255)")]
        public string TypeBeperking { get; set; }
    }
    public enum TypeOnderzoek
{
    Interview,
    Groepsgesprekken,
    OnlineOnderzoek,
    EngelsTaligOnderzoek
}


}