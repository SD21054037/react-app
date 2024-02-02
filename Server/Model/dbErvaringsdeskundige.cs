using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Model{
    public class dbErvaringsdeskundige
    {
        [Key]
        public int ErvaringsdeskundigeID { get; set; }

        
        [ForeignKey("GebruikerID")]
        public int GebruikerID { get; set; }

        // Navigation property
        public dbGebruiker? Gebruiker { get; set; }
        
        [Column(TypeName = "nvarchar(10)")]
        public string? Postcode { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string? TypeBeperking { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string? Hulpmiddelen { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string? Aandoening_Ziekte { get; set; }

        [DataType(DataType.Date)]
        [Display(Name = "Date of Birth")]
            public DateTime DateOfBirth { get; set; }
            [NotMapped] // This property is not mapped to the database
                public int Leeftijd
                {
                    get
                    {
            // Calculate age based on the current date and DateOfBirth
            if (DateOfBirth != null)
            {
                DateTime today = DateTime.Today;
                int age = today.Year - DateOfBirth.Year;
                if (DateOfBirth.Date > today.AddYears(-age)) age--;
                return age;
            }
            return 0; // Default value if DateOfBirth is not set
        }
    }
    }
}