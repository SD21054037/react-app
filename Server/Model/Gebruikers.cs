using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MySql.Data.MySqlClient;


public class Gebruikers
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]   
    public int GebruikerID { get; set; }
    public string Voornaam { get; set; }
    public string Achternaam { get; set; }
    
    public string Password{get; set; }
    public string Email { get; set; }
    public string Telefoonnummer { get; set; }
    public UserType Type_Gebruiker { get; set; }
    
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime Datum_Registratie { get; set; }
        public Admin Admin { get; set; }

    private const string ConnectionString = "Server=your_mysql_server;Database=your_database;User Id=your_username;Password=your_password;";

         public void InsertData()
        {
            using MySqlConnection connection = new MySqlConnection(ConnectionString);
            connection.Open();

            // Execute your SQL command here, e.g., using MySqlCommand
            using MySqlCommand cmd = new MySqlCommand("INSERT INTO your_table (Name) VALUES (@Name)", connection);
            cmd.Parameters.AddWithValue("@Name", Name);

            cmd.ExecuteNonQuery();
        }
 
}

public enum UserType
{
    Ervaringsdeskundige,
    Bedrijf,
    Admin
}

