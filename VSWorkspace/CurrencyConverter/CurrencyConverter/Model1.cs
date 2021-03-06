using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using CurrencyConverter.Pocos;

namespace CurrencyConverter
{
    public partial class Model1 : DbContext
    {
        public virtual DbSet<Currency> currencies { get; set; }

        public Model1()
            : base("name=CurrencyEntities")
        {
            
        }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            
        }
    }
}
