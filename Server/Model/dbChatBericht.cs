using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Model{
     public class dbChatBericht
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ChatBerichtID { get; set; }

        [Required]
        public int ZenderID { get; set; }

        [Required]
        public int OntvangerID { get; set; }

        [Column(TypeName = "TEXT")]
        public string Inhoud_Bericht { get; set; }

        public DateTime Timestamp { get; set; }

        public dbGebruiker Zender { get; set; }

        public dbGebruiker Ontvanger { get; set; }

    }
}