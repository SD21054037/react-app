using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
public class ErvaringsdeskundigeRepository : DbContext
{
        public DbSet<Ervaringsdeskundige> Ervaringsdeskundigen { get; set; }

    private readonly YourDbContext _dbContext;

    // public ErvaringsdeskundigeRepository(YourDbContext dbContext)
    // {
    //     _dbContext = dbContext;
    // }
    //    public void AddErvaringsdeskundige(int gebruikerId, string postcode, string typeBeperking, string hulpmiddelen, string aandoeningZiekte, int leeftijd)
    // {
    //     // Implementation specific to Ervaringsdeskundige entity
    // }

    public void AddErvaringsdeskundige(Ervaringsdeskundige user){
        Ervaringsdeskundigen.Add(user);
        SaveChanges();

    }
}
