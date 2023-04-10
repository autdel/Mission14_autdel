using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class MovieDbContext : DbContext
    {
        // DbContext for the movie model
        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) { }
        public DbSet<Movie> Movies { get; set; }
    }
}
