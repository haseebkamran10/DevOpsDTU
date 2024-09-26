using Microsoft.EntityFrameworkCore;

public class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

    public DbSet<Auction> Auctions { get; set; }

    // Define your DbSets here
    // public DbSet<MyEntity> MyEntities { get; set; }
}