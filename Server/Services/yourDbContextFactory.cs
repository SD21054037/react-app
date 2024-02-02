using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Services
{
    public class YourDbContextFactory : IDesignTimeDbContextFactory<yourDbContext>
    {
        public yourDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<yourDbContext>();

            // Ensure that the design-time context uses the invariant culture
            optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=dbAccessibility;Trusted_Connection=True;Encrypt=False;", options =>
            {
                options.UseRelationalNulls(); // Use relational database null semantics
                options.EnableRetryOnFailure(3); // Retry on failure
                options.CommandTimeout(60); // Set command timeout
                options.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery); // Use query splitting behavior
            });
            

            return new yourDbContext(optionsBuilder.Options);
        }
    }
}
