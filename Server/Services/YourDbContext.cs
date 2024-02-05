using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System. Threading.Tasks;
using Model;

namespace Services{
    public class yourDbContext:DbContext{

       
          public yourDbContext(DbContextOptions<yourDbContext> options)
        : base(options)
    {
    }
        public DbSet<dbGebruiker> Gebruikers { get; set; }
        public DbSet<dbAdmin> Admins {get;set;}
        public DbSet<dbBedrijf> bedrijven {get;set;}
        public DbSet<dbChatBericht> berichten {get;set;}
        public DbSet<dbOnderzoek> onderzoeken {get;set;}
        public DbSet<dbOuder> Ouders{get;set;}

        public DbSet<dbLijstgebruikers> lijstgebruikers{get;set;}

            public yourDbContext() { 

            }

             protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<dbChatBericht>()
            .HasOne(c => c.Zender)
            .WithMany()
            .HasForeignKey(c => c.ZenderID)
            .OnDelete(DeleteBehavior.NoAction);

        modelBuilder.Entity<dbChatBericht>()
            .HasOne(c => c.Ontvanger)
            .WithMany()
            .HasForeignKey(c => c.OntvangerID)
            .OnDelete(DeleteBehavior.NoAction);

        // other configurations...
        // modelBuilder.Entity<dbLijstgebruikers>()
        // .HasKey(og => new { og.GebruikerID, og.OnderzoekID });

    // modelBuilder.Entity<dbLijstgebruikers>()
    //     .HasOne(og => og.Gebruiker)
    //     .WithMany(g => g.OnderzoekGebruikers)
    //     .HasForeignKey(og => og.GebruikerID)
    //     .OnDelete(DeleteBehavior.Restrict); // Specify the desired behavior here

    // modelBuilder.Entity<dbLijstgebruikers>()
    //     .HasOne(og => og.Onderzoek)
    //     .WithMany(o => o.OnderzoekGebruikers)
    //     .HasForeignKey(og => og.OnderzoekID)
    //     .OnDelete(DeleteBehavior.Cascade);



        base.OnModelCreating(modelBuilder);
    }

            




    }
}