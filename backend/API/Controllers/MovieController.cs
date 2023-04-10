using API.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;

        public MovieController(MovieDbContext context)
        {
            this.context = context;
        }

        // Gets the movie information from the database
        public IEnumerable<Movie> Get()
        {
            return context.Movies.Where(m => m.Edited == "Yes").OrderBy(m => m.Title).ToArray();
        }
    }
}
