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
                });

            migrationBuilder.CreateTable(
                name: "Gebruikers",
                columns: table => new
                {
                    GebruikerID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Voornaam = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Achternaam = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Telefoonnummer = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Postcode = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    Type_Beperking = table.Column<string>(type: "nvarchar(255)", nullable: true),
                    Hulpmiddelen = table.Column<string>(type: "nvarchar(255)", nullable: true),
                    Aandoening_Ziekte = table.Column<string>(type: "nvarchar(255)", nullable: true),
                    Voorkeur_Onderzoek = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Verstandelijkheid = table.Column<bool>(type: "bit", nullable: true),
                    Voorkeur_Benadering = table.Column<int>(type: "int", nullable: true),
                    Commerciele_Benadering = table.Column<string>(type: "nvarchar(1)", nullable: true),
                    Datum_Registratie = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Geboortedatum = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gebruikers", x => x.GebruikerID);
                });

            migrationBuilder.CreateTable(
                name: "onderzoeken",
                columns: table => new
                {
                    OnderzoekID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BedrijfID = table.Column<int>(type: "int", nullable: true),
                    Titel = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Datum = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Locatie = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    Beloning = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    TypeOnderzoek = table.Column<int>(type: "int", nullable: false),
                    EngelsTaligOnderzoek = table.Column<bool>(type: "bit", nullable: false),
                    TypeBeperking = table.Column<string>(type: "nvarchar(255)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_onderzoeken", x => x.OnderzoekID);
                    table.ForeignKey(
                        name: "FK_onderzoeken_bedrijven_BedrijfID",
                        column: x => x.BedrijfID,
                        principalTable: "bedrijven",
                        principalColumn: "BedrijfID");
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
                name: "Ouders",
                columns: table => new
                {
                    OuderID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Voornaam = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Achternaam = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Telefoonnummer = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    GebruikerID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ouders", x => x.OuderID);
                    table.ForeignKey(
                        name: "FK_Ouders_Gebruikers_GebruikerID",
                        column: x => x.GebruikerID,
                        principalTable: "Gebruikers",
                        principalColumn: "GebruikerID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "lijstgebruikers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OnderzoekID = table.Column<int>(type: "int", nullable: false),
                    GebruikerID = table.Column<int>(type: "int", nullable: false),
                    dbGebruikerGebruikerID = table.Column<int>(type: "int", nullable: true),
                    dbGebruikerGebruikerID1 = table.Column<int>(type: "int", nullable: true),
                    dbOnderzoekOnderzoekID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_lijstgebruikers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_lijstgebruikers_Gebruikers_dbGebruikerGebruikerID",
                        column: x => x.dbGebruikerGebruikerID,
                        principalTable: "Gebruikers",
                        principalColumn: "GebruikerID");
                    table.ForeignKey(
                        name: "FK_lijstgebruikers_Gebruikers_dbGebruikerGebruikerID1",
                        column: x => x.dbGebruikerGebruikerID1,
                        principalTable: "Gebruikers",
                        principalColumn: "GebruikerID");
                    table.ForeignKey(
                        name: "FK_lijstgebruikers_onderzoeken_dbOnderzoekOnderzoekID",
                        column: x => x.dbOnderzoekOnderzoekID,
                        principalTable: "onderzoeken",
                        principalColumn: "OnderzoekID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Admins_GebruikerID",
                table: "Admins",
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
                name: "IX_lijstgebruikers_dbGebruikerGebruikerID",
                table: "lijstgebruikers",
                column: "dbGebruikerGebruikerID");

            migrationBuilder.CreateIndex(
                name: "IX_lijstgebruikers_dbGebruikerGebruikerID1",
                table: "lijstgebruikers",
                column: "dbGebruikerGebruikerID1");

            migrationBuilder.CreateIndex(
                name: "IX_lijstgebruikers_dbOnderzoekOnderzoekID",
                table: "lijstgebruikers",
                column: "dbOnderzoekOnderzoekID");

            migrationBuilder.CreateIndex(
                name: "IX_onderzoeken_BedrijfID",
                table: "onderzoeken",
                column: "BedrijfID");

            migrationBuilder.CreateIndex(
                name: "IX_Ouders_GebruikerID",
                table: "Ouders",
                column: "GebruikerID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Admins");

            migrationBuilder.DropTable(
                name: "berichten");

            migrationBuilder.DropTable(
                name: "lijstgebruikers");

            migrationBuilder.DropTable(
                name: "Ouders");

            migrationBuilder.DropTable(
                name: "onderzoeken");

            migrationBuilder.DropTable(
                name: "Gebruikers");

            migrationBuilder.DropTable(
                name: "bedrijven");
        }
    }
}
