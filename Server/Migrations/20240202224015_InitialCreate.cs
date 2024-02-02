using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Gebruikers",
                columns: table => new
                {
                    GebruikerID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Voornaam = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Achternaam = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Telefoonnummer = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Type_Gebruiker = table.Column<int>(type: "int", nullable: true),
                    Datum_Registratie = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gebruikers", x => x.GebruikerID);
                });

            migrationBuilder.CreateTable(
                name: "Admins",
                columns: table => new
                {
                    AdminID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GebruikerID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admins", x => x.AdminID);
                    table.ForeignKey(
                        name: "FK_Admins_Gebruikers_GebruikerID",
                        column: x => x.GebruikerID,
                        principalTable: "Gebruikers",
                        principalColumn: "GebruikerID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "bedrijven",
                columns: table => new
                {
                    BedrijfID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GebruikerID = table.Column<int>(type: "int", nullable: false),
                    Bedrijfsnaam = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    Locatie = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    WebsiteLink = table.Column<string>(type: "nvarchar(255)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_bedrijven", x => x.BedrijfID);
                    table.ForeignKey(
                        name: "FK_bedrijven_Gebruikers_GebruikerID",
                        column: x => x.GebruikerID,
                        principalTable: "Gebruikers",
                        principalColumn: "GebruikerID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "berichten",
                columns: table => new
                {
                    ChatBerichtID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ZenderID = table.Column<int>(type: "int", nullable: false),
                    OntvangerID = table.Column<int>(type: "int", nullable: false),
                    Inhoud_Bericht = table.Column<string>(type: "TEXT", nullable: false),
                    Timestamp = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_berichten", x => x.ChatBerichtID);
                    table.ForeignKey(
                        name: "FK_berichten_Gebruikers_OntvangerID",
                        column: x => x.OntvangerID,
                        principalTable: "Gebruikers",
                        principalColumn: "GebruikerID");
                    table.ForeignKey(
                        name: "FK_berichten_Gebruikers_ZenderID",
                        column: x => x.ZenderID,
                        principalTable: "Gebruikers",
                        principalColumn: "GebruikerID");
                });

            migrationBuilder.CreateTable(
                name: "ervaringsdeskundigen",
                columns: table => new
                {
                    ErvaringsdeskundigeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GebruikerID = table.Column<int>(type: "int", nullable: false),
                    Postcode = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    TypeBeperking = table.Column<string>(type: "nvarchar(255)", nullable: true),
                    Hulpmiddelen = table.Column<string>(type: "nvarchar(255)", nullable: true),
                    Aandoening_Ziekte = table.Column<string>(type: "nvarchar(255)", nullable: true),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ervaringsdeskundigen", x => x.ErvaringsdeskundigeID);
                    table.ForeignKey(
                        name: "FK_ervaringsdeskundigen_Gebruikers_GebruikerID",
                        column: x => x.GebruikerID,
                        principalTable: "Gebruikers",
                        principalColumn: "GebruikerID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "onderzoeken",
                columns: table => new
                {
                    OnderzoekID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BedrijfID = table.Column<int>(type: "int", nullable: false),
                    Titel = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Datum = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Locatie = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    Beloning = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    TypeBeperking = table.Column<string>(type: "nvarchar(255)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_onderzoeken", x => x.OnderzoekID);
                    table.ForeignKey(
                        name: "FK_onderzoeken_bedrijven_BedrijfID",
                        column: x => x.BedrijfID,
                        principalTable: "bedrijven",
                        principalColumn: "BedrijfID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Admins_GebruikerID",
                table: "Admins",
                column: "GebruikerID");

            migrationBuilder.CreateIndex(
                name: "IX_bedrijven_GebruikerID",
                table: "bedrijven",
                column: "GebruikerID");

            migrationBuilder.CreateIndex(
                name: "IX_berichten_OntvangerID",
                table: "berichten",
                column: "OntvangerID");

            migrationBuilder.CreateIndex(
                name: "IX_berichten_ZenderID",
                table: "berichten",
                column: "ZenderID");

            migrationBuilder.CreateIndex(
                name: "IX_ervaringsdeskundigen_GebruikerID",
                table: "ervaringsdeskundigen",
                column: "GebruikerID");

            migrationBuilder.CreateIndex(
                name: "IX_onderzoeken_BedrijfID",
                table: "onderzoeken",
                column: "BedrijfID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Admins");

            migrationBuilder.DropTable(
                name: "berichten");

            migrationBuilder.DropTable(
                name: "ervaringsdeskundigen");

            migrationBuilder.DropTable(
                name: "onderzoeken");

            migrationBuilder.DropTable(
                name: "bedrijven");

            migrationBuilder.DropTable(
                name: "Gebruikers");
        }
    }
}
