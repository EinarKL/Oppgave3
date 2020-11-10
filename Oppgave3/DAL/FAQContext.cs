using Microsoft.EntityFrameworkCore;
using Oppgave3.Model;

namespace Oppgave3.DAL
{
    public class FAQContext : DbContext
    {
        public FAQContext(DbContextOptions<FAQContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<FAQ> FAQs { get; set; }
        public DbSet<Forslag> Forslag { get; set; }
        public DbSet<Kategori> Kategorier { get; set; }
    }
}