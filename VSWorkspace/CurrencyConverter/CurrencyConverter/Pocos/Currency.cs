using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CurrencyConverter.Pocos
{
    public class Currency
    {
        public int Id { get; set; }
        public string name { get; set; }
        public string symbol { get; set; }
        public double conversionRate { get; set; }
    }
}
