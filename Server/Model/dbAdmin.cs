using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Model{
      public class dbAdmin
    {
        [Key]
        public int AdminID { get; set; }

        public int? GebruikerID { get; set; }

    
    }
}