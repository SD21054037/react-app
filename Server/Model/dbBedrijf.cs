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
    public string email { get; set; }

    [Column(TypeName = "nvarchar(255)")]
    public string wachtwoord { get; set; }

    [Column(TypeName = "nvarchar(255)")]
    public string wachtwoordbevestiging { get; set; }

    [Column(TypeName = "nvarchar(255)")]
    public string Bedrijfsnaam { get; set; }

    [Column(TypeName = "nvarchar(255)")]
    public string websiteUrl { get; set; }

    [Column(TypeName = "nvarchar(255)")]
    public string bedrijfsplaats { get; set; }

    [Column(TypeName = "nvarchar(7)")]
    public string bedrijfspostcode { get; set; }

    [Column(TypeName = "nvarchar(100)")]
    public string bedrijfsadres { get; set; }
    }
}